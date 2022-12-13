//libraries
import React, { useState } from 'react'
import { useTranslation } from 'next-i18next'

//icons
import { FiCheck, FiRotateCcw, FiX } from 'react-icons/fi'

//types
import { GuessedListWordInterface } from './gameTypes/guessWordType'

function GuessWord({ mainWord, setMainWord }) {
  //instance
  const { t } = useTranslation('common')

  //states
  const [guess, setGuess] = useState('')
  const [winner, setWinner] = useState(false)
  const [guessedList, setGuessedList] = useState([])

  const handlerCheckedGuess = () => {
    const guessWordSplit = guess.split('').length
    const mainWordSplit = mainWord.split('').length
    const guessChecked = mainWord
      .split('')
      .filter((item) => guess.split('').includes(item))
    const wordCorrectLength =
      guessChecked.length > guessWordSplit
        ? guessWordSplit
        : guessChecked.length

    if (guess) {
      if (
        guessChecked &&
        guessChecked.length == mainWordSplit &&
        mainWord == guess
      ) {
        setWinner(true)
      }

      setGuessedList([
        ...guessedList,
        {
          guessed: guess,
          correctWordGuess: wordCorrectLength,
        },
      ])
      setGuess('')
    }
  }

  return (
    <div className="w-[350px] flex flex-col items-start">
      <div className="text-[30px] mt-[20px] font-bold">
        {winner ? (
          <span className="text-green-600 ">{t('You Guess Correctly')}</span>
        ) : (
          <div className=" font-extrabold text-transparent text-[30px] bg-clip-text bg-gradient-to-r from-green-500 to-orange-700">
            {t('Guess The Word')}
          </div>
        )}
      </div>
      <div className="flex flex-row items-center gap-[10px] mt-[20px] ">
        <input
          onKeyUp={(e) => {
            if (e.key == 'Enter') {
              if (guess) {
                handlerCheckedGuess()
              }
            }
          }}
          placeholder={t('Enter Guess')}
          disabled={winner}
          value={guess}
          onChange={(e) => setGuess(e.currentTarget.value)}
          type="text"
          className="border rounded-[6px] px-[10px] w-[250px] h-[40px] font-medium "
        />
        <button
          disabled={winner}
          className="bg-blue-600 w-[80px] h-[40px] rounded-[6px] font-semibold text-white disabled:scale-100 disabled:bg-slate-500 active:scale-90 active:bg-blue-800 cursor-pointer duration-300"
          onClick={handlerCheckedGuess}
        >
          {t('Submit')}
        </button>
      </div>
      {winner && (
        <div className="w-full flex justify-center mt-[50px]">
          <button
            className="bg-green-600 flex flex-row items-center gap-[10px] w-[120px] px-[10px] h-[40px] rounded-[6px] font-semibold text-white disabled:scale-100 disabled:bg-slate-500 active:scale-90 active:bg-blue-800 cursor-pointer duration-300"
            onClick={() => setMainWord('')}
          >
            <span> {t('Try again')}</span>
            <span className="">
              <FiRotateCcw />
            </span>
          </button>
        </div>
      )}
      {guessedList && guessedList[0] && (
        <table className="w-full table-auto mt-[30px]">
          <thead>
            <tr className="w-full">
              <th className="text-start">{t('Guess')}</th>
              <th>{t('Matching Letters')}</th>
              <th>{t('Corrected')}</th>
            </tr>
          </thead>
          <tbody>
            {guessedList.map(
              (item: GuessedListWordInterface, index: number) => (
                <tr
                  key={index}
                  className={`h-[40px] text-center  border ${
                    item.guessed == mainWord && 'bg-green-200'
                  }`}
                >
                  <td className="font-medium text-start">{item.guessed}</td>
                  <td>{item.correctWordGuess}</td>
                  <td>
                    <div className="w-full flex justify-center">
                      {item.guessed === mainWord ? (
                        <span className="text-green-700">
                          <FiCheck />
                        </span>
                      ) : (
                        <span className="text-red-500">
                          <FiX />
                        </span>
                      )}
                    </div>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default GuessWord
