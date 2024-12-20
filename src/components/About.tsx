// import React from 'react'

import FadeIn from "./FadeIn";

type Feature = {
  name: string;
  description: string;
  color: string;
};

const About = (props: { items: Feature[] }) => {
  const { items } = props;

  return (
    <>
      <div className="customfont-base">
        <FadeIn>
          <div className="flex justify-center">
            <div className="text-slate-900 md:my-14 my-10 md:space-y-4 space-y-2 md:px-20 md:w-3/4 px-3">
              <h2 className="text-5xl customfont-title font-bold">About</h2>
              <p className="md:text-2xl text-xl">
                <span className="customfont-title">Inxta</span> is a modification
                of the Instagram app, featuring numerous enhancements over
                the original application.
              </p>
            </div>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-4 grid-cols-2 md:grid-rows-2 grid-rows-4 text-slate-900 md:gap-6 gap-4 pb-16 md:px-12">
          {items.map((item) => (
            <FadeIn>
              <div
                className={
                  item.color +
                  " " +
                  " place-content-center rounded-2xl md:space-y-2 space-y-2 px-4 md:py-6 py-4 md:w-fit w-full h-full"
                }
              >
                <p className="customfont-title md:text-[27px] text-xl font-bold">
                  {item.name}
                </p>
                <p className="md:text-lg text-md">{item.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </>
  );
};

export default About;
