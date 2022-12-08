import { useContext, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import ProfileContext from "../../context/actions/ProfileContext";
import { uploadImages } from "../../utils/imageHelper";

const InputCV = () => {
  const [selects, setSelects] = useState();
  const [imageCV, setImageCV] = useState();
  const [profileCV, setProfileCV] = useState({
    pekerjaan: "",
    nama: "",
    alamat: "",
    email: "",
    telp: "",
    tempat: "",
    gender: "",
    agama: "",
    status: "",
    kewarganegaraan: "",
    riwayat: "",
    skill: "",
    pengalaman: "",
    bahasa: "",
  });
  const { profile, setProfile } = useContext(ProfileContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setProfileCV((prevProfileCV) => ({ ...prevProfileCV, [name]: value }));
  };

  const handleImage = async (e) => {
    const file = e.target.files[0];
    setImageCV(file);
  };

  const handleSend = async (e) => {
    const imageUrl = await uploadImages([imageCV]);
    // const { name } = e.target;
    setProfileCV({ ...profileCV, image: imageUrl[0] });
    // setProfile(profileCV);
  };

  const handleClick = () => {
    setProfile(profileCV);

    navigate("/preview");
  };

  return (
    <>
      <h1 className="font-bold text-xl">Detail Pribadi</h1>
      <h1>Pekerjaan Diinginkan</h1>
      <input
        type="text"
        className="w-3/4 border border-[#1A39B6] py-4 px-2"
        placeholder="Pekerjaan"
        name="pekerjaan"
        value={profileCV.pekerjaan}
        onChange={handleChange}
      />
      <div className="flex gap-2 py-5 flex-col">
        <div className="flex items-center relative gap-1">
          <CgProfile className="black text-6xl " />
          {imageCV ? (
            <>
              <img
                src={
                  imageCV
                    ? typeof imageCV === "string"
                      ? imageCV
                      : URL.createObjectURL(imageCV)
                    : undefined
                }
                className="absolute w-14 h-14 rounded-full object-cover"
              />
              <button
                className="bg-[#1A39B6] text-white text-sm font-semibold rounded-full py-2 px-3 ml-4"
                onClick={handleSend}
              >
                upload
              </button>
            </>
          ) : (
            <></>
          )}
          <input
            type="file"
            className="w-full text-lg file:text-[#1A39B6] file:bg-transparent file:border-0 file:font-semibold text-transparent"
            accept="image/*"
            onChange={handleImage}
            name="image"
          ></input>
        </div>
        <h1>Nama panjang</h1>
        <input
          type="text"
          className="w-3/4 border border-[#1A39B6] py-4 px-2"
          placeholder="Nama"
          name="nama"
          onChange={handleChange}
          value={profileCV.nama}
        />
        <h1>Alamat</h1>
        <input
          type="text"
          className="w-3/4 border border-[#1A39B6] py-4 px-2"
          placeholder="Alamat"
          name="alamat"
          onChange={handleChange}
          value={profileCV.alamat}
        />
        <h1>Alamat Email</h1>
        <input
          type="text"
          className="w-3/4 border border-[#1A39B6] py-4 px-2"
          placeholder="Email"
          name="email"
          onChange={handleChange}
          value={profileCV.email}
        />
        <h1>No Telp</h1>
        <input
          type="text"
          className="w-3/4 border border-[#1A39B6] py-4 px-2"
          placeholder="No. Telepon"
          name="telp"
          onChange={handleChange}
          value={profileCV.telp}
        />
        <h1>Tempat dan Tanggal Lahir</h1>
        <input
          type="text"
          className="w-3/4 border border-[#1A39B6] py-4 px-2"
          placeholder="Tempat, Tanggal lahir"
          name="tempat"
          onChange={handleChange}
          value={profileCV.tempat}
        />
        <h1>Gender</h1>
        <select
          className="w-3/4 border border-[#1A39B6] py-4 px-2"
          onChange={handleChange}
          name="gender"
        >
          <option>Gender</option>
          <option>Pria</option>
          <option>Wanita</option>
        </select>
        <h1>Agama</h1>
        <input
          type="text"
          className="w-3/4 border border-[#1A39B6] py-4 px-2"
          placeholder="Agama"
          name="agama"
          onChange={handleChange}
          value={profileCV.agama}
        />
        <h1>Status</h1>
        <input
          type="text"
          className="w-3/4 border border-[#1A39B6] py-4 px-2"
          placeholder="Status"
          name="status"
          onChange={handleChange}
          value={profileCV.status}
        />
        <h1>Kewarganegaraan</h1>
        <input
          type="text"
          className="w-3/4 border border-[#1A39B6] py-4 px-2"
          placeholder="Kewarganegaraan"
          name="kewarganegaraan"
          onChange={handleChange}
          value={profileCV.kewarganegaraan}
        />
        <h1>Riwayat Pendidikan</h1>
        <textarea
          placeholder="Riwayat Pendidikan"
          className="overflow-scroll p-1 px-3"
          name="riwayat"
          value={profileCV.riwayat}
          onChange={handleChange}
        ></textarea>
        <h1>Skill</h1>
        <textarea
          placeholder="Skill"
          className="overflow-scroll p-1 px-3"
          name="skill"
          value={profileCV.skill}
          onChange={handleChange}
        ></textarea>
        <h1>Pengalaman</h1>
        <textarea
          placeholder="Pengalaman"
          className="overflow-scroll p-1 px-3"
          name="pengalaman"
          value={profileCV.pengalaman}
          onChange={handleChange}
        ></textarea>
        <h1>Bahasa</h1>
        <textarea
          placeholder="Bahasa"
          className="overflow-scroll p-1 px-3"
          name="bahasa"
          value={profileCV.bahasa}
          onChange={handleChange}
        ></textarea>
      </div>
      <button
        onClick={handleClick}
        className="bg-[#1A39B6] text-white font-bold py-2 px-5 w-fit fixed bottom-5 right-5 rounded-xl"
      >
        Preview
      </button>
    </>
  );
};

export default InputCV;
