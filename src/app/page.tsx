import Main from "./Main";
import { data } from "./data";

function Page() {
  return (
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
  );
}

export default Page;
