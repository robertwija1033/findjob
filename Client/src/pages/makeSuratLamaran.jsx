import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import Header from "../components/general/Header";
import Pdf from "react-to-pdf";
import React from "react";

const ref = React.createRef();

const MakeSuratLamaran = () => {
  const [imageCV, setImageCV] = useState(null);

  const handleImage = async (e) => {
    const file = e.target.files[0];
    setImageCV(file);
  };

  return (
    <>
      <Header Route={"/template"} />
      <h1 className="text-[#1A39B6] font-semibold text-center text-xl py-5">
        Surat Lamaran
      </h1>
      <div
        className="flex flex-col gap-10 text-white pt-6 pb-3 px-3 bg-[#197DAE]"
        ref={ref}
      >
        <div className="flex w-full justify-between flex-row">
          <div className="flex flex-col">
            <input
              className="font-bold text-2xl bg-transparent text-white placeholder:text-white w-56"
              placeholder="&#91;Nama Anda&#93;"
            />
            <input
              className="font-bold bg-transparent text-white placeholder:text-white w-56"
              placeholder="&#91;Alamat, Kota, Kode Pos&#93;"
            />
            <input
              className="font-bold bg-transparent text-white placeholder:text-white w-56"
              placeholder="&#91;telepon&#93;"
            />
            <input
              className="font-bold bg-transparent text-white placeholder:text-white w-56"
              placeholder="&#91;Email&#93;"
            />

            <input
              className="font-bold text-2xl bg-transparent text-white placeholder:text-white w-56"
              placeholder="&#91;Tanggal&#93;"
            />
            <input
              className="bg-transparent text-white placeholder:text-white w-56"
              placeholder="&#91;Nama Penerima&#93;"
            />
            <input
              className="bg-transparent text-white placeholder:text-white w-56"
              placeholder="&#91;judul&#93;"
            />
            <input
              className="bg-transparent text-white placeholder:text-white w-56"
              placeholder="&#91;Perusahaan&#93;"
            />
            <input
              className="bg-transparent text-white placeholder:text-white w-56"
              placeholder="&#91;Alamat&#93;"
            />
            <input
              className="bg-transparent text-white placeholder:text-white w-56"
              placeholder="&#91;Kota, kode&#93;"
            />
          </div>
          <div className="flex relative gap-1 w-[100px] flex-1 w-56">
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
                  className="w-40 h-40 rounded-full object-cover"
                />
              </>
            ) : (
              <>
                <CgProfile className="w-40 h-40 text text-[5rem]" />
                <input
                  type="file"
                  className="absolute w-40 h-40 text-lg file:text-transparent file:bg-transparent file:border-0 file:font-semibold text-transparent"
                  accept="image/*"
                  onChange={handleImage}
                  name="image"
                ></input>
              </>
            )}
          </div>
        </div>
        <div className="flex pt-2 pb-4 px-2 text-[#197DAE] w-full bg-white flex-col">
          <div className="flex gap-2">
            <h3 className="font-bold text-lg">Yth. </h3>
            <input
              className="bg-transparent font-bold text-lg placeholder:text-[#197DAE]"
              placeholder="&#91;Penerima&#93;"
            />
          </div>
          <textarea
            className="h-[350px] placeholder:text-[#197DAE]"
            placeholder="&#91;Ingin tahu apa yang perlu disertakan dalam surat lamaran Anda?
            Akan sangat baik jika Anda menyertakan poin-poin penting tentang
            mengapa Anda merupakan orang yang tepat untuk perusahaan tersebut
            dan merupakan pilihan terbaik untuk pekerjaan itu. Tentu saja,
            jangan lupa meminta kesempatan untuk wawancara, namun, buatlah agar
            tetap singkat! Surat lamaran sebaiknya tidak sepanjang novel, sebaik
            apa pun alur yang Anda miliki.&#93;"
          ></textarea>
          <p className="pt-4 pb-12"></p>
          <h3 className="font-bold text-lg pb-2">Hormat saya,</h3>
          <input
            className="bg-transparent font-bold text-lg placeholder:text-[#197DAE]"
            placeholder="&#91;Nama Anda&#93;"
          />
        </div>
      </div>
      <div className="py-8 flex w-full justify-end">
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
  );
};

export default MakeSuratLamaran;
