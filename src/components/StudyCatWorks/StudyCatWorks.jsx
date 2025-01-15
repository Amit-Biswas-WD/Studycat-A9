const StudyCatWorks = () => {
  return (
    <div className="grid grid-cols-12 text-center">
      <div className="col-span-4">
        <h2 className="text-4xl text-black font-bold">How Studycat works</h2>
        <div className="w-[468px] mt-8">
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
      <div className="col-span-4">
        <video
          autoplay
          width="420"
          height="200"
          src="https://studycat-public-videos.s3.ap-southeast-1.amazonaws.com/App+preview/Pre-Shop-video_v2.mp4"
        ></video>
      </div>
    </div>
  );
};

export default StudyCatWorks;
