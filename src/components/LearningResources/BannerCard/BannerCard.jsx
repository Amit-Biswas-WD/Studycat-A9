import icon1 from "../../../assets/LearnPage/icon-1.svg";
import icon2 from "../../../assets/LearnPage/icon-2.svg";
import icon3 from "../../../assets/LearnPage/icon-3.svg";
import icon4 from "../../../assets/LearnPage/icon-4.svg";
import icon5 from "../../../assets/LearnPage/icon-5.svg";

const BannerCard = () => {
  const icons = [
    {
      id: 1,
      icon: icon1,
      name: "English",
    },
    {
      id: 2,
      icon: icon2,
      name: "Spanish",
    },
    {
      id: 3,
      icon: icon3,
      name: "French",
    },
    {
      id: 4,
      icon: icon4,
      name: "German",
    },
    {
      id: 5,
      icon: icon5,
      name: "Chinese",
    },
  ];

  return (
    <div className="grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 max-w-screen-xl mx-auto items-center p-2 gap-4 pb-16">
      <h2 className="text-2xl font-semibold max-w-[172px]">Choose a language:</h2>
      {icons.map((icon) => (
        <div
          key={icon.id}
          className="flex flex-col items-center px-6 py-10 justify-center text-center text-[#499DEC] border border-[#499DEC] bg-white rounded-xl max-w-[152px] max-h-[187px]"
        >
          <img
            className="w-40 h-auto pb-2"
            src={icon.icon}
            alt={icon.name || "Icon"}
          />
          {icon.name && <p className="font-medium text-lg">{icon.name}</p>}
        </div>
      ))}
    </div>
  );
};

export default BannerCard;
