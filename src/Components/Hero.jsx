import FeatureCard from "./HeroCard";
import HeroSVG from "./SVG/HeroSVG";

export default function Hero() {
  const cards = [
    {
      id: 1,
      title: "Plan your schedules",
      description:
        "Streamline customer subscriptions and billing with automated scheduling tools.",
      src: "./public/assets/images/services/plan-your-schedules.jpeg",
    },
    {
      id: 2,
      title: "Analytics & insights",
      description:
        "Transform your business data into actionable insights with real-time analytics.",
      src: "./public/assets/images/services/analytics-dashboard-with-charts-graphs-and-data-vi.jpg",
    },
    {
      id: 3,
      title: "Collaborate seamlessly",
      description:
        "Keep your team aligned with shared dashboards and collaborative workflows",
      src: "./public/assets/images/services/data-visualization-dashboard-with-interactive-char.jpg",
    },
  ];
  return (
    <>
      {/* Hero Section */}
      <div className="w-full max-w-[937px] lg:w-[937px] flex flex-col justify-center items-center gap-3 sm:gap-4 md:gap-5 lg:gap-6">
        <div className="self-stretch rounded-[3px] flex flex-col justify-center items-center gap-4 sm:gap-5 md:gap-6 lg:gap-8">
          {/* Main Heading */}
          <div className="w-full max-w-[748.71px] lg:w-[748.71px] text-center flex justify-center flex-col text-[#37322F] text-[24px] xs:text-[28px] sm:text-[36px] md:text-[52px] lg:text-[80px] font-normal leading-[1.1] sm:leading-[1.15] md:leading-[1.2] lg:leading-24 px-2 sm:px-4 md:px-0 font-serif">
            Effortless custom contract
            <br />
            billing by Brillance
          </div>
          {/* Subheading */}
          <div className="w-full max-w-[506.08px] lg:w-[506.08px] text-center flex justify-center flex-col text-[rgba(55,50,47,0.80)] sm:text-lg md:text-xl leading-[1.4] sm:leading-[1.45] md:leading-[1.5] lg:leading-7 px-2 sm:px-4 md:px-0 lg:text-lg font-medium text-sm">
            Streamline your billing process with seamless automation
            <br className="hidden sm:block" />
            for every custom contract, tailored by Brillance.
          </div>
        </div>
      </div>
      {/* CTA Button */}
      <div className="w-full max-w-[497px] lg:w-[497px] flex flex-col justify-center items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 relative z-10 mt-6 sm:mt-8 md:mt-10 lg:mt-12">
        <div className="backdrop-blur-[8.25px] flex justify-start items-center gap-4">
          <div className="h-10 sm:h-11 md:h-12 px-6 sm:px-8 md:px-10 lg:px-12 py-2 sm:py-[6px] relative bg-[#37322F] shadow-[0px_0px_0px_2.5px_rgba(255,255,255,0.08)_inset] overflow-hidden rounded-full flex justify-center items-center">
            <div className="w-20 sm:w-24 md:w-28 lg:w-44 h-[41px] absolute left-0 top-[-0.5px] bg-gradient-to-b from-[rgba(255,255,255,0)] to-[rgba(0,0,0,0.10)] mix-blend-multiply"></div>
            <div className="flex flex-col justify-center text-white text-sm sm:text-base md:text-[15px] font-medium leading-5">
              Start for free
            </div>
          </div>
        </div>
      </div>
      {/* Background Pattern */}
      <div className="absolute top-[232px] sm:top-[248px] md:top-[264px] lg:top-[320px] left-1/2 transform -translate-x-1/2 z-0 pointer-events-none">
        <HeroSVG />
      </div>
      <div className="self-stretch border-t border-[#E0DEDB] border-b border-[#E0DEDB] flex justify-center items-start mt-60">
        {/* Left Pattern */}
        <div className="w-4 sm:w-6 md:w-8 lg:w-12 self-stretch relative overflow-hidden">
          <div className="w-[120px] sm:w-[140px] md:w-[162px] left-[-40px] sm:left-[-50px] md:left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
            <template id="pattern-template">
              <div className="self-stretch h-3 sm:h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"></div>
            </template>
          </div>
        </div>
        {/* Feature Cards */}
        <div className="flex-1 px-0 sm:px-2 md:px-0 flex flex-col md:flex-row justify-center items-stretch gap-0">
          {/* Here feature cards will be post */}
          {cards.map((card) => (
            <FeatureCard
              key={card.id}
              title={card.title}
              description={card.description}
              src={card.src}
            />
          ))}
        </div>
        {/* Right Pattern */}
        <div class="w-4 sm:w-6 md:w-8 lg:w-12 self-stretch relative overflow-hidden">
          <div class="w-[120px] sm:w-[140px] md:w-[162px] left-[-40px] sm:left-[-50px] md:left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
            <template id="pattern-template-2">
              <div class="self-stretch h-3 sm:h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"></div>
            </template>
          </div>
        </div>
      </div>
    </>
  );
}
