import Main from "./Main";
import { data } from "./data";
import pdf from '../english.pdf'
import { FaDownload } from "react-icons/fa"

function Page() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex justify-center">
        <div className="mx-auto">
          <div className="max-w-[900px]">
            {data.map((item, index) => (
              <Main
                key={index}
                lessonNumber={item.lessonNumber}
                content={item.detail}
                lessonTitleEnglish={item.lessonTitleEnglish}
                lessonTitlePersion={item.lessonTitlePersion}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="">
        <a href={pdf} download className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          <FaDownload />
        </a>
      </div>
    </div>
  );
}

export default Page;
