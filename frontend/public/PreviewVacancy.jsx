import React from 'react';

const PreviewVacancy = ({ formData, onEdit }) => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-gray-50 shadow-lg rounded-md space-y-6">
      <h1 className="text-2xl text-center font-bold mb-4">Preview Vacancy</h1>
      <div className="space-y-4">
        <div>
          <h2 className="font-bold text-lg">Job Title:</h2>
          <p>{formData.jobTitle}</p>
        </div>
        <div>
          <h2 className="font-bold text-lg">Job Mode:</h2>
          <p>{formData.jobMode}</p>
        </div>
        <div>
          <h2 className="font-bold text-lg">Job Location:</h2>
          <p>{formData.jobLocation}</p>
        </div>
        {/* Add other fields here */}
      </div>
      <button
        onClick={onEdit}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Edit
      </button>
    </div>
  );
};

export default PreviewVacancy;
