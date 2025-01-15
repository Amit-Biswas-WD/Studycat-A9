import Banner from "../../components/Banner/Banner";
import ExploreLanguages from "../../components/ExploreLanguages/ExploreLanguages";
import InteractiveLearning from "../../components/InteractiveLearning/InteractiveLearning";
import LearnKid from "../../components/LearnKid/LearnKid";
import SafeLearning from "../../components/SafeLearning/SafeLearning";
import ScienceAndFun from "../../components/ScienceAndFun/ScienceAndFun";
import StudycatFree from "../../components/StudycatFree/StudycatFree";
import StudyCatWorks from "../../components/StudycatWorks/StudycatWorks";

const Home = () => {
  return (
    <div>
      <Banner />
      <section className="max-w-screen-lg mx-auto">
        <StudyCatWorks />
        <ExploreLanguages />
        <StudycatFree />
        <ScienceAndFun />
      </section>
        <InteractiveLearning />
      <section className="max-w-screen-lg mx-auto">
        <LearnKid />
        <SafeLearning/>
      </section>
    </div>
  );
};

export default Home;
