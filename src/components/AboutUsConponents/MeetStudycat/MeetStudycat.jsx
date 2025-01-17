import icon1 from "../../../assets/New folder (2)/icon-1.svg";
import icon2 from "../../../assets/New folder (2)/icon-2.svg";
import icon3 from "../../../assets/New folder (2)/icon-3.svg";
import icon4 from "../../../assets/New folder (2)/icon-4.svg";
import icon5 from "../../../assets/New folder (2)/icon-5.svg";
import icon6 from "../../../assets/New folder (2)/icon-6.svg";
import icon7 from "../../../assets/New folder (2)/icon-7.svg";
import icon8 from "../../../assets/New folder (2)/icon-8.svg";

const MeetStudycat = () => {
  const icons = [
    {
      id: 1,
      title: "Alan Thornton",
      type: "Game developer",
      icon: icon1,
    },
    {
      id: 2,
      title: "Alvin Yew",
      type: "CFO",
      icon: icon2,
    },
    {
      id: 3,
      title: "Amy Feng",
      type: "Data Analyst",
      icon: icon3,
    },
    {
      id: 4,
      title: "Charles Normann",
      type: "CTO",
      icon: icon4,
    },
    {
      id: 5,
      title: "Allen Lin",
      type: "Senior developer",
      icon: icon5,
    },
    {
      id: 6,
      title: "Amanda Liou",
      type: "Office Manager",
      icon: icon6,
    },
    {
      id: 7,
      title: "Catherine Lu",
      type: "Senior designer",
      icon: icon7,
    },
    {
      id: 8,
      title: "Chris Bryant",
      type: "Chief Growth Officer",
      icon: icon8,
    },
  ];

  return (
    <div className="my-16 max-w-screen-lg mx-auto p-2">
      <div className="text-center">
        <h2 className="text-4xl font-bold">Meet the Studycat team</h2>
        <div className="max-w-[771px] mx-auto">
          <p className="text-lg font-normal my-8">
            Behind every playful lesson and giggly learning session is the
            Studycat team—a diverse group of educators, artists, and tech
            enthusiasts united by a common goal: to revolutionize language
            learning for children.
          </p>
          <p className="text-lg font-normal my-8">
            Spanning all around the world, our team members speak over 15
            languages and help infuse our projects with cultural richness from
            more than 10 countries.
          </p>
          <p className="text-lg font-normal my-8">
            This international mosaic of talent ensures Studycat offers a
            genuinely global learning experience, tailored to engage and educate
            children across different cultures and languages.
          </p>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-2 mt-14">
          {icons.map((icon) => (
            <div className=" mx-auto">
              <img className="w-[70%] h-auto" src={icon.icon} alt="" />
              <h2 className="text-xl font-bold">{icon.title}</h2>
              <p className="text-base font-semibold">{icon.type}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MeetStudycat;
