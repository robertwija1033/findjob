import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../../context/actions/UserContext";

const Cv = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  return (
    <>
      <h1 className="text-2xl text-center font-bold">CV</h1>
      <div className="flex py-8 px-3 bg-[#197DAE] h-[3/4] gap-2 text-white">
        <div className="flex flex-col gap-3 h-full">
          {user && (
            <img
              className="w-20 h-20 bg-white top-2 rounded-full object-cover"
              src={user.image}
              alt={user.username}
            />
          )}

          <h1 className="py-3 font-bold text-2xl">JIN-X</h1>
          <div className="w-full h-[2px] bg-white"></div>
          <h1>Kontak:</h1>
          {/* <p>{user.phoneNumber}</p> */}
          <div className="text-white pb-2 text-xs">
            <p>Alamat</p>
            <p>Jln. Listrik no 10</p>
          </div>
          <div className="text-white pb-2 text-xs">
            <p>Email</p>
            <p>Nama123@gmail.com</p>
          </div>
          <div className="text-white pb-2 text-xs">
            <p>No. telp</p>
            <p>0812-3456-7890</p>
          </div>
          <h1>Bahasa:</h1>
          <ul className="list-disc flex flex-col pl-7">
            <li>Indonesia</li>
            <li>Inggris</li>
            <li>Mandarin</li>
            <li>Jepang</li>
            <li>German</li>
          </ul>
          <h1>Skill:</h1>
          <ul className="list-disc flex flex-col pl-7">
            <li>Reactjs</li>
            <li>Php</li>
            <li>Nodejs</li>
          </ul>
        </div>
        <div className="w-1 p-[1px] bg-white"></div>
        <div className="flex-1 text-sm">
          <h1>Profil</h1>
          <div className="w-full h-[2px] bg-white"></div>
          <div className="w-full flex flex-col">
            <div className="flex items-center justify-center">
              <p>Tempat & Tanggal Lahir</p>
              <p>:medan, 01-01-2001</p>
            </div>
            <div className="flex items-center justify-between pr-10">
              <p>Jenis Kelamin</p>
              <p>:Pria</p>
            </div>
            <div className="flex items-center justify-between pr-4">
              <p>Agama</p>
              <p>: Kristen</p>
            </div>
            <div className="flex items-center justify-between">
              <p>Status</p>
              <p>: Belum nikah</p>
            </div>
            <div className="flex items-center justify-between">
              <p>Kewarganegaraan</p>
              <p>:Indonesia</p>
            </div>
          </div>
          <h1>Riwayat Pendidikan</h1>
          <div className="w-full h-[2px] bg-white"></div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex
            voluptatibus, optio exercitationem, omnis impedit facere aliquam
            unde
          </p>
          <h1>Pengalaman</h1>
          <div className="w-full h-[2px] bg-white"></div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex
            voluptatibus, optio exercitationem, omnis impedit facere aliquam
            unde
          </p>
          <h1>Lainnya</h1>
          <div className="w-full h-[2px] bg-white"></div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex
            voluptatibus, optio exercitationem, omnis impedit facere aliquam
            unde
          </p>
        </div>
      </div>
      <div className="py-8 flex w-full justify-end ">
        <button
          className="bg-[#1A39B6] py-2 px-4 text-white text-2xl font-bold rounded-2xl"
          onClick={() => navigate("/makeCV")}
        >
          Go to Template
        </button>
      </div>
    </>
  );
};

export default Cv;
