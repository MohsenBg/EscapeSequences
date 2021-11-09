import React from "react";
import styles from "./CarriageReturn.module.scss";
const CarriageReturn = () => {
  return (
    <div className={styles.container}>
      <h1>\r</h1>
      <span>
        This escape sequence is used to insert carriage return in text.
      </span>
      <h2>Code</h2>
      <div className={styles.textareaContainer}>
        <div className={styles.codeContainer}>
          <pre>
            <code className={styles.code}>
              <p>
                <span className="include">#include</span>
                <span className="ioStream"> &lt;iostream&gt;</span>
              </p>
              <p>
                <span className="using">using</span>
                <span className="namespace"> namespace </span>
                <span className="std">std</span>;
              </p>
              <p>
                <span className="int">int </span>
                <span className="mainF">main()</span>
              </p>
              <p>&#123;</p>
              <p>
                <span>
                  <span className="cout">
                    &nbsp;&nbsp;cout&lt;&lt;
                    <span className="string">
                      &quot;Name:
                      <span className="EscapeSequence">\r</span>Mohsen&quot;
                    </span>
                  </span>
                  ;
                </span>
              </p>
              <p>
                <span className="return">
                  &nbsp;&nbsp;return
                  <span className="number"> 0</span>;
                </span>
              </p>
              <p>&#125;</p>
            </code>
          </pre>
        </div>
      </div>
      <div className={styles.outputContainer}>
        <h3>OutPut</h3>
        <p>
          First “Code” will printed on screen then \r move the cursor at
          beginning of screen.
        </p>
        <div className={styles.output}>
          <div className={styles.text}>
            <p>Mohsen</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarriageReturn;
