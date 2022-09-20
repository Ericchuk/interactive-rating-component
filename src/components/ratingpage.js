import iconStar from "../interactive-rating-component-main/images/icon-star.svg";

function RatingPage({number, rateItem, check, setCheck}) {
  return (
    <>
    
      <section className="landing-page">
        <img src={iconStar} alt="star" />
        <h2>How did we do?</h2>
        <p>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
        <aside>{rateItem}</aside>
        <button className="button"
          onClick={(e) => {
            if (number > "0") {
              setCheck(check = true)
            }    
          }}
        >
          SUBMIT
        </button>
      </section>
    </>
  );
}


export default RatingPage;