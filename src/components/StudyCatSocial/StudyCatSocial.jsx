import { CiInstagram } from "react-icons/ci";
import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import studyCat from "../../assets/New folder/logo_studycat_vert-white.BgYlir77.svg";

const StudyCatSocial = () => {
  return (
    <div className=" bg-[#499DEC] text-white">
      <div className="flex justify-center py-6">
        <img className="w-96 h-auto" src={studyCat} alt="" />
      </div>
      <div className="flex justify-center gap-6">
        <FaFacebookF className="w-12 h-12 border border-white rounded-full p-3" />
        <CiInstagram className="w-12 h-12 border border-white rounded-full p-3" />
        <FaYoutube className="w-12 h-12 border border-white rounded-full p-3" />
        <FaLinkedinIn className="w-12 h-12 border border-white rounded-full p-3" />
      </div>
    </div>
  );
};

export default StudyCatSocial;
