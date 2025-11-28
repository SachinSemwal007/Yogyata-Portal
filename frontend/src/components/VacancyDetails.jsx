import { useState, useEffect } from "react";
import { vacancies } from "../assets/assets";
import VacancyDetailsCard from "./VacancyDetailsCard";

const VacancyDetails = () => {
  const [view, setView] = useState("all");
  const [filteredVacancies, setFilteredVacancies] = useState(vacancies);

  function filterVacancies() {
    if (view === "all") {
      setFilteredVacancies(vacancies);
    } else {
      setFilteredVacancies(vacancies.filter((item) => item.status === view));
    }
  }

  useEffect(() => {
    filterVacancies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [view]);

  return (
    <section className="w-full h-full">
      <h1 className="text-2xl font-semibold tracking-wide mb-6">
        List of Vacancies
      </h1>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-3">
          <p className="text-foreground/70 font-semibold">View</p>
          <div className="flex flex-col sm:flex-row justify-start gap-2 sm:gap-6">
            <div className="flex justify-start items-center gap-2">
              <input
                onChange={(e) => setView(e.target.value)}
                type="radio"
                name="vacancy-view"
                value="all"
                defaultChecked
              />
              <span>All</span>
            </div>
            <div className="flex justify-start items-center gap-2">
              <input
                onChange={(e) => setView(e.target.value)}
                type="radio"
                name="vacancy-view"
                value="ongoing"
              />
              <span>Ongoing</span>
            </div>
            <div className="flex justify-start items-center gap-2">
              <input
                onChange={(e) => setView(e.target.value)}
                type="radio"
                name="vacancy-view"
                value="draft"
              />
              <span>Saved as Draft</span>
            </div>
            <div className="flex justify-start items-center gap-2">
              <input
                onChange={(e) => setView(e.target.value)}
                type="radio"
                name="vacancy-view"
                value="expired"
              />
              <span>Expired</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 xmd:grid-cols-2 xl:grid-cols-3 justify-center items-center gap-4 w-full">
          {filteredVacancies.length > 0 ? (
            filteredVacancies.map((vacancy, i) => (
              <VacancyDetailsCard {...vacancy} key={i} />
            ))
          ) : (
            <p className="text-gray-500">No saved draft vacancies found.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default VacancyDetails;
