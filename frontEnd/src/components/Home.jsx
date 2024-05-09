import HowItWorks from './HowItWorks'
import TopPicks from './TopPicks'
import Banner from './Banner'
import NavBar from './NavBar'
import Footer from './Footer'
import Header from './Header'

export default function Home() {
  return (
    <>
      <Banner />
      <Header />
      <NavBar />
      <TopPicks />
      <HowItWorks />
      <Footer />
    </>
  )
}
