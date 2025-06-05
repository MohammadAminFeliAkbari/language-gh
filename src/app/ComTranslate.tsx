import { useState, useEffect } from "react";
import { detail } from "./Main";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeUp, faVolumeMute } from "@fortawesome/free-solid-svg-icons";

function ComTranslate({ englishContent, persionContent }: detail) {
  const [hidden, setHidden] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const click = () => {
    setHidden((prev) => !prev);
  };

  const speakEnglishContent = () => {
    if (speechSynthesis.speaking) {
      speechSynthesis.cancel();
      setIsSpeaking(false);
    } else {
      const utterance = new SpeechSynthesisUtterance(englishContent);

      utterance.onstart = () => {
        setIsSpeaking(true);
      };
      utterance.onend = () => {
        setIsSpeaking(false);
      };
      utterance.onerror = () => {
        setIsSpeaking(false);
      };

      speechSynthesis.speak(utterance);
    }
  };

  // In case speech is cancelled externally, listen for "end" events on speechSynthesis
  useEffect(() => {
    const handleEnd = () => setIsSpeaking(false);
    speechSynthesis.addEventListener("end", handleEnd);
    speechSynthesis.addEventListener("cancel", handleEnd);

    return () => {
      speechSynthesis.removeEventListener("end", handleEnd);
      speechSynthesis.removeEventListener("cancel", handleEnd);
    };
  }, []);

  return (
    <div>
      <p className="text-gray-700 dark:text-gray-400">
        <FontAwesomeIcon
          icon={isSpeaking ? faVolumeMute : faVolumeUp}
          onClick={speakEnglishContent}
          className={`cursor-pointer mr-1 ${isSpeaking ? 'mr-[6px]' : null}`}
        />
        <span className="cursor-pointer" onClick={click}>
          {englishContent}
        </span>
      </p>
      <div
        className={`text-gray-700 dark:text-gray-400 persian-content transition-height duration-500 ease-in-out ${hidden ? "max-h-full opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        {hidden && <p>{persionContent}</p>}
      </div>
    </div>
  );
}

export default ComTranslate;
