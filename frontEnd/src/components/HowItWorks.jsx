import stepOne from "../assets/How-It-Works-Info/1.png";
import stepTwo from "../assets/How-It-Works-Info/2.png";
import stepThree from "../assets/How-It-Works-Info/3.png";
import stepFour from "../assets/How-It-Works-Info/4.png";
// const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

export default function HowItWorks() {
  return (
    <div className="flex flex-wrap justify-center items-center">
      <img src={stepOne} alt="step one" className="h-50" />
      <img src={stepTwo} alt="step two" className="h-50" />
      <img src={stepThree} alt="step three" className="h-50" />
      <img src={stepFour} alt="step four" className="h-50" />
    </div>
  );
}
