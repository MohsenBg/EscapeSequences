import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { NavItem, slug } from "../../components/SidLeft/SidItem";
import Alert from "../../components/EscapeSequences/Alert/Alert";
import Backspace from "../../components/EscapeSequences/Backspace/Backspace";
import Backslash from "../../components/EscapeSequences/Backslash/Backslash";
import CarriageReturn from "../../components/EscapeSequences/CarriageReturn/CarriageReturn";
import DoubleQuotation from "../../components/EscapeSequences/DoubleQuotation/DoubleQuotation";
import HorizontalTab from "../../components/EscapeSequences/HorizontalTab/HorizontalTab";
import NewLine from "../../components/EscapeSequences/NewLine/NewLine";
import QuestionMark from "../../components/EscapeSequences/QuestionMark/QuestionMark";
import SingleQuotation from "../../components/EscapeSequences/SingleQuotation/SingleQuotation";
import VerticalTab from "../../components/EscapeSequences/VerticalTab/VerticalTab";
const Doc = ({ doc }: any) => {
  return (
    <div>
      {doc.toLowerCase() === slug.ALERT ? (
        <div>
          <Alert />
        </div>
      ) : doc.toLowerCase() === slug.BACKSLASH ? (
        <div>
          <Backslash />
        </div>
      ) : doc.toLowerCase() === slug.BACKSPACE ? (
        <div>
          <Backspace />
        </div>
      ) : doc.toLowerCase() === slug.CARRIAGE_RETURN ? (
        <div>
          <CarriageReturn />
        </div>
      ) : doc.toLowerCase() === slug.DOUBLE_QUOTATION ? (
        <div>
          <DoubleQuotation />
        </div>
      ) : doc.toLowerCase() === slug.HORIZONTAL_TAB ? (
        <div>
          <HorizontalTab />
        </div>
      ) : doc.toLowerCase() === slug.NEW_LINE ? (
        <div>
          <NewLine />
        </div>
      ) : doc.toLowerCase() === slug.QUESTION_MARK ? (
        <div>
          <QuestionMark />
        </div>
      ) : doc.toLowerCase() === slug.SINGLE_QUOTATION ? (
        <div>
          <SingleQuotation />
        </div>
      ) : doc.toLowerCase() === slug.VERTICAL_TAB ? (
        <div>
          <VerticalTab />
        </div>
      ) : null}
    </div>
  );
};

export default Doc;

//@ts-ignore
export const getStaticPaths: GetStaticPaths = async () => {
  const path = NavItem.map((item) => {
    if (item.Link !== slug.INTRODUCTION) {
      return {
        params: { doc: item.Link },
      };
    }
  });
  return {
    paths: path,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { params }: any = context;
  const doc = params.doc;
  return {
    props: { doc },
  };
};
