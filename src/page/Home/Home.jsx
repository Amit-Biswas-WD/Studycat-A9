import Banner from "../../components/Banner/Banner";
import ExploreLanguages from "../../components/ExploreLanguages/ExploreLanguages";
import FluencyStartsHere from "../../components/FluencyStartsHere/FluencyStartsHere";
import InteractiveLearning from "../../components/InteractiveLearning/InteractiveLearning";
import LearnKid from "../../components/LearnKid/LearnKid";
import ParentsStudycat from "../../components/ParentsStudycat/ParentsStudycat";
import PawsApplause from "../../components/PawsApplause/PawsApplause";
import SafeLearning from "../../components/SafeLearning/SafeLearning";
import ScienceAndFun from "../../components/ScienceAndFun/ScienceAndFun";
import StudyCatSocial from "../../components/StudyCatSocial/StudyCatSocial";
import StudyCatWorks from "../../components/StudycatWorks/StudycatWorks";
import StudyCatFree from "./../../components/StudycatFree/StudycatFree";

const Home = () => {
  return (
    <div>
      <Banner />
      <FluencyStartsHere />
      <section className="max-w-screen-lg mx-auto p-2">
        <StudyCatWorks />
        <ExploreLanguages />
        <StudyCatFree />
        <ScienceAndFun />
      </section>
      <InteractiveLearning />
      <section className="max-w-screen-lg mx-auto">
        <LearnKid />
        <SafeLearning />
      </section>
      <section>
        <ParentsStudycat />
        <PawsApplause />
        <StudyCatSocial />
      </section>
    </div>
  );
};

export default Home;
