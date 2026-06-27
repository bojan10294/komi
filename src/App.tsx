import Hero from './components/Hero/Hero'
import Details from './components/Details/Details'
import Gallery from './components/Gallery/Gallery'
import Countdown from './components/Countdown/Countdown'
import Rsvp from './components/Rsvp/Rsvp'
import Map from './components/Map/Map'
import FixedRsvpButton from './components/FixedRsvpButton/FixedRsvpButton'

function App() {
  return (
    <main className="min-h-screen" style={{ scrollBehavior: 'smooth' }}>
      <Hero />
      <Details />
      <Gallery />
      <Countdown />
      <Rsvp />
      <Map />
      <FixedRsvpButton />
    </main>
  )
}

export default App
