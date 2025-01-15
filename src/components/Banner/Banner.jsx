import { FaStar } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="flex justify-between">
      <div>
        <div>
          <h2 className="text-[44px] font-bold lg:w-[468px]">
            Fun today. Fluent tomorrow.
          </h2>
        </div>
        <div>
          <p className="text-lg font-normal lg:w-[468px]">
            Studycat makes the best language learning apps for kids! Play,
            laugh, and learn—Studycat’s science-backed games make language
            learning stick! Trusted
          </p>
        </div>
        <div>
          <div>
            <h2 className="text-2xl font-semibold lg:w-[364px]">
              Trusted by over 16 million families
            </h2>
          </div>
          <div>
            <div className="flex gap-2 text-yellow-400">
              <FaStar className="w-12 h-12" />
              <FaStar className="w-12 h-12" />
              <FaStar className="w-12 h-12" />
              <FaStar className="w-12 h-12" />
              <FaStar className="w-12 h-12" />
            </div>
            <h2 className="text-2xl font-semibold">
              37,000+ five star reviews
            </h2>
          </div>
        </div>
      </div>
      <div>
        <img src="https://i.ibb.co.com/MBPfzTk/banner.png" alt="" />
      </div>
    </div>
  );
};

export default Banner;
