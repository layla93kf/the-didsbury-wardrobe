// import one from '../assets/Top-picks/1.png'
// import two from '../assets/Top-picks/2.png'
// import three from '../assets/Top-picks/4.png'
// import four from '../assets/Top-picks/7.png'
// import five from '../assets/Top-picks/8.png'
// import six from '../assets/Top-picks/9.png'
import { useState, useEffect } from 'react'
import { getRandomItems } from '../Api'
import { Link } from 'react-router-dom'

export default function TopPicks() {
  const [topPicks, setTopPicks] = useState([])

  useEffect(() => {
    getRandomItems()
      .then((response) => {
        setTopPicks(response.data)
      })
      .catch((err) => {
        return err
      })
  }, [])

  return (
    <section id="topPicks" className="w-full bg-primary-100 py-10 md:mt-2">
      <div className="h-[360px] w-full overflow-x-auto overflow-y-hidden bg-zinc-100 pt-5 ">
        <ul className="flex space-x-4">
          {topPicks.map((item) => (
            <li key={item.clothing_id} className="w-64 flex-shrink-0">
              <Link
                to={`/api/items/${item.clothing_id}`}
                className="block p-2 bg-white rounded-lg shadow-md"
              >
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    paddingBottom: '100%',
                    overflow: 'hidden',
                    borderRadius: '8px',
                    boxShadow: '1px 1px 1px 1px rgba(63,69,81,0.16)',
                  }}
                >
                  <iframe
                    loading="lazy"
                    style={{
                      position: 'absolute',
                      width: '100%',
                      height: '100%',
                      top: 0,
                      left: 0,
                      border: 'none',
                    }}
                    src={item.photos}
                    allowFullScreen
                  ></iframe>
                </div>
                <h2 className="font-semibold font-work-sans mt-3 text-l uppercase">
                  {item.origin}
                </h2>
                <h5 className="text-sm font-work-sans mt-1">{item.price}</h5>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
