import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getItemById } from '../Api'
import useMediaQuery from '../hooks/useMediaQuery'
import { Link } from 'react-router-dom'

export default function ItemList() {
  const { clothing_id } = useParams()
  const [singleItem, setSingleItem] = useState({})
  const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)')

  useEffect(() => {
    getItemById(clothing_id)
      .then((response) => {
        setSingleItem(response.data[0])
      })
      .catch((err) => {
        console.error(err)
      })
  }, [clothing_id])

  if (isAboveMediumScreens) {
    return (
      <div className="flex flex-col md:flex-row md:items-start p-4">
        {singleItem && (
          <>
            <div
              className="relative w-full md:w-1/2 md:pt-25 md:pr-4"
              style={{
                flex: '1',
                position: 'relative',
                width: '50%',
                height: 0,
                paddingTop: '25%',
                paddingBottom: 0,
                willChange: 'transform',
                marginLeft: '50px',
                marginBottom: '40px',
                marginTop: '60px',
              }}
            >
              <iframe
                className="absolute inset-0 w-full h-full md:relative md:w-[53%] md:h-full md:top-0 md:left-[270px] md:border md:border-white"
                style={{
                  position: 'absolute',
                  width: '53%',
                  height: '100%',
                  top: 0,
                  left: 270,
                  border: 'solid',
                  borderBlockWidth: '1px',
                  borderColor: 'white',
                  padding: 0,
                  margin: 0,
                }}
                src={singleItem.photos}
                allowFullScreen="allowfullscreen"
                allow="fullscreen"
              ></iframe>
            </div>
            <div className="flex-1 mt-4 md:mt-14 md:ml-4">
              <h1 className="font-open-sans text-2xl mb-3 uppercase">
                {singleItem.origin}
              </h1>
              <p className="mb-3 text-ml">{singleItem.name}</p>
              <p className="mb-3 text-ml">{singleItem.price}</p>
              <p className="text-ml mb-7">UK {singleItem.size}</p>
              <div className="bg-zinc-100 p-4 mb-7 md:w-80 leading-relaxed text-sm text-gray-700">
                <p className="mb-6">Worried about fit?</p>
                <p>
                  {' '}
                  You can come and try on for a fee redeemable against the hire.
                  You can also try on multiple items at once to find your
                  perfect outfit for that special occasion!
                  <Link to="/">
                    <p className="underline mt-2">
                      Press here to find out how it works.
                    </p>
                  </Link>
                </p>
              </div>
              <a
                href="https://ig.me/m/the_didsbury_wardrobe"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="border-2 mb-10 bg-zinc-800 text-white p-4 hover:bg-zinc-700 hover:text-white rounded w-1/3">
                  {' '}
                  Try on or rent
                </button>
              </a>
            </div>
          </>
        )}
      </div>
    )
  } else if (!isAboveMediumScreens) {
    return (
      <div className="flex flex-col">
        {singleItem && (
          <>
            <div
              className="relative"
              style={{
                flex: '1',
                position: 'relative',
                width: '100%',
                height: '200%',
                paddingTop: 0,
                paddingBottom: 0,
                willChange: 'transform',
                marginLeft: '130px',
                marginRight: '60px',
                marginBottom: '20px',
              }}
            >
              <iframe
                className="absolute inset-0 "
                style={{
                  position: 'relative',
                  width: '40%',
                  height: '100%',
                  top: 0,
                  left: 0,
                  right: 0,
                  border: 'solid',
                  borderBlockWidth: '1px',
                  borderColor: 'white',
                }}
                src={singleItem.photos}
                allowFullScreen="allowfullscreen"
                allow="fullscreen"
              ></iframe>
            </div>
            <div className="flex-1 ml-5 mt-4 md:mt-14 md:ml-4">
              <h1 className="font-open-sans text-2xl mb-3 uppercase">
                {singleItem.origin}
              </h1>
              <p className="mb-3 text-ml">{singleItem.name}</p>
              <p className="mb-3 text-ml">{singleItem.price}</p>
              <p className="text-ml mb-7">UK {singleItem.size}</p>
              <div className="bg-zinc-100 p-4 mb-10 w-80 text-sm text-gray-700 ">
                <p className="mb-4">Worried about fit?</p>
                <p>
                  You can come and try on free of charge. You can also try on
                  multiple items at once to find your perfect outfit for that
                  special occasion!
                  <Link to="/">
                    <p className="underline mt-2">
                      Press here to find out how it works.
                    </p>
                  </Link>
                </p>
              </div>
              <a
                href="https://ig.me/m/the_didsbury_wardrobe"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="border-2 text-sm bg-zinc-800 text-white p-4 hover:bg-zinc-700 hover:text-white rounded w-30 mb-20">
                  {' '}
                  Try on or rent
                </button>
              </a>
            </div>
          </>
        )}
      </div>
    )
  }
}
