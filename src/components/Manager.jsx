import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Lotiecontroler from "./Lotiecontroler";
import { useRef ,useState} from "react";

const Manager = () => {
  const ref = useRef();
  const pass = useRef();
  const [forms, setforms] = useState({site: "", username: "", password: ""})

  const handelonclick = () => {
    
    if (ref.current.src.includes("/eyecross.png")) {
      ref.current.src = "/eye.png";
      pass.current.type = "password";
    } else {
      pass.current.type = "text";
      ref.current.src = "/eyecross.png";
    }
  };
 const savePassword=()=>{
    console.log(forms)
      
    }

 const handleChange=(e)=>{
    setforms({...forms, [e.target.name]: e.target.value })
 }

  return (
    <>
      <div className="absolute inset-0 -z-10 h-full w-full bg-green-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-green-400 opacity-20 blur-[100px]"></div>
      </div>
      <div className=" p-3 px-40 py-16 mx-auto min-h-[88.2vh] ">
        <h1 className="text-4xl text font-bold text-center">
          <span className="text-green-500"> &lt;</span>

          <span>Pass</span>
          <span className="text-green-500">U/&gt;</span>
        </h1>
        <div className="text-yellow-800 flex-col flex gap-1 p-3">
          <input value={forms.site} name="site" onChange={handleChange}
            placeholder="Enter the Website URL"
            type="text"
            on
            className="rounded-2xl bg-amber-100 border-2 border-amber-400 hover:bg-amber-300 px-3"
          />
          <div className="flex w-full gap-5 justify-center items-center">
            <input value={forms.username} name="username" onChange={handleChange}
              placeholder="Enter the User Name"
              className="rounded-2xl bg-amber-100 border-2 border-amber-400 hover:bg-amber-300 px-3 w-full"
              type="text"
            />
            <div className="relative w-full flex items-center">
              <input value={forms.password} name="password" onChange={handleChange}
                placeholder="Enter the Password"
                className="rounded-2xl bg-amber-100 border-2 border-amber-400 hover:bg-amber-300 px-3 w-full"
                type="text" ref={pass}
              />
              <span
                className="absolute right-1 cursor-pointer"
                onClick={handelonclick}
              >
                <img src="/eye.png" ref={ref} alt="" width={25} />
              </span>
            </div>
          </div>

          <Lotiecontroler
            src="/addbtn.lottie"
            label="Add Pasword"
            className="bg-green-600 w-fit rounded-full px-2 mx-auto flex items-center gap-1 cursor-pointer border-1 border-red-800 text-blue-50"
            onClick={savePassword}
          />
        </div>
      </div>
    </>
  );
};

export default Manager;
