import { useState } from "react";

const FunctionalComp = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Create Comp: ${count}`);

    return () => console.log(`Remove Comp: ${count}`);
  }, [count]);

  return (
    <div className="bg-blue-100 w-96 h-96 flex justify-center items-center text-6xl">
      {count}
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
};

export default FunctionalComp;
