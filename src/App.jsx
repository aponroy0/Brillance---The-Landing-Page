import "./App.css";
import Feature from "./Components/Feature";
import FeatureSection from "./Components/FeatureSection";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import { Navigation } from "./Components/Navigation";
import Pricing from "./Components/Pricing";
import Testimonials from "./Components/Testimonials";

function App() {
  return (
    <div className="relative flex flex-col justify-start items-center w-full">
      {/*Main container with proper margins*/}
      <div className="w-full max-w-none px-4 sm:px-6 md:px-8 lg:px-0 lg:max-w-[1060px] lg:w-[1060px] relative flex flex-col justify-start items-start min-h-screen">
        {/* Left vertical line */}
        <div className="w-[1px] h-full absolute left-4 sm:left-6 md:left-8 lg:left-0 top-0 bg-[rgba(55,50,47,0.12)] shadow-[1px_0px_0px_white] z-0"></div>
        {/* Right vertical line */}
        <div className="w-[1px] h-full absolute right-4 sm:right-6 md:right-8 lg:right-0 top-0 bg-[rgba(55,50,47,0.12)] shadow-[1px_0px_0px_white] z-0"></div>
        <div className="self-stretch pt-[9px] overflow-hidden border-b border-[rgba(55,50,47,0.06)] flex flex-col justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-[66px] relative z-10">
          {/* Navigation */}
          <Navigation />
          <div className="pt-16 sm:pt-20 md:pt-24 lg:pt-[216px] pb-8 sm:pb-12 md:pb-16 flex flex-col justify-start items-center px-2 sm:px-4 md:px-8 lg:px-0 w-full sm:pl-0 sm:pr-0 pl-0 pr-0">
            <Hero />
            <Feature />
            <Testimonials />
            <FeatureSection />
            <Pricing />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
