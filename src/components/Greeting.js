import { useState } from "react";
import { Fragment } from "react/cjs/react.production.min";

const Greeting = () => {
  const [changedText, setChangedText] = useState(false);

  const changedTextHandler = () => {
    setChangedText(true);
  };

  return (
    <Fragment>
      <div>
        <h2>Hello World!</h2>

        {!changedText && <p>Its good to see you!</p>}
        {changedText && <p>Changed!</p>}
        <button onClick={changedTextHandler}>Change Text!</button>
      </div>
    </Fragment>
  );
};

export default Greeting;
