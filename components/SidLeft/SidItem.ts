import { IconType } from "react-icons";
import {
  AiOutlineAlert,
  AiOutlineMinus,
  AiOutlineVerticalAlignBottom,
} from "react-icons/ai";
import { BsQuestionCircle } from "react-icons/bs";
import { RiSingleQuotesR, RiPagesLine } from "react-icons/ri";
import { FaSlash, FaBackspace, FaWpforms } from "react-icons/fa";
import { GiReturnArrow } from "react-icons/gi";
import { CgQuote } from "react-icons/cg";
import { MdOutlineKeyboardTab } from "react-icons/md";

interface option {
  Id: number;
  Name: string;
  Icon: IconType;
  Link: string;
  flag: string;
}

export const NavItem: Array<option> = [
  {
    Id: 1,
    Name: "Introduction",
    Icon: RiPagesLine,
    Link: "/",
    flag: "",
  },
  {
    Id: 2,
    Name: "Backslash",
    Icon: FaSlash,
    Link: "backslash",
    flag: `\\`,
  },
  {
    Id: 3,
    Name: "Backspace",
    Icon: FaBackspace,
    Link: "backspace",
    flag: `\\b`,
  },
  {
    Id: 4,
    Name: "HorizontalTab",
    Icon: MdOutlineKeyboardTab,
    Link: "horizontalTab",
    flag: `\\t`,
  },

  {
    Id: 5,
    Name: "VerticalTab",
    Icon: AiOutlineVerticalAlignBottom,
    Link: "verticalTab",
    flag: `\\v`,
  },
  {
    Id: 6,
    Name: "Form_feed",
    Icon: FaWpforms,
    Link: "formFeed",
    flag: `\\f`,
  },
  {
    Id: 7,
    Name: "NewLine",
    Icon: AiOutlineMinus,
    Link: "newLine",
    flag: `\\n`,
  },
  {
    Id: 8,
    Name: "DoubleQuotation",
    Icon: CgQuote,
    Link: "doubleQuotation",
    flag: `\\"`,
  },
  {
    Id: 9,
    Name: "SingleQuotation",
    Icon: RiSingleQuotesR,
    Link: "singleQuotation",
    flag: `\\'`,
  },

  {
    Id: 10,
    Name: "CarriageReturn",
    Icon: GiReturnArrow,
    Link: "carriageReturn",
    flag: `\\r`,
  },

  {
    Id: 11,
    Name: "Alert",
    Icon: AiOutlineAlert,
    Link: "alert",
    flag: `\\a`,
  },
  // {
  //   Id: 12,
  //   Name: "QuestionMark",
  //   Icon: BsQuestionCircle,
  //   Link: "questionMark",
  //   flag: `\\?`,
  // },
];
export const slug = {
  INTRODUCTION: "introduction",
  ALERT: "alert",
  BACKSLASH: "backslash",
  BACKSPACE: "backspace",
  CARRIAGE_RETURN: "carriageReturn",
  DOUBLE_QUOTATION: "doubleQuotation",
  HORIZONTAL_TAB: "horizontalTab",
  NEW_LINE: "newLine",
  FROM_FEED: "formFeed",
  QUESTION_MARK: "questionMark",
  SINGLE_QUOTATION: "singleQuotation",
  VERTICAL_TAB: "verticalTab",
};
