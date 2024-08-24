import { useState, useEffect } from 'react';
import { getRandomItems } from '../Api';

import OverlayClickableIframe from './clickableOverlay';

export default function TopPicks() {
  const [topPicks, setTopPicks] = useState([]);

  useEffect(() => {
    getRandomItems()
      .then((response) => {
        setTopPicks(response.data);
      })
      .catch((err) => {
        return err;
      });
  }, []);

  return (
    <section id="topPicks" className="w-full bg-primary-100 py-10 md:mt-2">
      <div className="h-[360px] w-full overflow-x-auto overflow-y-hidden bg-zinc-100 pt-5">
        <ul className="flex space-x-4">
          {topPicks.map((item) => (
            <li key={item.clothing_id} className="w-64 flex-shrink-0">
              <div
                className="block p-2 bg-white rounded-lg shadow-md"
                style={{
                  position: 'relative',
                  width: '100%',
                  paddingBottom: '120%',
                  overflow: 'hidden',
                  borderRadius: '8px',
                  boxShadow: '1px 1px 1px 1px rgba(63,69,81,0.16)',
                }}
              >
                <OverlayClickableIframe
                  src={item.photos}
                  clothingId={item.clothing_id}
                />
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 10,
                    zIndex: 20,
                  }}
                >
                  <h2 className=" font-semibold font-work-sans text-l uppercase">
                    {item.origin}
                  </h2>
                  <h5 className="text-sm font-work-sans mt-1 mb-2">
                    {item.price}
                  </h5>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
