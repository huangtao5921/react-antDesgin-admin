import { type } from '../action';

const initialState = {
  menuName: '首页'
};

export default (state = initialState , action) => {
  switch (action.type) {
    case type.SWITCH_MENU:
      return {
        menuName: action.menuName
      };
    default:
      return state;
  }
}
