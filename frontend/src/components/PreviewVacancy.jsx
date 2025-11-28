import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const PreviewVacancy = () => {
  const [formData, setFormData] = useState(null);
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const data = localStorage.getItem("vacancyFormData");
    if (data) {
      setFormData(JSON.parse(data));
    }
  }, []);

  if (!formData) {
    return <div>No vacancy data found. Please fill out the form first.</div>;
  }

  const handleEdit = () => {
    navigate("/dashboard/vacancy-form", { state: formData });
  };

  const handlePublish = () => {
    setIsModalOpen(true);
  };

  const confirmPublish = () => {
    setIsModalOpen(false);
    alert("Vacancy successfully published!");
  };

  return (
    <div className="max-w-auto mx-auto p-6 bg-card/50 backdrop-blur-md shadow-md rounded-md border">
      {/* Header Section */}
      <div className="flex items-center justify-between border-b pb-4 mb-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground/90">
            Company: XYZ Ltd.
          </h1>
          <p className="text-xl font-semibold text-card-foreground/80">
            Job Title: {formData.jobTitle}
          </p>
          <p className="text-foreground text-sm">Vacancy ID: #12345</p>
          <p className="text-foreground text-sm">
            Posted on: {new Date().toLocaleDateString()}
          </p>
        </div>
        <img
          src="/logo.png"
          alt="Company Logo"
          className="h-24 w-24 object-contain"
        />
      </div>
      {/* Job Details */}
      <div className="mb-6 space-y-2">
        <p>
          <strong>Application Deadline:</strong> {formData.applicationDeadline}
        </p>
        <p>
          <strong>Job Mode:</strong> {formData.jobMode}
        </p>
        <p>
          <strong>Location:</strong> {formData.jobLocation}
        </p>
        <p>
          <strong>Job Type:</strong> {formData.jobType}
        </p>
        <p>
          <strong>Schedule:</strong> {formData.schedule?.join(", ")}
        </p>
        <p>
          <strong>Vacancies:</strong> {formData.vacancies}
        </p>
        <p>
          <strong>Salary Package:</strong> {formData.package}
        </p>
        <p>
          <strong>Perks:</strong> {formData.perks?.join(", ")}
        </p>
      </div>

      {/* Job Description */}
      <h2 className="text-2xl font-semibold border-b pb-2 mb-2">
        Job Description
      </h2>

      {/* Role and Responsibilities */}
      <div className="prose leading-none">
        <h2 className="text-lg font-semibold">Roles and Responsibilities:</h2>
        <ReactQuill
          value={formData.roleResponsibilities}
          readOnly
          theme="bubble"
          className="-m-2"
        />
      </div>

      {/* Qualifications */}
      <div className="prose leading-none">
        <h2 className="text-lg font-semibold">Qualifications Required:</h2>
        <ReactQuill
          value={formData.qualifications}
          readOnly
          theme="bubble"
          className="-m-2"
        />
      </div>

      {/* Experiences */}
      <div className="prose leading-node">
        <h2 className="text-lg font-semibold">Relevent Experience:</h2>
        <ReactQuill
          value={formData.experience}
          readOnly
          theme="bubble"
          className="-m-2"
        />
      </div>

      {/* Skills*/}
      <div className="prose leading-none">
        <h2 className="text-lg font-semibold">Required Skills:</h2>
        <ReactQuill
          value={formData.skills}
          readOnly
          theme="bubble"
          className="-m-2"
        />
      </div>

      {/* Certifications */}
      <div className="prose leading-none">
        <h2 className="text-lg font-semibold">Certifications:</h2>
        <ReactQuill
          value={formData.certifications}
          readOnly
          theme="bubble"
          className="-m-2"
        />
      </div>

      {/* Terms & Conditions */}
      <div className="prose leading-none">
        <h2 className="text-lg font-semibold">Terms & Conditions</h2>
        <ReactQuill
          value={formData.terms}
          readOnly
          theme="bubble"
          className="-m-2"
        />
      </div>

      {/* Actions */}
      <div className="flex justify-center gap-4 mt-6 border-t pt-4">
        <button
          className="bg-gray-600 text-white px-4 py-2 rounded-md"
          onClick={handleEdit}
        >
          Edit Vacancy
        </button>
        <button
          className="bg-green-600 text-white px-4 py-2 rounded-md"
          onClick={handlePublish}
        >
          Publish Vacancy
        </button>
      </div>

      {/* Confirmation Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-md shadow-md text-center">
            <p className="text-lg font-semibold">
              Are you sure you want to publish the vacancy?
            </p>
            <div className="flex justify-center gap-4 mt-4">
              <button
                className="bg-red-600 text-white px-4 py-2 rounded-md"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
              <button
                className="bg-blue-600 text-white px-4 py-2 rounded-md"
                onClick={confirmPublish}
              >
                Confirm Publish
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PreviewVacancy;
