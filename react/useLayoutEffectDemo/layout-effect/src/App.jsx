import { 
  useState,
  useEffect,
  useLayoutEffect,
  useRef,

 } from 'react'
import './App.css'


// function App() {
//   //响应式对象
//   const boxRef = useRef();
//   console.log(boxRef.current, boxRef);
//   useEffect(()=>{
//     console.log('useEffect height',boxRef.current.offsetHeight);
//   },[])
//   useLayoutEffect(()=>{
//     console.log('useLayoutEffect height',boxRef.current.offsetHeight);
//   },[])
//   return (
//     <>
//       <div ref={boxRef} style={{height:100}}></div>
//     </>
//   )
// }
// function App() {
//   const [content, setContent] = useState('窗透初晓日照西桥云自摇想你当年荷风微摆的衣角木雕流金岁月涟漪七年前封笔因为我今生挥毫只为你雨打湿了眼眶年年倚井盼归堂最怕不觉泪已拆两行我在人间彷徨寻不到你的天堂东瓶西镜放恨不能遗忘又是清明雨上折菊寄到你身旁把你最爱的歌来轻轻唱');
//   const ref=useRef();
//   // useEffect(()=>{
//   //   setContent('柳下闻瑶琴起舞和一曲仿佛映当年翩若惊鸿影惊鸿一般短暂如炽热的火焰如斑斓的流星我是心依恋你是云千变惊鸿一瞥昙花一现柳下闻瑶琴起舞和一曲仿佛映当年翩若惊鸿影')
//   //   ref.current.style.height='200px';
//   // },[])
//   useLayoutEffect(()=>{
//     //阻塞渲染 同步的感觉
//     setContent('柳下闻瑶琴起舞和一曲仿佛映当年翩若惊鸿影惊鸿一般短暂如炽热的火焰如斑斓的流星我是心依恋你是云千变惊鸿一瞥昙花一现柳下闻瑶琴起舞和一曲仿佛映当年翩若惊鸿影')
//     ref.current.style.height='200px';
//   })
//   return(
//     <>
//     <div ref={ref} style={{height:'50px',background:'skyblue'}}>{content}</div>
//     </>
//   )
// }
//弹窗
function Modal() {
  const ref=useRef();
  useLayoutEffect(()=>{
    const height=ref.current.offsetHeight;
    ref.current.style.marginTop=`${(window.innerHeight-height)/2}px`
  },[]);
  return <div ref={ref} style={{background:'red',position:'absolute',height:'200px',width:'200px'}}>我是弹窗</div>
}

function App() {
  return(
    <>
    <Modal />
    </>
  )
}

export default App
