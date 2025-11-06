import FeatureCard from "./FeatureCard";
import FeatureSectionSVG from "./SVG/FeatureSectionSVG";

function FeatureSection() {
  const featureCards = [
    {
      id: 1,
      div: "border-b border-r-0 md:border-r border-[rgba(55,50,47,0.12)] p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-start items-start gap-4 sm:gap-6",
      h3Txt: "Smart. Simple. Brilliant.",
      pTxt: "Your data is beautifully organized so you see everything clearly without the clutter.",
      divImg:
        "w-full h-[200px] sm:h-[250px] md:h-[300px] rounded-lg flex items-center justify-center overflow-hidden",
      srcImg: "./src/assets/images/services/work-order.png",
      classNameImg: "h-1/2 object-cover",
    },
    {
      id: 2,
      div: "border-b border-[rgba(55,50,47,0.12)] p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-start items-start gap-4 sm:gap-6",
      h3Txt: "Your work, in sync",
      pTxt: "Every update flows instantly across your team and keeps collaboration effortless and fast.",
      divImg:
        "w-full h-[200px] sm:h-[250px] md:h-[300px] rounded-lg flex items-center justify-center overflow-hidden relative",
      srcImg: "./src/assets/images/services/work-sync.png",
      classNameImg: "h-full object-cover",
    },
    {
      id: 3,
      div: "border-r-0 md:border-r border-[rgba(55,50,47,0.12)] p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-start items-start gap-4 sm:gap-6 bg-transparent",
      h3Txt: "Effortless integration",
      pTxt: "All your favorite tools connect in one place and work together seamlessly by design.",
      divImg:
        "w-full h-[200px] sm:h-[250px] md:h-[300px] rounded-lg flex items-center justify-center overflow-hidden relative",
      srcImg: "./src/assets/images/services/integration.png",
      classNameImg: "h-full object-cover",
    },
    {
      id: 4,
      div: "p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-start items-start gap-4 sm:gap-6",
      h3Txt: "Numbers that speak",
      pTxt: "Track growth with precision and turn raw data into confident decisions you can trust.",
      divImg:
        "w-full h-[200px] sm:h-[250px] md:h-[300px] rounded-lg flex items-center justify-center overflow-hidden relative",
      srcImg: "./src/assets/images/services/speak.png",
      classNameImg: "h-full object-cover",
    },
  ];

  return (
    <div className="w-full border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-center items-center">
      {/* Header */}
      <div className="self-stretch px-4 sm:px-6 md:px-8 lg:px-0 lg:max-w-[1060px] lg:w-[1060px] py-8 sm:py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)] flex justify-center items-center gap-6">
        <div className="w-full max-w-[616px] lg:w-[616px] px-4 sm:px-6 py-4 sm:py-5 shadow-none overflow-hidden rounded-lg flex flex-col justify-start items-center gap-3 sm:gap-4">
          {/* Badge  */}
          <div className="px-[14px] py-[6px] bg-white shadow-[0px_0px_0px_4px_rgba(55,50,47,0.05)] overflow-hidden rounded-[90px] flex justify-start items-center gap-[8px] border border-[rgba(2,6,23,0.08)] shadow-xs">
            <FeatureSectionSVG />
            <div className="text-center flex justify-center flex-col text-[#37322F] text-xs font-medium leading-3">
              Services
            </div>
          </div>
          <div className="w-full max-w-[598.06px] lg:w-[598.06px] text-center flex justify-center flex-col text-[#49423D] text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold leading-tight md:leading-[60px] tracking-tight">
            Built for absolute clarity and focused work
          </div>
          <div className="self-stretch text-center text-[#605A57] text-sm sm:text-base font-normal leading-6 sm:leading-7">
            Stay focused with tools that organize, connect
            <br />
            and turn information into confident decisions.
          </div>
        </div>
      </div>

      {/* Features Content  */}
      <div className="self-stretch flex justify-center items-start">
        {/* Left Pattern  */}
        <div className="w-12 self-stretch relative overflow-hidden hidden md:block">
          <div className="w-[162px] left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
            <template id="pattern-template-3">
              <div className="self-stretch h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"></div>
            </template>
          </div>
        </div>

        {/* Grid Content  */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-0 border-l border-r border-[rgba(55,50,47,0.12)]">
          {featureCards.map((card) => (
            <FeatureCard
              key={card.id}
              div={card.div}
              h3Txt={card.h3Txt}
              pTxt={card.pTxt}
              divImg={card.divImg}
              srcImg={card.srcImg}
              classNameImg={card.classNameImg}
            />
          ))}
        </div>

        {/* Right Pattern  */}
        <div className="w-12 self-stretch relative overflow-hidden hidden md:block">
          <div className="w-[162px] left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
            <template id="pattern-template-4">
              <div className="self-stretch h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"></div>
            </template>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureSection;
