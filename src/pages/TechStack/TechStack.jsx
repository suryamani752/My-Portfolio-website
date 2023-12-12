import React from "react";
import "./TechStack.css"
import { TechStackList } from "../../utils/TechStack";

const TechStack = () => {
  return (
    <>
      <div className="techstack" id="tech">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Technologies Stack
        </h2>
        <hr />

        <div className="row">
          {TechStackList.map((tech) => (
            
              <div key={tech._id} className="col-md-3">
                <div className="card m-3">
                  <div className="card-content">
                    <div className="card-body">
                      <div className="media d-flex justify-content-center">
                        <div className="align-self-center">
                          <tech.icon className="tech-icon" />
                        </div>
                        <div className="media-body">
                          <h5>{tech.name}</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TechStack;
