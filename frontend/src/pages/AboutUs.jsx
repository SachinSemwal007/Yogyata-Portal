import FeatureCard from "../components/FeatureCard";

const AboutUs = () => {
  return (
    <div className="px-4 mb-14 sm:px-6 md:px-[5vw] lg:px-[7vw] min-w-[360px] py-16">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="text-3xl mt-6 font-bold sm:text-4xl lg:text-5xl text-center">
          Yogyata Portal
        </h1>
        {/* Yellow line under the header */}
        <div className="mt-2">
          <img src="line.svg" alt="Line" className="mx-auto" />
        </div>
        <p className="mt-6 text-lg text-card-foreground/80 sm:text-xl max-w-4xl mx-auto">
          Yogyata Portal is an AI-powered platform designed to revolutionize the
          hiring process. By leveraging machine learning, our platform helps
          organizations efficiently evaluate and select the most qualified
          candidates for their job openings, ensuring better matches and
          improved hiring outcomes.
        </p>
      </div>

      {/* Features Section */}
      <div className="space-y-16 md:space-y-12 lg:space-y-24">
        <FeatureCard
          title="AI Sortlisting for Potential Candidates"
          imageSrc="shortlisting.gif"
          imagePosition="right"
          content="Our AI-driven sort listing feature ranks candidates based on job relevance, ensuring the top contenders are highlighted for your review. This reduces manual work and speeds up the hiring process, providing you with a shortlist of the best candidates in no time."
        />
        <FeatureCard
          title="Selection of Key Points Through Job Description"
          imageSrc="selection.gif"
          imagePosition="left"
          content="Our advanced AI scans job descriptions and identifies critical skills and requirements. It then matches candidates' profiles with these key points, ensuring you get the most suitable candidates who meet your specific needs."
        />
        <FeatureCard
          title="AI-Generated Online Examination"
          imageSrc="exam.gif"
          imagePosition="right"
          content="With our AI-generated online examinations, you can assess candidates' abilities and technical knowledge in real-time. The adaptive nature of the exams adjusts to the candidate's skill level, ensuring a fair and comprehensive evaluation."
        />
        <FeatureCard
          title="Find Your Best Role"
          imageSrc="best_role.gif"
          imagePosition="left"
          content="Our AI recommends the best roles for candidates based on their skills, experience, and aspirations. It ensures candidates are matched with positions where they will excel, fostering long-term success for both the candidate and your organization."
        />
      </div>
    </div>
  );
};

export default AboutUs;
