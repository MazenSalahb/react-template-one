import SpecialHeading from "./SpecialHeading";
import protofolioImg1 from "../assets/portfolio-1.jpg";
import protofolioImg2 from "../assets/portfolio-2.jpg";
import protofolioImg3 from "../assets/portfolio-3.jpg";
import Card from "./Card";

export default function Protofolio() {
  return (
    <div className="protofolio" id="protofolio">
      <div className="container">
        <SpecialHeading
          title="Protofolio"
          paragraph="If you do it right, it will last forever."
        />
        <div className="protofolio-content">
          <Card img={protofolioImg1} />
          <Card img={protofolioImg2} />
          <Card img={protofolioImg3} />
        </div>
      </div>
    </div>
  );
}
