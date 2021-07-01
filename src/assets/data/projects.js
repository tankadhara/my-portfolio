import { v4 as uuidv4 } from 'uuid';
import ProjectImg from '../images/projectImg.png';
import UTrackerImg from '../images/utracker.jpg';
import GreenCtgImg from '../images/greenctg.jpg';
import CoinTrackerImg from '../images/cointracker.jpg';
import CavinImg from '../images/cavinimg.jpg';

const projects = [
  {
    id: uuidv4(),
    name: 'Groove App',
    desc:
      'An e-Commerce application for online shopping. I developed using flutter and firebase',
    img: UTrackerImg,
  },
  {
    id: uuidv4(),
    name: 'Coming soon',
    desc: 'An app',
    img: GreenCtgImg,
  },
  {
    id: uuidv4(),
    name: 'Coming soon',
    desc: 'A website',
    img: CoinTrackerImg,
  },
  {
    id: uuidv4(),
    name: 'Coming soon',
    desc: 'A portfolio ',
    img: CavinImg,
  },
  {
    id: uuidv4(),
    name: 'Coming soon',
    desc: 'A website ',
    img: ProjectImg,
  },
];

export default projects;
