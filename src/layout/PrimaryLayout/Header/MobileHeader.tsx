//libraries
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { useTranslation } from 'next-i18next'

//icons
import { FiMenu, FiX } from 'react-icons/fi'

//list
import { MenuList } from '../../../utils/menu'
import { languageList } from '../../../utils/language'

//functions
import { getDirection } from '../../../utils/function/getDirection'

function MobileHeader() {
  //instance
  const router = useRouter()
  const { t } = useTranslation('common')

  //states
  const [showMenuStatus, setShowMenuStatus] = useState(false)

  return (
    <header className="w-full h-[60px] bg-blue-700  flex-row items-center justify-between px-[20px] flex  tablet:hidden">
      <div className="flex flex-row items-center gap-[20px]  text-white text-[18px] ">
        <div
          onClick={() => {
            document.body.style.overflow = 'hidden'
            setShowMenuStatus(true)
          }}
        >
          <FiMenu />
        </div>
      </div>
      <div
        className={`fixed top-0 z-50 left-0  flex h-full w-full select-none items-start  justify-start overflow-auto   duration-300
  ${
    !showMenuStatus &&
    (getDirection(router) == 'ltr' ? '-translate-x-full' : 'translate-x-full')
  }`}
      >
        <div className="z-50  flex  min-h-screen min-w-full  bg-blue-600 px-[16px] pt-[30px] pb-[80px] overflow-hidden">
          <div className="flex min-h-full  w-full flex-col items-start relative">
            <div
              onClick={() => {
                document.body.style.overflow = 'unset'
                setShowMenuStatus(false)
              }}
              className="mb-[30px] text-[30px] text-white"
            >
              <FiX />
            </div>
            {MenuList.map((menu) => (
              <Link key={menu.id} href={menu.link}>
                <div
                  className={`font-semibold hover:text-blue-900 duration-200 uppercase mt-[20px] px-[20px]  text-[18px] text-white ${
                    router.asPath.split('/').at(-1) ===
                      menu.link.split('/').at(-1).toLocaleLowerCase() &&
                    'text-blue-900'
                  }`}
                >
                  {t(menu.label)}
                </div>
              </Link>
            ))}
            <div className="absolute bottom-10">
              <div className="relative group ">
                <span className="group-hover cursor-pointer px-[20px] text-white text-center">
                  {
                    languageList?.find(
                      (language) => router?.locale == language?.value
                    )?.label
                  }
                </span>
                <div className="w-[80px]  group-hover:h-[90px] h-[0px] flex flex-col items-start duration-300 px-[10px] gap-[10px] bg-white rounded-[10px]  shadow-xl absolute overflow-hidden">
                  {languageList.map((item) => (
                    <Link
                      key={item.id}
                      href={router?.pathname}
                      locale={item.value}
                    >
                      <div className="text-blue-700 text-[14px] font-bold  pt-[10px]">
                        {item.label}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default MobileHeader
