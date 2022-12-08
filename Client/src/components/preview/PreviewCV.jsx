import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProfileContext from "../../context/actions/ProfileContext";
import Pdf from "react-to-pdf";

const ref = React.createRef();

const PreviewCV = () => {
  const { profile } = useContext(ProfileContext);

  return (
    <>
      {profile && (
        <>
          <div
            className="flex py-8 px-3 bg-[#197DAE] h-[3/4] gap-2 text-white"
            ref={ref}
          >
            <div className="flex flex-col gap-3 h-full">
              <img
                className="w-20 h-20 bg-white top-2 rounded-full object-cover"
                src={profile.image}
                alt={profile.nama}
              />
              <h1 className="py-3 font-bold text-2xl">JIN-X</h1>
              <div className="w-full h-[2px] bg-white"></div>
              <h1>Kontak:</h1>
              <p>{profile.telp}</p>
              <div className="text-white pb-2 text-xs">
                <p>Alamat</p>
                <p>{profile.alamat}</p>
              </div>
              <div className="text-white pb-2 text-xs">
                <p>Email</p>
                <p>{profile.email}</p>
              </div>
              <div className="text-white pb-2 text-xs">
                <p>No. telp</p>
                <p>{profile.telp}</p>
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
              {/* <div className="w-full flex flex-col">
                <div className="flex items-center justify-center">
                  <p>Tempat & Tanggal Lahir</p>
                  <p>:{profile.tempat}</p>
                </div>
                <div className="flex items-center justify-between pr-10">
                  <p>Jenis Kelamin</p>
                  <p>:{profile.gender}</p>
                </div>
                <div className="flex items-center justify-between pr-4">
                  <p>Agama</p>
                  <p>: {profile.agama}</p>
                </div>
                <div className="flex items-center justify-between">
                  <p>Status</p>
                  <p>: {profile.status}</p>
                </div>
                <div className="flex items-center justify-between">
                  <p>Kewarganegaraan</p>
                  <p>:{profile.kewarganegaraan}</p>
                </div>
              </div> */}
              <table className="table-auto">
                <tbody>
                  <tr>
                    <td>Tempat & Tanggal Lahir</td>
                    <td>: {profile.tempat}</td>
                  </tr>
                  <tr>
                    <td>Jenis Kelamin</td>
                    <td>: {profile.gender}</td>
                  </tr>
                  <tr>
                    <td>Agama</td>
                    <td>: {profile.agama}</td>
                  </tr>
                  <tr>
                    <td>Kewarganegaraan</td>
                    <td>: {profile.kewarganegaraan}</td>
                  </tr>
                </tbody>
              </table>
              <h1 className="pt-5 text-xl">Riwayat Pendidikan</h1>
              <div className="w-full h-[2px] bg-white"></div>
              <p>{profile.riwayat}</p>
              <h1 className="pt-5 text-xl">Pengalaman</h1>
              <div className="w-full h-[2px] bg-white"></div>
              <p>{profile.pengalaman}</p>
            </div>
          </div>

          <div className="py-8 flex w-full justify-end ">
            <Pdf targetRef={ref} filename="post.pdf">
              {({ toPdf }) => (
                <button
                  className="bg-[#1A39B6] py-2 px-4 text-white text-2xl font-bold rounded-2xl"
                  onClick={toPdf}
                >
                  Download
                </button>
              )}
            </Pdf>
          </div>
        </>
      )}
    </>
  );
};

export default PreviewCV;
