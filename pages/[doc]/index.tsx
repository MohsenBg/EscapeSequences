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
import Head from "next/head";
import FormFeed from "../../components/EscapeSequences/FormFeed/FormFeed";

const Doc = ({ doc }: any) => {
  const selected = NavItem.filter((item) => doc === item.Link);
  return (
    <>
      <Head>
        <title>{selected[0].Name}</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div>
        {doc === slug.ALERT ? (
          <div>
            <Alert />
          </div>
        ) : doc === slug.BACKSLASH ? (
          <div>
            <Backslash />
          </div>
        ) : doc === slug.BACKSPACE ? (
          <div>
            <Backspace />
          </div>
        ) : doc === slug.CARRIAGE_RETURN ? (
          <div>
            <CarriageReturn />
          </div>
        ) : doc === slug.DOUBLE_QUOTATION ? (
          <div>
            <DoubleQuotation />
          </div>
        ) : doc === slug.HORIZONTAL_TAB ? (
          <div>
            <HorizontalTab />
          </div>
        ) : doc === slug.NEW_LINE ? (
          <div>
            <NewLine />
          </div>
        ) : doc === slug.QUESTION_MARK ? (
          <div>
            <QuestionMark />
          </div>
        ) : doc === slug.SINGLE_QUOTATION ? (
          <div>
            <SingleQuotation />
          </div>
        ) : doc === slug.FROM_FEED ? (
          <div>
            <FormFeed />
          </div>
        ) : doc === slug.VERTICAL_TAB ? (
          <div>
            <VerticalTab />
          </div>
        ) : null}
      </div>
    </>
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
