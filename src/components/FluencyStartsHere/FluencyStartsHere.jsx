import studyCat from "../../assets/studycat_adventurer.DHxUIxmG.svg";
import question from "../../assets/New folder/kitty-question.D2JgxErm.svg";
import english from "../../assets/New folder/icon_english-flag.BLdrV-Rf.svg";
import spanish from "../../assets/New folder/icon_spanish-flag.DExHXrhL.svg";
import french from "../../assets/New folder/icon_french-flag.BGJzckFG.svg";
import german from "../../assets/New folder/icon_german-flag.0ucMUeXj.svg";
import chinese from "../../assets/New folder/icon_chinese-flag.zSzskDzd.svg";

const FluencyStartsHere = () => {
  const icons = [
    {
      id: 2,
      name: "Learn English",
      icon: english,
    },
    {
      id: 3,
      name: "Learn Spanish",
      icon: spanish,
    },
    {
      id: 4,
      name: "Learn French",
      icon: french,
    },
    {
      id: 5,
      name: "Learn German",
      icon: german,
    },
    {
      id: 6,
      name: "Learn Chinese",
      icon: chinese,
    },
  ];

  return (
    <div className="mt-16 relative">
      <div className="">
        <img
          className="w-full"
          src="https://i.ibb.co.com/qgD4SQb/Screenshot-12.png"
          alt="First Image"
        />
        <div className="bg-[#499DEC] ">
          <img
            className="absolute -top-24 left-1/2 transform -translate-x-1/2 max-w-[150px]"
            src={studyCat}
            alt="Second Image"
          />
        </div>
      </div>
      <div className="bg-[#499DEC] text-white pt-24">
        <h2 className="md:text-4xl sm:text-2xl max-w-[385px] mx-auto p-2 text-center -top-4 font-bold ">
          Your child's journey to fluency starts here
        </h2>
        <p className="text-lg font-bold text-center my-7 p-2">
          Embark on an exciting language learning voyage with Studycat today!
        </p>
        <p className="text-lg font-normal max-w-[771px] mx-auto text-center py-4 p-2">
          With our engaging, educational apps, your child will discover the joy
          of languages, setting them on a path to global communication and
          understanding.
        </p>
        <div className="grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 max-w-screen-xl mx-auto items-center p-2 gap-4 pb-16">
          <img className="w-[110px] h-auto" src={question} alt="" />
          {icons.map((icon) => (
            <div
              key={icon.id}
              className="flex flex-col items-center px-6 py-10 justify-center text-center space-y-2 text-[#499DEC] border border-[#499DEC] bg-[#DEF0FA] rounded-xl max-w-[170px] max-h-[110px]"
            >
              <img
                className="w-14 h-14 pb-2"
                src={icon.icon}
                alt={icon.name || "Icon"}
              />
              {icon.name && <p className="font-medium text-lg">{icon.name}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FluencyStartsHere;
