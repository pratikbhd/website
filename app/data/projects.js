// TODO Add a couple lines about each project
const data = [
  {
    title: 'IBM Watson Bot',
    subtitle: 'A question answering bot',
    link: 'https://github.com/pratikbhd/IIR-Watson',
    image: '/website/images/projects/ibmbot.jpeg',
    date: '2019-05',
    desc: 'Built for my Text Retrieval and Web Search course. '
      + 'The application uses Wikipedia pages as the text source ' 
      + 'and Jeopardy questions as the testing data whose answers are the titles of the Wikipedia pages. '
      + 'A P@1 accuracy of 29% was obtained on the best model.',
  }, {
    title: 'Log File System',
    subtitle: 'An implementation of the log structured file system using C++',
    link: 'https://github.com/pratikbhd/lfs',
    image: '/website/images/projects/lfs.png',
    date: '2019-05',
    desc: 'Launched a potato battery powered weather balloon with two cameras '
      + 'and gps transponder. Resulting photos were published in a coffee table book. '
      + 'You can email me for a copy.',
  }, {
    title: 'BikeShare Visualization',
    subtitle: 'Visualization of the Metro BikeShare system in LA for 2015-2016',
    link: 'https://github.com/pratikbhd/bikeshare_visualization',
    image: '/website/images/projects/bikeshare.png',
    date: '2018-12',
    desc: 'An interative visualization of the Metro Bikeshare system in Los Angeles. '
      + 'The bikeshare data is from the 2015-2016 period. The visualization was developed using D3 '
      + 'where users can zoom in and out through the city, hover each area for details and filter '
      + 'through various months within the time periods.',
  }, {
    title: 'ParkMandu',
    subtitle: 'Prototype of a parking management application',
    link: 'https://github.com/pratikbhd/parkmandu',
    image: '/website/images/projects/parkmandu.png',
    date: '2016-06',
    desc: 'Developed a prototpye of a Parking Management system (using OpenCV) which detects open and closed '
     + 'parking spaces in a parking lot. This information is relayed to a web based application '
     + 'which a user can access to view and/or book available parking spaces. This project was '
     + 'considered for implementation in the capital, Kathmandu by the municipality on August 2019.'
  }, {
    title: 'Swarm Bazed Maze Solver',
    subtitle: 'Implementation of swarm intelligence to solve a maze',
    link: 'https://github.com/pratikbhd/swarm_intelligence_based_maze_solver',
    image: '/website/images/projects/swarmbot.png',
    date: '2016-06',
    desc: 'As part of the final year project in my undergraduate degree, our team developed '
     + 'an implementation of two autonomous vehicles which used swarm technology to communicate with '
     + 'one another in order to solve a maze. The first bot used the left wall following algorithm to reach '
     + 'the target (smoke source) and then relayed its path to the second bot which calculated the shortest distance '
     + 'from the data and traversed the same maze in the shortest possible path.'
  },
];

export default data;
