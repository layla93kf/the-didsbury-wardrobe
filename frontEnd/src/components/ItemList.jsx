import { getItemsByCategory } from '../../Api'

export default function ItemList() {
  useEffect(() => {
    getItemsByCategory('Dresses')
      .then((response) => {
        console.log(response)
      })
      .catch((err) => {
        return err
      })
  }, [])

  return (
    <div className="item">
      <ul className="items">
        {itemList.map((item) => {
          return (
            <li className="item">
              <h2 className="name">{item.name}</h2>
              <h4 className="origin">{item.shop}</h4>
              <p className="size">{item.size}</p>

              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: 0,
                  paddingTop: '100.0000%',
                  paddingBottom: 0,
                  boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)',
                  marginTop: '1.6em',
                  marginBottom: '0.9em',
                  overflow: 'hidden',
                  borderRadius: '8px',
                  willChange: 'transform',
                }}
              >
                <iframe
                  loading="lazy"
                  style={{
                    position: 'absolute',
                    width: '20%',
                    height: '20%',
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
              </div>
              <h5 className="price">{item.price}</h5>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
