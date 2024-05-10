import { getItemsByCategory } from '../Api'
import { useEffect, useState } from 'react'

export default function ItemList() {
  const [itemList, setItemList] = useState([])
  useEffect(() => {
    getItemsByCategory('dresses')
      .then((response) => {
        console.log(response)
        setItemList(response.data)
      })
      .catch((err) => {
        return err
      })
  }, [])

  return (
    <div className="item">
      <ul className="items">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {itemList.map((item, index) => (
            <li key={index} className="item mb-8">
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: 0,
                  paddingTop: '100%',
                  paddingBottom: 0,
                  boxShadow: '1px 1px 1px 1px rgba(63,69,81,0.16)',
                  marginTop: '1.6em',
                  marginBottom: '1em',

                  borderRadius: '8px',
                  willChange: 'transform',
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
                    padding: 0,
                    margin: 0,
                  }}
                  src={item.photos}
                  allowFullScreen="allowfullscreen"
                  allow="fullscreen"
                ></iframe>

                <h2 className="font-semibold font-work-sans z-50 mt-3 text-l ml-2">
                  {item.origin}
                </h2>
                <h5 className="text-sm font-work-sans z-50 mt-1 ml-2">
                  {item.price}
                </h5>
              </div>
            </li>
          ))}
        </div>
      </ul>
    </div>
  )
}
