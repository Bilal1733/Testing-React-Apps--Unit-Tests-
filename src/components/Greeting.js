import { useState } from "react";
import { Fragment } from "react/cjs/react.production.min";
import Output from "./Output";

const Greeting = () => {
  const [changedText, setChangedText] = useState(false);

  const changedTextHandler = () => {
    setChangedText(true);
  };

  return (
    <Fragment>
      <div>
        <h2>Hello World!</h2>

        {!changedText && <Output>Its good to see you!</Output>}
        {changedText && <Output>Changed!</Output>}
        <button onClick={changedTextHandler}>Change Text!</button>
      </div>
    </Fragment>
  );
};

export default Greeting;
