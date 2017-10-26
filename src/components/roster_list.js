import React from 'react'
import { Icon } from 'semantic-ui-react'

export default function (props) {
  let scoutIndex = 0, adultIndex=0
  const
    scouts = props.roster.map(scouter => {
      if (!scouter.adult) {
        scoutIndex++
        return (
          <div
            className={props.selectedId === scouter.profileid ? ' roster-display alternating-highlight selected-highlight' :
              scoutIndex%2 === 0 ? ' roster-display alternating-highlight' : 'roster-display'}
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
        adultIndex++
        return (
          <div
            className={props.selectedId === scouter.profileid ? ' roster-display alternating-highlight selected-highlight' :
              adultIndex%2 === 0 ? ' roster-display alternating-highlight' : 'roster-display'}
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
      <div className="">
      Scouts:
      {scouts} <hr />
      Adults:
      {adults}
      </div>
    )
}

// TODO definitely add formatting and styling to roster
// TODO allow for filter by patrol or other criteria
