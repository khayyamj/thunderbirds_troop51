import React from 'react';
import { Icon } from 'semantic-ui-react';

export default function (props) {
  return (
    <div>
    Scouts:
    {scouts} <hr />
    Adults:
    {adults}
    </div>
  )

  const adults = props.roster.map(scouter => {
    if (scouter.adult) {
      return (
        <div
          key={scouter.profileid}
          name={scouter.profileid}
          onClick={props.selectProfile}>
          <Icon name='male' />
          {scouter.profileid} {scouter.firstname}
          {console.log('Adult name value: ',name)}
        </div>
      )
    }
  }),
    scouts = props.roster.map(scouter => {
      if (!scouter.adult) {
        return (
          <div
            key={scouter.profileid}
            name={scouter.profileid}
            onClick={props.selectProfile}>
            <Icon name='child' />
            {scouter.firstname}
            </div>
        )
      }
    });

}
