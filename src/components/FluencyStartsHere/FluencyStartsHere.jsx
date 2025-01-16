import studyCat from "../../assets/studycat_adventurer.DHxUIxmG.svg";

const FluencyStartsHere = () => {
  return (
    <div className="my-16">
      <div className="relative">
        <img
          className="relative w-full"
          src="https://i.ibb.co.com/qgD4SQb/Screenshot-12.png"
          alt="First Image"
        />
        <img
          className="absolute -top-24 left-1/2 transform -translate-x-1/2"
          src={studyCat}
          alt="Second Image"
        />
      </div>
    </div>
  );
};

export default FluencyStartsHere;
