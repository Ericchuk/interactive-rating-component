import LandingPage from "../src/components/landingPage";
import SlidIn from "../src/components/slidIn";
import "./App.css";
import {useEffect, useState, useRef} from 'react'
function App() {
  let [remove, setRemove] = useState(false);
  // let previousRemoveValue = useRef(false)
  let anime;

  useEffect(() => {
    setTimeout(() => {
      // previousRemoveValue.current = remove;
      setRemove(remove = true)
      console.log(remove)
    }, 5675)
  });

  if(!remove){
    anime = <SlidIn />
    console.log(remove)
  }
  return (
    <>
       {anime}
      <article>
        <LandingPage />
      </article>
    </>
      
      
  );
}

export default App;