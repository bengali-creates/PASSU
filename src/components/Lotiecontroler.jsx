import React, { useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Lotiecontroler = ({src, label="name a btn",className,onClick}) => {
  const [play, setplay] = useState(null);

  const handleMouseEnter = () => {
    console.log(play);
    if (play) {
      play.setLoop(true); // enable infinite loop
      play.play();
      console.log(play); // start playing
    }
  };
  return (
    <>
      <button
        type="button"
       className={className}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={() => play?.stop()}
        onClick={onClick}
      >
        <DotLottieReact
          src={src}
          loop={false}
          autoplay={false}
          dotLottieRefCallback={setplay}
          className="w-7 h-7"
        />
        {label}
      </button>
    </>
  );
};

export default Lotiecontroler;
