import stepOne from '../assets/How-It-Works-Info/1.png'
import stepTwo from '../assets/How-It-Works-Info/2.png'
import stepThree from '../assets/How-It-Works-Info/3.png'
import stepFour from '../assets/How-It-Works-Info/4.png'

export default function HowItWorks() {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <img
          src={stepOne}
          alt="step one"
          className="w-full max-w-xs h-auto mb-4 border-b-2 border-gray-300 mt-24"
        />
        <img
          src={stepTwo}
          alt="step two"
          className="w-full max-w-xs h-auto mb-4 border-b-2 border-gray-300"
        />
        <img
          src={stepThree}
          alt="step three"
          className="w-full max-w-xs h-auto mb-4 border-b-2 border-gray-300"
        />
        <img
          src={stepFour}
          alt="step four"
          className="w-full max-w-xs h-auto border-b-2 border-gray-300"
        />
      </div>
    </>
  )
}
