const projects = [
  {
    slug: 'projects/cerved',
    period: '2019',
    role: 'Frontend developer',
    client: {
      name: 'Cerved via Zerouno',
      description: 'Cerved is the italian leading company for retrieving and handling data about businesses, credits and risk management'
    },
    status: 'released',
    isPrivate: true,
    description: [
      'I led the development of the frontend of a web application that allows companies with difficult credits to sell their invoices to investors for immediate payment.'
    ],
    tags: ['javascript', 'react', 'redux', 'redux-saga']
  },
  {
    slug: 'projects/operaclick',
    period: '2018 / 2019',
    role: 'Fullstack developer',
    client: {
      name: 'OperaClick.com',
      description: 'OperaClick is the italian leading online opera daily magazine, with more than 50k monthly active users and over 500k messages of the forum.'
    },
    status: 'in development',
    isPrivate: false,
    description: [
      'I am leading the design of the application and building the frontend of both the website and the custom content management system.',
      'The focus is to provide a better and more modern user experience, in order to increase advertising revenues by keeping users engaged longer.'
    ],
    tags: ['javascript', 'react', 'redux', 'redux-saga', 'styled-components', 'storybook', 'ruby on rails', 'aws']
  },
  {
    slug: 'projects/cndcec',
    period: '2018',
    role: 'Frontend developer',
    client: {
      name: 'National Council of Chartered Accountants and Accounting Experts',
      description: 'The CNDCEC is an italian institution that acts as the interlocutor between the accountants, and therefore businesses, and the Minisitry of Economy and Finance.'
    },
    status: 'released',
    isPrivate: true,
    description: [
      'I led the design of the application and the development of its frontend side.',
      'The application allows the Board of the Council to monitor the progress of commissioned researches, that are going to be presented to the Minisitry of Economy and Finance.'
    ],
    tags: ['javascript', 'react', 'redux', 'redux-thunk', 'blueprint js']
  },
  {
    slug: 'projects/flowtech',
    period: '2018',
    role: 'Frontend developer',
    client: {
      name: 'Flow Tech srls',
      description: 'FlowTech is a startup that aims to provide a more engaging and rewarding way of interaction between social media influencers and their followers.'
    },
    status: 'released',
    isPrivate: false,
    description: [
      'I developed the React + WebRTC application that allows influencers to have video conference calls with rewarded followers with every device that supports WebRTC.'
    ],
    tags: ['javascript', 'react', 'webrtc', 'nodejs']
  },
  {
    slug: 'projects/repower',
    period: '2018',
    role: 'Frontend mentor and consultant developer',
    client: {
      name: 'Repower via Nexus Advanced Technologies',
      description: 'Nexus is a company that leads the development of mid-to-enterprise solutions in northern Italy. Repower is a swiss company that produces and sells electricity.'
    },
    status: null,
    isPrivate: false,
    description: [
      'I have been asked to design and setup the application at the very beginning, and to mentor five Java developers for 6 months in their journey to React application development.'
    ],
    tags: ['javascript', 'react', 'redux', 'redux-thunk']
  },
  {
    slug: 'projects/tennistalker',
    period: '2017',
    role: 'Frontend developer',
    client: {
      name: 'Tennistalker srl',
      description: 'Tennistalker is the VC backed up startup behind the italian biggest and detailed website for tennis amateur players matches results, with more than 100k monthly active users.'
    },
    status: 'released',
    isPrivate: false,
    description: [
      'I started the development of the frontend with the general infrastructure set up.'
    ],
    tags: ['javascript', 'react', 'redux', 'redux-thunk']
  },
  {
    slug: 'projects/odcecmb',
    period: '2016 / 2017',
    role: 'Frontend developer',
    client: {
      name: 'Order of Chartered Accountants and Accounting Export of Monza and Brianza',
      description: 'The ODCECMB is the institution that coordinates the relationship between the accountants of the province of Monza and Brianza with the nation-wide Council.'
    },
    status: 'released',
    isPrivate: true,
    description: [
      'I lead the design of the entire application and the development of the frontend.',
      'The application allows the Board of the Order to track all the employees activities and precisely calculate costs, so that they can be charged to the proper commissioner.'
    ],
    tags: ['javascript', 'react']
  },
  {
    slug: 'projects/snpt',
    period: '2015 / 2016',
    role: 'Fullstack developer',
    client: {
      name: 'Italian National School for Personal Training',
      description: 'SNPT is the italian leading school that trains personal trainers with scientific method.'
    },
    status: 'released',
    isPrivate: true,
    description: [
      'I developed the website of the school that allow students to subscribe and pay for courses and workshops. In addition, I also developed the entire back office application and the API layer using Ruby On Rails. 100% of the company earnings come from this system.',
      'This was the first project I made using React. There were no CRA or boilerplates yet (when I started this, the prophet Dan Abramov didn’t work at Facebook yet), so it’s bundled with Webpack and Gulp and deployed with Capistrano.'
    ],
    tags: ['javascript', 'react', 'ruby on rails']
  }
]

export default projects
