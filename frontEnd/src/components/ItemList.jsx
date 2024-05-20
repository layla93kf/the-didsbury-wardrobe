import { getItemsByCategory } from '../Api'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import LoadingSpinner from '../components/Loading'

export default function ItemList({ isLoading, setIsLoading }) {
  const [itemList, setItemList] = useState([])
  const { category, clothing_id } = useParams()

  useEffect(() => {
    setIsLoading(true)
    getItemsByCategory(category)
      .then((response) => {
        setItemList(response.data)
        setIsLoading(false)
      })
      .catch((err) => {
        setIsLoading(false)
        return err
      })
  }, [category])

  const capitalisedCategory =
    category.charAt(0).toUpperCase() + category.slice(1)

  return isLoading ? (
    <>
      <LoadingSpinner />
    </>
  ) : (
    <div className="item">
      <div className="bg-stone-100  text-center h-100 pt-12 pb-10">
        <h2 className="text-3xl mb-2 ">Rent Women's {capitalisedCategory}</h2>
        <h3 className="text-lg  ">
          Discover the latest rental pieces from top brands and labels at The
          Didsbury Wardrobe.
        </h3>
      </div>
      <ul className="items">
        <div className="grid grid-cols-2 mb-20 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-2 md:gap-6">
          {itemList.map((item, index) => (
            <Link to={`/api/items/${item.clothing_id}`}>
              <li key={index} className="item mb-8 p-5">
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: 0,
                    paddingTop: '100%',
                    paddingBottom: 0,
                    boxShadow: '1px 1px 1px 1px rgba(63,69,81,0.16)',
                    marginTop: '0.5em',
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

                  <h2 className="font-semibold font-work-sans z-50 mt-3 text-l ml-2 uppercase">
                    {item.origin}
                  </h2>
                  <h5 className="text-sm font-work-sans z-50 mt-1 ml-2">
                    {item.price}
                  </h5>
                </div>
              </li>
            </Link>
          ))}
        </div>
      </ul>
    </div>
  )
}
