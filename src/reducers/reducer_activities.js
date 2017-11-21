import { CREATE_ACTIVITY, FETCH_ACTIVITY, FETCH_ALL_PARTICIPANTS, FETCH_ATTENDED_ACTIVITIES } from '../actions';

const INITIAL_STATE = { all: [], activity: [], allParticipants: [], activityParticipants: []};


export default function( state = INITIAL_STATE, action) {
  switch(action.type) {
    case CREATE_ACTIVITY:
      return {...state, activity: action.payload.data};
    case FETCH_ACTIVITY:
      return {...state, all: action.payload.data};
    case FETCH_ALL_PARTICIPANTS:
      return {...state, allParticipants: action.payload.data};
    case FETCH_ATTENDED_ACTIVITIES:
      return {...state, all: action.payload.data}
    default:
      return state;
  }
  //  return [
  //     {
  //       actid: 1,
  //        date: '2017/02/17',
  //        site: 'Hill Aerospace Museum',
  //        location: {
  //           lat: 41.1621,
  //           lng: -112.0191
  //        },
  //        type: 'activity',
  //        notes: 'Visited Hill Aerospace Museum and Railroad Museum (in Ogden)',
  //        scouts: [
  //           'Pete','Josh','Alex','Max','Sam','Donovan','Peter','Jack','Adam'
  //        ],
  //        leaders: [
  //           'Kevin','Chad','Khayyam','Rolo','Kyle'
  //        ]
  //     },
  //     {
  //       actid: 2,
  //        date: '2017/01/17',
  //        site: 'Goshen Canyon',
  //        location: {
  //           lat: 39.8898,
  //           lng: -111.8867
  //        },
  //         type: 'campout',
  //        notes: 'Winter campout - 31 degrees (blue bead)',
  //        scouts: [
  //           'Josh','Alex','Sam','Donovan','Peter','Jack','Adam'
  //        ],
  //        leaders: [
  //           'Kevin','Chad','Khayyam'
  //        ]
  //     },
  //     {
  //       actid: 3,
  //        date: '2016/11/22',
  //        site: 'Sunshine Canyon',
  //        location: {
  //           lat: 40.2684,
  //           lng: -112.2160
  //        },
  //         type: 'campout',
  //        notes: 'November campout - focus on First Aid Merit Badge',
  //        scouts: [
  //           'Joshua','Alex','Sam','David','Peter','Jack','Adam','Michael'
  //        ],
  //        leaders: [
  //           'Kevin','Chad','Rolo','Nate'
  //        ]
  //     },
  //     {
  //       actid: 4,
  //        date: '2016/10/20',
  //        site: 'Devil\'s Kitchen',
  //        location: {
  //           lat: 39.8042,
  //           lng: -111.6887
  //        },
  //         type: 'campout',
  //        notes: 'October Campout - Fun Campout, Leaders cook and boys play',
  //        scouts: [
  //           'Aaron','Max','John','Donovan','Peter','Jack','Adam','Sam'
  //        ],
  //        leaders: [
  //           'Kevin','Nate','Steve','Jerry'
  //        ]
  //     },
  //     {
  //       actid: 5,
  //        date: '2016/9/17',
  //        site: 'Elk\'s Lodge',
  //        location: {
  //           lat: 39.8042,
  //           lng: -111.6887
  //        },
  //         type: 'service',
  //        notes: 'Veteran\'s Memorial Traveling Wall',
  //        scouts: [
  //           'Aaron','Max','John','Donovan','Peter','Jack','Adam','Sam'
  //        ],
  //        leaders: [
  //           'Kevin','Nate','Steve','Jerry'
  //        ]
  //     }
  //  ]

}
