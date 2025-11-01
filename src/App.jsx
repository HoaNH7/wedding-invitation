import HeroSection from './components/HeroSection'
import InvitationText from './components/InvitationText'
import EventDetails from './components/EventDetails'
import Gallery from './components/Gallery'
import RSVPForm from './components/RSVPForm'
import Footer from './components/Footer'

function App() {
  return (
    <div className="scroll-smooth">
      <HeroSection />
      <InvitationText />
      <EventDetails />
      <Gallery />
      <RSVPForm />
      <Footer />
    </div>
  )
}

export default App
