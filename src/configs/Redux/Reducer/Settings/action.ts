import {SET_LANGUAGE} from './constants'

export function setPrefLang(lang: string){
  return {
    type: SET_LANGUAGE,
    data: lang,
  };
}