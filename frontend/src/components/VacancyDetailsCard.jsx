import { HiOutlineDotsVertical } from "react-icons/hi";
import { FaLocationDot } from "react-icons/fa6";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

const VacancyDetailsCard = (vacancy) => {
  const [openEdit, setOpenEdit] = useState(false);
  const [editVacancy, setEditVacancy] = useState({
    _id: vacancy._id,
    conpanyLogo: "",
    jobTitle: "",
    experience: "",
    mode: "",
    location: { city: "", state: "", country: "" },
    jobType: "",
    shift: "",
    numberOfVacancy: "",
    package: "",
    postDate: "",
    deadlineDate: "",
    status: "",
  });
  const handleEdit = () => {
    setOpenEdit(!openEdit);
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    console.log(editVacancy);
  };

  return (
    <div
      key={vacancy._id}
      className={`flex flex-col bg-card/60 backdrop-blur-md drop-shadow-md w-full h-full justify-between items-center gap-4 border rounded-xl px-4 py-3 ${
        vacancy.status === "ongoing"
          ? "border-green-500"
          : vacancy.status === "expired"
          ? "border-yellow-500"
          : vacancy.status === "draft" && "border-gray-500"
      }`}
    >
      <div className="w-full flex justify-between gap-4 p-4">
        <img src={vacancy.conpanyLogo || "/logo.png"} alt="logo" width={36} />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="px-2" variant="outline">
              <HiOutlineDotsVertical />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-36">
            <DropdownMenuItem onClick={handleEdit}>Edit</DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => console.log("Delete", vacancy._id)}
            >
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="w-full flex flex-col gap-2">
        <div className="my-2">
          <p className="">
            Role: <b className="tracking-wide">{vacancy.jobTitle}</b>
          </p>
          <p className="text-sm">Vacancy ID : {vacancy._id}</p>
        </div>
        <div className="flex justify-between items-center gap-4">
          <p className="text-sm text-foreground/75">
            Exp. : {vacancy.experience}
          </p>
          <p className="text-sm text-foreground/75">CTC : {vacancy.package}</p>
        </div>
        <div className="flex justify-between items-center gap-4">
          <p className="text-sm">Mode : {vacancy.mode}</p>
          <p className="text-sm">Type : {vacancy.jobType}</p>
        </div>
        <p className="text-sm">Vacancies : {vacancy.numberOfVacancy}</p>
        <div className="flex justify-start items-center gap-2 my-2">
          <FaLocationDot />{" "}
          <p className="text-sm">
            {vacancy.location.city}, {vacancy.location.country}
          </p>
        </div>
        <div>
          <p className="text-sm">Deadline:</p>
          <div className="flex justify-between items-center gap-4">
            <p className="text-sm text-foreground/60">
              From: {vacancy.postDate}
            </p>
            <p className="text-sm text-foreground/60">
              To: {vacancy.deadlineDate}
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-start items-center gap-2 w-full">
        <div
          className={`h-2 w-2 rounded-full ${
            vacancy.status === "ongoing"
              ? "bg-green-500"
              : vacancy.status === "expired"
              ? "bg-yellow-500"
              : vacancy.status === "draft" && "bg-gray-500"
          }`}
        ></div>
        <p className="capitalize">Status : {vacancy.status}</p>
      </div>

      <Dialog
        className="min-w-[360px]"
        open={openEdit}
        onOpenChange={setOpenEdit}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Vacancy</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col gap-4 my-4">
            <div className="flex flex-col gap-2">
              <Label className="ml-1 text-foreground/50">Role</Label>
              <Input
                placeholder={vacancy.jobTitle}
                defaultValue={vacancy.jobTitle}
                onChange={(e) =>
                  setEditVacancy({ ...editVacancy, jobTitle: e.target.value })
                }
              />
            </div>
            <div className="flex justify-center items-center gap-4">
              <div className="flex flex-col gap-2">
                <Label className="ml-1 text-foreground/50">Experience</Label>
                <Input
                  placeholder={vacancy.experience}
                  defaultValue={vacancy.experience}
                  onChange={(e) =>
                    setEditVacancy({
                      ...editVacancy,
                      experience: e.target.value,
                    })
                  }
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label className="ml-1 text-foreground/50">CTC</Label>
                <Input
                  type="text"
                  placeholder={vacancy.package}
                  defaultValue={vacancy.package}
                  onChange={(e) =>
                    setEditVacancy({
                      ...editVacancy,
                      package: e.target.value,
                    })
                  }
                />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex flex-col gap-2">
                <Label className="ml-1 text-foreground/50">Mode</Label>
                <select
                  name="jobMode"
                  defaultValue={vacancy.mode}
                  onChange={(e) =>
                    setEditVacancy({ ...editVacancy, mode: e.target.value })
                  }
                  className="w-full border-border/20 border text-sm bg-background rounded-md p-1.5"
                >
                  <option value="Not Disclosed">Not Disclosed</option>
                  <option value="Remote">Remote</option>
                  <option value="On-Site">On-Site</option>
                  <option value="Hybrid">Hybrid</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <Label className="ml-1 text-foreground/50 text-nowrap">
                  Job Type
                </Label>
                <select
                  name="jobType"
                  defaultValue={vacancy.jobType}
                  onChange={(e) =>
                    setEditVacancy({
                      ...editVacancy,
                      jobType: e.target.value,
                    })
                  }
                  className="w-full border-border/20 border text-sm bg-background rounded-md p-1.5"
                >
                  <option value="Full-Time">Full-Time</option>
                  <option value="Part-Time">Part-Time</option>
                  <option value="Internship">Internship</option>
                </select>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex flex-col gap-2">
                <Label className="ml-1 text-foreground/50">
                  No. of Vacancies
                </Label>
                <Input
                  type="number"
                  className="max-w-[128px]"
                  placeholder={vacancy.numberOfVacancy}
                  defaultValue={vacancy.numberOfVacancy}
                  onChange={(e) =>
                    setEditVacancy({
                      ...editVacancy,
                      numberOfVacancy: e.target.value,
                    })
                  }
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label className="ml-1 text-foreground/50">Deadline</Label>
                <Input
                  type="date"
                  placeholder={vacancy.deadlineDate}
                  defaultValue={vacancy.deadlineDate}
                  onChange={(e) =>
                    setEditVacancy({
                      ...editVacancy,
                      deadlineDate: e.target.value,
                    })
                  }
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Label className="ml-1 text-foreground/50">Location</Label>
              <div className="flex justify-center items-center gap-4">
                <Input
                  placeholder={vacancy.location.city}
                  defaultValue={vacancy.location.city}
                  onChange={(e) =>
                    setEditVacancy({
                      ...editVacancy,
                      location: { city: e.target.value },
                    })
                  }
                />
                <Input
                  placeholder={vacancy.location.state}
                  defaultValue={vacancy.location.state}
                  onChange={(e) =>
                    setEditVacancy({
                      ...editVacancy,
                      location: { state: e.target.value },
                    })
                  }
                />
                <Input
                  placeholder={vacancy.location.country}
                  defaultValue={vacancy.location.country}
                  onChange={(e) =>
                    setEditVacancy({
                      ...editVacancy,
                      location: { country: e.target.value },
                    })
                  }
                />
              </div>
            </div>
          </div>
          <DialogFooter className="flex gap-2 justify-end">
            <Button variant="outline" onClick={() => setOpenEdit(false)}>
              Cancel
            </Button>
            <Button
              className="text-white"
              variant="default"
              onClick={handleEditSubmit}
            >
              Confirm
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default VacancyDetailsCard;
