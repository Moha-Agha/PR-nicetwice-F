import React,{useRef,useState} from 'react';
import Preloader from '../preloader/Preloader';

const UiLoading = (props) => {
  
    const[uiLoading,setUiLoading]= useState(false);

    // runs only once before rendering the component.
    const willMount = useRef(true);
    if (willMount.current) {
      // window.scrollTo(0, 0);

       //loading ui
       setTimeout(() => {
        setUiLoading(true)
       }, 300);

     }
  
  return (
    <>
        {!uiLoading ? (
          <Preloader/>
        ) : (
           props.children
        )
        }
    </>
  );

  
};

export default UiLoading;