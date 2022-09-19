import {useState} from "react"

//SELECT VALUE


function RatingBtn({ onClick }) {
  const number = ["1", "2", "3", "4", "5"];
  let [numbers, setNumber] = useState(0)

  const numberList = number.map((each) => {
    return (
      <span onClick={onClick} key={each}>
        {each}
      </span>
    );
  });
  return <aside>{numberList}</aside>;
}

export { RatingBtn };
