import React from "react";

export const Contact = (props) => {
  return (
      <div id="services" className="text-center">
        <div className="container text-center">
          <div className="section-title">
            <h2>Kontakt</h2>
          </div>
          <div className="contact-item">
            <p>
              {props.data ? props.data.email : "loading"}
            </p>
          </div>
        </div>
      </div>
  );
};
