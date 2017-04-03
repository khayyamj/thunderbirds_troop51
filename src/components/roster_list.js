import React from 'react';
import { Icon } from 'semantic-ui-react';

export default function (props) {
  // console.log('roster_list-->', props.roster);
  const
    scouts = props.roster.map(scouter => {
      if (!scouter.adult) {
        return (
          <div
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
      <div>
      Scouts:
      {scouts} <hr />
      Adults:
      {adults}
      </div>
    )
}
