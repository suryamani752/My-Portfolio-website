import React from "react";
import "./Certificate.css"
import microsoft from "./Micorsoft.png";
import ML from "./ML.png";
import imun from "./inum.png";
import analytics from "./Picture2.png";

const Certificates = () => {
  return (
    <>
      <div className="certificate" id="certificates">
        <h2 className="col-12 mt-3 mb-3 text-center text-uppercase">
          Certifications
        </h2>
        <hr />

        <div className="row" id="ads">
          <div className="certificate-card">
            <div className="card rounded">
              <div className="card-image">
                {/* <span className="card-notify-badge">Microsoft</span> */}
                <img src={microsoft} alt="Microsoft certificate" />
              </div>

              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">
                    Sc-900 Security Compliance and Identity Fundamentals
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="certificate-card">
            <div className="card rounded">
              <div className="card-image">
                {/* <span className="card-notify-badge">Microsoft</span> */}
                <img src={ML} alt="Machine learning certificate" />
              </div>

              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">
                    Applied Machine Learning in Python
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="certificate-card">
            <div className="card rounded">
              <div className="card-image">
                {/* <span className="card-notify-badge">Microsoft</span> */}
                <img src={imun} alt="imun certificate" />
              </div>

              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">
                    Participation in Imun Conference
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="certificate-card">
            <div className="card rounded">
              <div className="card-image">
                {/* <span className="card-notify-badge">Microsoft</span> */}
                <img src={analytics} alt="Analytics certificate" />
              </div>

              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">
                    Fundamentals of Data Analytics
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Certificates;
