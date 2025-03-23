import React from "react";
import Main, { Lesson } from "./Main";
import { data } from "./data";

function Page() {
  return (
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
  );
}

export default Page;