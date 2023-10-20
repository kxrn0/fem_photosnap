import SCPriceCard from "./PriceCard.styled.tsx";

type Props = {
  title: string;
  description: string;
  monthlyRate: number;
  yearlyRate: number;
  isMonthly: boolean;
  link: string;
  isPro: boolean;
};

export default function PriceCard({
  title,
  description,
  monthlyRate,
  yearlyRate,
  isMonthly,
  link,
  isPro,
}: Props) {
  return (
    <SCPriceCard className={`price-card ${isPro ? "pro" : ""}`}>
      <div className="name">
        <h2 className="fs-h2">{title}</h2>
        <p className="fs-body-1">{description}</p>
      </div>
      <div className="price-container">
        <h1 className="fs-h1">
          ${isMonthly ? monthlyRate.toFixed(2) : yearlyRate.toFixed(2)}
        </h1>
        <p className="fs-body-1">per {isMonthly ? "month" : "year"}</p>
      </div>
      <a
        href={link}
        className={`button-primary fs-h4 ${isPro ? "white" : "black"}`}
        target="_blank"
      >
        pick plan
      </a>
    </SCPriceCard>
  );
}
