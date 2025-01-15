import Banner from "../../components/Banner/Banner";
import ExploreLanguages from "../../components/ExploreLanguages/ExploreLanguages";
import StudycatFree from "../../components/StudycatFree/StudycatFree";
import StudyCatWorks from "../../components/StudycatWorks/StudycatWorks";

const Home = () => {
  return (
    <div className="container mx-auto">
      <Banner />
      <StudyCatWorks />
      <ExploreLanguages/>
      <StudycatFree/>
    </div>
  );
};

export default Home;
