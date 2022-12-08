import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../../context/actions/UserContext";

const SuratLamaran = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  return (
    <>
      <h1 className="text-2xl text-center font-bold">Surat Lamaran</h1>
      <div className="flex flex-col gap-10 text-white pt-6 pb-3 px-3 bg-[#197DAE]">
        <div className="flex w-full justify-between">
          <div className="flex-1">
            <h1 className="font-bold text-2xl pb-3">&#91;Nama Anda&#93;</h1>
            <p className="font-bold pb-4">
              &#91;Alamat, Kota, Kode Pos&#93; &#91;telepon&#93; &#91;Email&#93;
            </p>
            <h3 className="font-bold text-2xl pb-4">&#91;Tanggal&#93;</h3>
            <p>&#91;Nama Penerima&#93;</p>
            <p>&#91;judul&#93;</p>
            <p>&#91;Perusahaan&#93;</p>
            <p>&#91;Alamat&#93;</p>
            <p>&#91;Kota, kode&#93;</p>
          </div>
          {user && (
            <img
              src={user.image}
              alt={user.username}
              className="w-32 h-32 rounded-full"
            />
          )}
        </div>
        <div className="flex pt-2 pb-4 px-2 text-[#197DAE] w-full bg-white flex-col">
          <h3 className="font-bold text-lg">Yth. &#91;Penerima&#93;</h3>
          <p className="pt-4 pb-12">
            &#91;Ingin tahu apa yang perlu disertakan dalam surat lamaran Anda?
            Akan sangat baik jika Anda menyertakan poin-poin penting tentang
            mengapa Anda merupakan orang yang tepat untuk perusahaan tersebut
            dan merupakan pilihan terbaik untuk pekerjaan itu. Tentu saja,
            jangan lupa meminta kesempatan untuk wawancara, namun, buatlah agar
            tetap singkat! Surat lamaran sebaiknya tidak sepanjang novel, sebaik
            apa pun alur yang Anda miliki.&#93;
          </p>
          <h3 className="font-bold text-lg pb-5">Hormat saya,</h3>
          <h3 className="font-bold text-lg">&#91;Nama Anda&#93;</h3>
        </div>
      </div>
      <div className="py-8 flex w-full justify-end ">
        <button
          className="bg-[#1A39B6] py-2 px-4 text-white text-2xl font-bold rounded-2xl"
          onClick={() => navigate("/makeSuratLamaran")}
        >
          Go to Template
        </button>
      </div>
      <div className="w-full py-10"></div>
    </>
  );
};

export default SuratLamaran;
