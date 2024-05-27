import instagramLogo from '../assets/instagram.png'
export default function Footer() {
  return (
    <footer className="bottom-0 left-0 w-full bg-zinc-100 shadow-md py-4">
      <div className="container mx-auto flex flex-col items-center">
        <div className="w-full text-center mb-4">
          <h4 className="mb-4 font-bold font-old-standard text-xl md:text-2xl mt-8">
            About
          </h4>
          <p className="text-zinc-700 text-xs md:text-sm ml-4 mr-4 md:ml-10 md:mr-10">
            I'm Lizzie, a mum of 2 and TDW is my side hustle/pipe dream. I love
            fashion but hate fast fashion. After having a disastrous experience
            trying to rent an item for a wedding and it fitting terrible I ended
            up raiding a mate's wardrobe and borrowing a dress.
          </p>
          <p className="mt-3 text-zinc-700 text-xs md:text-sm ml-4 mr-4">
            After chatting with a friend we ended up creating the idea of TDW
            and how there is a market for local clothes rental but there needed
            to be an option to try on. So it started with a bit of dress
            swapping between friends and has slowly grown into this business.
          </p>
          <p className="mt-3 text-zinc-700 text-xs md:text-sm ml-4 mr-4">
            I hope you find an item you love that doesn't have to cost the
            earth.
          </p>
        </div>
        <div className="w-full text-center mb-4">
          <h4 className="mb-2 font-bold font-old-standard text-xl md:text-2xl mt-5">
            Contact
          </h4>
          <a
            href="https://ig.me/m/the_didsbury_wardrobe"
            target="_blank"
            rel="noopener noreferrer"
            className="mb-4 inline-block"
          >
            <img
              src={instagramLogo}
              alt="Instagram"
              style={{ width: '18px', height: '18px' }}
            />
          </a>
        </div>
        <div className="w-full text-center mt-4">
          <p className="text-xs md:text-sm">
            Copyright © 2024. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
