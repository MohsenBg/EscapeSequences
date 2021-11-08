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
}

export const NavItem: Array<option> = [
  {
    Id: 1,
    Name: "Introduction",
    Icon: RiPagesLine,
    Link: "/",
  },
  {
    Id: 2,
    Name: "Alert",
    Icon: AiOutlineAlert,
    Link: "alert",
  },
  {
    Id: 3,
    Name: "Backslash",
    Icon: FaSlash,
    Link: "backslash",
  },
  {
    Id: 4,
    Name: "Backspace",
    Icon: FaBackspace,
    Link: "backspace",
  },
  {
    Id: 5,
    Name: "CarriageReturn",
    Icon: GiReturnArrow,
    Link: "carriageReturn",
  },
  {
    Id: 6,
    Name: "DoubleQuotation",
    Icon: CgQuote,
    Link: "doubleQuotation",
  },
  {
    Id: 7,
    Name: "Form_feed",
    Icon: FaWpforms,
    Link: "formFeed",
  },
  {
    Id: 8,
    Name: "HorizontalTab",
    Icon: MdOutlineKeyboardTab,
    Link: "horizontalTab",
  },

  {
    Id: 9,
    Name: "NewLine",
    Icon: AiOutlineMinus,
    Link: "newLine",
  },
  {
    Id: 10,
    Name: "QuestionMark",
    Icon: BsQuestionCircle,
    Link: "questionMark",
  },
  {
    Id: 11,
    Name: "SingleQuotation",
    Icon: RiSingleQuotesR,
    Link: "singleQuotation",
  },
  {
    Id: 12,
    Name: "VerticalTab",
    Icon: AiOutlineVerticalAlignBottom,
    Link: "verticalTab",
  },
];
export const slug = {
  INTRODUCTION: "introduction",
  ALERT: "alert",
  BACKSLASH: "backSlash",
  BACKSPACE: "backspace",
  CARRIAGE_RETURN: "carriageReturn",
  DOUBLE_QUOTATION: "doubleQuotation",
  HORIZONTAL_TAB: "horizontalTab",
  NEW_LINE: "newLine",
  QUESTION_MARK: "questionMark",
  SINGLE_QUOTATION: "singleQuotation",
  VERTICAL_TAB: "verticalTab",
};
