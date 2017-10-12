import React from 'react';

export function DateFilter(unformattedDate) {
  console.log('unformattedDate = ', typeof unformattedDate, unformattedDate)
  if (typeof unformattedDate !== 'string') {return <div>{unformattedDate}</div>}
  let year = unformattedDate.split('-')[0]
  let month = unformattedDate.split('-')[1]
  let day = unformattedDate.split('-')[2].slice(0,2)

  month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][Number(month) - 1]

  let formattedDate = `${month} ${day}, ${year}`

  return (
    <div>{formattedDate}</div>
  )
}

// export function AddTransaction(profileid) {
//   return (
//     <div>Add Transaction</div>
//   )
// }
