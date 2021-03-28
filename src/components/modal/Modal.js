import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ isShowing, hide, onChange, handleSubmit }) => isShowing ? ReactDOM.createPortal(
  <React.Fragment>
    <div className="modal-overlay"/>
    <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
      <div className="modal">
        <div className="modal-header">
          <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <form className='modal-form' onSubmit={handleSubmit}>
          <h3>PLEASE PROVIDE DETAILS:</h3>
          <label className='label-first-name'>
            <p className='first-name'>First Name:</p>
            <input
              type='text'
              name='firstName'
              className='input-first-name'
              maxLength='20'
              pattern='[a-zA-Z\s]+'
              placeholder='Your First name?'
              onChange={e=>onChange(e)}
              required
            />
          </label>
          <label className='label-last-name'>
            <p className='last-name'>Last Name:</p>
            <input
              type='text'
              name='lastName'
              className='input-last-name'
              maxLength='20'
              pattern='[a-zA-Z\s]+'
              placeholder='Your Last name?'
              onChange={e=>onChange(e)}
              required
            />
          </label>
          <label className='label-email'>
            <p className='email'>Email</p>
            <input
              type='text'
              name='email'
              className='input-email'
              maxLength='30'
              pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$'
              placeholder='Your Email?'
              onChange={e=>onChange(e)}
              required
            />
          </label>
          <label className='label-phone'>
            <p className='phone'>Phone Number</p>
            <input
              type='text'
              name='phone'
              className='input-phone'
              maxLength='12'
              pattern='[0-9]{11,}'
              placeholder='Your Phone Number?'
              onChange={e=>onChange(e)}
              required
              style={{paddingbottom: 40}}
            />
          </label><br /><br />
          <p className='form-note'><b>NOTE:</b></p>
          <p className='form-note'>First name field only allows alphabetical characters, small and big caps.</p>
          <p className='form-note'>Last name field only allows alphabetical characters, small and big caps.</p>
          <p className='form-note'>Email field only allows alphabetical characters, small and big caps. special characters allowed.</p>
          <p className='form-note'>Phone field only allows numerical characters. </p><br />
          <input type='submit' value='Submit' className='button-submit'/>
        </form>
      </div>
    </div>
  </React.Fragment>, document.body
) : null;

export default Modal;