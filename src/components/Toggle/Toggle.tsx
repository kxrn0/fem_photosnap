import { useMemo } from "react";
import SCToggle from "./Toggle.styled.tsx";

type Props = {
  isA: boolean;
  aLabel: string;
  bLabel: string;
  toggle: () => void;
};

export default function Toggle({ isA, aLabel, bLabel, toggle }: Props) {
  const id = useMemo(() => crypto.randomUUID(), []);

  return (
    <SCToggle>
      <label htmlFor={`a-${id}`} className={`fs-h3 ${isA ? "active" : ""}`}>
        {aLabel}
      </label>
      <div className={`inputs ${isA ? "a" : "b"}`}>
        <input
          type="radio"
          id={`a-${id}`}
          name={`toggle-set-${id}`}
          onChange={toggle}
          checked={isA}
        />
        <input
          type="radio"
          id={`b-${id}`}
          name={`toggle-set-${id}`}
          onChange={toggle}
          checked={!isA}
        />
        <div className="ball"></div>
      </div>
      <label htmlFor={`b-${id}`} className={`fs-h3 ${!isA ? "active" : ""}`}>
        {bLabel}
      </label>
    </SCToggle>
  );
}
