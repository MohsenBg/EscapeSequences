import { NavActions as Actions } from "./Actions";
import { NavActionType as ActionType } from "./ActionType";

const initialState = {
  menuOpen: false,
};

export const NavReducer = (state = initialState, actions: Actions) => {
  switch (actions.type) {
    case ActionType.OPEN_MENU:
      return { ...state, menuOpen: true };
    case ActionType.CLOSE_MENU:
      return { ...state, menuOpen: false };

    default:
      return state;
  }
};
