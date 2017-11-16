export default function() {
   return [
         {
            link: 'Posts',
            address: '/posts',
            icon: 'browser',
            permission: "member"
         },
         {
            link: 'Activities',
            address: '/activities',
            icon: 'map outline',
            permission: null
         },
         {
            link: 'Calendar',
            address: '/calendar',
            icon: 'calendar',
            permission: null
         },
         {
            link: 'Roster',
            address: '/roster',
            icon: 'group',
            permission: "member"
         },
         {
            link: 'About',
            address: '/about',
            icon: 'book',
            permission: null
         },
         {
            link: 'Contact',
            address: '/contact',
            icon: 'comment',
            permission: null
         },
         {
            link: 'Admin',
            address: '/admin',
            icon: 'key',
            permission: "admin"
         }
      ]
}
