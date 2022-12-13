//libraries
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

//list
import { MenuList } from '../../../utils/menu'
import { languageList } from '../../../utils/language'

function DesktopHeader() {
  //instance
  const router = useRouter()
  const { t } = useTranslation('common')

  return (
    <header className="w-full h-[60px] bg-[#0d6efd]  flex-row items-center justify-between px-[20px] tablet:flex hidden">
      <div className="flex flex-row items-center gap-[20px]  text-white text-[18px] mx-auto container">
        {MenuList.map((menu) => (
          <Link key={menu.id} href={menu.link}>
            <div
              className={`font-medium hover:text-blue-900 duration-200 uppercase ${
                router.asPath.split('/').at(-1) ===
                  menu.link.split('/').at(-1).toLocaleLowerCase() &&
                'text-blue-900'
              }`}
            >
              {t(menu.label)}
            </div>
          </Link>
        ))}
      </div>
      <div className="relative group ">
        <span className="group-hover cursor-pointer px-[20px] text-white text-center">
          {
            languageList?.find((language) => router?.locale == language?.value)
              ?.label
          }
        </span>
        <div className="w-[80px] group-hover:h-[90px] h-[0px] flex flex-col items-start duration-300 px-[10px] gap-[10px] bg-white rounded-[10px]  shadow-xl absolute overflow-hidden">
          {languageList.map((item) => (
            <Link key={item.id} href={router?.pathname} locale={item.value}>
              <div className="text-blue-700 text-[14px] font-bold  pt-[10px] ">
                {item.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </header>
  )
}

export default DesktopHeader
