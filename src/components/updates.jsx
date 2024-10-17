import React from "react";

export const Updates = (props) => {
    return (
        <div id="services" className="text-center">
            <div className="container">
                <div className="section-title">
                    <h2>Updates</h2>
                    <p>
                        Hier ist unser aktueller Stand, das regelmäßig aktualisiert wird.
                    </p>
                </div>
                <div className="row">
                    {props.data && props.data.length > 0 ? (
                        props.data.map((d, i) => (
                            <div key={`${d.name}-${i}`} className="col-md-6">
                                <div className="service-desc">
                                    <h3>{d.name}</h3>
                                    <p>{d.text}</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>Loading...</p>
                    )}
                </div>
            </div>
        </div>
    );
};
