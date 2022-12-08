import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { uploadImages } from "../../utils/imageHelper";

const EditedProfile = () => {
  const [isRegister, setIsRegister] = useState({
    username: "",
    job: "",
    phoneNumber: "",
    city: "",
    skill: "",
    url: "Register/useEffect",
  });
  const [image, setImage] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("email")) {
      axios
        .post("http://localhost/findjob/Server/client/user.php", {
          url: isRegister.url,
          email: localStorage.getItem("email"),
        })
        .then(function (response) {
          const innerValue = response.data[0];

          setIsRegister({
            username: innerValue.username || "",
            phoneNumber: innerValue.phoneNumber || "",
            job: innerValue.job || "",
            city: innerValue.city || "",
            skill: innerValue.skill || "",
            url: "Register/handleClick",
          });
        });
    }

    return () => {
      setIsRegister({
        username: "",
        job: "",
        phoneNumber: "",
        city: "",
        skill: "",
        url: "http://localhost:3000/register",
      });
    };
  }, [localStorage.getItem("email")]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setIsRegister((prevRegister) => ({ ...prevRegister, [name]: value }));
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleEdit = async (e) => {
    const imageUrl = await uploadImages([image]);
    console.log("imageUrl", imageUrl);
    const res = await axios.post(
      "http://localhost/findjob/Server/client/user.php",
      {
        ...isRegister,
        email: localStorage.getItem("email"),
        image: imageUrl[0],
      }
    );

    navigate("/home");
  };

  return (
    <>
      <div className="w-[250%] h-[90vh] bg-[#FFCD38] rounded-t-[50%] fixed bottom-0 left-1/2 -translate-x-1/2 bg-[#FFCD38] flex flex-col items-center justify-start">
        <input type="image" src="" alt="" />
        <div className="relative flex flex-col justify-center items-center py-2">
          {image ? (
            <img
              src={
                image
                  ? typeof image === "string"
                    ? image
                    : URL.createObjectURL(image)
                  : undefined
              }
              className="absolute w-32 h-32 bg-black top-2 rounded-full z-[-1]"
            />
          ) : (
            <>
              <div className="absolute w-32 h-32 bg-black top-2 rounded-full z-[-1]"></div>
            </>
          )}
          <input
            type="file"
            accept="image/*"
            onChange={handleImage}
            className="rounded-full bg-white w-32 h-32 opacity-0"
          />
          <h1 className="text-3xl font-bold">
            {isRegister.username || "Username"}
          </h1>
          <h1 className="text-3xl pb-3">{isRegister.job || "Pekerjaan"}</h1>
        </div>
        <div className="flex flex-col w-2/6 gap-4 items-center">
          <input
            placeholder="username"
            type="text"
            className="w-full border border-[#1A39B6] py-4 px-2"
            name="username"
            onChange={handleChange}
            value={isRegister.username}
          />
          <input
            placeholder="Pekerjaan"
            type="text"
            className="w-full border border-[#1A39B6] py-4 px-2"
            name="job"
            onChange={handleChange}
            value={isRegister.job}
          />
          <input
            placeholder="No. Telepon"
            type="text"
            className="w-full border border-[#1A39B6] py-4 px-2"
            name="phoneNumber"
            onChange={handleChange}
            value={isRegister.phoneNumber}
          />
          <input
            placeholder="Kota"
            type="text"
            className="w-full border border-[#1A39B6] py-4 px-2"
            name="city"
            onChange={handleChange}
            value={isRegister.city}
          />
          <input
            placeholder="Skills"
            type="text"
            className="w-full border border-[#1A39B6] py-4 px-2"
            name="skill"
            onChange={handleChange}
            value={isRegister.skill}
          />
          <button
            className="bg-[#1A39B6] py-2 px-4 rounded-xl text-[#E5E5E5] font-bold text-2xl drop-shadow-lg"
            onClick={handleEdit}
          >
            Save Edited Profile
          </button>
        </div>
      </div>
    </>
  );
};

export default EditedProfile;
