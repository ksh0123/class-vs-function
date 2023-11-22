import { useState } from "react";

import ClassComp from "./components/ClassComp";
import FunctionalComp from "./components/FunctionalComp";

const App = () => {
  const [isHidden, setIsHidden] = useState(false);

  return (
    <div className="min-h-screen flex gap-16 justify-center items-center">
      {!isHidden && <ClassComp />}
      <button onClick={() => setIsHidden(!isHidden)}>Toggle</button>
      {/* <FunctionalComp /> */}
    </div>
  );
};

export default App;
