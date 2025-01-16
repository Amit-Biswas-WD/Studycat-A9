import product from "../../../assets/products_island_divider_lg.CMDLJz_C.svg";
import video from "../../../assets/New folder/Pre-Shop-video_v1 (3).mp4";

const LessonAdventure = () => {
  return (
    <div className="text-white">
      <img src={product} className="w-full" alt="product img" />
      <div className="bg-[#499DEC] lg:pt-16 pt-6 px-2">
        <h2 className="lg:text-4xl text-2xl font-bold text-center text-white">
          A world of interactive learning...and cats!
        </h2>
        <p className="text-lg font-normal text-white text-center px-4 max-w-[771px] mx-auto pt-4">
          Here's what makes our learning adventures so special:
        </p>
      </div>
      <div className="bg-[#499DEC] pt-8">
        <div className="max-w-screen-lg mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center mt-16">
            {/* Text Section */}
            <div className="order-2 md:order-1 px-4">
              <p className="text-lg font-normal">
                Here's what makes our learning adventures so special:
              </p>
              <div className="my-6 text-lg font-normal">
                <li>
                  <span className="pr-4 font-semibold">
                    Engaging gameplay:
                  </span>
                  Our educational games are so fun, your little ones won't even
                  realize they're learning. Captivating characters: Join our
                  band of merry felines
                </li>
                <li className="my-6">
                  <span className="pr-4 font-semibold">
                    Captivating characters:
                  </span>
                  Join our band of merry felines (Studycat, Ali, Kitty, Bob, and
                  Tom) as they guide your child through immersive landscapes
                  with charm, wit, and fun!
                </li>
                <li>
                  <span className="font-semibold pr-4">
                    Get talking fast:
                  </span>
                  With our interactive speaking challenges, kids will be
                  encouraged to produce and speak entire words and phrases on
                  their own!
                </li>
              </div>
            </div>

            {/* Video Section */}
            <div className="order-1 md:order-2 w-full max-w-[740px] mx-auto">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full rounded-xl"
                src={video}
              ></video>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-auto">
        <img
          className="w-full h-auto bg-cover object-cover"
          src="https://i.ibb.co.com/S0t50dj/Screenshot-9.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default LessonAdventure;
