import {SET_LANGUAGE} from './constants';

interface Action{
  type: string;
  data: any;
}

interface State {
  lang: string;
}


const initialState = {
  lang: 'id'
};

const setting = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case SET_LANGUAGE:
      return {
        ...state,
        lang: action.data,
      };
    default:
      return state;
  }
};

export default setting;
