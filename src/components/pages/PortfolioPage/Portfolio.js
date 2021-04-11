import React, { Component } from "react";
import SinglePortfolio from "./SinglePortfolio";

export default class Portfolio extends Component {
  render() {
    const portfolios = [
      { title: "Threads", subtitle: "Illustration", img: "01-thumbnail.jpg" },
      { title: "Explore", subtitle: "Graphic Design", img: "02-thumbnail.jpg" },
      { title: "Finish", subtitle: "Identity", img: "03-thumbnail.jpg" },
      { title: "Lines", subtitle: "Branding", img: "04-thumbnail.jpg" },
      {
        title: "Southwest",
        subtitle: "Website Design",
        img: "05-thumbnail.jpg",
      },
      { title: "Window", subtitle: "Photography", img: "06-thumbnail.jpg" },
    ];
    return (
      <div>
        <section className="bg-light" id="portfolio">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="section-heading text-uppercase">Portfolio</h2>
                <h3 className="section-subheading text-muted">
                  Lorem ipsum dolor sit amet consectetur.
                </h3>
              </div>
            </div>
            <div className="row">
              {portfolios.map((portfolio, index) => {
                return <SinglePortfolio {...portfolio} key={index} />;
              })}
            </div>
          </div>
        </section>
      </div>
    );
  }
}
