import FooterHeaderImage from '../../images/footer_02.jpg'
import FollowBankFBIcon from '../../images/footer_08.jpg'
import FollowBankTWIcon from '../../images/footer_09.jpg'
import FollowBankLiIcon from '../../images/footer_10.jpg'
import FollowBankYTIcon from '../../images/footer_11.jpg'
import FollowIGIcon from '../../images/footer_12.jpg'
import AgentPortrait from '../../images/footer_05.jpg'
import HorizantalRule from '../../images/footer_13.jpg'
import '../footer/footer.css'

const Footer = () => {
  return(
    <div className='container-footer'>
      <div className='container-header-image'>
        <img className='img-footer' src={FooterHeaderImage} alt='footer-asset' width='1598' height='38'/>
        <div className='links-section'>
          <div className='follow-bank'>
            <h3 className='follow-bank-header'>FOLLOW B.A.N.K.</h3>
            <div className='link-social-media'>
              <div><img className='img-bank-follow-FB' src={FollowBankFBIcon} alt='follow Bank FB' width='35' height='35' /></div>
              <div><img className='img-bank-follow-TW' src={FollowBankTWIcon} alt='follow Bank TW' width='35' height='35' /></div>
              <div><img className='img-bank-follow-LI' src={FollowBankLiIcon} alt='follow Bank LI' width='35' height='35' /></div>
              <div><img className='img-bank-follow-YT' src={FollowBankYTIcon} alt='follow Bank YT' width='35' height='35' /></div>
            </div>
            <div className='bankcode-details'><p>BANKCODE.COM &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; INFO@BANKCODE.COM &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;  702-302-0742</p></div>
          </div>
          <div className='follow-me-details'>
            <h3 className='agent-contact-me'>CONNECT WITH ME</h3>
            <div className='follow-me'><img className='img-agent-portrait' src={AgentPortrait} alt='agent portrait' /></div>
            <div className='contact-details'>
                <p className='agent-name'>ESTHER WILDENBERG</p>
                <p className='agent-domain'>BANKCODE.COM/ESTHER</p>
                <p className='agent-email'>ESTHER@BANKCODE.COM</p>
                <p className='agent-phone'>702-342-0742</p>
            </div>
            <div className='quick-link-agent'>
              <div><img className='img-agent-follow-FB' src={FollowBankFBIcon} alt='follow Bank FB' width='35' height='35' /></div>
              <div><img className='img-agent-follow-TW' src={FollowBankTWIcon} alt='follow Bank TW' width='35' height='35' /></div>
              <div><img className='img-agent-follow-LI' src={FollowBankLiIcon} alt='follow Bank LI' width='35' height='35' /></div>
              <div><img className='img-agent-follow-IG' src={FollowIGIcon} alt='follow Bank IG' width='35' height='35' /></div>
            </div>
          </div>
        </div>
        <img className='img-footer' src={HorizantalRule} alt='footer-asset' width='1598' height='79'/>
        <div className='container-terms'>
        <p className='terms'>©2018 BANKCODE | Privacy Policy | Terms of Service | System Requirements | All Rights Reserved</p>
        </div>
      </div>
    
    </div>
  )
}

export default Footer