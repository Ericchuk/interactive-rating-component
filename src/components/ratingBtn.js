import {useState} from 'react';

function RatingBtn(onClick) {
  const [number, setNumber] = useState(["1", "2", "3", "4", "5"]);

  //SELECT VALUE
  const select = (e) => {
   
    setNumber(e)
    console.log(setNumber);
  };
  const numberList = number.map((each) => {
    return (
      <span onClick={select} key={each}>
        {each}
      </span>
    );
  });
  return <aside>{numberList}</aside>;
}

export default RatingBtn;
