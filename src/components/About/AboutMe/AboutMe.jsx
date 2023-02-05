import React from "react";

const AboutMe = () => {
  return (
    <div
      className="flex items-center justify-between min-h-full p-1 md:h-full md:p-3 lg:p-5 xl:p-7"
    >
      <div className="flex flex-col items-center justify-center h-full px-2 py-3 font-medium text-center rounded-md bg-nosecondary xl:py-6 xl:px-5 font-edusa md:text-lg lg:text-lg xl:text-2xl">
        <h2 className="font-bold">Hello! Everyone, </h2>
        <p>Hope you all are doing well.</p>
        <div className="">
          <div className="mt-1">
            My name is <span className="font-semibold">Mohit Thapliyal</span>{" "}
            and I'm 21 years old. Currently pursuing a{" "}
            <span className="font-semibold">
              Bachelors of Technology in Computer Science
            </span>{" "}
            from <span className="font-semibold">TIIPS</span>.
          </div>
          <div className="mt-1">
            I've sound knowledge of web development and since childhood, it
            interests me. I am very{" "}
            <span className="font-semibold">enthusiastic</span> and always{" "}
            <span className="font-semibold">eager to learn</span>. I always put
            my hundred percent into everything that I do. I'm very good at time
            management and know how to prioritize the work.
          </div>
          <div className="mt-1">
            I never quit and have a{" "}
            <span className="font-semibold">competitive spirit</span>. I'm{" "}
            <span className="font-semibold">not afraid of failures</span>{" "}
            instead learn from them because they always teach me something that
            no one can teach.
          </div>
          <div className="mt-1">
            Apart from this I really enjoy meeting new people, hope we'll meet
            someday.
          </div>
          <div className="mt-1 font-bold ">Regards,</div>
          <div className="mt-1 font-bold ">Mohit Thapliyal</div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
