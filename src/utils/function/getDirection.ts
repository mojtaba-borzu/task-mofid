import { languageList } from '../language'

export function getDirection(router) {
  return languageList?.find((language) => router?.locale == language?.value)
    ?.dir
}
