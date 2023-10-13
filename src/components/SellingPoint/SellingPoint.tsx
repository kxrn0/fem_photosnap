import { FunctionComponent } from "react";
import SCSellingPoint from "./SellingPoint.styled.tsx";

type Props = {
  Icon: FunctionComponent;
  title: string;
  description: string;
};

export default function SellingPoint({ Icon, title, description }: Props) {
  return (
    <SCSellingPoint>
      <div className="icon-container">
        <Icon />
      </div>
      <h3 className="fs-h3">{title}</h3>
      <p className="fs-body-1">{description}</p>
    </SCSellingPoint>
  );
}
