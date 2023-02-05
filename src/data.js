import paperIcon from './assets/images/icon-paper.svg'
import scissorsIcon from './assets/images/icon-scissors.svg'
import rockIcon from './assets/images/icon-rock.svg'

const data = [
  {
    type: 'Paper',
    icon: paperIcon,
    primaryColor: '#4664f4',
    secondaryColor: '#2a45c2',
    beats: 'Rock'
  },
  {
    type: 'Scissors',
    icon: scissorsIcon,
    primaryColor: '#EB9F0E',
    secondaryColor: '#C76C1B',
    beats: 'Paper'
  },
  {
    type: 'Rock',
    icon: rockIcon,
    primaryColor: '#DB2E4D',
    secondaryColor: '#9D1634',
    beats: 'Scissors'
  }
]

export default data
