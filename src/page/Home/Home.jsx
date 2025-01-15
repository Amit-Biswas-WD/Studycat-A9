import Banner from "../../components/Banner/Banner";
import ExploreLanguages from "../../components/ExploreLanguages/ExploreLanguages";
import StudyCatWorks from "../../components/StudycatWorks/StudycatWorks";

const Home = () => {
  return (
    <div className="container mx-auto">
      <Banner />
      <StudyCatWorks />
      <ExploreLanguages/>
    </div>
  );
};

export default Home;
