import React, { Component } from "react";
import { Link } from "react-router";
import { Grid, Header, Button } from "semantic-ui-react";
class ListEagles extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  renderList() {
    return eagleScouts.map((scout, i) => {
      return (
        <Grid.Row key={scout.year+scout.name}>
          <Grid.Column width={1}>
            {i + 1} -
          </Grid.Column>
          <Grid.Column width={3}>
            <span className="scout-name">{scout.name}</span>
          </Grid.Column>
          <Grid.Column width={1}>
            {scout.year}
          </Grid.Column>
          <Grid.Column width={1}>
            {scout.deceased ? "Desceased" : ""}
          </Grid.Column>
        </Grid.Row>
      )
    })
  }
  render() {
    return(
      <div className="page-container">
        <Header as="h1" textAlign="center">
          <div>Eagle Scouts of Troop 51</div>
        </Header>
        <div className="about-nav-buttons">
          <Button  className="button-padding" color="orange">
            <Link to="/handbook"> Troop Handbook </Link>
          </Button>
          <Button className="button-padding" color="orange">
            <Link to="/eaglescouts"> Eagle Scouts </Link>
          </Button>
          <Button className="button-padding" color="orange">
            <Link to="/scoutmasters"> Scoutmasters </Link>
          </Button>
        </div>
        <Grid>
          {this.renderList()}
        </Grid>
      </div>
    );
  }
}
export default ListEagles;

