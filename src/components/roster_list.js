import React from 'react';
import { Icon } from 'semantic-ui-react';

export default function(props) {
  console.log('props: ', props);
  const adults = props.roster.map(scouter => {
    if (scouter.adult) {
      return (
        <div key={scouter.profileid}><Icon name='male' />{scouter.firstname}</div>
      )
    }
  }),
    scouts = props.roster.map(scouter => {
      if (!scouter.adult) {
        return (
          <div key={scouter.profileid}><Icon name='child' />{scouter.firstname}</div>
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
