import React from "react";

export const About = (props) => {
  console.log(props.data);
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/hzl_logo.svg" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>Über uns</h2>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
              {/*<p dangerouslySetInnerHTML={{__html: props.data ? props.data.paragraph : "loading..."}}></p>
              <p>
                {props.data ? props.data.paragraph.split("\n") : "loading..."}
                Eigene Methode machen, um die stellen mit \n zu splitten und an diesen stellen ein <br> einbauen
              </p>
              */}
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                        ? props.data.Why.map((d, i) => (
                            <li key={`${d}-${i}`}>{d}</li>
                        ))
                        : "loading"}
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                        ? props.data.Why2.map((d, i) => (
                            <li key={`${d}-${i}`}> {d}</li>
                        ))
                        : "loading"}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
