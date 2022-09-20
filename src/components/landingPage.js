import RatingPage from "../components/ratingpage";
import Sent from "../interactive-rating-component-main/images/illustration-thank-you.svg";
import { useState } from "react";
  
function LandingPage() {
  const rates = [1, 2, 3, 4, 5];
  let modal
  let [number, setNumber] = useState(0);
  let [check, setCheck] = useState(false);
  const rateItem = rates.map((rate) => {
    return (
      <button className="span"
        onClick={(e) => {
          setNumber(e.target.textContent);
          console.log(check);
        }}
        key={rate}
      >
        {rate}
      </button>
    );
  });
  if(check){
        modal = <section className="modal-page" onClick={() => {
          check = false;
          // console.log(check, "check")
        }}>
        <img src={Sent} alt="sent" />
        <p className="result">You selected {number} out of 5</p>
        <h2>Thank you!</h2>
        <p>
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </p>
      </section>  
      }

  return (
    <>
      <RatingPage number={number} rateItem={rateItem} check={check} setCheck={setCheck}/>
      {modal}
    </>
  );
}

export default LandingPage;
