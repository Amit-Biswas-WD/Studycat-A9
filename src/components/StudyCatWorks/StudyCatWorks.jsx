const StudyCatWorks = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center my-16">
      {/* Text Section */}
      <div className="order-2 lg:order-1 px-4">
        <h2 className="text-4xl text-black font-bold">How Studycat works</h2>
        <div className="mt-8">
          <p className="text-lg font-normal my-8 text-[#000000]">
            Hundreds of interactive games help captivate children, turning
            language learning into an exciting adventure, day after day!
          </p>
          <p className="text-lg font-normal">
            Developed by language and teaching experts, Studycat combines
            educational research with playful engagement, deepening language
            understanding with each tap, swipe, and giggle!
          </p>
        </div>
      </div>

      {/* Video Section */}
      <div className="order-1 lg:order-2 w-full max-w-[740px] mx-auto">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full rounded-xl"
          src="https://studycat-public-videos.s3.ap-southeast-1.amazonaws.com/App+preview/Pre-Shop-video_v2.mp4"
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default StudyCatWorks;
