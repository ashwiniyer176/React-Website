import React, { Component } from "react";

import ServiceComponent from "./ServiceComponent";

export default class Services extends Component {
  render() {
    const services = [
      { title: "Responsive Design", icon: "laptop" },
      { title: "E-Commerce", icon: "shopping-cart" },
      { title: "Web Security", icon: "lock" },
    ];
    return (
      <div>
        <section id="services">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="section-heading text-uppercase">Services</h2>
                <h3 className="section-subheading text-muted">
                  Lorem ipsum dolor sit amet consectetur.
                </h3>
              </div>
            </div>
            <div className="row text-center">
              {services.map((service, index) => {
                return <ServiceComponent {...service} key={index} />;
              })}
            </div>
          </div>
        </section>
      </div>
    );
  }
}
