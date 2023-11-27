
import './App.css'
import FooterCard from './components/footerCard'

function App() {
  return (
    <>
      <div className='body'>
        <main className='main'>
          <nav className='nav'>
          <img src="src/assets/ironhack-logo-xs.png" width= '60px' />
          <img src="src/assets/menu-top-xs.png" width= '80px' height= '30px' />
          </nav>
          <hr/>
          <div className='inhalt'>
          <header className='header'>
            <h2>Hallo React wie Toll bist Du!</h2>
          </header>
          <div className='text'>
            <h3>Und Alles was es sonst noch so gibt!!</h3>
          </div>
          <button className='btn'>Awesom!</button>
          </div>
        </main>
        <footer className='footer'>
          <FooterCard 
          image = '/src/assets/icon1.png'
          title= 'Title'
          text='Text'
          />
          <FooterCard
          image = '/src/assets/icon2.png'
          title= 'Title'
          text='Text'
          />
          <FooterCard
          image = '/src/assets/icon3.png'
          title= 'Title'
          text='Text'
          />
          <FooterCard
          image = '/src/assets/icon4.png'
          title= 'Title'
          text='Text'
          />
        </footer>
      </div>
    </>
  )
}

export default App
