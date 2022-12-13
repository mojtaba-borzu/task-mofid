//libraries
import React, { useState } from 'react'
import { useTranslation } from 'next-i18next'

function BasicWord({ setMainWord }) {
  //instance
  const { t } = useTranslation('common')

  //state
  const [chooseWord, setChooseWord] = useState('')

  return (
    <div className="w-[350px] flex flex-col items-start">
      <div className="mt-[20px] font-extrabold text-transparent text-[30px] bg-clip-text bg-gradient-to-r from-green-500 to-orange-700">
        {t('Choose The Main Word')}
      </div>
      <div className="flex flex-row items-center gap-[10px] mt-[20px] ">
        <input
          onKeyUp={(e) => {
            if (e.key == 'Enter') {
              if (chooseWord) {
                setMainWord(chooseWord)
              }
            }
          }}
          placeholder={t('Enter Word')}
          value={chooseWord}
          onChange={(e) => setChooseWord(e.currentTarget.value)}
          type="text"
          className="border rounded-[6px] px-[10px] w-[250px] h-[40px] font-medium "
        />
        <button
          className="bg-blue-600 w-[80px] h-[40px] rounded-[6px] font-semibold text-white disabled:scale-100 disabled:bg-slate-500 active:scale-90 active:bg-blue-800 cursor-pointer duration-300"
          onClick={() => {
            setMainWord(chooseWord)
          }}
        >
          {t('Submit')}
        </button>
      </div>
    </div>
  )
}

export default BasicWord
