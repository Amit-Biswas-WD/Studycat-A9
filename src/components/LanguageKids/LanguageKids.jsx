import Banner from "./Banner/Banner";
import LessonAdventure from "./LessionAdventure/LessonAdventure";
import UnlockingFluency from "./UnlockingFluency/UnlockingFluency";

const LanguageKids = () => {
  return (
    <div>
      <section className="max-w-screen-xl mx-auto p-2">
        <Banner />
      </section>
      <LessonAdventure />
      <UnlockingFluency/>
    </div>
  );
};

export default LanguageKids;
