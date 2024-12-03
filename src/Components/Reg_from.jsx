import React, { useState } from "react";
import img from "../assets/reg_pick.png";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Reg_from = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  let [email, setEmail] = useState("");
  let [emailerr, setEmailerr] = useState(false);
  let [name, setName] = useState("");
  let [nameerr, setNameerr] = useState(false);
  let [password, setPassword] = useState("");
  let [passworderr, setPassworderr] = useState(false);
  let [hide, setHide] = useState(true);
  let [loder, setLoder] = useState(false);

  let handleToggle = () => {
    setHide(!hide);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setEmailerr(true);
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setEmailerr(true);
    }

    if (!name) {
      setNameerr(true);
    }

    if (!password) {
      setPassworderr(true);
    }
    if (email && name && password) {
      setLoder(true);

      createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          toast("Registration successfully done");
        setTimeout(() => {
          navigate("/login");
        }, 200);
      })
        .catch((error) => {
          setLoder(false);
          console.log(error.code);
          if (error.code.includes("auth/email-already-in-use")) {
            setEmailerr(true);
          }
        });
        setEmail("");
    setName("");
    setPassword("");
    }
  };
  return (
    <div className="flex">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition:Bounce
      />
      <div className="w-1/2 flex justify-end items-center mr-[69px]">
        <div>
          <h1 className="font-nunito font-bold text-[35px] text-primary mb-3">
            Get started with easily register
          </h1>
          <p className="font-nunito font-normal text-[21px] text-primary">
            Free register and you can enjoy it
          </p>
          <form action="">
            <div className=" relative mt-[42px]">
              <label className="font-nunito font-semibold text-[13px] text-primary bg-white px-4 absolute top-[-8px] left-[40px]">
                Email Address
              </label>
              <input
                className="w-[368px] h-[81px] rounded-lg  border-[1.72px] border-bad font-nunito font-semibold text-[21px] text-primary px-[52px] py-[26px] outline-none"
                onChange={(e) => {
                  setEmail(e.target.value);
                  setEmailerr(false);
                }}
                type="text"
              />
              {emailerr && (
                <>
                  <p className="text-red-600">Please enter valid email</p>
                </>
              )}
            </div>
            <div className=" relative mt-[42px]">
              <label className="font-nunito font-semibold text-[13px] text-primary bg-white px-4 absolute top-[-8px] left-[40px]">
                Full name
              </label>
              <input
                className="w-[368px] h-[81px] rounded-lg  border-[1.72px] border-bad font-nunito font-semibold text-[21px] text-primary px-[52px] py-[26px] outline-none"
                onChange={(e) => {
                  setName(e.target.value);
                  setNameerr(false);
                }}
                type="text"
              />
              {nameerr && (
                <>
                  <p className="text-red-600">Name field is empty</p>
                </>
              )}
            </div>
            <div className=" relative mt-[42px]">
              <label className="font-nunito font-semibold text-[13px] text-primary bg-white px-4 absolute top-[-8px] left-[40px]">
                Password
              </label>
              <input
                className="w-[368px] h-[81px] rounded-lg  border-[1.72px] border-bad font-nunito font-semibold text-[21px] text-primary px-[52px] py-[26px] outline-none"
                onChange={(e) => {
                  setPassword(e.target.value);
                  setPassworderr(false);
                }}
                type={hide ? "password" : "text"}
              />
              {hide ? (
                <FaEyeSlash
                  onClick={handleToggle}
                  size={25}
                  className="absolute top-[28px] right-[156px] cursor-pointer"
                />
              ) : (
                <FaEye
                  onClick={handleToggle}
                  size={25}
                  className="absolute top-[28px] right-[156px] cursor-pointer"
                />
              )}
              {passworderr && (
                <>
                  <p className="text-red-600">Password field is empty</p>
                </>
              )}
            </div>
            {loder ? (
              <div className="w-[360px]  flex justify-center">
               
              </div>
            ) : (
              <button
                onClick={handleSubmit}
                className="font-nunito font-semibold text-[21px] text-white bg-secondary px-[147px] py-[20px] rounded-[86px] mt-[40px]"
              >
                {" "}
                Sign up
              </button>
            )}
            <p className="font-openSans font-normal text-[13px] text-dark mt-[20px] ps-[75px]">
              Already have an account ?{" "}
              <a className="font-bold text-orange" href="">
                Sign In
              </a>
            </p>
          </form>
        </div>
      </div>
      <div className="w-1/2">
        <img className="object-cover w-full h-screen" src={img} alt="" />
      </div>
    </div>
  );
};

export default Reg_from;
