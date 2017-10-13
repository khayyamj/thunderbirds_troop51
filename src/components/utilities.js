import React from 'react';

export function DateFilter(unformattedDate) {
  if (typeof unformattedDate !== 'string') {return <div>{unformattedDate}</div>}
  let year = unformattedDate.split('-')[0]
  let month = unformattedDate.split('-')[1]
  let day = unformattedDate.split('-')[2].slice(0,2)

  month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][Number(month) - 1]

  let formattedDate = `${month} ${day}, ${year}`

  return (
    <span>{formattedDate}</span>
  )
}

export function Capitalize(text) {
  let capString = `${text.charAt(0).toUpperCase()}${text.slice(1)}`
  return capString
}

export function CapitalizeEachWord(textString) {
  let capString = ''
  let wordArray = textString.split(' ')
    .map(word => {
      capString = `${capString} ${word.charAt(0).toUpperCase()}${word.slice(1)}`
    })
  return capString
}

// TODO add filter based on tags
// TODO make tags clickable for filtering
