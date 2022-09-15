import Star from "./star";
import Header from "./header";
import Paragraph from "./paragraph";
import RatingBtn from "./ratingBtn";
import SubmitBtn from "./submitBtn";
import ModalPage from "./modalPage";

function LandingPage() {
  return (
    <>
      <section className="landing-page">
        <Star />
        <Header />
        <Paragraph />
        <RatingBtn />
        <SubmitBtn />
      </section>
      <ModalPage />
    </>
  );
}

export default LandingPage;
