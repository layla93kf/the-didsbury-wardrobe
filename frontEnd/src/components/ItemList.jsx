import { getItemsByCategory } from '../Api'
import { useEffect, useState } from 'react'
import NavBar from './NavBar'

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

  return <div></div>
  // <div className="item">
  //   <ul className="items">
  //     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
  //       {itemList.map((item, index) => (
  //         <li key={index} className="item mb-8">
  //           <div className="relative w-full h-0 aspect-w-1 aspect-h-1 md:aspect-h-1 md:aspect-w-1 lg:aspect-h-1 lg:aspect-w-1 xl:aspect-h-1 xl:aspect-w-1 rounded-lg overflow-hidden">
  //             <iframe
  //               loading="lazy"
  //               style={{
  //                 position: 'absolute',
  //                 width: '100px',
  //                 height: '20%',
  //                 top: 0,
  //                 left: 0,
  //                 border: 'none',
  //                 padding: 0,
  //                 margin: 0,
  //               }}
  //               src={item.photos}
  //             ></iframe>
  //             <div className="p-4">
  //               <h2 className="name text-xl font-work-sans">{item.name}</h2>
  //               <h4 className="origin font-work-sans">{item.shop}</h4>
  //               <p className="size font-work-sans">{item.size}</p>
  //               <h5 className="price font-work-sans">{item.price}</h5>
  //             </div>
  //           </div>
  //         </li>
  //       ))}
  //     </div>
  //   </ul>
  // </div>
}
