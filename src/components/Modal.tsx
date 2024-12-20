import React from "react";

const lists: { [key: number]: string[] } = {
  1: [
    "Initial build: Instagram Base 309.0.0.40.113",
    "Enabled developer options (hold down home icon)",
    "Pre-enabled anonymous mode",
    "Blocked ads and sponsored posts",
    "Added posts/reels/stories download feature",
    "Added full-size profile picture viewing",
  ],

  2: ["Example1", "Example1", "Example1", "Example1"],
};

const dl: { [key: string]: string } = {
  1: "https://dl.dashnyam.com/inxta.apk",

  2: "",
};

interface ModalProps {
  setIsVisible: (value: boolean) => void;
  className: string;
}

const Modal: React.FC<ModalProps> = ({ setIsVisible, className }) => {
  return (
    <div className={`${className}`}>
      <div className="fixed inset-0 bg-black bg-opacity-30 min-w-full min-h-full"></div>

      <div className='customfont-base fixed inset-0 flex justify-center items-center md:px-0 px-6'>
        <div className={` flex flex-col justify-between bg-white rounded-2xl text-lg text-black md:w-[40vw] w-full md:h-[38vh] h-[60vh] overflow-hidden shadow-[0px_0px_36px_-5px_rgba(0,0,0,0.33)]`}>
          <div className="text-black text-start px-10 py-8 text-wrap overflow-y-auto">
            <p className="text-4xl font-bold mb-4">Changelog</p>

            <ul className="md:text-2xl text-xl">
              {lists[1].map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="text-2xl font-medium w-full flex justify-center select-none border-t-4 border-white">
            <a
              href={dl[1]}
              className="min-w-[50%] flex flex-row justify-center cursor-pointer border-r-2 border-white rounded-[0px_6px_0px_0px] bg-sky-200 hover:bg-sky-300 transition duration-150 ease py-3"
            >
              Download
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-[18px] h-[20px] mt-[6px] ml-2"
                viewBox="0 0 384 512"
              >
                <path d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM216 232V334.1l31-31c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-72 72c-9.4 9.4-24.6 9.4-33.9 0l-72-72c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l31 31V232c0-13.3 10.7-24 24-24s24 10.7 24 24z" />
              </svg>
            </a>
            <button
              onClick={() => setIsVisible(false)}
              className="min-w-[50%] flex flex-row justify-center cursor-pointer border-l-2 border-white rounded-[6px_0px_0px_0px] bg-zinc-200 hover:bg-zinc-300 transition duration-150 ease py-3"
            >
              Close
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-[26px] h-[26px] mt-[3px] ml-[2px]"
                viewBox="0 0 384 512"
              >
                <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
              </svg>
            </button>
          </div>

          <div className="invisible fixed flex flex-row inset-0 pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-[30px] h-[30px]"
              viewBox="0 0 320 512"
            >
              <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-[30px] h-[30px]"
              viewBox="0 0 320 512"
            >
              <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
