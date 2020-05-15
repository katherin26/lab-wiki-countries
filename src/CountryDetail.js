import React, { Component } from "react";
import countries from "./countries.json";

class CountryDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      country: null,
    };
  }
  componentWillMount() {
    const country = countries.find(
      (c) => c.cca3 === this.props.match.params.id
    );
    this.setState({ country });
  }

  render() {
    return (
      <div>
        Country Detail
        <div className="row">
          <div className="col-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">
                  {this.state.country.name.official}
                </h5>
                <img
                  className="card-img-top"
                  src={`https://www.countryflags.io/${this.state.country.cca2}/flat/64.png`}
                  alt="Card image cap"
                  height="200"
                ></img>
                <h6 className="card-subtitle mb-2 text-muted">
                  {this.state.country.capital}
                </h6>
                <p className="card-text">
                  <b>Currency:</b> {this.state.country.currency.join(",")}{" "}
                  <br />
                  <b>Continent:</b> {this.state.country.region} <br />
                  <b>Languages:</b>{" "}
                  {Object.values(this.state.country.languages).join(",")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CountryDetail;
