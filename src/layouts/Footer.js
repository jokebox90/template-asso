// src/Footer.js

import moment from "moment/moment";

const Footer = () => {
  return (
    <footer className="footer m-0">
      <div className="row g-0">
        <div className="col col-12 col-md-4 justify-content-between">
          <div className="d-flex flex-column flex-wrap align-items-center align-items-md-start mb-5 mb-md-0">
            <p className="fw-bold">Orchestre Symphonique Factice</p>
            <p>2 rue de la Culture</p>
            <p>77777 Au-Petit-Bonheur</p>
            <p>contact@monasso.fr</p>
            <p>0987655543</p>
          </div>
        </div>
        <div className="col col-12 col-md-4"></div>
        <div className="col col-12 col-md-4">
          <div className="d-flex flex-column flex-wrap align-items-center align-items-md-end">
            <p>Mon Asso &copy; {moment().format("Y")}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
