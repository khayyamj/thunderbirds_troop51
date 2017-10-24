import React, { Component } from 'react';
import { Link } from 'react-router';
import { Header, Grid, Button } from 'semantic-ui-react';
class Scoutmasters extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  renderList() {
    return scoutmasters.map((scoutmaster) => {
      // adding a date function to find tenure of current scoutmaster dynamically
      // const year = new Date();
      // console.log(year);
      // Date is an object
      
      const tenure = (scoutmaster.end || 2017) - scoutmaster.start;
      return (
        <Grid.Row key={scoutmaster.troop+scoutmaster.start+scoutmaster.name}>
          <Grid.Column width={2}>
            Troop: {scoutmaster.troop}
          </Grid.Column>
          <Grid.Column width={3}>
            <span className="scout-name">{scoutmaster.name}</span>
          </Grid.Column>
          <Grid.Column width={3} >
            {scoutmaster.start} - {scoutmaster.end} ({tenure} <span className="scoutmaster-tenure">{tenure === 1 ? "year" : "years"}</span>)
              </Grid.Column>
        </Grid.Row>
      )
    })
  }
  render() {
    return(
      <div>
        <Header as='h1' textAlign='center'>
          Scoutmasters of Troop 51
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
export default Scoutmasters;

const scoutmasters = [
  {
    name: 'Rev. Coleman C. Hartzler',
    start: 1916,
    end: 1917,
    troop: 1
  },
  {
    name: 'Walter E. Cederholm',
    start: 1917,
    end: 1918,
    troop: 1
  },
  {
    name: 'Walter E. Cederholm',
    start: 1917,
    end: 1918,
    troop: 11
  },
  {
    name: 'O. A. Spear',
    start: 1921,
    end: 1922,
    troop: 11
  },
  {
    name: 'George Bratton',
    start: 1922,
    end: 1925,
    troop: 11
  },
  {
    name: 'John B. Gessford',
    start: 1925,
    end: 1927,
    troop: 11
  },
  {
    name: 'Claud S. Leaf',
    start: 1928,
    end: 1930,
    troop: 31
  },
  {
    name: 'Rev. James L. Hayes',
    start: 1930,
    end: 1930,
    troop: 31
  },
  {
    name: 'John B. Gessford',
    start: 1930,
    end: 1938,
    troop: 51
  },
  {
    name: 'James W. Lee',
    start: 1938,
    end: 1941,
    troop: 51
  },
  {
    name: 'Leslie H. Carle',
    start: 1942,
    end: 1948,
    troop: 51
  },
  {
    name: 'Floyd E. Sampson',
    start: 1949,
    end: 1950,
    troop: 51
  },
  {
    name: 'John D. Smith',
    start: 1950,
    end: 1952,
    troop: 51
  },
  {
    name: 'Elmer E. Olson',
    start: 1953,
    end: 1953,
    troop: 51
  },
  {
    name: 'Frank Fredrick',
    start: 1953,
    end: 1954,
    troop: 51
  },
  {
    name: 'Michael Treshow',
    start: 1954,
    end: 1960,
    troop: 51
  },
  {
    name: 'Donald E. Olson',
    start: 1960,
    end: 1964,
    troop: 51
  },
  {
    name: 'John C. Heninger',
    start: 1964,
    end: 1965,
    troop: 51
  },
  {
    name: 'Michael Merritt',
    start: 1965,
    end: 1967,
    troop: 51
  },
  {
    name: 'Gary Hardvigsen',
    start: 1967,
    end: 1969,
    troop: 51
  },
  {
    name: 'Bowman O. Barlow',
    start: 1969,
    end: 1973,
    troop: 51
  },
  {
    name: 'Tim Berhow',
    start: 1973,
    end: 1974,
    troop: 51
  },
  {
    name: 'John Herman',
    start: 1974,
    end: 1977,
    troop: 51
  },
  {
    name: 'Thys Kriek',
    start: 1977,
    end: 1977,
    troop: 51
  },
  {
    name: 'John Herman',
    start: 1977,
    end: 1979,
    troop: 51
  },
  {
    name: 'Cory Reynolds',
    start: 1979,
    end: 1980,
    troop: 51
  },
  {
    name: 'John Herman',
    start: 1980,
    end: 1982,
    troop: 51
  },
  {
    name: 'Jim Beverage',
    start: 1982,
    end: 1983,
    troop: 51
  },
  {
    name: 'David Von Berg',
    start: 1983,
    end: 1986,
    troop: 51
  },
  {
    name: 'Joseph S. Whittaker',
    start: 1986,
    end: 1990,
    troop: 51
  },
  {
    name: 'Todd Eller',
    start: 1990,
    end: 1991,
    troop: 51
  },
  {
    name: 'Matthew A. Kriek',
    start: 1991,
    end: 1993,
    troop: 51
  },
  {
    name: 'Phil Jones',
    start: 1993,
    end: 1997,
    troop: 51
  },
  {
    name: 'Stephen Renshaw',
    start: 1997,
    end: 2007,
    troop: 51
  },
  {
    name: 'Justin Muir',
    start: 2007,
    end: 2013,
    troop: 51
  },
  {
    name: 'Kevin Keaton',
    start: 2013,
    end: null,
    troop: 51
  }
]
