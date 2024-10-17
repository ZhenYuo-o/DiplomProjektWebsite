import React from "react";

export const Contact = (props) => {
    return (
        <div>
            <div id="contact" className="text-center">
                <div className="container">
                    <div className="section-title">
                        <h2>Contact</h2>
                    </div>
                    <div className="row">
                        <p>
                            {props.data ? props.data.email : "loading"}
                        </p>
                    </div>
                </div>
            </div>
            <div id="footer">
                <div className="container text-center">
                    <p>
                        &copy; Template by{" "}
                        <a
                            href="https://github.com/issaafalkattan/React-Landing-Page-Template"
                            rel="nofollow"
                        >
                            Issaaf Kattan
                        </a>
                    </p>
                </div>
            </div>
        </div>

    )
        ;
};
