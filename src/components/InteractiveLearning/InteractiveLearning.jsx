import book from "../../assets/icon_book.WRBdUA7w.svg";
import setting from "../../assets/icon_cog.DkzxKEcf.svg";
import rocket from "../../assets/icon_rocket.DhNrV_wL.svg";
import goal from "../../assets/icon_goal.ChrsNlSo.svg";
import product from "../../assets/products_island_divider_lg.CMDLJz_C.svg";

const InteractiveLearning = () => {
  return (
    <div className="">
      <img src={product} className="w-full" alt="product img" />
      <div className="bg-[#499DEC] lg:pt-16 pt-6 px-2">
        <h2 className="lg:text-4xl text-2xl font-bold text-center text-white">
          A world of interactive learning...and cats!
        </h2>
        <p className="text-lg font-normal text-white text-center py-4 px-4">
          Step into StudyCat's vibrant world, where every click and swipe
          unveils a treasure trove of educational riches.
        </p>
      </div>
      <div className="bg-[#499DEC] pt-8">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-9 gap-8">
            <div className="col-span-4 bg-slate-200 text-center p-8 rounded-xl">
              <div>
                <div className="flex justify-center items-center mb-4">
                  <img src={book} alt="Book Not Found" />
                </div>
                <h2 className="lg:text-3xl text-xl font-bold">
                  Expansive learning content
                </h2>
              </div>
              <div className="mt-4">
                <p className="text-lg font-normal">
                  With hundreds of games and activities in each of five
                  languages, our platform ensures a rich, varied learning
                  experience.
                </p>
                <p className="text-lg font-normal my-4">
                  From farm animals to clothing, each theme is designed to
                  captivate and educate, keeping the adventure fresh and
                  engaging.
                </p>
              </div>
            </div>

            <div className="col-span-4 bg-slate-200 text-center p-8 rounded-xl">
              <div>
                <div className="flex justify-center items-center mb-4">
                  <img src={setting} alt="Setting Icon" />
                </div>
                <h2 className="lg:text-3xl text-xl font-bold">
                  Engagement beyond the screen
                </h2>
              </div>
              <div className="mt-4">
                <p className="text-lg font-normal">
                  With a blend of digital and physical activities, learning
                  extends into the real world, bridging the gap between online
                  education and tangible practice.
                </p>
              </div>
            </div>

            <div className="col-span-4 bg-slate-200 text-center p-8 rounded-xl">
              <div>
                <div className="flex justify-center items-center mb-4">
                  <img src={rocket} alt="Rocket Icon" />
                </div>
                <h2 className="lg:text-3xl text-xl font-bold">
                  Award-winning excellence
                </h2>
              </div>
              <div className="mt-4">
                <p className="text-lg font-normal">
                  Recognized for innovation and effectiveness in education,
                  Studycat has received accolades from prestigious educational
                  bodies, underlining our commitment to quality and impact.
                </p>
              </div>
            </div>

            <div className="col-span-4 bg-slate-200 text-center p-8 rounded-xl">
              <div>
                <div className="flex justify-center items-center mb-4">
                  <img src={goal} alt="Goal Icon" />
                </div>
                <h2 className="lg:text-3xl text-xl font-bold">
                  Full language immersion
                </h2>
              </div>
              <div className="mt-4">
                <p className="text-lg font-normal">
                  Learn a language...in that language! All our activities are
                  designed so your child engages only with the language they're
                  learning.
                </p>
                <p className="text-lg font-normal my-4">
                  This might be confusing at first, but trust us, it's the best
                  way to learn.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveLearning;
