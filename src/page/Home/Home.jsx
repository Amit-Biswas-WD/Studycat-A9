import Banner from "../../components/Banner/Banner";
import ExploreLanguages from "../../components/ExploreLanguages/ExploreLanguages";
import InteractiveLearning from "../../components/InteractiveLearning/InteractiveLearning";
import ScienceAndFun from "../../components/ScienceAndFun/ScienceAndFun";
import StudycatFree from "../../components/StudycatFree/StudycatFree";
import StudyCatWorks from "../../components/StudycatWorks/StudycatWorks";

const Home = () => {
  return (
    <div>
      <section className="container mx-auto">
        <Banner />
        <StudyCatWorks />
        <ExploreLanguages />
      </section>
      <StudycatFree />
      <ScienceAndFun />
      <InteractiveLearning />
    </div>
  );
};

export default Home;
