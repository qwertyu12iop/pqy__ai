import OpenAI from 'openai';


const client = new OpenAI({
    apiKey: 'sk-h91KBBHUC30pbiviNhD9I5YnyC7gcdd4CzPCKJcMhnkm7IT9',
    baseURL: 'https://api.302.ai/v1'
})
// 1. 工具定义（股票查询函数）
const tools = [
    {
        type: 'function',
        function: {
            name: "getStockPrice",
            description: "查询股票代码对应的实时股价（需股票代码，如贵州茅台是600519.SS）",
            parameters: {
                type: "object",
                properties: {
                    code: { type: "string", description: "股票代码（如600519.SS）" }
                },
                required: ["code"]
            }
        }
    }
];

// 2. 股票查询函数（带参数校验和错误处理）
const getStockPrice = async (code) => {
    // 步骤1：参数校验（检查股票代码格式）
    if (!/^[0-9]{6}\.[A-Za-z]{2}$/.test(code)) {
        throw new Error(`股票代码格式错误（正确格式：600519.SS），你传入的是${code}`);
    }

    // 步骤2：模拟API调用（正常返回或报错）
    const mockData = {
        "600519.SS": { name: "贵州茅台", price: "1680.00元", time: "2024-08-18 15:00" }
    };

    if (mockData[code]) {
        return mockData[code];
    } else {
        throw new Error(`未找到股票代码${code}的数据`);
    }
};

// 3. 主函数（处理错误场景）
async function handleStockQuery(userQuestion) {
    // 第一步：LLM判断是否调用工具
    const firstResp = await client.chat.completions.create({
        model: "gpt-4o",
        messages: [{ role: "user", content: userQuestion }],
        tools: tools,
        tool_choice: "auto"
    });

    const toolCall = firstResp.choices[0].message.tool_calls?.[0];
    if (!toolCall) {
        return firstResp.choices[0].message.content;
    }

    // 第二步：执行函数（捕获错误）
    const { name, arguments: argsStr } = toolCall.function;
    const args = JSON.parse(argsStr);
    let functionResult, errorMessage;

    try {
        if (name === "getStockPrice") {
            functionResult = await getStockPrice(args.code);
        }
    } catch (err) {
        errorMessage = err.message; // 捕获错误信息
    }

    // 第三步：回传结果（包括错误信息）
    const secondResp = await client.chat.completions.create({
        model: "gpt-4o",
        messages: [
            { role: "user", content: userQuestion },
            firstResp.choices[0].message,
            {
                role: "tool",
                tool_call_id: toolCall.id,
                content: errorMessage ? `Error: ${errorMessage}` : JSON.stringify(functionResult)
            }
        ],
        tools: tools
    });

    return secondResp.choices[0].message.content;
}

handleStockQuery("查询股票代码12345的价格").then(answer => {
    console.log("回答2：", answer);
});
// 测试1：正确查询（茅台代码600519.SS）
handleStockQuery("贵州茅台今天的股价是多少？").then(answer => {
    console.log("回答1：", answer);
    // 输出：贵州茅台（股票代码600519.SS）今日股价为1680.00元，数据更新于2024-08-18 15:00。
});


