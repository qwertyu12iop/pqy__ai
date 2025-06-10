import { useState,useRef} from 'react'
import './App.css'

function App() {
  //火山引擎tts 配置文件
  const TOKEN ='J-WsaNLRscf18t2OvNsbJI-YoCjhlizA'
  const APP_ID = '2847048405'
  const CLUSTER_ID ='volcano_tts'

  //代码的可读性高于一切
  const [prompt,setPromot]=useState('大家好，我是皮企芸')
  //react use 开头 ref hook 可以获取到dom元素
  const audioPlayer=useRef(null);
  console.log(audioPlayer,'//////');
  
  const playMusic=()=>{
    //console.log(audioPlayer,'+++');
    console.log('play music');
    audioPlayer.current.play();
    
  }
  const generateAudio=()=>{
    //const voiceName ="zh_female_yuanqinvyou_moon_bigtts"
    const voiceName ="zh_male_xionger_mars_bigtts"
    const endpoint="/tts/api/v1/tts"//tts api llm 服务接口地址
    const header={
      "Content-Type":"application/json",
      "Authorization":`Bearer ${TOKEN}`,
  }
}
  return (
    <div className='container'>
      <div>
        <label>Prompt</label>
        <button onClick={generateAudio}>生成并播放</button>
        <textarea className="input" value={prompt} onChange={(e)=>setPromot(e.target.value)}></textarea>
      </div>
    <audio ref={audioPlayer} src="/sounds/snare.wav"></audio>
    {/* <button onClick={playMusic}>播放</button> */}
    
    </div>
  )
}

export default App
