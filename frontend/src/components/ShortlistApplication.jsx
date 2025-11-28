import { useState, useEffect } from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { vacancies } from "../assets/assets";
import { Button } from "./ui/button";
import VacancyDetailsCard from "./VacancyDetailsCard";

const ShortlistApplication = () => {
  const [shortVacancyId, setShortVacancyId] = useState("");
  const [matchedVacancy, setMatchedVacancy] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Find matching vacancy by ID
    const matchedVacancyId = vacancies.find(
      (item) => item._id.toLowerCase() === shortVacancyId.toLowerCase()
    );

    if (matchedVacancyId) {
      setMatchedVacancy(matchedVacancyId); // Set matched by ID
    } else {
      alert("Vacancy ID does not match!");
    }
  };

  useEffect(() => {
    console.log("Matched Vacancy Updated:", matchedVacancy);
  }, [matchedVacancy]); // Logs when matchedVacancy is updated

  return (
    <section className="flex flex-col gap-8">
      <h1 className="text-2xl font-semibold tracking-wide">
        Shortlist Application
      </h1>
      <div className="max-w-lg bg-card/60 backdrop-blur-md border p-6 rounded-lg">
        <form onSubmit={handleSubmit} className="flex flex-col gap-8">
          <Label>Enter Vacancy ID</Label>
          <Input
            type="text"
            className="bg-background"
            placeholder="Enter Vacancy ID"
            value={shortVacancyId}
            onChange={(e) => setShortVacancyId(e.target.value)}
            required
          />
          <Button type="submit" className="text-white">
            Submit
          </Button>
        </form>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 mb-8">
        {matchedVacancy && <VacancyDetailsCard {...matchedVacancy} />}
      </div>
    </section>
  );
};

export default ShortlistApplication;
