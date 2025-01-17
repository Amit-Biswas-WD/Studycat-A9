import LearnBanner from "./../../components/LearningResources/Banner";
import BannerCard from './../../components/LearningResources/BannerCard/BannerCard';

const LearningResources = () => {
  return (
    <div className="max-w-screen-lg mx-auto p-2">
      <LearnBanner />
      <BannerCard/>
    </div>
  );
};

export default LearningResources;
