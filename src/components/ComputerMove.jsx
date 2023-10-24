// import { useAtom } from 'jotai'
// import { userMove } from '../utils/userMove.js'

export default function ComputerMove({ content = false }) {
  // const [moveDetails, _] = useAtom(userMove)
  console.log('the component computer move rendered', content)
  const baseClass = 'flex w-[80%] h-[80%] mx-auto place-items-center justify-center rounded-full border-solid shadow bg-black/20'
  // const borderColor = `border-${moveDetails.moveId}2`
  return (
    <div
      // style={{ boxShadow: `${moveDetails.moveColor} 0px 5px 0px, inset rgb(0 0 0/.2) 0px 5px 0px` }}
      // style={{ filter: `drop-shadow(${moveDetails.moveColor} 0px 7px 0px)`, backgroundColor: moveDetails.moveColor2 }}
      className={baseClass}>
      {/* <span
        className='bg-white rounded-full w-[70%] h-[70%] flex place-items-center justify-center'
        style={{ boxShadow: 'inset rgb(30 30 30/.1) 0px 7px 0px' }}
      >

        <img style={{ width: '40%' }} alt={moveDetails.moveName} src={moveDetails.moveIcon} />
      </span> */}
    </div >
  )
}