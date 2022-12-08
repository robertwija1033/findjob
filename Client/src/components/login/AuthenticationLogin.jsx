import axios from "axios";
import { useContext } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../../context/actions/UserContext";
import { AiFillEye, AiOutlineEyeInvisible } from "react-icons/ai";

const AuthenticationLogin = () => {
  const [show, setShow] = useState(false);
  const [isLogin, setIsLogin] = useState({
    email: "",
    password: "",
    url: "http://localhost:3000/login",
  });
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setIsLogin((prevLogin) => ({ ...prevLogin, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    axios
      .post("http://localhost/findjob/Server/client/user.php", isLogin)
      .then((result) => {
        if (result.data.id) {
          setUser(result.data);
          window.localStorage.setItem("email", result.data.email);
          navigate("/profile");
        } else {
          console.log("ERROR");
        }
      });
  };

  return (
    <>
      <div className="flex flex-col w-2/6 gap-4 items-end bg-[#fffff]">
        <input
          placeholder="Email"
          type="text"
          className="w-full border border-[#1A39B6] py-4 px-2"
          name="email"
          onChange={handleChange}
          value={isLogin.email}
        />
        <div className="w-full relative">
          <input
            placeholder="Password"
            type={show ? "text" : "password"}
            className="w-full border border-[#1A39B6] py-4 px-2"
            name="password"
            onChange={handleChange}
            value={isLogin.password}
          />
          <span
            className="absolute top-1/2 -translate-y-1/2 right-8"
            onClick={() => setShow(!show)}
          >
            <AiFillEye className={`text-3xl ${show ? "block" : "hidden"}`} />
            <AiOutlineEyeInvisible
              className={`text-3xl ${show ? "hidden" : "block"}`}
            />
          </span>
        </div>
        <Link className="text-xl text-[#1A39B6] underline">
          Forgot Password
        </Link>
      </div>
      <div className="flex flex-col gap-5">
        <button
          className="bg-[#1A39B6] py-2 rounded-xl text-[#E5E5E5] font-bold text-2xl"
          onClick={handleSubmit}
        >
          Log In
        </button>
        <button
          className="bg-white py-2 px-4 rounded-xl text-[#1A39B6] font-bold text-2xl"
          onClick={() => navigate("/register")}
        >
          Sign Up
        </button>
      </div>
    </>
  );
};

export default AuthenticationLogin;
