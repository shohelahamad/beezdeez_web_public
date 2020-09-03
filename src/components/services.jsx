import React, { Component } from "react";

export class Services extends Component {
  render() {
    return (
      <div id="services" className="text-center">
        <div className="container">
          <div className="section-title">
            <h2>Download our App</h2>
            <p>
              Our App is available for Android and IOS and will soon also be available to use from a web browser.
            </p>
            <img
                        src="img/allscreens.png"
                        className="img-responsive img-rounded"
                        alt="Project Title"
                      />{" "}
          </div>
          <div className="row">
            {this.props.data
              ? this.props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  {" "}
                  <i className={d.icon}></i>
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
              : "loading"}
          </div>
        </div>
      </div>
    );
  }
}

export default Services;
