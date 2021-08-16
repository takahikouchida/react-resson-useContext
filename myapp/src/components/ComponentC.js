import React, { useContext } from "react";
import { UserCount } from "../App";

export const ComponentC = function () {
  const count = useContext(UserCount);

  const clickHandle = function () {
    count.setCount(count.count + 1);
  };

  return (
    <div>
      <p>Componet C</p>
      <p>useContextから取得した値：{count.count}</p>
      <button onClick={clickHandle}>＋</button>
    </div>
  );
};
