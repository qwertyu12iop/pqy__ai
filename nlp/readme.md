## 机器学习

- notebookllm
  你不知道的JavaScript 深入学习
  AI 博客

- modelscope
  阿里开源大模型社区
- python notebook
  ipynb 后缀
  nlp 机器学习

  - python
  nlp 第一语言
  js 也挺好

  - 引入了pipeline 模块
  model中国第一大模型社区
  from modelscope.pipelines import pipeline
  from modelscope.utils.constant import Tasks

  semantic_cls = pipeline(Tasks.text_classification,'damo/nlp_structbert_sentiment-classification_chinese-base')

情感分析  打分 label分类
  result = semantic_cls(input='刘诚洋夸皮企芸漂亮')
print(result)

{'scores': [0.9247391223907471, 0.07526092976331711], 'labels': ['正面', '负面']}
