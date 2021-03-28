import Header from '../../images/assets_01.jpg'
import '../header/header.css'

const header = () => {
  return (
    <div className='header-container'>
      <img className='img-header' src={Header} alt='header' width='1598' height='50'/>
    </div>
  )
}

export default header