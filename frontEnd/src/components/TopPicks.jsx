import one from '../assets/Top-picks/1.png'
import two from '../assets/Top-picks/2.png'
import three from '../assets/Top-picks/4.png'
import four from '../assets/Top-picks/7.png'
import five from '../assets/Top-picks/8.png'
import six from '../assets/Top-picks/9.png'
export default function TopPicks() {
  const topPicks = [one, two, three, four, five, six]
  return (
    <section id="topPicks" className="w-full bg-primary-100 py-10 md:mt-2">
      {' '}
      {/* Adjust margin for medium screens and above */}
      <div className=" h-[360px] w-full overflow-x-auto overflow-y-hidden">
        <ul className="whitespace-nowrap">
          {topPicks.map((item, index) => (
            <li key={index} className="inline-block mr-4">
              {' '}
              {/* Adjust margin between images */}
              <img src={item} className="h-full max-w-xs" />{' '}
              {/* Set max width for each image */}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
