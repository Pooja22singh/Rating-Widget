import { RatingWidget } from "./RatingWidget";

export const Container = () => {
  const settings = {
    count: 5
  };
  return <RatingWidget className="rateContainer" settings={settings} />;
};
