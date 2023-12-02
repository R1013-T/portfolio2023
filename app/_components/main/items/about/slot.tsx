'use client'

import { useEffect, useRef, useState } from 'react'
import { useReward } from 'react-rewards'
import type { SlotCounterRef } from 'react-slot-counter'
import SlotCounter from 'react-slot-counter'

export function Reward({ currentEmoji }: { currentEmoji: string }) {
  const emojiConfig = {
    elementSize: 30,
    elementCount: 60,
    spread: 70,
    emoji: [currentEmoji],
  }

  const { reward } = useReward('rewardId', 'emoji', emojiConfig)

  useEffect(() => {
    reward()
  }, [])

  return (
    <div className="flex flex-col items-center mt-2">
      <span id="rewardId"></span>
    </div>
  )
}

export default function Slot() {
  const counterRef = useRef<SlotCounterRef>(null)

  const slotDummyValues = ['😎', '😂', '😇', '🥰']

  const [slotValues, setSlotValues] = useState(['😎', '😂', '😇'])
  const [isCorrect, setIsCorrect] = useState<string>()

  const handleStartClick = () => {
    setIsCorrect(undefined)

    const value1 = getRandomValue()
    const value2 = getRandomValue()
    const value3 = getRandomValue()

    setSlotValues([value1, value2, value3])
    counterRef.current?.startAnimation()

    if (value1 === value2 && value2 === value3) {
      setTimeout(() => {
        setIsCorrect(value1)
      }, 700)
    }
  }

  function getRandomValue(): string {
    const randomInt = Math.floor(Math.random() * 4)
    return slotDummyValues[randomInt]
  }

  return (
    <div className="h-full w-full flex flex-col justify-center relative">
      <div className="absolute top-0 right-0 -z-10 w-full h-full flex items-center justify-center">
        <div className="bg-white-3/30 rounded-full w-11/12 aspect-square flex items-center justify-center scale-150">
          <div className="bg-white-2/30 rounded-full w-4/5 aspect-square flex items-center justify-center">
            <div className="bg-white-2/80 rounded-full w-4/6 aspect-square flex items-center justify-center">
              <p className="text-9xl mt-3">{isCorrect && isCorrect}</p>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`mx-auto rounded-md bg-white-4/95 w-52 flex justify-center border-2 border-black-2/30 ${
          isCorrect && 'opacity-50'
        }`}
      >
        <SlotCounter
          startValueOnce
          autoAnimationStart={false}
          animateUnchanged
          startValue={['😎', '😂', '😇']}
          value={slotValues}
          dummyCharacters={slotDummyValues}
          ref={counterRef}
          charClassName="text-3xl px-2 my-2"
          valueClassName="px-2 pt-0 text-3xl"
        />
      </div>
      <button
        className={`block mt-6 py-2.5 w-52 tracking-wider text-black-2 bg-white-3/95 border-2 font-bold border-white-1 mx-auto rounded-md ${
          isCorrect && 'opacity-50'
        }`}
        onClick={handleStartClick}
      >
        {isCorrect ? 'もう一度！' : 'スタート'}
      </button>
      <div className="h-3 mt-2">
        {isCorrect && <Reward currentEmoji={isCorrect} />}
      </div>
    </div>
  )
}
