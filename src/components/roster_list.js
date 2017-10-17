import React from 'react';
import { Icon } from 'semantic-ui-react';

export default function (props) {
  console.log('*** roster_list-->', props.roster);
  const
    scouts = props.roster.map(scouter => {
      if (!scouter.adult) {
        return (
          <div
            className="roster-display"
            key={scouter.profileid}
            name={scouter.profileid}
            onClick={() => props.selectProfile(null,scouter.profileid)}>
            <Icon name='child' />
            {scouter.firstname} {scouter.lastname}
            </div>
        )
      }
    }),
    adults = props.roster.map(scouter => {
      if (scouter.adult) {
        return (
          <div
            key={scouter.profileid}
            name={scouter.profileid}
            onClick={() => props.selectProfile(null,scouter.profileid)}>
            <Icon name='male' />
            {scouter.firstname} {scouter.lastname}
          </div>
        )
      }
    });

    return (
      <div className="page-container">
      Scouts:
      {scouts} <hr />
      Adults:
      {adults}
      </div>
    )
}

// TODO definitely add formatting and styling to roster
// TODO allow for filter by patrol or other criteria
// TODO verify that this component is being used
