import SpecialHeading from "./SpecialHeading";
import aboutImage from "../assets/about.jpg";

export default function About() {
  return (
    <div className="about" id="about">
      <div className="container">
        <SpecialHeading title="About" paragraph="Less is more work" />
        <div className="about-content">
          <div className="image">
            <img src={aboutImage} alt="about" />
          </div>
          <div className="text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              nemo neque voluptate tempora velit cum non, fuga vitae architecto
              delectus sed maxime rerum impedit aliquam obcaecati, aut excepturi
              iusto laudantium!
            </p>
            <hr />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
              sapiente. Velit iure exercitationem dolores nesciunt dolore. Eum
              officiis dolorum hic voluptate quaerat minima, similique inventore
              esse, alias, sed quo officia?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
