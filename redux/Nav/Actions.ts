import { NavActionType as ActionType } from "./ActionType";

interface OpenMenu {
  type: ActionType.OPEN_MENU;
}
interface CloseMenu {
  type: ActionType.CLOSE_MENU;
}

export type NavActions = OpenMenu | CloseMenu;
