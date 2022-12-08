export const searching = (company, searchCompany, search, bla) => {
  let res = [];
  if (bla === "search")
    res = company.filter((company) =>
      company.name.toLocaleLowerCase().includes(search)
    );
  else if (bla === "job") {
    if (search.isCheck) {
      res = company.filter((company) =>
        company.job.toLocaleLowerCase().includes(search.job)
      );
    } else {
      res = searchCompany.filter(
        (searchCompany) =>
          !searchCompany.job.toLocaleLowerCase().includes(search.job)
      );
    }
  } else {
    res = company;
  }

  return res;
};
