import instagramLogo from '../assets/instagram.png'

export default function Footer() {
  return (
    <footer className=" bottom-0 left-0 w-full bg-zinc-100 shadow-md py-4">
      <div className="container mx-auto flex justify-center items-center">
        <div className="mx-4">
          <h4 className="mb-2 font-semibold">About</h4>
          <p className="text-center">
            Get text from Lizzie to explain about the Didsbury wardrobe
          </p>
        </div>
        <div className="mx-4">
          <h4 className="mb-2 font-semibold">Contact</h4>
          <a
            href="https://ig.me/m/the_didsbury_wardrobe"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={instagramLogo}
              alt="Instagram"
              style={{ width: '18px', height: '18px' }}
            />
          </a>
        </div>
      </div>
    </footer>
  )
}
