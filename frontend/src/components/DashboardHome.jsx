import { FcSurvey, FcFlowChart, FcBriefcase, FcCancel } from "react-icons/fc";

const DashboardHome = () => {
  return (
    <section className="flex flex-col gap-8">
      <h1 className="text-2xl font-semibold tracking-wide">
        Shortlist Application
      </h1>
      <div className="flex flex-col gap-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 justify-center items-center gap-4">
          <div className="bg-card/60 backdrop-blur-md w-full h-full p-4 border rounded-lg flex justify-between items-center gap-4">
            <div className="flex flex-col gap-2">
              <p className="text-foreground/50 text-xs font-semibold uppercase">
                {"Total Job Posted"}
              </p>
              <p className="font-semibold text-xl">{16}</p>
            </div>
            <div>
              <FcBriefcase size={"2rem"} />
            </div>
          </div>
          <div className="bg-card/60 backdrop-blur-md w-full h-full p-4 border rounded-lg flex justify-between items-center gap-4">
            <div className="flex flex-col gap-2">
              <p className="text-foreground/50 text-xs font-semibold uppercase">
                {"Total Application"}
              </p>
              <p className="font-semibold text-xl">{485}</p>
            </div>
            <div>
              <FcSurvey size={"2rem"} />
            </div>
          </div>
          <div className="bg-card/60 backdrop-blur-md w-full h-full p-4 border rounded-lg flex justify-between items-center gap-4">
            <div className="flex flex-col gap-2">
              <p className="text-foreground/50 text-xs font-semibold uppercase">
                {"Shortlisted Candidates"}
              </p>
              <p className="font-semibold text-xl">{264}</p>
            </div>
            <div>
              <FcFlowChart size={"2rem"} />
            </div>
          </div>
          <div className="bg-card/60 backdrop-blur-md w-full h-full p-4 border rounded-lg flex justify-between items-center gap-4">
            <div className="flex flex-col gap-2">
              <p className="text-foreground/50 text-xs font-semibold uppercase">
                {"Rejected Candidates"}
              </p>
              <p className="font-semibold text-xl">{221}</p>
            </div>
            <div>
              <FcCancel size={"2rem"} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardHome;
