import SpecialHeading from "../components/SpecialHeading";
import Service from "../components/Service";
import serviceImg from "../assets/services.jpg";

export default function Services() {
  return (
    <div className="services">
      <div className="container">
        <SpecialHeading
          title="Services"
          paragraph="Don't be busy, be productive"
        />
        <div className="services-content">
          <div className="col">
            <Service
              icon="fa-solid fa-palette fa-2x"
              title="Graphic Design"
              paragraph="Graphic design is the process of visual
             communication and problem-solving using one or more
              of typography, photography and illustration."
            />

            <Service
              icon="fa-brands fa-sketch fa-2x"
              title="UI & UX"
              paragraph="Process of enhancing user satisfaction with a
             product by improving the usability, accessibility, and pleasure
              provided in the interaction"
            />
          </div>
          <div className="col">
            <Service
              icon="fa-solid fa-vector-square fa-2x"
              title="Web Design"
              paragraph="Web design encompasses many different
             skills and disciplines in the production and maintenance
              of websites."
            />

            <Service
              icon="fa-solid fa-pen-ruler fa-2x"
              title="Web Development"
              paragraph="Web development is a broad term for the work involved in
             developing a web site for the Internet or an intranet."
            />
          </div>
          <div className="col">
            <div className="image image-col">
              <img src={serviceImg} alt="service image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
