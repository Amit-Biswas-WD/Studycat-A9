import FluencyStartsHere from "../FluencyStartsHere/FluencyStartsHere";
import PawsApplause from "../PawsApplause/PawsApplause";
import Banner from "./Banner/Banner";
import ExpertisePlay from "./ExpertisePlay/ExpertisePlay";
import LessonAdventure from "./LessionAdventure/LessonAdventure";
import UnlockingFluency from "./UnlockingFluency/UnlockingFluency";

const LanguageKids = () => {
  return (
    <div>
      <section className="max-w-screen-xl mx-auto p-2">
        <Banner />
      </section>
      <LessonAdventure />
      <UnlockingFluency />
      <section className="mb-16 mt-32">
        <FluencyStartsHere />
      </section>
      <ExpertisePlay />
      <PawsApplause />
    </div>
  );
};

export default LanguageKids;
