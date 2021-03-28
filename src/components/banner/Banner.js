import Banner from '../../images/assets_03.jpg'
import '../banner/banner.css'

const banner = () => {
  return (
    <div className='container-banner'>
      <img className='img-banner' src={Banner} alt='banner'  width='1598' height='700'/>
    </div>
  )
}
export default banner