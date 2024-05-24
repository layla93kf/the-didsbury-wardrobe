import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getItemById } from '../Api'
import useMediaQuery from '../hooks/useMediaQuery'

export default function ItemList() {
  const { clothing_id } = useParams()
  const [singleItem, setSingleItem] = useState({})

  useEffect(() => {
    getItemById(clothing_id)
      .then((response) => {
        setSingleItem(response.data[0])
      })
      .catch((err) => {
        console.error(err)
      })
  }, [clothing_id])

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
              loading="lazy"
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
            <div className="bg-zinc-100 p-4 rounded-lg mb-4 w-full md:w-60">
              <p>Worried about fit?</p>
              <p>You can come and try on free of charge!</p>
            </div>
            <a
              href="https://ig.me/m/the_didsbury_wardrobe"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="border-2 bg-zinc-100 text-black p-4 hover:bg-zinc-800 hover:text-white rounded w-full">
                Message me to arrange a fit or a rental!
              </button>
            </a>
          </div>
        </>
      )}
    </div>
  )
}
