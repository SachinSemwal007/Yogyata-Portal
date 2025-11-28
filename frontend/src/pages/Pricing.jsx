export default function Pricing() {
  return (
    <div className="flex flex-col justify-center items-center gap-16 w-full h-auto px-4 sm:px-6 md:px-[5vw] lg:px-[7vw] min-w-[360px] py-16 mb-14 box-border">
      {/* Header Section */}
      <div className="text-center">
        <h1 className="text-3xl mt-6 font-bold sm:text-4xl lg:text-5xl text-center">
          Choose Your Plan
        </h1>
        <img
          src="line.svg"
          alt="Decorative Line"
          className="mx-auto w-40 h-auto"
        />
        <p className="mt-6 text-sm sm:text-base lg:text-lg text-foreground/80 max-w-2xl mx-auto">
          Boost your workplace productivity. Yogyata Portal has the right plan
          for you.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="flex justify-center items-center gap-8 w-full flex-wrap lg:flex-nowrap">
        {/* Basic Plan */}
        <div className="flex flex-col justify-between p-6 space-y-6 rounded-lg shadow-lg bg-card border border-yellow-400 w-full lg:w-1/3">
          <div>
            <h4 className="text-xl font-semibold text-foreground">Basic</h4>
            <p className="text-3xl font-bold text-foreground mt-2">₹5,999</p>
            <p className="text-foreground mt-4">
              Perfect for startups and small businesses.
            </p>
          </div>
          <ul className="space-y-4 text-foreground">
            <li className="flex items-center gap-4">
              <img
                src="iconb.svg"
                alt="Check Icon"
                className="w-5 h-5 filter dark:invert dark:brightness-0 dark:contrast-200"
              />
              AI-based shortlisting for up to 50 candidates/month
            </li>
            <li className="flex items-center gap-4">
              <img
                src="iconb.svg"
                alt="Check Icon"
                className="w-5 h-5 filter dark:invert dark:brightness-0 dark:contrast-200"
              />
              AI-generated online examinations (20 candidates/month)
            </li>
            <li className="flex items-center gap-4">
              <img
                src="iconb.svg"
                alt="Check Icon"
                className="w-5 h-5 filter dark:invert dark:brightness-0 dark:contrast-200"
              />
              Job description analysis
            </li>
          </ul>
          <button className="w-full px-6 py-3 text-center text-black bg-white border-2 border-yellow-400  rounded-lg hover:bg-yellow-500 transition font-bold">
            Get Started
          </button>
        </div>

        {/* Pro Plan */}
        <div className="relative flex flex-col justify-between p-6 space-y-6 rounded-lg shadow-xl bg-[rgba(4,56,115,1)] text-white w-full lg:w-1/3 transform scale-105 border-2 border-yellow-400">
          {/* Most Popular Tag */}
          <span className="absolute top-2 right-2 bg-yellow-400 text-black text-xs font-semibold px-3 py-1 rounded-full uppercase shadow-md">
            Most Popular
          </span>

          <div>
            <h4 className="text-xl font-semibold">Pro</h4>
            <p className="text-3xl font-bold mt-2">₹14,999</p>
            <p className="mt-4">Best for medium-sized businesses.</p>
          </div>

          <ul className="space-y-4">
            <li className="flex items-center gap-4">
              <img src="icony.svg" alt="Check Icon" className="w-5 h-5" />
              AI-based shortlisting for up to 200 candidates/month
            </li>
            <li className="flex items-center gap-4">
              <img src="icony.svg" alt="Check Icon" className="w-5 h-5" />
              AI-generated online examinations (100 candidates/month)
            </li>
            <li className="flex items-center gap-4">
              <img src="icony.svg" alt="Check Icon" className="w-5 h-5" />
              Advanced job description analysis
            </li>
            <li className="flex items-center gap-4">
              <img src="icony.svg" alt="Check Icon" className="w-5 h-5" />
              Dedicated account manager
            </li>
          </ul>
          <button className="w-full px-6 py-3 text-center font-bold bg-yellow-400 text-white font-white rounded-lg hover:bg-yellow-500 transition">
            Get Started
          </button>
        </div>

        {/* Enterprise Plan */}
        <div className="flex flex-col justify-between p-6 space-y-6 rounded-lg shadow-lg bg-card border border-yellow-400 w-full lg:w-1/3">
          <div>
            <h4 className="text-xl font-semibold text-card-foreground">
              Enterprise
            </h4>
            <p className="text-3xl font-bold text-card-foreground mt-2">
              ₹34,999
            </p>
            <p className="text-card-foreground mt-4">
              Ideal for large enterprises.
            </p>
          </div>
          <ul className="space-y-4 text-card-foreground">
            <li className="flex items-center gap-4">
              <img
                src="iconb.svg"
                alt="Check Icon"
                className="w-5 h-5 filter dark:invert dark:brightness-0 dark:contrast-200"
              />
              Unlimited AI-based shortlisting
            </li>
            <li className="flex items-center gap-4">
              <img
                src="iconb.svg"
                alt="Check Icon"
                className="w-5 h-5 filter dark:invert dark:brightness-0 dark:contrast-200"
              />
              Unlimited AI-generated online examinations
            </li>
            <li className="flex items-center gap-4">
              <img
                src="iconb.svg"
                alt="Check Icon"
                className="w-5 h-5 filter dark:invert dark:brightness-0 dark:contrast-200"
              />
              Dedicated AI consultant
            </li>
            <li className="flex items-center gap-4">
              <img
                src="iconb.svg"
                alt="Check Icon"
                className="w-5 h-5 filter dark:invert dark:brightness-0 dark:contrast-200"
              />
              Integration with your ATS
            </li>
            <li className="flex items-center gap-4">
              <img
                src="iconb.svg"
                alt="Check Icon"
                className="w-5 h-5 filter dark:invert dark:brightness-0 dark:contrast-200"
              />
              24/7 priority customer support
            </li>
          </ul>
          <button className="w-full px-6 py-3 text-center font-bold text-black bg-white border-2 border-yellow-400  rounded-lg hover:bg-yellow-500 transition">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
