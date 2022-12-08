import { useContext, useEffect, useState } from "react";
import CompanyContext from "../../context/actions/CompanyContext";
import UserContext from "../../context/actions/UserContext";

const NavSearch = () => {
  const { user } = useContext(UserContext);
  const { searchingCompany } = useContext(CompanyContext);

  const handleChange = (e) => {
    const searchFieldString = e.target.value.toLocaleLowerCase();
    searchingCompany(searchFieldString, "search");
  };

  return (
    <>
      <img
        className="w-14"
        src={`${process.env.PUBLIC_URL}/images/logo.png`}
        alt="FindJob"
      />
      <div className="flex flex-1 bg-white items-center justify-between p-1 gap-2 h-full rounded-lg">
        <img
          className="w-8"
          src={`${process.env.PUBLIC_URL}/images/logo.png`}
          alt="FindJob"
        />
        <div className="w-[3px] h-8 bg-[#1A39B6]"></div>
        <input
          className="flex-1 outline-0"
          type="text"
          placeholder="Cari"
          onChange={handleChange}
        />
      </div>
      {user && (
        <img
          className="w-14 h-14 rounded-full"
          src={user.image}
          alt="FindJob"
        />
      )}
    </>
  );
};

export default NavSearch;
