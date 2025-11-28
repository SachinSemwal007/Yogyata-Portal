import { useState } from "react";
import { FaTrashAlt, FaPlus } from "react-icons/fa"; // Importing icons
import { FaPhotoVideo, FaFilePdf } from "react-icons/fa";

const CandidateForm = () => {
  const [personalDetails, setPersonalDetails] = useState({
    fullName: "",
    dob: "",
    gender: "",
    mobileNumber: "",
    email: "",
    address: "",
  });
  const [qualifications, setQualifications] = useState([
    {
      id: 1,
      qualification: "PG",
      institute: "",
      course: "",
      stream: "",
      startDate: "",
      endDate: "",
      boardOrUniversity: "",
      marks: "",
    },
  ]);

  const addQualificationField = () => {
    setQualifications([
      ...qualifications,
      {
        id: qualifications.length + 1,
        qualification: "PG",
        institute: "",
        course: "",
        stream: "",
        startDate: "",
        endDate: "",
        boardOrUniversity: "",
        marks: "",
      },
    ]);
  };

  const removeQualificationField = (id) => {
    setQualifications(qualifications.filter((qual) => qual.id !== id));
  };

  const handleQualificationChange = (e, id, field) => {
    const updatedQualifications = qualifications.map((qual) =>
      qual.id === id ? { ...qual, [field]: e.target.value } : qual
    );
    setQualifications(updatedQualifications);
  };

  const [experiences, setExperiences] = useState([]);

  const addExperienceField = () => {
    setExperiences([
      ...experiences,
      {
        id: experiences.length + 1,
        companyName: "",
        designation: "",
        startDate: "",
        endDate: "",
        currentlyWorking: false, // New field for "Currently Working"
        responsibilities: "",
      },
    ]);
  };

  const removeExperienceField = (id) => {
    setExperiences(experiences.filter((exp) => exp.id !== id));
  };

  const handleExperienceChange = (e, id, field) => {
    const updatedExperiences = experiences.map((exp) =>
      exp.id === id ? { ...exp, [field]: e.target.value } : exp
    );
    setExperiences(updatedExperiences);
  };

  const toggleCurrentlyWorking = (id) => {
    setExperiences(
      experiences.map((exp) =>
        exp.id === id
          ? { ...exp, currentlyWorking: !exp.currentlyWorking, endDate: "" }
          : exp
      )
    );
  };
  const [technicalSkills, setTechnicalSkills] = useState([]);
  const [softSkills, setsoftSkills] = useState([]);
  const handleSkillAdd = (skill, type) => {
    if (skill.trim()) {
      if (type === "Technical") {
        setTechnicalSkills([...technicalSkills, skill]);
      } else {
        setsoftSkills([...softSkills, skill]);
      }
    }
  };

  const handleSkillRemove = (skill, type) => {
    if (type === "Technical") {
      setTechnicalSkills(technicalSkills.filter((item) => item !== skill));
    } else {
      setsoftSkills(softSkills.filter((item) => item !== skill));
    }
  };
  const [certifications, setCertifications] = useState([]);

  const addCertificationField = () => {
    setCertifications([
      ...certifications,
      {
        id: certifications.length + 1,
        title: "",
        issuedBy: "",
        link: "",
      },
    ]);
  };

  const removeCertificationField = (id) => {
    setCertifications(certifications.filter((cert) => cert.id !== id));
  };

  const handleCertificationChange = (e, id, field) => {
    const updatedCertifications = certifications.map((cert) =>
      cert.id === id ? { ...cert, [field]: e.target.value } : cert
    );
    setCertifications(updatedCertifications);
  };

  const [projects, setProjects] = useState([]);
  const addProjectField = () => {
    setProjects([
      ...projects,
      {
        id: projects.length + 1,
        projectTitle: "",
        technologiesUsed: "",
        projectLink: "",
      },
    ]);
  };

  const removeProjectField = (id) => {
    setProjects(projects.filter((proj) => proj.id !== id));
  };

  const handleProjectChange = (e, id, field) => {
    const updatedProjects = projects.map((proj) =>
      proj.id === id ? { ...proj, [field]: e.target.value } : proj
    );
    setProjects(updatedProjects);
  };
  const [awards, setAwards] = useState([]);
  const handleAwardChange = (index, field, value) => {
    setAwards((prevAwards) =>
      prevAwards.map((award, i) =>
        i === index ? { ...award, [field]: value } : award
      )
    );
  };

  const [links, setLinks] = useState([]);
  const handleLinkChange = (index, field, value) => {
    setLinks((prevLinks) =>
      prevLinks.map((link, i) =>
        i === index ? { ...link, [field]: value } : link
      )
    );
  };

  const [photo, setPhoto] = useState(null);
  const [resume, setResume] = useState(null);
  const [photoError, setPhotoError] = useState("");
  const [resumeError, setResumeError] = useState("");
  // Handle file selection for photo and resume
  const handleFileChange = (e, type) => {
    const file = e.target.files[0];
    const maxPhotoSize = 200000; // 200KB
    const maxResumeSize = 2000000; // 2MB

    if (type === "photo") {
      if (
        file &&
        file.size <= maxPhotoSize &&
        (file.type === "image/jpeg" || file.type === "image/png")
      ) {
        setPhoto(file);
        setPhotoError("");
      } else {
        setPhotoError("Photo should be PNG/JPG and not more than 200KB.");
        setPhoto(null);
      }
    } else if (type === "resume") {
      if (file && file.size <= maxResumeSize) {
        setResume(file);
        setResumeError("");
      } else {
        setResumeError("Resume should not be more than 2MB.");
        setResume(null);
      }
    }
  };

  // Handle input changes for personal details
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPersonalDetails({ ...personalDetails, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted Successfully!");
  };

  const addField = (setter, items) =>
    setter([...items, { id: items.length + 1 }]);
  const removeField = (setter, items, id) =>
    setter(items.filter((item) => item.id !== id));

  const fileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const handlePreview = async () => {
    const formData = {
      personalDetails,
      qualifications,
      experiences,
      technicalSkills,
      softSkills,
      certifications,
      projects,
      awards,
      links,
      photo: photo ? await fileToBase64(photo) : null, // Convert photo to Base64
      resume: resume ? await fileToBase64(resume) : null, // Convert resume to Base64
    };

    try {
      localStorage.setItem("candidateFormData", JSON.stringify(formData));
      window.location.href = "/preview-candidate";
    } catch (error) {
      console.error("Error saving to localStorage:", error);
    }
  };

  return (
    <div className="mb-14 bg-customBlue rounded-lg py-16 px-4">
      <form
        onSubmit={handleSubmit}
        className="p-6 max-w-4xl mx-auto bg-background drop-shadow-lg flex flex-col gap-4 rounded-md"
      >
        <h1 className="text-xl sm:text-xl md:text-2xl font-bold text-center border-b-2 border-yellow-400 pb-4">
          Candidate Application Form
        </h1>
        {/* Personal Details */}
        <section className="md:p-4 mt-4 flex flex-col gap-4">
          <h2 className="text-xl md:text-2xl font-semibold border-b-yellow-400 border-b-4 mb-4 w-fit">
            Personal Details
          </h2>
          <div className="space-y-4 border bg-card p-6 rounded-md shadow-md">
            {/* Grid Layout for Inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center items-center">
              {/* Full Name and Date of Birth */}
              {[
                {
                  label: "Full Name",
                  type: "text",
                  name: "fullName",
                  required: true,
                },
                {
                  label: "Date of Birth",
                  type: "date",
                  name: "dob",
                  required: true,
                },
              ].map(({ label, type, name, required }, idx) => (
                <div key={idx} className="relative mt-4">
                  <label
                    htmlFor={name}
                    className="absolute -top-3 left-2 px-1 bg-card text-sm"
                  >
                    {label}{" "}
                    {required && <span className="text-red-500">*</span>}
                  </label>
                  <input
                    id={name}
                    name={name}
                    type={type}
                    value={personalDetails[name]}
                    onChange={handleChange}
                    className="w-full border rounded-md bg-card p-2"
                    required={required}
                  />
                </div>
              ))}
              {/* Gender Selection */}
              <div className="mt-4">
                <label className="block mb-1 text-sm">
                  Gender <span className="text-red-500">*</span>
                </label>
                <div className="flex items-center space-x-4">
                  {["M", "F", "T"].map((gender) => (
                    <label key={gender} className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="gender"
                        value={gender}
                        checked={personalDetails.gender === gender}
                        onChange={handleChange}
                        className="form-radio focus:ring focus:ring-blue-300"
                        required
                      />
                      <span>
                        {gender === "M"
                          ? "Male"
                          : gender === "F"
                          ? "Female"
                          : "Other"}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
            {/* Second Row of Inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {/* Mobile Number and Email ID */}
              {[
                {
                  label: "Mobile Number",
                  type: "tel",
                  name: "mobileNumber",
                  required: true,
                },
                {
                  label: "Email ID",
                  type: "email",
                  name: "email",
                  required: true,
                },
              ].map(({ label, type, name, required }, idx) => (
                <div key={idx} className="relative pb-4">
                  <label
                    htmlFor={name}
                    className="absolute -top-3 left-2 px-1 bg-card text-sm"
                  >
                    {label}{" "}
                    {required && <span className="text-red-500">*</span>}
                  </label>
                  <input
                    id={name}
                    name={name}
                    type={type}
                    value={personalDetails[name]}
                    onChange={handleChange}
                    className="w-full border bg-card rounded-md p-2"
                    required={required}
                  />
                </div>
              ))}
            </div>
            {/* Address Input */}
            <div className="relative">
              <label
                htmlFor="address"
                className="absolute -top-3 left-2 bg-card px-1 text-sm"
              >
                Address <span className="text-red-500">*</span>
              </label>
              <textarea
                id="address"
                name="address"
                value={personalDetails.address}
                onChange={handleChange}
                className="w-full border bg-card rounded-md p-2"
                required
              ></textarea>
            </div>
          </div>
        </section>

        {/* Qualifications */}
        <section className="md:p-4">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            Qualifications
          </h2>
          <div className="space-y-4 border p-4 rounded-md bg-card shadow-md">
            {qualifications.map((qual, index) => (
              <div
                key={qual.id}
                className="space-y-4 border p-4 rounded-md bg-card shadow-md mt-6 relative"
              >
                {/* Select Qualification and School/College/Institute Name in Same Row */}
                <div className="flex flex-wrap gap-4">
                  <div className="relative flex flex-1 min-w-[200px]">
                    <label className="absolute -top-3 left-2 bg-card px-1 text-sm">
                      Select Qualification{" "}
                      <span
                        className="cursor-pointer ml-1"
                        title="Select your highest qualification first"
                      >
                        <i className="fa fa-info-circle" />
                      </span>
                    </label>
                    <select
                      className="w-full border bg-card rounded-md p-2"
                      value={qual.qualification}
                      onChange={(e) =>
                        handleQualificationChange(e, qual.id, "qualification")
                      }
                    >
                      <option value="PG">PG</option>
                      <option value="UG">UG</option>
                      <option value="10+2">10+2</option>
                      <option value="10">10</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {/* Show Enter Qualification field only when "Other" is selected */}
                  {qual.qualification === "Other" && (
                    <div className="relative flex-1 min-w-[200px]">
                      <label className="absolute -top-3 left-2 bg-card px-1 text-sm">
                        Enter Qualification
                      </label>
                      <input
                        type="text"
                        className="w-full border bg-card rounded-md p-2"
                        onChange={(e) =>
                          handleQualificationChange(
                            e,
                            qual.id,
                            "otherQualification"
                          )
                        }
                      />
                    </div>
                  )}
                </div>

                {/* School/College/Institute Name */}
                <div className="relative mt-4 min-w-[200px]">
                  <label className="absolute -top-3 left-2 bg-card px-1 text-sm">
                    School/College/Institute Name
                  </label>
                  <input
                    type="text"
                    className="w-full border bg-card rounded-md p-2"
                    value={qual.institute}
                    onChange={(e) =>
                      handleQualificationChange(e, qual.id, "institute")
                    }
                  />
                </div>

                {/* Course and Stream */}
                <div className="flex flex-wrap gap-4">
                  <div className="relative flex-1 min-w-[200px]">
                    <label className="absolute -top-3 left-2 bg-card px-1 text-sm">
                      Course
                    </label>
                    <input
                      type="text"
                      className="w-full border bg-card rounded-md p-2"
                      value={qual.course}
                      onChange={(e) =>
                        handleQualificationChange(e, qual.id, "course")
                      }
                    />
                  </div>

                  <div className="relative flex-1 min-w-[200px]">
                    <label className="absolute -top-3 left-2 bg-card px-1 text-sm">
                      Stream
                    </label>
                    <input
                      type="text"
                      className="w-full border bg-card rounded-md p-2"
                      value={qual.stream}
                      onChange={(e) =>
                        handleQualificationChange(e, qual.id, "stream")
                      }
                    />
                  </div>
                </div>

                {/* Course Duration */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="relative">
                    <label className="absolute -top-3 left-2 bg-card px-1 text-sm ">
                      Start Date
                    </label>
                    <input
                      type="date"
                      className="w-full border bg-card rounded-md p-2"
                      value={qual.startDate}
                      onChange={(e) =>
                        handleQualificationChange(e, qual.id, "startDate")
                      }
                    />
                  </div>
                  <div className="relative">
                    <label className="absolute -top-3 left-2 bg-card px-1 text-sm ">
                      End Date
                    </label>
                    <input
                      type="date"
                      className="w-full border bg-card rounded-md p-2"
                      value={qual.endDate}
                      onChange={(e) =>
                        handleQualificationChange(e, qual.id, "endDate")
                      }
                    />
                  </div>
                </div>

                {/* Board/University and Marks */}
                <div className="flex flex-wrap gap-4">
                  <div className="relative flex-1 min-w-[200px]">
                    <label className="absolute -top-3 left-2 bg-card px-1 text-sm ">
                      Board/University
                    </label>
                    <input
                      type="text"
                      className="w-full border bg-card rounded-md p-2"
                      value={qual.boardOrUninversity}
                      onChange={(e) =>
                        handleQualificationChange(
                          e,
                          qual.id,
                          "boardOrUniversity"
                        )
                      }
                    />
                  </div>

                  <div className="relative flex-1 min-w-[200px]">
                    <label className="absolute -top-3 left-2 bg-card px-1 text-sm ">
                      Marks (Percentage)
                      <span
                        className="cursor-pointer ml-1"
                        title="Convert CGPA to Percentage"
                      >
                        <i className="fa fa-info-circle" />
                      </span>
                    </label>
                    <input
                      type="text"
                      className="w-full border bg-card rounded-md p-2"
                      value={qual.marks}
                      onChange={(e) =>
                        handleQualificationChange(e, qual.id, "marks")
                      }
                    />
                  </div>
                </div>

                {/* Remove Button */}
                {index > 0 && (
                  <button
                    type="button"
                    className="absolute -top-4 right-0 bg-red-600 text-white p-2 rounded-full hover:bg-red-700 z-10"
                    onClick={() => removeQualificationField(qual.id)}
                  >
                    <FaTrashAlt />
                  </button>
                )}
              </div>
            ))}

            {/* Add Qualification Button */}
            <button
              type="button"
              className="bg-green-600  text-white p-2 rounded-full mt-4"
              onClick={addQualificationField}
            >
              <FaPlus />
            </button>
          </div>
        </section>

        {/* Work Experience */}
        <section className="md:p-4">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            Work Experience
          </h2>
          <div className="space-y-4 border p-4 rounded-md bg-card shadow-md">
            <label className="block mb-1  font-medium">
              Do you have any prior work experience?
            </label>
            <div className="flex flex-wrap items-center gap-4">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="workExperience"
                  value="Yes"
                  onChange={() => setExperiences([{ id: 1 }])}
                />
                <span className="">Yes</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="workExperience"
                  value="No"
                  onChange={() => setExperiences([])}
                />
                <span className="">No</span>
              </label>
            </div>

            {experiences.length > 0 &&
              experiences.map((exp, index) => (
                <div
                  key={exp.id}
                  className="space-y-4 border p-4 rounded-md bg-card shadow-md mt-2 relative"
                >
                  {/* Company Name and Designation */}
                  <div className="flex flex-wrap gap-4">
                    <div className="relative flex-1 min-w-[200px]">
                      <label className="absolute -top-3 left-2 bg-card px-1 text-sm ">
                        Company Name
                      </label>
                      <input
                        type="text"
                        className="w-full border bg-card rounded-md p-2"
                        value={exp.companyName}
                        onChange={(e) =>
                          handleExperienceChange(e, exp.id, "companyName")
                        }
                      />
                    </div>
                    <div className="relative flex-1 min-w-[200px]">
                      <label className="absolute -top-3 left-2 bg-card px-1 text-sm ">
                        Designation
                      </label>
                      <input
                        type="text"
                        className="w-full border bg-card rounded-md p-2"
                        value={exp.designation}
                        onChange={(e) =>
                          handleExperienceChange(e, exp.id, "designation")
                        }
                      />
                    </div>
                  </div>

                  {/* Start Date and End Date */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="relative">
                      <label className="absolute -top-3 left-2 bg-card px-1 text-sm ">
                        Start Date
                      </label>
                      <input
                        type="date"
                        className="w-full border bg-card rounded-md p-2"
                        value={exp.startDate}
                        onChange={(e) =>
                          handleExperienceChange(e, exp.id, "startDate")
                        }
                      />
                    </div>
                    <div className="relative">
                      <label className="absolute -top-3 left-2 bg-card px-1 text-sm ">
                        {exp.currentlyWorking ? "Present" : "End Date"}
                      </label>
                      {exp.currentlyWorking ? (
                        <div className="w-full border bg-card rounded-md p-2 flex items-center justify-center">
                          Present
                        </div>
                      ) : (
                        <input
                          type="date"
                          className="w-full border bg-card rounded-md p-2"
                          value={exp.endDate}
                          onChange={(e) =>
                            handleExperienceChange(e, exp.id, "endDate")
                          }
                        />
                      )}
                    </div>
                  </div>
                  {/* Currently Working Checkbox */}
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={exp.currentlyWorking}
                      onChange={() => toggleCurrentlyWorking(exp.id)}
                    />
                    <label>Currently Working</label>
                  </div>

                  {/* Duties/Responsibilities */}
                  <div className="relative mt-4">
                    <label className="absolute -top-3 left-2 bg-card px-1 text-sm ">
                      Duties/Responsibilities (Optional)
                    </label>
                    <textarea
                      className="w-full border bg-card rounded-md p-2"
                      value={exp.responsibilities}
                      onChange={(e) =>
                        handleExperienceChange(e, exp.id, "responsibilities")
                      }
                    />
                  </div>

                  {/* Trash Button */}
                  {index > 0 && (
                    <button
                      type="button"
                      className="absolute -top-4 right-0 bg-red-600 text-white p-2 rounded-full hover:bg-red-700 z-10"
                      onClick={() => removeExperienceField(exp.id)}
                    >
                      <FaTrashAlt />
                    </button>
                  )}
                </div>
              ))}

            {/* Add Experience Button */}
            {experiences.length > 0 && (
              <button
                type="button"
                className="bg-green-600  text-white p-2 rounded-full mt-4"
                onClick={addExperienceField}
              >
                <FaPlus />
              </button>
            )}
          </div>
        </section>

        {/* Skills */}
        <section className="md:p-4">
          <h2 className="text-xl font-semibold">
            Skills{" "}
            <span className="text-sm text-red-500">
              Use tab or comma to Add
            </span>
          </h2>

          <div className="flex space-x-8 mt-4  border p-4 rounded-md bg-card shadow-md">
            {" "}
            {/* Flex container for horizontal layout */}
            {/* Technical Skills */}
            <div className="relative flex-1">
              <label className="absolute -top-3 left-2 bg-card px-1 text-sm ">
                Technical Skills
              </label>
              <div className="flex flex-wrap gap-2">
                <input
                  type="text"
                  className="w-full border bg-card rounded-md p-2"
                  onKeyDown={(e) => {
                    if (e.key === "," || e.key === "Tab") {
                      e.preventDefault(); // Prevent the default action for comma or tab key
                      handleSkillAdd(e.target.value, "Technical");
                      e.target.value = "";
                    }
                  }}
                />
              </div>
              <div className="mt-2 flex flex-wrap gap-2">
                {technicalSkills.map((skill, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <span>{skill}</span>
                    <FaTrashAlt
                      className="text-red-500 cursor-pointer"
                      onClick={() => handleSkillRemove(skill, "Technical")}
                    />
                  </div>
                ))}
              </div>
            </div>
            {/* Soft Skills */}
            <div className="relative flex-1">
              <label className="absolute -top-3 left-2 bg-card px-1 text-sm ">
                Soft Skills
              </label>
              <div className="flex flex-wrap gap-2">
                <input
                  type="text"
                  className="w-full border bg-card rounded-md p-2"
                  onKeyDown={(e) => {
                    if (e.key === "," || e.key === "Tab") {
                      e.preventDefault(); // Prevent the default action for comma or tab key
                      handleSkillAdd(e.target.value, "soft");
                      e.target.value = "";
                    }
                  }}
                />
              </div>
              <div className="mt-2 flex flex-wrap gap-2">
                {softSkills.map((skill, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <span>{skill}</span>
                    <FaTrashAlt
                      className="text-red-500 cursor-pointer"
                      onClick={() => handleSkillRemove(skill, "soft")}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="md:p-4">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            Certifications
          </h2>
          <div className="space-y-4 border p-4 rounded-md bg-card shadow-md">
            <label className="block mb-1  font-medium">
              Do you want to add Certifications?
            </label>
            <div className="flex flex-wrap items-center gap-4">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="certifications"
                  value="Yes"
                  onChange={() => setCertifications([{ id: 1 }])}
                />
                <span className="">Yes</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="certifications"
                  value="No"
                  onChange={() => setCertifications([])}
                />
                <span className="">No</span>
              </label>
            </div>

            {certifications.map((cert, index) => (
              <div
                key={cert.id}
                className="relative space-y-4 border p-4 rounded-md bg-card shadow-md mb-2"
              >
                {/* Flex container for responsive layout */}
                <div className="flex flex-wrap gap-4">
                  <div className="relative flex-1 min-w-[200px]">
                    <label className="absolute -top-3 left-2 bg-card px-1 text-sm">
                      Certification Title
                    </label>
                    <input
                      type="text"
                      className="w-full border bg-card rounded-md p-2"
                      value={cert.title}
                      onChange={(e) =>
                        handleCertificationChange(e, cert.id, "title")
                      }
                    />
                  </div>
                  {/* Certification Link */}
                  <div className="relative flex-1 min-w-[200px]">
                    <label className="absolute -top-3 left-2 bg-card px-1 text-sm">
                      Certification Link
                    </label>
                    <input
                      type="url"
                      className="w-full border bg-card rounded-md p-2"
                      value={cert.link}
                      onChange={(e) =>
                        handleCertificationChange(e, cert.id, "link")
                      }
                    />
                  </div>
                  <div className="relative flex-1 min-w-[200px]">
                    <label className="absolute -top-3 left-2 bg-card px-1 text-sm">
                      Issued By
                    </label>
                    <input
                      type="text"
                      className="w-full border bg-card rounded-md p-2"
                      value={cert.issuedBy}
                      onChange={(e) =>
                        handleCertificationChange(e, cert.id, "issuedBy")
                      }
                    />
                  </div>
                </div>

                {/* Trash Icon positioned at top-right */}
                {index > 0 && (
                  <button
                    type="button"
                    onClick={() => removeCertificationField(cert.id)}
                    className="absolute -top-4 right-0 bg-red-600 text-white p-2 rounded-full hover:bg-red-700"
                  >
                    <FaTrashAlt />
                  </button>
                )}
              </div>
            ))}

            {/* Add Certification Button */}
            {certifications.length > 0 && (
              <button
                type="button"
                onClick={addCertificationField}
                className="bg-green-600  text-white p-2 rounded-full mt-4"
              >
                <FaPlus Certification />
              </button>
            )}
          </div>
        </section>

        {/* Projects */}
        <section className="md:p-4">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">Projects</h2>
          <div className="space-y-4 border p-4 rounded-md bg-card shadow-md">
            <label className="block mb-1 font-medium">
              Do you want to add Projects?
            </label>
            <div className="flex flex-wrap items-center gap-4">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="projects"
                  value="Yes"
                  onChange={() => setProjects([{ id: 1 }])}
                />
                <span>Yes</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="projects"
                  value="No"
                  onChange={() => setProjects([])}
                />
                <span>No</span>
              </label>
            </div>

            {projects.map((proj, index) => (
              <div
                key={proj.id}
                className="relative space-y-4 border p-4 rounded-md bg-card shadow-md mb-2"
              >
                {/* Flex container for responsive layout */}
                <div className="flex flex-wrap gap-4">
                  {/* Project Title */}
                  <div className="relative flex-1 min-w-[200px]">
                    <label className="absolute -top-3 left-2 bg-card px-1 text-sm">
                      Project Title
                    </label>
                    <input
                      type="text"
                      className="w-full border bg-card rounded-md p-2"
                      value={proj.projectTitle}
                      onChange={(e) =>
                        handleProjectChange(e, proj.id, "projectTitle")
                      }
                    />
                  </div>
                  {/* Technologies Used */}
                  <div className="relative flex-1 min-w-[200px]">
                    <label className="absolute -top-3 left-2 bg-card px-1 text-sm">
                      Technologies Used
                    </label>
                    <input
                      type="text"
                      className="w-full border bg-card rounded-md p-2"
                      value={proj.technologiesUsed}
                      onChange={(e) =>
                        handleProjectChange(e, proj.id, "technologiesUsed")
                      }
                    />
                  </div>
                  {/* Project Link / GitHub Repository */}
                  <div className="relative flex-1 min-w-[200px]">
                    <label className="absolute -top-3 left-2 bg-card px-1 text-sm">
                      Project Link / GitHub Repository
                    </label>
                    <input
                      type="url"
                      className="w-full border bg-card rounded-md p-2"
                      value={proj.projectLink}
                      onChange={(e) =>
                        handleProjectChange(e, proj.id, "projectLink")
                      }
                    />
                  </div>
                </div>

                {/* Trash Icon positioned at top-right */}
                {index > 0 && (
                  <button
                    type="button"
                    onClick={() => removeProjectField(proj.id)}
                    className="absolute -top-4 right-0 bg-red-600 text-white p-2 rounded-full hover:bg-red-700"
                  >
                    <FaTrashAlt />
                  </button>
                )}
              </div>
            ))}

            {/* Add Project Button */}
            {projects.length > 0 && (
              <button
                type="button"
                onClick={addProjectField}
                className="bg-green-600 text-white p-2 rounded-full mt-4"
              >
                <FaPlus />
              </button>
            )}
          </div>
        </section>

        {/* Awards, Honors & Achievements */}
        <section className="md:p-4">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            Awards, Honors & Achievements
          </h2>
          <div className="space-y-4 border p-4 rounded-md bg-card shadow-md">
            <label className="block mb-2">
              Do you want to add awards/honors?
            </label>
            <div className="flex items-center space-x-4">
              {["Yes", "No"].map((value) => (
                <label key={value}>
                  <input
                    type="radio"
                    name="awardsHonors"
                    value={value}
                    onChange={() =>
                      setAwards(value === "Yes" ? [{ id: 1 }] : [])
                    }
                    className="mr-2"
                  />
                  {value}
                </label>
              ))}
            </div>
            {awards.map((award, index) => (
              <div
                key={award.id}
                className="relative space-y-4 border p-4 rounded-md bg-card shadow-md"
              >
                <div className="flex flex-wrap gap-4">
                  <div className="relative flex-1 min-w-[200px]">
                    <label className="absolute -top-3 left-2 bg-card px-1 text-sm ">
                      Award/Honor/Achievement
                    </label>
                    <input
                      type="text"
                      value={award.name}
                      onChange={(e) =>
                        handleAwardChange(index, "name", e.target.value)
                      }
                      className="w-full border bg-card rounded-md p-2"
                    />
                  </div>
                </div>
                {index > 0 && (
                  <button
                    type="button"
                    onClick={() => removeField(setAwards, awards, award.id)}
                    className="absolute -top-4 right-0 bg-red-600 text-white p-2 rounded-full hover:bg-red-700"
                  >
                    <FaTrashAlt />
                  </button>
                )}
              </div>
            ))}
            {awards.length > 0 && (
              <button
                type="button"
                onClick={() => addField(setAwards, awards)}
                className="bg-green-600  text-white p-2 rounded-full mt-4"
              >
                <FaPlus />
              </button>
            )}
          </div>
        </section>

        {/* Links */}
        <section className="md:p-4">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">Links</h2>
          <div className="space-y-4 border p-4 rounded-md bg-card shadow-md">
            <label className="block mb-2">Do you want to add links?</label>
            <div className="flex items-center space-x-4">
              {["Yes", "No"].map((value) => (
                <label key={value}>
                  <input
                    type="radio"
                    name="links"
                    value={value}
                    onChange={() =>
                      setLinks(
                        value === "Yes" ? [{ id: 1, type: "", url: "" }] : []
                      )
                    }
                    className="mr-2"
                  />
                  {value}
                </label>
              ))}
            </div>

            {links.map((link, index) => (
              <div
                key={link.id}
                className="space-y-4 border p-4 rounded-md bg-card shadow-md relative"
              >
                {" "}
                {/* Added relative positioning */}
                <div className="flex flex-wrap gap-4">
                  {" "}
                  {/* Flex container for responsive layout */}
                  <div className="relative flex-1 min-w-[200px]">
                    <label className="absolute -top-3 left-2 bg-card px-1 text-sm ">
                      Select Link Type
                    </label>
                    <select
                      value={link.type}
                      onChange={(e) =>
                        handleLinkChange(index, "type", e.target.value)
                      }
                      className="w-full border bg-card rounded-md p-2"
                    >
                      {[
                        "",
                        "HackerRank",
                        "CodeChef",
                        "LeetCode",
                        "Portfolio",
                        "GitHub",
                        "LinkedIn",
                      ].map((option, i) => (
                        <option key={i} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="relative flex-1 min-w-[200px]">
                    <label className="absolute -top-3 left-2 bg-card px-1 text-sm ">
                      Link
                    </label>
                    <input
                      type="url"
                      value={link.url}
                      onChange={(e) =>
                        handleLinkChange(index, "url", e.target.value)
                      }
                      className="w-full border bg-card rounded-md p-2"
                    />
                  </div>
                </div>
                {/* Trash Icon positioned at top-right */}
                {index > 0 && (
                  <button
                    type="button"
                    onClick={() => removeField(setLinks, links, link.id)}
                    className="absolute -top-4 right-0 bg-red-600 text-white p-2 rounded-full hover:bg-red-700"
                  >
                    <FaTrashAlt />
                  </button>
                )}
              </div>
            ))}

            {/* Add Link Button */}
            {links.length > 0 && (
              <button
                type="button"
                onClick={() => addField(setLinks, links)}
                className="bg-green-600  text-white p-2 rounded-full mt-4"
              >
                <FaPlus />
              </button>
            )}
          </div>
        </section>

        {/* Upload Section */}
        <section className="md:p-4">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            Upload Documents
          </h2>
          <div className="flex flex-wrap gap-6">
            {/* Upload Photo */}
            <div className="flex-1 border  rounded-md p-4 bg-card text-center">
              <label className="block mb-2 text-sm ">Upload Photo</label>
              <div
                className="flex flex-col items-center justify-center space-y-2 border-dashed border-2  p-4 cursor-pointer"
                onClick={() => document.getElementById("photo-input").click()}
              >
                <FaPhotoVideo className="text-4xl text-gray-500" />
                <p className="text-sm text-gray-500">Browse</p>
                <input
                  type="file"
                  id="photo-input"
                  className="hidden"
                  accept="image/png, image/jpeg"
                  onChange={(e) => handleFileChange(e, "photo")}
                />
              </div>
              {photo && (
                <div className="mt-4">
                  <p className="text-sm ">Selected Photo: {photo.name}</p>
                  <img
                    src={URL.createObjectURL(photo)}
                    alt="Preview"
                    className="mt-2 w-32 h-32 object-center border"
                  />
                </div>
              )}
              {photoError && (
                <p className="text-sm text-red-500 mt-2">{photoError}</p>
              )}
            </div>

            {/* Upload Resume/CV */}
            <div className="flex-1 border  rounded-md p-4 bg-card text-center">
              <label className="block mb-2 text-sm ">Upload Resume/CV</label>
              <div
                className="flex flex-col items-center justify-center space-y-2 border-dashed border-2  p-4 cursor-pointer"
                onClick={() => document.getElementById("resume-input").click()}
              >
                <FaFilePdf className="text-4xl text-gray-500" />
                <p className="text-sm text-gray-500">Browse</p>
                <input
                  type="file"
                  id="resume-input"
                  className="hidden"
                  accept=".pdf, .doc, .docx"
                  onChange={(e) => handleFileChange(e, "resume")}
                />
              </div>
              {resume && (
                <div className="mt-4">
                  <p className="text-sm ">Selected Resume: {resume.name}</p>
                  <iframe
                    src={URL.createObjectURL(resume)}
                    title="Resume Preview"
                    className="mt-2 w-full h-48 border"
                  ></iframe>
                </div>
              )}
              {resumeError && (
                <p className="text-sm text-red-500 mt-2">{resumeError}</p>
              )}
            </div>
          </div>
        </section>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mt-6 border-t pt-4">
          {/* Preview Button */}
          <button
            type="button"
            onClick={handlePreview}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Preview
          </button>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CandidateForm;
