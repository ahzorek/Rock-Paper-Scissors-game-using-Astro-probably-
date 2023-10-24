const GameData = [
  {
    moveName: 'Paper',
    moveId: 'paper',
    moveIcon: './icon-paper.svg',
    moveColor: 'hsl(230, 89%, 62%)',
    moveColor2: 'hsl(230, 89%, 65%)',
    beats: [
      'rock'
    ]
  },
  {
    moveName: 'Rock',
    moveId: 'rock',
    moveIcon: './icon-rock.svg',
    moveColor: 'hsl(349, 71%, 52%)',
    moveColor2: 'hsl(349, 70%, 56%)',
    beats: [
      'scissors'
    ]
  },
  {
    moveName: 'Scissors',
    moveId: 'scissors',
    moveIcon: './icon-scissors.svg',
    moveColor: 'hsl(39, 89%, 49%)',
    moveColor2: 'hsl(40, 84%, 53%)',
    beats: [
      'paper'
    ]
  }]


export default GameData