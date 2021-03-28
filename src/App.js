import Header from './components/header/Header'
import Banner from './components/banner/Banner'
import Content from './components/content/Content'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <div className='container-home'>
      <Header />
      <Banner />
      <Content />
      <Footer />
    </div>
  )
}

export default App