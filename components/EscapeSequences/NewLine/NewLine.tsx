import React from "react";
import styles from "./NewLine.module.scss";

const NewLine = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textareaContainer}>
        <div className={styles.codeContainer}>
          <pre>
            <code className={styles.code}>
              <p>
                <span className={"include"}>#include</span>
                <span className={"ioStream"}>{` <iostream>`}</span>
              </p>
              <p>
                <span className={"using"}>using</span>
                <span className={"namespace"}> namespace </span>
                <span className={"std"}>std</span>
              </p>
              <p>
                <span className={"int"}>int </span>
                <span className={"mainF"}>{`main()`}</span>
              </p>
              <p>{"{"}</p>
              <span>
                {" "}
                <span className={"cout"}>cout {`<<`}</span>
                <span className={"string"}>
                  '"Electronic"
                  <span className={"EscapeSequence"}>\n</span>'
                </span>
              </span>
              <p>{"}"}</p>
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
};
export default NewLine;
