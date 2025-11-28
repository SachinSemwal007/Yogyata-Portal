import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const PreviewCandidate = () => {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const data = localStorage.getItem("candidateFormData");
    if (data) {
      console.log("Fetched from localStorage:", JSON.parse(data)); // Debugging log
      setFormData(JSON.parse(data));
    }
  }, []);

  const handleEdit = () => {
    navigate("/candidate-form", { state: formData });
  };

  const handleSubmit = () => {
    setIsModalOpen(true);
  };

  const confirmSubmit = () => {
    setIsModalOpen(false);
    alert("Application is submitted successfully!");
  };
  return (
    <div className="max-w-4xl mx-auto p-6 drop-shadow-md rounded-md border bg-card">
      {/* Header Section */}
      <div className="flex items-center justify-between border-b pb-4 mb-4">
        <div>
          <h1 className="text-3xl font-bold">Company: XYZ Ltd.</h1>
          <p className="text-foreground text-sm">Vacancy ID: #12345</p>
          <p className="text-foreground text-sm">Application ID: #67890</p>
          <p className="text-foreground text-sm">
            Applied Date: {new Date().toLocaleDateString()}
          </p>
        </div>
        <img
          src="/logo.png"
          alt="Company Logo"
          className="h-24 w-24 object-contain"
        />
      </div>

      {/* Personal Details Section (Resume Style) */}
      <section className="mb-6">
        <h3 className="text-2xl font-semibold border-b-4 border-yellow-400 pb-2 mb-4">
          Personal Details
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 space-y-2 border p-4 rounded-md bg-card/20 shadow-md">
          {/* Full Name */}
          <div className="flex">
            <p className="w-40 font-semibold text-foreground/80">Full Name</p>
            <p className="text-lg">
              {formData?.personalDetails?.fullName || "N/A"}
            </p>
          </div>
          {/* Date of Birth */}
          <div className="flex">
            <p className="w-40 font-semibold text-foreground/80">
              Date of Birth
            </p>
            <p className="text-lg">{formData?.personalDetails?.dob || "N/A"}</p>
          </div>
          {/* Gender */}
          <div className="flex">
            <p className="w-40 font-semibold text-foreground/80">Gender</p>
            <p className="text-lg">
              {formData?.personalDetails?.gender === "M"
                ? "Male"
                : formData?.personalDetails?.gender === "F"
                ? "Female"
                : "Other"}
            </p>
          </div>
          {/* Mobile Number */}
          <div className="flex">
            <p className="w-40 font-semibold text-foreground/80">
              Mobile Number
            </p>
            <p className="text-lg">
              {formData?.personalDetails?.mobileNumber || "N/A"}
            </p>
          </div>
          {/* Email ID */}
          <div className="flex">
            <p className="w-40 font-semibold text-foreground/80">Email ID</p>
            <p className="text-lg">
              {formData?.personalDetails?.email || "N/A"}
            </p>
          </div>
          {/* Address (Full Width) */}
          <div className="flex sm:col-span-2">
            <p className="w-40 font-semibold text-foreground/80">Address</p>
            <p className="text-lg">
              {formData?.personalDetails?.address || "N/A"}
            </p>
          </div>
        </div>
      </section>

      {/* Qualifications Section */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold border-b-4 border-yellow-400 pb-2 mb-4">
          Qualifications
        </h3>

        {formData?.qualifications?.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-border shadow-md rounded-md">
              <thead className="bg-secondary/20">
                <tr className="border-b border-border text-left">
                  <th className="p-2 border-r">S.N.</th>
                  <th className="p-2 border-r">Qualification</th>
                  <th className="p-2 border-r">Institute</th>
                  <th className="p-2 border-r">Course</th>
                  <th className="p-2 border-r">Stream</th>
                  <th className="p-2 border-r">Start Date</th>
                  <th className="p-2 border-r">End Date</th>
                  <th className="p-2 border-r">Board/University</th>
                  <th className="p-2">Marks (%)</th>
                </tr>
              </thead>
              <tbody>
                {formData.qualifications.map((qual, index) => (
                  <tr key={index} className="border-b border-border">
                    <td className="p-2 border-r">{index + 1}</td>
                    <td className="p-2 border-r">
                      {qual.qualification || "N/A"}
                    </td>
                    <td className="p-2 border-r">{qual.institute || "N/A"}</td>
                    <td className="p-2 border-r">{qual.course || "N/A"}</td>
                    <td className="p-2 border-r">{qual.stream || "N/A"}</td>
                    <td className="p-2 border-r">
                      {qual.startDate
                        ? new Date(qual.startDate).toLocaleDateString()
                        : "N/A"}
                    </td>
                    <td className="p-2 border-r">
                      {qual.endDate
                        ? new Date(qual.endDate).toLocaleDateString()
                        : "N/A"}
                    </td>
                    <td className="p-2 border-r">
                      {qual.boardOrUniversity || "N/A"}
                    </td>
                    <td className="p-2">{qual.marks || "N/A"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-muted-foreground">No qualifications added.</p>
        )}
      </section>

      {/* Work Experience Section */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold border-b-4 border-yellow-400 pb-2 mb-4">
          Work Experience
        </h3>

        {formData?.experiences?.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-border shadow-md rounded-md">
              <thead className="bg-card-foreground/20">
                <tr className="border-b border-border text-left">
                  <th className="p-2 border-r">S.N.</th>
                  <th className="p-2 border-r">Company Name</th>
                  <th className="p-2 border-r">Designation</th>
                  <th className="p-2 border-r">Start Date</th>
                  <th className="p-2 border-r">End Date</th>
                  <th className="p-2 border-r">Currently Working</th>
                  <th className="p-2">Responsibilities</th>
                </tr>
              </thead>
              <tbody>
                {formData.experiences.map((exp, index) => (
                  <tr key={index} className="border-b border-border">
                    <td className="p-2 border-r">{index + 1}</td>
                    <td className="p-2 border-r">{exp.companyName || "N/A"}</td>
                    <td className="p-2 border-r">{exp.designation || "N/A"}</td>
                    <td className="p-2 border-r">
                      {exp.startDate
                        ? new Date(exp.startDate).toLocaleDateString()
                        : "N/A"}
                    </td>
                    <td className="p-2 border-r">
                      {exp.currentlyWorking
                        ? "Present"
                        : exp.endDate
                        ? new Date(exp.endDate).toLocaleDateString()
                        : "N/A"}
                    </td>
                    <td className="p-2 border-r">
                      {exp.currentlyWorking ? "Yes" : "No"}
                    </td>
                    <td className="p-2">{exp.responsibilities || "N/A"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-muted-foreground">No work experience added.</p>
        )}
      </section>

      {/* Skills Preview Section */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold border-b-4 border-yellow-400 pb-2 mb-4">
          Skills
        </h3>

        {formData?.technicalSkills?.length > 0 ||
        formData?.softSkills?.length > 0 ? (
          <div className="space-y-2 border p-2 rounded-md bg-card/20 shadow-md">
            {/* Technical Skills */}
            {formData?.technicalSkills?.length > 0 && (
              <div>
                <h4 className="text-lg font-medium mb-2 text-blue-600">
                  Technical Skills
                </h4>
                <div className="flex flex-wrap gap-2">
                  {formData.technicalSkills.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full shadow-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Soft Skills */}
            {formData?.softSkills?.length > 0 && (
              <div>
                <h4 className="text-lg font-medium mb-2 text-green-600">
                  Soft Skills
                </h4>
                <div className="flex flex-wrap gap-2">
                  {formData.softSkills.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full shadow-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : (
          <p className="text-muted-foreground">No skills added.</p>
        )}
      </section>

      {/* Certifications Preview Section */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold border-b-4 border-yellow-400 pb-2 mb-4">
          Certifications
        </h3>

        {formData?.certifications?.length > 0 ? (
          <div className="space-y-2 border p-2 rounded-md bg-card/20 shadow-md">
            {formData.certifications.map((cert, index) => (
              <div key={index} className="flex justify-between">
                <span className="font-medium">{index + 1}.</span>
                <span className="flex-1 px-2">
                  {cert.title || "Untitled Certification"}
                </span>
                <span className="flex-1 px-2">{cert.issuedBy || "N/A"}</span>
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    View
                  </a>
                )}
              </div>
            ))}
          </div>
        ) : (
          <p className="text-muted-foreground">No certifications added.</p>
        )}
      </section>

      {/* Projects Preview Section */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold border-b-4 border-yellow-400 pb-2 mb-4">
          Projects
        </h3>

        {formData?.projects?.length > 0 ? (
          <div className="space-y-2 border p-2 rounded-md bg-card/20 shadow-md">
            {formData.projects.map((proj, index) => (
              <div key={index} className="flex justify-between">
                <span className="font-medium">{index + 1}.</span>
                <span className="flex-1 px-2">
                  {proj.projectTitle || "Untitled Project"}
                </span>
                <span className="flex-1 px-2">
                  {proj.technologiesUsed || "Technologies N/A"}
                </span>
                {proj.projectLink && (
                  <a
                    href={proj.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    View
                  </a>
                )}
              </div>
            ))}
          </div>
        ) : (
          <p className="text-muted-foreground">No projects added.</p>
        )}
      </section>

      {/* Awards, Honors & Achievements Preview Section */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold border-b-4 border-yellow-400 pb-2 mb-4">
          Awards, Honors & Achievements
        </h3>
        {formData?.awards?.length > 0 ? (
          <div className="space-y-2 border p-2 rounded-md bg-card/20 shadow-md">
            {formData.awards.map((award, index) => (
              <div key={index} className="flex justify-between">
                <span className="font-medium">{index + 1}.</span>
                <span className="flex-1 px-2">
                  {award.name || "Unnamed Award"}
                </span>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-muted-foreground">No awards or honors added.</p>
        )}
      </section>

      {/* Links Preview Section */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold border-b-4 border-yellow-400 pb-2 mb-4">
          Links
        </h3>
        {formData?.links?.length > 0 ? (
          <div className="space-y-2 border p-2 rounded-md bg-card/20 shadow-md">
            {formData.links.map((link, index) => (
              <div key={index} className="flex justify-between">
                <span className="font-medium">{index + 1}.</span>
                <span className="flex-1 px-2">
                  {link.type || "Unknown Type"}
                </span>
                {link.url && (
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    {link.url}
                  </a>
                )}
              </div>
            ))}
          </div>
        ) : (
          <p className="text-muted-foreground">No links added.</p>
        )}
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold border-b-4 border-yellow-400 pb-2 mb-4">
          Uploaded Documents
        </h3>
        <div className="flex justify-between items-center gap-6 border p-2 rounded-md bg-card/20 shadow-md">
          <div className="w-full border h-full rounded py-2 px-4">
            {formData.photo ? (
              <div className="flex items-center space-x-4">
                <span className="font-medium">Photo:</span>
                <img
                  src={formData.photo}
                  alt="Candidate Photo"
                  className="h-32 w-32 border rounded-sm"
                />
              </div>
            ) : (
              <p className="text-muted-foreground">No photo uploaded.</p>
            )}
          </div>
          <div className="w-full border h-full rounded py-2 px-4">
            {formData.resume ? (
              <div className="flex items-center space-x-4">
                <span className="font-medium">Resume:</span>
                <a
                  href={formData.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  View Resume
                </a>
              </div>
            ) : (
              <p className="text-muted-foreground">No resume uploaded.</p>
            )}
          </div>
        </div>
      </section>

      {/* Footer Actions */}
      <div className="flex justify-center gap-4 mt-6 border-t pt-4">
        <button
          className="bg-gray-600 text-white px-4 py-2 rounded-md"
          onClick={handleEdit}
        >
          Edit Application
        </button>
        <button
          className="bg-green-600 text-white px-4 py-2 rounded-md"
          onClick={handleSubmit}
        >
          Submit Application
        </button>
      </div>
      {/* Confirmation Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-md shadow-md text-center">
            <p className="text-lg font-semibold">
              Are you sure you want to submit the Application?
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
                onClick={confirmSubmit}
              >
                Final Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PreviewCandidate;
