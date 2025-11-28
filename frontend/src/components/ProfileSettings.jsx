import { useState } from "react";

const ProfileSettings = () => {
  const [formData, setFormData] = useState({
    hiringManagerName: "",
    address: "",
    branchLocation: "",
    phoneNumber: "",
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
    profilePhoto: null,
  });

  const [isEditingGeneral, setIsEditingGeneral] = useState(false);
  const [isEditingSecurity, setIsEditingSecurity] = useState(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, profilePhoto: URL.createObjectURL(file) });
    }
  };

  const handleSaveGeneral = () => {
    alert("General Settings saved successfully!");
    setIsEditingGeneral(false); // Turn off editing mode after save
  };

  const handleSaveSecurity = () => {
    alert("Security Settings saved successfully!");
    setIsEditingSecurity(false); // Turn off editing mode after save
  };

  return (
    <div className="">
      <h1 className="text-2xl font-semibold tracking-wide text-foreground mb-8">
        Profile Settings
      </h1>
      <div className="max-w-6xl mx-auto p-4">
        {/* General Settings Section */}
        <div className="bg-card/50 backdrop-blur-md shadow-md rounded-lg p-6">
          <h3 className="text-xl font-semibold text-card-foreground border-b pb-4 mb-6">
            General Settings
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Profile Photo Section */}
            <div className="flex flex-col items-center space-y-4  p-6 rounded-md">
              <div className="w-32 h-32 rounded-full items-center overflow-hidden border-2">
                <img
                  src={
                    formData.profilePhoto || "https://via.placeholder.com/150"
                  }
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>

              {isEditingGeneral && (
                <label
                  htmlFor="file-upload"
                  className="bg-foreground/60 px-4 py-2 rounded-md cursor-pointer"
                >
                  Change Photo
                </label>
              )}
              <input
                id="file-upload"
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />
            </div>

            {/* User Settings */}
            <div className="space-y-6">
              {/* Organization ID */}
              <div className="relative flex-1 min-w-[200px]">
                <label className="absolute -top-3 left-2 bg-card px-1 text-sm">
                  Organization ID
                </label>
                <input
                  type="text"
                  value="123456"
                  readOnly={!isEditingGeneral}
                  onChange={handleInputChange}
                  name="organizationId"
                  className="w-full border rounded-md p-2 bg-card text-foreground/80"
                />
              </div>

              {/* Company Name */}
              <div className="relative flex-1 min-w-[200px]">
                <label className="absolute -top-3 left-2 bg-card px-1 text-sm">
                  Company Name
                </label>
                <input
                  type="text"
                  value="TechCorp"
                  readOnly={!isEditingGeneral}
                  onChange={handleInputChange}
                  name="companyName"
                  className="w-full border rounded-md p-2 bg-card text-foreground/80"
                />
              </div>

              {/* Hiring Manager */}
              <div className="relative flex-1 min-w-[200px]">
                <label className="absolute -top-3 left-2 bg-card px-1 text-sm">
                  Hiring Manager
                </label>
                <input
                  type="text"
                  name="hiringManagerName"
                  value={formData.hiringManagerName}
                  onChange={handleInputChange}
                  className="w-full border rounded-md p-2 bg-card text-foreground/80"
                />
              </div>

              {/* Email */}
              <div className="relative flex-1 min-w-[200px]">
                <label className="absolute -top-3 left-2 bg-card px-1 text-sm">
                  Your Email
                </label>
                <input
                  type="email"
                  value="user@example.com"
                  readOnly={!isEditingGeneral}
                  className="w-full border rounded-md p-2 bg-card text-foreground/80"
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
            {/* Address */}
            <div className="relative flex-1 min-w-[200px]">
              <label className="absolute -top-3 left-2 bg-card px-1 text-sm">
                Address
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                readOnly={!isEditingGeneral}
                className="w-full border rounded-md p-2 bg-card text-foreground/80"
              />
            </div>

            {/* Branch Location */}
            <div className="relative flex-1 min-w-[200px]">
              <label className="absolute -top-3 left-2 bg-card px-1 text-sm">
                Branch Location
              </label>
              <input
                type="text"
                name="branchLocation"
                value={formData.branchLocation}
                onChange={handleInputChange}
                readOnly={!isEditingGeneral}
                className="w-full border rounded-md p-2 bg-card text-foreground/80"
              />
            </div>

            {/* Phone Number */}
            <div className="relative flex-1 min-w-[200px]">
              <label className="absolute -top-3 left-2 bg-card px-1 text-sm">
                Phone Number
              </label>
              <input
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                readOnly={!isEditingGeneral}
                className="w-full border rounded-md p-2 bg-card text-foreground/80"
              />
            </div>
          </div>

          <button
            onClick={() => {
              if (isEditingGeneral) handleSaveGeneral();
              else setIsEditingGeneral(true);
            }}
            className="bg-blue-600 text-white px-6 py-2 rounded-md mt-4"
          >
            {isEditingGeneral ? "Save Settings" : "Edit"}
          </button>
        </div>

        {/* Security Settings Section */}
        <div className="bg-card/50 backdrop-blur-md shadow-md rounded-lg p-6 mt-8">
          <h3 className="text-xl font-semibold text-card-foreground border-b pb-4 mb-6">
            Security Settings
          </h3>

          <div className="space-y-6">
            {/* Old Password */}
            <div className="relative flex-1 min-w-[200px]">
              <label className="absolute -top-3 left-2 bg-card px-1 text-sm">
                Old Password
              </label>
              <input
                type="password"
                name="oldPassword"
                value={formData.oldPassword}
                onChange={handleInputChange}
                readOnly={!isEditingSecurity}
                className="w-full border rounded-md p-2 bg-card text-foreground/80"
              />
            </div>

            {/* New Password */}
            <div className="relative flex-1 min-w-[200px]">
              <label className="absolute -top-3 left-2 bg-card px-1 text-sm">
                New Password
              </label>
              <input
                type="password"
                name="newPassword"
                value={formData.newPassword}
                onChange={handleInputChange}
                readOnly={!isEditingSecurity}
                className="w-full border rounded-md p-2 bg-card text-foreground/80"
              />
            </div>

            {/* Confirm Password */}
            <div className="relative flex-1 min-w-[200px]">
              <label className="absolute -top-3 left-2 bg-card px-1 text-sm">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                readOnly={!isEditingSecurity}
                className="w-full border rounded-md p-2 bg-card text-foreground/80"
              />
            </div>
          </div>

          <button
            onClick={() => {
              if (isEditingSecurity) handleSaveSecurity();
              else setIsEditingSecurity(true);
            }}
            className="bg-blue-600 text-white px-6 py-2 rounded-md mt-4"
          >
            {isEditingSecurity ? "Save Settings" : "Edit"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileSettings;
