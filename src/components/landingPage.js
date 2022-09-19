import Star from "./star";
import Header from "./header";
import Paragraph from "./paragraph";
import {RatingBtn} from "./ratingBtn";
import SubmitBtn from "./submitBtn";
import ModalPage from "./modalPage";

function onClick(e){
  console.log(e.target.textContent)
}

function LandingPage() {
  return (
    <>
      
      <section className="landing-page">
        <Star />
        <Header />
        <Paragraph />
        <RatingBtn onClick={onClick}/>
        <SubmitBtn />
      </section>
      <ModalPage onClick={onClick}/>
    </>
  );
}

export default LandingPage;