const eagleScouts = [
  {
    name: "Sylvan Stevens",
    year: 1931,
    deceased: true
  },
  {
    name: "Jim Norton",
    year: 1934,
    deceased: true
  },
  {
    name: "Robert Hansen",
    year: 1935,
    deceased: true
  },
  {
    name: "Ray Snow",
    year: 1936,
    deceased: true
  },
  {
    name: "Ian Bell",
    year: 1946,
    deceased: false
  },
  {
    name: "Michael Treshow",
    year: 1956,
    deceased: false
  },
  {
    name: "Gerald Black",
    year: 1956,
    deceased: false
  },
  {
    name: "Larry Black",
    year: 1956,
    deceased: true
  },
  {
    name: "James Bowen",
    year: 1956,
    deceased: false
  },
  {
    name: "Seaborn Smith",
    year: 1957,
    deceased: false
  },
  {
    name: "Mark Mitchell",
    year: 1958,
    deceased: false
  },
  {
    name: "Richard Fromberg",
    year: 1959,
    deceased: false
  },
  {
    name: "Russel Oliver",
    year: 1961,
    deceased: false
  },
  {
    name: "Dick Brown",
    year: 1961,
    deceased: false
  },
  {
    name: "Robert Dyer",
    year: 1961,
    deceased: false
  },
  {
    name: "Richard Hague",
    year: 1961,
    deceased: false
  },
  {
    name: "Byron Monroe",
    year: 1961,
    deceased: false
  },
  {
    name: "Wayne Wagnew",
    year: 1964,
    deceased: false
  },
  {
    name: "Kim Schvanwelt",
    year: 1964,
    deceased: false
  },
  {
    name: "Daniel Dixon",
    year: 1967,
    deceased: false
  },
  {
    name: "John Sagers",
    year: 1968,
    deceased: true
  },
  {
    name: "Bowman O. Barlow Jr.",
    year: 1969,
    deceased: true
  },
  {
    name: "John R. DeJong",
    year: 1969,
    deceased: false
  },
  {
    name: "Mark L. Francom",
    year: 1969,
    deceased: false
  },
  {
    name: "David M. Hartvigsen",
    year: 1969,
    deceased: false
  },
  {
    name: "James P. Hartvigsen",
    year: 1969,
    deceased: false
  },
  {
    name: "Steven B. Hartvigsen",
    year: 1969,
    deceased: false
  },
  {
    name: "Brad Walton",
    year: 1969,
    deceased: false
  },
  {
    name: "L. Cloyd Krebs",
    year: 1969,
    deceased: false
  },
  {
    name: "Harry N. Rising",
    year: 1970,
    deceased: false
  },
  {
    name: "Tony Scott Ownby",
    year: 1970,
    deceased: false
  },
  {
    name: "Steven E. Strate",
    year: 1970,
    deceased: false
  },
  {
    name: "Scott R. Poppen",
    year: 1970,
    deceased: false
  },
  {
    name: "Timothy Spence",
    year: 1971,
    deceased: false
  },
  {
    name: "Paul Burnham",
    year: 1972,
    deceased: false
  },
  {
    name: "Ross Kirkpatrick",
    year: 1972,
    deceased: false
  },
  {
    name: "Gordon Bechtel",
    year: 1973,
    deceased: false
  },
  {
    name: "Richard VanGenderen",
    year: 1973,
    deceased: false
  },
  {
    name: "Chad Lee",
    year: 1975,
    deceased: true
  },
  {
    name: "Kevin Lindahl",
    year: 1975,
    deceased: false
  },
  {
    name: "Matt Kriek",
    year: 1976,
    deceased: false
  },
  {
    name: "Joseph Whitaker",
    year: 1977,
    deceased: false
  },
  {
    name: "Bruce Schneider",
    year: 1977,
    deceased: false
  },
  {
    name: "Bill Collins",
    year: 1978,
    deceased: false
  },
  {
    name: "Todd Eller",
    year: 1981,
    deceased: false
  },
  {
    name: "Richard Beverage",
    year: 1981,
    deceased: false
  },
  {
    name: "Joseph Orchard",
    year: 1983,
    deceased: false
  },
  {
    name: "Dan Skinner",
    year: 1983,
    deceased: false
  },
  {
    name: "Bruce Gooch",
    year: 1984,
    deceased: false
  },
  {
    name: "Allen Feltz",
    year: 1985,
    deceased: false
  },
  {
    name: "J. Correy Schweiss",
    year: 1985,
    deceased: false
  },
  {
    name: "Rick Aller",
    year: 1985,
    deceased: false
  },
  {
    name: "Mike VonBerg",
    year: 1986,
    deceased: false
  },
  {
    name: "Colby Story",
    year: 1987,
    deceased: false
  },
  {
    name: "James Siefer",
    year: 1988,
    deceased: false
  },
  {
    name: "Gerald King",
    year: 1989,
    deceased: false
  },
  {
    name: "Justin Muir",
    year: 1989,
    deceased: false
  },
  {
    name: "Glenn Gray",
    year: 1990,
    deceased: false
  },
  {
    name: "Gerard King",
    year: 1990,
    deceased: false
  },
  {
    name: "Dana Groves",
    year: 1990,
    deceased: false
  },
  {
    name: "Jordan Davies",
    year: 1990,
    deceased: false
  },
  {
    name: "Kevin Greenhalgh",
    year: 1991,
    deceased: false
  },
  {
    name: "Jessie Wittaker",
    year: 1992,
    deceased: false
  },
  {
    name: "Mason Bushman",
    year: 1994,
    deceased: false
  },
  {
    name: "Clinton Bushman",
    year: 1994,
    deceased: false
  },
  {
    name: "Chad Pedersen",
    year: 1995,
    deceased: false
  },
  {
    name: "Tony Valerio",
    year: 1995,
    deceased: true
  },
  {
    name: "Jimmi Donnells",
    year: 1997,
    deceased: false
  },
  {
    name: "Curtis Broom",
    year: 1997,
    deceased: false
  },
  {
    name: "David Whittaker",
    year: 1997,
    deceased: false
  },
  {
    name: "Travis Madden",
    year: 1998,
    deceased: false
  },
  {
    name: "Jeremy Lloyd",
    year: 1999,
    deceased: false
  },
  {
    name: "Kelly Madden",
    year: 2001,
    deceased: true
  },
  {
    name: "Nolan Renshaw",
    year: 2003,
    deceased: false
  },
  {
    name: "Alexander Randall",
    year: 2004,
    deceased: false
  },
  {
    name: "Nathan Smith",
    year: 2005,
    deceased: false
  },
  {
    name: "Devin Renshaw",
    year: 2006,
    deceased: false
  },
  {
    name: "Andrew Wright",
    year: 2007,
    deceased: false
  },
  {
    name: "Steven Nish",
    year: 2009,
    deceased: false
  },
  {
    name: "Brian Speckhard",
    year: 2010,
    deceased: false
  },
  {
    name: "Sean Crawford",
    year: 2010,
    deceased: false
  },
  {
    name: "Kit VanderWilt",
    year: 2010,
    deceased: false
  },
  {
    name: "Peter VanderWilt",
    year: 2010,
    deceased: false
  },
  {
    name: "Esteban Startup",
    year: 2011,
    deceased: false
  },
  {
    name: "John Gardner IV",
    year: 2011,
    deceased: false
  },
  {
    name: "Todd Speckhard",
    year: 2012,
    deceased: false
  },
  {
    name: "Colton Hansen",
    year: 2013,
    deceased: false
  },
  {
    name: "Justin Gordon",
    year: 2013,
    deceased: false
  },
  {
    name: "Timothy Muir",
    year: 2013,
    deceased: false
  },
  {
    name: "Taggart Greenhalgh",
    year: 2016,
    deceased: false
  },
  {
    name: "Carson Frost",
    year: 2016,
    deceased: false
  },
  {
    name: "Kealan Haws",
    year: 2016,
    deceased: false
  }
]

// TODO animate page
// TODO add formatting / styling to page
