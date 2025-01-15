import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer text-white bg-[#499DEC] p-10">
      <div className="container mx-auto grid lg:grid-cols-4 grid-cols-2 gap-8">
        <nav>
          <h6 className="text-2xl font-bold">Languages for kids</h6>
          <h5 className="">Languages for kids</h5>
          <h5 className="">Learn English</h5>
          <h5 className="">Learn Spanish</h5>
          <h5 className="">Learn French</h5>
          <h5 className="">Learn German</h5>
          <h5 className="">Learn Chinese</h5>
        </nav>
        <nav>
          <h6 className="text-2xl font-bold">Help</h6>
          <h5 className="">Help center</h5>
          <h5 className="">Contact us</h5>
          <h5 className="">Sitemap</h5>
        </nav>
        <nav>
          <h6 className="text-2xl font-bold">Resources</h6>
          <h5 className="">About us</h5>
          <h5 className="">Press</h5>
          <h5 className="">For schools</h5>
          <h5 className="">Learning resources</h5>
          <h5 className="">Blog</h5>
        </nav>
        <nav>
          <h6 className="text-2xl font-bold">Legal</h6>
          <h5 className="">Privacy</h5>
          <h5 className="">Terms</h5>
          <h5 className="">Cookies</h5>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
