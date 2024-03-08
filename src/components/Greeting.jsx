

export default function Greeting(props){
    //  props is the js object which is containing all the props passed in components in the form of key value pair 
  
    // heree  we define the variable 
    // let tittle="ram";

  //21 feb
//   if(props.display){
//     return(
//       <>
//       <img src="https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_1280.jpg" alt="aryan" height="auto"/>
//       <h1> hello my name is {props.tittle} and I'M {props.age}year old</h1>
//       </>
         
//         );
//       }else{
//         return(
// <>
// <h1>no result found</h1>
// </>
//         )

//       }
//   }









    return(
  <>
  {/* <img src="https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_1280.jpg" alt="aryan" height="auto"/> */}
  <h1> hello my name is {props.tittle} and I'M {props.age}year old</h1>
  
  
  {/* <img src="https://cdn1.vectorstock.com/i/1000x1000/87/50/man-male-young-person-icon-vector-10458750.jpg" alt="aryan" height="auto"/>
  <h1> hello my name is {props.tittle} and I'M {props.age}year old</h1>W */}
  </>
     
    );
  }
    function Test(){
    return(
        <>
        <h1>
            hi  i am test function</h1></>
    )
  }
  export {Test};
  
