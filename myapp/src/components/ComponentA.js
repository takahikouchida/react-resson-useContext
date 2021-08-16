import { ComponentB } from "./ComponentB";
import { useContext } from "react";
import { UserCount } from "../App";

export const ComponentA = function () {
  const count = useContext(UserCount);

  return (
    <div>
      <p>ComponentA</p>
      <p>useCountextから取得した値：{count.count}</p>
      <ComponentB />
    </div>
  );
};
