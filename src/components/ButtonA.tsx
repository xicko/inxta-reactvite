import React from 'react';

interface ButtonAProps {
  text: string;
  children?: JSX.Element;
  link?: string;
  color?: string;
  glow?: boolean;
  download?: boolean;
  newtab?: boolean;
}

const ButtonA: React.FC<ButtonAProps> = ({ text, children, link, color, download, newtab }) => {
  return (
    <>
      <div>

        <a
          {...(newtab ? { target: "_blank" } : {})} // Open in new tab?
          {...(download ? { download: text } : {})} // Download?
          href={link} // URL Link
          className={color + " " + "customfont-base font-normal rounded-lg cursor-pointer ease-in-out duration-150 transition"}
          //classList={{
            //"hover:shadow-[0_5px_60px_-15px_rgba(186,230,253,1)] shadow-[0px_0px_50px_-15px_rgba(186,230,253,0.3)] transition ease duration-700":glow}}
        >
          {text}
        </a>

        {children}

      </div>
    </>
  )
}

export default ButtonA;