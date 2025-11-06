export default function FeatureCard(props) {
  const { div, h3Txt, pTxt, divImg, srcImg, classNameImg } = props;
  return (
    <div className={div}>
      <div className="flex flex-col gap-2">
        <h3 className="text-[#37322F] text-lg sm:text-xl font-semibold leading-tight">
          {h3Txt}
        </h3>
        <p className="text-[#605A57] text-sm md:text-base font-normal leading-relaxed">
          {pTxt}
        </p>
      </div>
      <div className={divImg}>
        <img src={srcImg} className={classNameImg} />
      </div>
    </div>
  );
}
