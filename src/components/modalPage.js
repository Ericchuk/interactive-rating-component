import Sent from '../interactive-rating-component-main/images/illustration-thank-you.svg'
// import  from './ratingBtn';

function ModalPage({onClick}){
    return (
      <section className='modal-page'>
        <img src={Sent} alt="sent" />
        <p className="result">
          You selected 0 out of 5
        </p>
        <h2>Thank you!</h2>
        <p>
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </p>
      </section>
    );
}

export default ModalPage;