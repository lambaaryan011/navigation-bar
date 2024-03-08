
  import Greeting,{Test} from "./components/Greeting";
import Todu from "./components/Todu";
function App() {
  return (
    <>
      {/* props are passed in the form of attributes of component */}
      <img src="https://images.rawpixel.com/image_png_1300/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA0L2pvYjY4Ni0yNTMtcC5wbmc.png " height="100px"/>

      <Greeting tittle="a" age={10} display={true}/>

      <img src="https://images.rawpixel.com/image_png_1300/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA0L2pvYjY4Ni0yODAtcC5wbmc.png"height="100px"/>
   <Greeting tittle="b" age="17" B-TECH STUDENT /> 
   <img src=" https://images.rawpixel.com/image_png_1300/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA0L2pvYjY4Ni0yNzUtcC5wbmc.png"height="100px"/>
   <Greeting tittle="c" age="13" B-TECH STUDENT/> 
   <img src="https://images.rawpixel.com/image_png_1100/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA0L2pvYjk2OS0wOTgtcF8xLnBuZw.png"height="100px"/>
   <Greeting tittle="f" age="19" B-TECH STUDENT/> 
   <img src="https://images.rawpixel.com/image_1300/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA0L2pvYjY4Mi0yMjMteF8xLmpwZw.jpg"height="100px"/>
   <Greeting tittle="d" age="17" B-TECH STUDENT/> 

      <Todu  />

    </>

  );
}

export default App;
