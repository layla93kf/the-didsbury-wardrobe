import stepOne from '../assets/How-It-Works-Info/1.png'
import stepTwo from '../assets/How-It-Works-Info/2.png'
import stepThree from '../assets/How-It-Works-Info/3.png'
import stepFour from '../assets/How-It-Works-Info/4.png'
import TopPicks from './TopPicks'

export default function HowItWorks() {
  return (
    <>
      <TopPicks />
      <div className="flex flex-col justify-center items-center md:mt-2 z-50">
        {' '}
        {/* Add margin for medium screens and above */}
        <h1 className="text-2xl mt-2 ">HOW IT WORKS</h1>
        <div className="flex flex-wrap justify-center items-center mt-2">
          <img
            src={stepOne}
            alt="step one"
            className="w-full md:w-auto max-w-xs h-auto mb-4 md:mr-4 border-b-2 border-gray-300 "
          />
          <img
            src={stepTwo}
            alt="step two"
            className="w-full md:w-auto max-w-xs h-auto mb-4 md:mr-4 border-b-2 border-gray-300"
          />
          <img
            src={stepThree}
            alt="step three"
            className="w-full md:w-auto max-w-xs h-auto mb-4 md:mr-4 border-b-2 border-gray-300"
          />
          <img
            src={stepFour}
            alt="step four"
            className="w-full md:w-auto max-w-xs h-auto border-b-2 border-gray-300"
          />
        </div>
      </div>
    </>
  )
}
