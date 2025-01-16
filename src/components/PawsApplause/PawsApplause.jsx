import award from "../../assets/award_illustration.uS1_7n58.svg";

const PawsApplause = () => {
  const totalImage = [
    {
      id: 1,
      image: "https://i.ibb.co.com/DfhHp7Y/award-1-BAj-D0y-Q9.png",
    },
    {
      id: 2,
      image: "https://i.ibb.co.com/nwh7Ht6/award-2-DEXe-OU-N.png",
    },
    {
      id: 3,
      image: "https://i.ibb.co.com/1vjCwf2/award-5-g8d-Dntm-Y.png",
    },
    {
      id: 4,
      image: "https://i.ibb.co.com/whFKHfb/award-CX3d6h-O.png",
    },
    {
      id: 5,
      image: "https://i.ibb.co.com/GxZ7zNx/award-4-Cb3-RGM-h-2.png",
    },
    {
      id: 6,
      image: "https://i.ibb.co.com/FxXG2wK/award-3-D-5-XNTi-N-2.png",
    },
  ];

  return (
    <div className="mb-16 max-w-screen-lg mx-auto">
      <div className="flex justify-center items-center mb-8">
        <img src={award} alt="" />
      </div>
      <div className="my-5 text-center">
        <h2 className="text-4xl font-bold">
          Paws and applause in language learning excellence
        </h2>
        <p className="text-lg font-normal mt-5 w-[80%] mx-auto">
          From fun trophies to shiny medals, our award shelf is getting
          crowded—all thanks to our little language learners and their big
          achievements!
        </p>
      </div>
      <div className="flex justify-between">
        {totalImage.map((image) => (
          <img className="w-[120px] h-auto bg-cover object-cover" src={image.image} alt="" />
        ))}
      </div>
    </div>
  );
};

export default PawsApplause;
