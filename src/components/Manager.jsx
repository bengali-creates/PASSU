import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Lotiecontroler from "./Lotiecontroler";
import { useRef, useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";

const Manager = () => {
  const ref = useRef();
  const pass = useRef();
  const [forms, setforms] = useState({ site: "", username: "", password: "" });
  const [passwordArray, setPasswordArray] = useState([]);

  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    if (passwords) {
      setPasswordArray(JSON.parse(passwords));
    }
  }, []);

  const handelonclick = () => {
    if (ref.current.src.includes("/eyecross.png")) {
      ref.current.src = "/eye.png";
      pass.current.type = "password";
    } else {
      pass.current.type = "text";
      ref.current.src = "/eyecross.png";
    }
  };
  const savePassword = () => {
    if (
      forms.site.length > 3 &&
      forms.username.length > 3 &&
      forms.password.length > 3
    ) {
      setPasswordArray([...passwordArray, forms]);
      localStorage.setItem(
        "passwords",
        JSON.stringify([...passwordArray, forms])
      );
      console.log([...passwordArray, forms]);
       setforms({ site: "", username: "", password: "" })
      toast(
        <div className="flex items-center ">
          {
            <DotLottieReact
              src="/savedpass.lottie"
              loop={false}
              autoplay={true}
            />
          }
          <span>Saved password</span>
        </div>,
        {
          position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "dark",
        }
      );
    } else {
      toast(
        <div className="flex items-center ">
          {<DotLottieReact src="/error.lottie" loop={true} autoplay={true} />}
          <span>Please enter the correct data</span>
        </div>,
        {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
        }
      );
    }
  };

  const handleChange = (e) => {
    setforms({ ...forms, [e.target.name]: e.target.value });
  };

  const copyText = (text) => {
    navigator.clipboard.writeText(text);
    toast("Copied to Clipboard", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <>
      
      <ToastContainer/>
      <div className="absolute inset-0 -z-10 h-full w-full bg-pink-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-blue-600 opacity-20 blur-[50px]"></div>

        <div className=" p-3 px-40 py-16 mx-auto min-h-[88.2vh] ">
          <h1 className="text-4xl text font-bold text-center">
            <span className="text-green-500"> &lt;</span>

            <span>Pass</span>
            <span className="text-green-500">U/&gt;</span>
          </h1>
          <div className="text-yellow-800 flex-col flex gap-1 p-3">
            <input
              value={forms.site}
              name="site"
              onChange={handleChange}
              placeholder="Enter the Website URL"
              type="text"
              on
              className="rounded-2xl bg-amber-100 border-2 border-amber-400 hover:bg-amber-300 px-3"
            />
            <div className="flex w-full gap-5 justify-center items-center">
              <input
                value={forms.username}
                name="username"
                onChange={handleChange}
                placeholder="Enter the User Name"
                className="rounded-2xl bg-amber-100 border-2 border-amber-400 hover:bg-amber-300 px-3 w-full"
                type="text"
              />
              <div className="relative w-full flex items-center">
                <input
                  value={forms.password}
                  name="password"
                  onChange={handleChange}
                  placeholder="Enter the Password"
                  className="rounded-2xl bg-amber-100 border-2 border-amber-400 hover:bg-amber-300 px-3 w-full"
                  type="password"
                  ref={pass}
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
              cl="w-7 h-7"
              onClick={savePassword}
            />
          </div>
          <div className="password py-7">
            <h1 className="text-xl text-center pb-4 font-bold text-orange-900 underline">
              Your Password
            </h1>
            {passwordArray.length === 0 && <div>No password to show</div>}
            {passwordArray.length != 0 && (
              <table className="table-auto w-full bg-violet-300 px-2 m-">
                <thead className="bg-violet-700 border-2">
                  <tr>
                    <th className="border-1 ">Site</th>
                    <th className="border-1 ">User Name</th>
                    <th className="border-1 ">Pasword</th>
                  </tr>
                </thead>
                <tbody>
                  {passwordArray.map((item) => {
                    return (
                      <tr>
                        <td className="w-36 text-center">
                          <div className="flex items-center justify-center">
                            <span>{item.site}</span>
                            <span>
                              <Lotiecontroler
                                src="/copy.lottie"
                                label=""
                                className="cursor-pointer pt-3 "
                                cl="w-11 h-11"
                                onClick={() => {
                                  copyText(item.site);
                                }}
                              />
                            </span>
                          </div>
                        </td>
                        <td className="w-32 text-center ">
                          <div className="flex items-center justify-center">
                            <span>{item.username}</span>{" "}
                            <span>
                              <Lotiecontroler
                                src="/copy.lottie"
                                label=""
                                className="cursor-pointer pt-3 "
                                cl="w-11 h-11"
                                onClick={() => {
                                  copyText(item.username);
                                }}
                              />
                            </span>
                          </div>
                        </td>
                        <td className="w-32 text-center">
                          <div className="flex items-center justify-center">
                            <span>{item.password}</span>
                            <span>
                              <Lotiecontroler
                                src="/copy.lottie"
                                label=""
                                className="cursor-pointer pt-3 "
                                cl="w-11 h-11"
                                onClick={() => {
                                  copyText(item.password);
                                }}
                              />
                            </span>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Manager;
