import { useContext, useState } from "react";
import UserContext from "../../context/actions/UserContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AiFillEye, AiOutlineEyeInvisible } from "react-icons/ai";

const AuthenticationRegister = () => {
  const [show, setShow] = useState(false);
  const [isRegister, setIsRegister] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    placeAndDateOfBirth: "",
    gender: "",
    url: "http://localhost:3000/register",
  });
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setIsRegister((prevRegister) => ({ ...prevRegister, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    axios
      .post("http://localhost/findjob/Server/client/user.php", isRegister)
      .then((result) => {
        if (result.data[0].id) {
          setUser(result.data);

          window.localStorage.setItem("email", result.data[0].email);

          navigate("/profile");
        } else {
          console.log("ERROR");
        }
      });
  };

  return (
    <div className="flex flex-col w-2/6 gap-7 items-center">
      <input
        placeholder="Email"
        type="email"
        className="w-full border border-[#1A39B6] py-4 px-2"
        name="email"
        onChange={handleChange}
        value={isRegister.email}
      />
      <input
        placeholder="username"
        type="text"
        className="w-full border border-[#1A39B6] py-4 px-2"
        name="username"
        onChange={handleChange}
        value={isRegister.username}
      />
      <div className="w-full relative">
        <input
          placeholder="Password"
          type={show ? "text" : "password"}
          className="w-full border border-[#1A39B6] py-4 px-2"
          name="password"
          onChange={handleChange}
          value={isRegister.password}
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
      <div className="w-full relative">
        <input
          placeholder="Re - Enter Password"
          type={show ? "text" : "password"}
          className="w-full border border-[#1A39B6] py-4 px-2"
          name="confirmPassword"
          onChange={handleChange}
          value={isRegister.confirmPassword}
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
      <input
        placeholder="Phone Number"
        type="text"
        className="w-full border border-[#1A39B6] py-4 px-2"
        name="phoneNumber"
        onChange={handleChange}
        value={isRegister.phoneNumber}
      />
      <input
        placeholder="Tempat, Tanggal lahir"
        type="text"
        className="w-full border border-[#1A39B6] py-4 px-2"
        name="placeAndDateOfBirth"
        onChange={handleChange}
        value={isRegister.placeAndDateOfBirth}
      />
      <input
        placeholder="Gender"
        type="text"
        className="w-full border border-[#1A39B6] py-4 px-2"
        name="gender"
        onChange={handleChange}
        value={isRegister.gender}
      />
      <button
        className="bg-[#1A39B6] py-2 px-4 rounded-xl text-[#E5E5E5] font-bold text-2xl drop-shadow-lg"
        onClick={handleSubmit}
      >
        Register
      </button>
    </div>
  );
};

export default AuthenticationRegister;
