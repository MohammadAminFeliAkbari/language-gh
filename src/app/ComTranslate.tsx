import { useState } from "react";  
import { detail } from "./Main";  
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";  
import { faGlobe, faVolumeUp } from "@fortawesome/free-solid-svg-icons";  

function ComTranslate({ englishContent, persionContent }: detail) {  
  // Function to speak the English content  
  const speakEnglishContent = () => {  
    const utterance = new SpeechSynthesisUtterance(englishContent);  
    speechSynthesis.speak(utterance);  
  };  

  const [hidden, setHidden] = useState(false);  

  const click = () => {  
    setHidden((prev) => !prev);  
  };  

  return (  
    <div>  
      <p className="text-gray-400">  
        <FontAwesomeIcon  
          icon={faGlobe}  
          onClick={click}  
          className="cursor-pointer mr-1"  
        />  
        <FontAwesomeIcon  
          icon={faVolumeUp}  
          onClick={speakEnglishContent}  
          className="cursor-pointer mr-1"  
        />  
        <span className="cursor-pointer" onClick={click}>{englishContent}</span>
      </p>  
      <div className={`text-gray-400 persian-content transition-height duration-500 ease-in-out ${hidden ? 'max-h-full opacity-100' : 'max-h-0 opacity-0'}`}>  
        {hidden && <p>{persionContent}</p>}  
      </div>  
    </div>  
  );  
}  

export default ComTranslate;  