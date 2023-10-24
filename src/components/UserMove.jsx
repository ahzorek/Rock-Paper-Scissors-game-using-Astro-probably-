import { twMerge as tw } from 'tailwind-merge'
import possibleTWclasses from '../utils/possibleTwCls' // tailwind will purge unused classes by default. by referring them somewhere in code(even like this), we keep them
import { useAtom } from 'jotai'
import { userMove } from '../utils/userMove.js'

export default function UserMove() {
  const [moveDetails, _] = useAtom(userMove)

  const baseClass = 'flex w-full h-full place-items-center justify-center rounded-full border-solid shadow'
  const borderColor = `border-${moveDetails.moveId}2`
  return (
    <div title={moveDetails.moveName}
      // style={{ boxShadow: `${moveDetails.moveColor} 0px 5px 0px, inset rgb(0 0 0/.2) 0px 5px 0px` }}
      style={{ filter: `drop-shadow(${moveDetails.moveColor} 0px 7px 0px)`, backgroundColor: moveDetails.moveColor2 }}
      className={tw(borderColor, baseClass)}>
      <span
        className='bg-white rounded-full w-[70%] h-[70%] flex place-items-center justify-center'
        style={{ boxShadow: 'inset rgb(30 30 30/.1) 0px 7px 0px' }}
      >

        <img style={{ width: '40%' }} alt={moveDetails.moveName} src={moveDetails.moveIcon} />
      </span>
    </div >
  )
}