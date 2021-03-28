import React, { useState } from 'react'
import BankCode from '../../images/assets_06.jpg'
import RegisterButton from '../../images/assets_09.jpg'
import Modal from '../modal/Modal'
import UseModal from '../../useModal'
import '../content/content.css'

const Content = () => {
  const initialForm = {
  firstName: '',
  lastName: '',
  email: '',
  phone: ''
  }

  const [formValues, setFormValues] = useState(initialForm)
  const {isShowing, toggle} = UseModal();

  const handleOnChange = e => {
    const value = e.target.value
    const name = e.target.name
    setFormValues({...formValues, [name]: value})
    console.log(value)
    console.log(name)
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log('done!')
    console.log(formValues)
  }

  return(
    <div className='container-content-parent'>
      <div className='container-content-left'>
        <div className='content-left'>
          <h2 className='heading-title'>REGISTER FOR THE WEBINAR</h2>
          <p className='paragraph-one'>Learn how to launch your own B.A.N.K. business by helping others communicate and sell more effectively as a Certified and Licensed B.A.N.K. Trainer during our webinar</p>
          <p className='paragraph-two'>Register Today to hear why professionals just like you have chosen to get certified and licensed to train B.A.N.K.</p>
        </div>
      </div>
      <div className='container-content-right'>
        <div className='content-right'>
          <img className='img-bank-code' src={BankCode} alt='Bank Code Banner' />
          <img className='img-register' src={RegisterButton} alt='Bank Code Banner' onClick={toggle} />
          <p className='paragraph-three'>* See our last live session on demand instantly</p>
        </div>
        <Modal
        isShowing={isShowing}
        hide={toggle}
        onChange={handleOnChange}
        handleSubmit={handleSubmit}
        />
      </div>
    </div>
  )
}

export default Content