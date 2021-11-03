import { useState } from "react";
import { fizzBuzz } from "../utils/fizzBuzz";

export default function FizzBuzz(): JSX.Element {
  const [counterNumberFromCurrentRender, queueRerenderWithNewNumberValue] =
    useState(0);
  const [storedValuesFromCurrentRender, queueRerenderWithNewStoredValues] =
    useState<(number | string)[]>([]);

  const handleAddNextNumber = () => {
    const nextNumber = counterNumberFromCurrentRender + 1;
    const nextValue = fizzBuzz(nextNumber);
    queueRerenderWithNewStoredValues((previousValues) => [
      ...previousValues,
      nextValue,
    ]);
    queueRerenderWithNewNumberValue(nextNumber);
  };

  return (
    <>
      <h1>FizzBuzz Game</h1>
      <p>Numbers played:</p>
      <ul>
        {console.log(storedValuesFromCurrentRender)}
        {storedValuesFromCurrentRender.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <p>Your current number: {counterNumberFromCurrentRender}</p>
      <button onClick={handleAddNextNumber}>Next</button>
    </>
  );
}
