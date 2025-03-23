import { useState } from "react";  
import ComTranslate from "./ComTranslate";  
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";  
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";  

export type detail = {  
  englishContent: string;  
  persionContent: string;  
};  

export interface Lesson {  
  lessonNumber: number;  
  lessonTitleEnglish: string;  
  lessonTitlePersion: string;  
  content: detail[];  
}  

function Main({  
  lessonNumber,  
  lessonTitleEnglish,  
  content,  
  lessonTitlePersion,  
}: Lesson) {  
  const [hidden, setHidden] = useState(false);  

  const click = () => {  
    setHidden((pre) => !pre);  
  };  

  return (  
    <div className="m-3 bg-gray-800 p-4 rounded">  
      <header className="flex justify-around items-center lg:min-w-[900px] relative md:min-w-[700px] sm:min-w-[400px] gap-10">  
        <div className="left flex items-center gap-3 ml-20">  
          <div className="absolute left-0 flex mr-10">  
            {!hidden ? (  
              <FontAwesomeIcon  
                icon={faArrowDown}  
                onClick={click}  
                className="text-[12px] cursor-pointer mb-1 mr-1"  
              />  
            ) : (  
              <FontAwesomeIcon  
                icon={faArrowUp}  
                onClick={click}  
                className="text-[12px] cursor-pointer mb-1 mr-1"  
              />  
            )}  
            <h2 className="text-[12px]">Unit - {lessonNumber}</h2>  
          </div>  

          <h3>{lessonTitleEnglish}</h3>  
        </div>  

        <div className="right">  
          <h1>{lessonTitlePersion}</h1>  
        </div>  
      </header>  
      <div className="border mx-3 my-1 border-gray-600"></div>  
      {hidden ? (  
        <main className="p-2 flex flex-col gap-6">  
          {content.map((context: detail, index: number) => (  
            <ComTranslate  
              key={index}  
              englishContent={context.englishContent}  
              persionContent={context.persionContent}  
            />  
          ))}  
        </main>  
      ) : null}  
    </div>  
  );  
}  

export default Main;  