import SpecialHeading from "./SpecialHeading";

export default function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="container">
        <SpecialHeading title="Contact" paragraph="We are born to create" />
        <div className="info">
          <p className="label">Feel free to drop us a line at:</p>
          <a
            href="mailto:mazenfakes@gmail.com?subject=Contact"
            className="link"
          >
            mazenfakes@gmail.com
          </a>
          <div className="social">
            Find Us On Social Networks
            <a href="#">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="https://www.facebook.com/maazensalah/" target="_blank">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com/mazensalahb" target="_blank">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
