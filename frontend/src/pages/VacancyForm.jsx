import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeartbeat,
  faLaptopHouse,
  faDumbbell,
  faCoffee,
  faPlane,
  faBook,
  faUsers,
  faMoneyBillWave,
  faHandshake,
  faClock,
  faCalendarCheck,
  faPiggyBank,
} from "@fortawesome/free-solid-svg-icons";

const VacancyForm = () => {
  const [step, setStep] = useState(1); // Tracks the current step of the form
  const [formData, setFormData] = useState({
    jobTitle: "",
    jobMode: "",
    jobLocation: "",
    jobType: "Full-Time",
    schedule: [],
    workingDays: "5 days a week",
    vacancies: "",
    package: "",
    perks: [],
    roleResponsibilities: "",
    qualifications: "",
    certifications: "",
    skills: "",
    experience: "",
    applicationDeadline: "",
    terms: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        [name]: checked
          ? [...prev[name], value]
          : prev[name].filter((item) => item !== value),
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  // const handleScheduleChange = (schedule) => {
  //   setFormData((prev) => {
  //     const updatedSchedule = prev.schedule.includes(schedule)
  //       ? prev.schedule.filter((item) => item !== schedule)
  //       : [...prev.schedule, schedule];
  //     return { ...prev, schedule: updatedSchedule };
  //   });
  // };

  const handlePerkChange = (perk) => {
    setFormData((prev) => {
      const updatedPerks = prev.perks.includes(perk)
        ? prev.perks.filter((item) => item !== perk)
        : [...prev.perks, perk];
      return { ...prev, perks: updatedPerks };
    });
  };

  const handleRichTextChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNext = () => setStep((prev) => prev + 1);
  const handleBack = () => setStep((prev) => prev - 1);

  const handleSaveAsDraft = () => {
    localStorage.setItem("vacancyDraft", JSON.stringify(formData));
    alert("Draft saved successfully!");
  };

  const handlePreview = () => {
    localStorage.setItem("vacancyFormData", JSON.stringify(formData));
    window.location.href = "/dashboard/preview-vacancy";
  };

  return (
    <form className="max-w-3xl mx-auto p-6 bg-card/60 backdrop-blur-md shadow-md rounded-md border border-gray-200">
      <h1 className="text-2xl text-center font-bold mb-4 border-b-2 border-yellow-400">
        Create Vacancy
      </h1>
      {step === 1 && (
        <section>
          <h2 className="underline decoration-yellow-300 decoration-4 text-xl font-bold mb-4">
            Basic Details
          </h2>
          <div className="space-y-4">
            <div>
              <label className="block font-medium">Job Title</label>
              <input
                type="text"
                name="jobTitle"
                value={formData.jobTitle}
                onChange={handleChange}
                className="w-full border bg-card rounded-md p-2"
                required
              />
            </div>
            <div>
              <label className="block font-medium">Job Mode</label>
              <select
                name="jobMode"
                value={formData.jobMode}
                onChange={handleChange}
                className="w-full border bg-card rounded-md p-2"
              >
                <option value="Not Disclosed">Not Disclosed</option>
                <option value="Remote">Remote</option>
                <option value="On-Site">On-Site</option>
                <option value="Hybrid">Hybrid</option>
              </select>
            </div>
            <div>
              <label className="block font-medium">Job Location</label>
              <input
                type="text"
                name="jobLocation"
                value={formData.jobLocation}
                onChange={handleChange}
                className="w-full border bg-card rounded-md p-2"
                required
              />
            </div>
            <div>
              <label className="block font-medium">Job Type</label>
              <select
                name="jobType"
                value={formData.jobType}
                onChange={handleChange}
                className="w-full border bg-card rounded-md p-2"
              >
                <option value="Full-Time">Full-Time</option>
                <option value="Part-Time">Part-Time</option>
                <option value="Internship">Internship</option>
              </select>
            </div>
            <div>
              <label className="block font-medium">Schedule/Shift</label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  "Day Shift",
                  "Morning Shift",
                  "Rotational Shift",
                  "Night Shift",
                  "Monday to Friday",
                  "Evening Shift",
                  "Weekend availability",
                  "Fixed Shift",
                  "US Shift",
                  "UK Shift",
                  "Weekend Only",
                  "Other",
                ].map((schedule) => (
                  <label key={schedule} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      name="schedule"
                      value={schedule}
                      checked={formData.schedule.includes(schedule)}
                      onChange={handleChange}
                    />
                    <span>{schedule}</span>
                  </label>
                ))}
              </div>
            </div>
            <div>
              <label className="block font-medium">Number of Vacancies</label>
              <input
                type="number"
                name="vacancies"
                value={formData.vacancies}
                onChange={handleChange}
                className="w-full border bg-card rounded-md p-2"
                required
              />
            </div>
            <div>
              <label className="block font-medium">Package</label>
              <textarea
                name="package"
                value={formData.package}
                onChange={handleChange}
                className="w-full border bg-card rounded-md p-2"
                rows="3"
                placeholder="CTC/Basic/Fixed/Bonus/Increments"
              />
            </div>
            <div>
              <label className="block text-lg font-medium">Perks</label>
              <div className="flex flex-wrap gap-3 mt-2">
                {[
                  {
                    id: "Health Insurance",
                    icon: faHeartbeat,
                    label: "Health Insurance",
                  },
                  {
                    id: "Work From Home",
                    icon: faLaptopHouse,
                    label: "Work From Home",
                  },
                  {
                    id: "Gym Membership",
                    icon: faDumbbell,
                    label: "Gym Membership",
                  },
                  { id: "Free Coffee", icon: faCoffee, label: "Free Coffee" },
                  {
                    id: "Travel Allowance",
                    icon: faPlane,
                    label: "Travel Allowance",
                  },
                  {
                    id: "Learning Opportunities",
                    icon: faBook,
                    label: "Learning Opportunities",
                  },
                  { id: "Team Outings", icon: faUsers, label: "Team Outings" },
                  {
                    id: "Performance Bonus",
                    icon: faMoneyBillWave,
                    label: "Performance Bonus",
                  },
                  {
                    id: "Stock Options",
                    icon: faHandshake,
                    label: "Stock Options",
                  },
                  {
                    id: "Paid Time Off",
                    icon: faCalendarCheck,
                    label: "Paid Time Off",
                  },
                  {
                    id: "Flexible Hours",
                    icon: faClock,
                    label: "Flexible Hours",
                  },
                  {
                    id: "Retirement Plan",
                    icon: faPiggyBank,
                    label: "Retirement Plan",
                  },
                ].map(({ id, icon, label }) => (
                  <div
                    key={id}
                    className={`cursor-pointer p-3 rounded-lg border-2 transition-all duration-300 ${
                      formData.perks.includes(id)
                        ? "bg-blue-600 text-white border-blue-600 hover:scale-105"
                        : "bg-card hover:scale-105"
                    }`}
                    onClick={() => handlePerkChange(id)}
                  >
                    <FontAwesomeIcon icon={icon} size="lg" />
                    <span className="block text-center text-xs mt-2">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <button
              type="button"
              onClick={handleNext}
              className="bg-blue-600 text-white flex px-4 py-2 rounded-md mt-4"
            >
              Next
            </button>
          </div>
        </section>
      )}

      {step === 2 && (
        <section>
          <h2 className="underline decoration-yellow-300 decoration-4 text-xl font-bold mb-4">
            Job Description
          </h2>
          <div className="space-y-4">
            <div>
              <label className="block font-medium">
                Role & Responsibilities
              </label>
              <ReactQuill
                theme="snow"
                value={formData.roleResponsibilities}
                onChange={(value) =>
                  handleRichTextChange("roleResponsibilities", value)
                }
                placeholder="Add Role & Responsibilities"
              />
            </div>
            <div>
              <label className="block font-medium">
                Qualifications Required
              </label>
              <ReactQuill
                theme="snow"
                value={formData.qualifications}
                onChange={(value) =>
                  handleRichTextChange("qualifications", value)
                }
                placeholder="Add Required Qualifications"
              />
            </div>
            <div>
              <label className="block font-medium">Relevent Experiences</label>
              <ReactQuill
                theme="snow"
                value={formData.experience}
                onChange={(value) => handleRichTextChange("experience", value)}
                placeholder="Add Required Experience"
              />
            </div>

            <div>
              <label className="block font-medium">Required Skills</label>
              <ReactQuill
                theme="snow"
                value={formData.skills}
                onChange={(value) => handleRichTextChange("skills", value)}
                placeholder="Add Required Skills"
              />
            </div>
            <div>
              <label className="block font-medium">Certifications</label>
              <ReactQuill
                theme="snow"
                value={formData.certifications}
                onChange={(value) =>
                  handleRichTextChange("certifications", value)
                }
                placeholder="Add Required Certifications"
              />
            </div>
            <div>
              <label className="block font-medium">Application Deadline</label>
              <input
                type="date"
                name="applicationDeadline"
                value={formData.applicationDeadline}
                onChange={handleChange}
                className="w-full border bg-card rounded-md p-2"
                required
              />
            </div>
            <div>
              <label className="block font-medium">Terms & Conditions</label>
              <ReactQuill
                theme="snow"
                value={formData.terms}
                onChange={(value) => handleRichTextChange("terms", value)}
              />
            </div>
          </div>
          <div className="flex  justify-center gap-4 mt-4">
            <button
              type="button"
              onClick={handleBack}
              className="bg-gray-600 text-white px-4 py-2 rounded-md"
            >
              Back
            </button>
            <button
              type="button" // Correct type for a button with an onClick handler
              className="bg-cyan-700 text-white px-4 py-2 rounded-md"
              onClick={handleSaveAsDraft}
            >
              Save as Draft
            </button>
            <button
              type="button" // Correct type for a button with an onClick handler
              className="bg-yellow-600 text-white px-4 py-2 rounded-md"
              onClick={handlePreview}
            >
              Preview
            </button>
          </div>
        </section>
      )}
    </form>
  );
};

export default VacancyForm;
