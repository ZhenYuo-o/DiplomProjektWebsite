import React from "react";

export const Team = (props) => {
    return (
        <div id="team" className="text-center">
            <div className="container">
                <div className="col-md-8 col-md-offset-2 section-title">
                    <h2>Unser Team</h2>
                </div>
                <div id="row">
                    {props.data
                        ? props.data.map((d, i) => (
                            <div key={`${d.name}-${i}`} className="col-md-4 team">
                                <div className="thumbnail">
                                    {" "}
                                    <img src={d.img} alt="..." className="team-img"/>
                                    <div className="caption">
                                        <h4>{d.name}</h4>
                                        <p>{d.job}</p>
                                        <p>{d.contact}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                        : "loading"}
                </div>
            </div>
        </div>
    );
};
