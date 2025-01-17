import Banner from "./../../components/AboutUsConponents/Banner";
import WhatStudycat from "./../../components/AboutUsConponents/WhatStudycat/WhatStudycat";
import OurAchivement from './../../components/AboutUsConponents/OurAchivement/OurAchivement';
import MeetStudycat from './../../components/AboutUsConponents/MeetStudycat/MeetStudycat';
const AboutUs = () => {
  return (
    <div>
      <section>
        <Banner />
        <WhatStudycat />
        <OurAchivement/>
        <MeetStudycat/>
      </section>
    </div>
  );
};

export default AboutUs;
