import { atomWithStorage } from 'jotai/utils';

const userMove = atomWithStorage('move', {
  moveName: 'Paper',
  moveId: 'paper',
  moveIcon: './icon-paper.svg',
  moveColor: 'hsl(230, 89%, 62%)',
  moveColor2: 'hsl(230, 89%, 65%)',
  beats: [
    'rock'
  ]
})

export { userMove }