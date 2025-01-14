import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer text-white bg-[#499DEC] p-10">
      <nav>
        <h6 className="text-2xl font-bold">Languages for kids</h6>
        <p className="">Languages for kids</p>
        <p className="">Learn English</p>
        <p className="">Learn Spanish</p>
        <p className="">Learn French</p>
        <p className="">Learn German</p>
        <p className="">Learn Chinese</p>
      </nav>
      <nav>
        <h6 className="text-2xl font-bold">Help</h6>
        <p className="">Help center</p>
        <p className="">Contact us</p>
        <p className="">Sitemap</p>
      </nav>
      <nav>
        <h6 className="text-2xl font-bold">Resources</h6>
        <p className="">About us</p>
        <p className="">Press</p>
        <p className="">For schools</p>
        <p className="">Learning resources</p>
        <p className="">Blog</p>
      </nav>
      <nav>
        <h6 className="text-2xl font-bold">Legal</h6>
        <p className="">Privacy</p>
        <p className="">Terms</p>
        <p className="">Cookies</p>
      </nav>
    </footer>
  );
};

export default Footer;
