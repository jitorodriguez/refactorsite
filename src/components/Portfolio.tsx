import classes from "./Portfolio.module.css";

import PortfolioItem from "./PortfolioItem";

const portfolioList = [
  { title: "Item1", text: "Sample Text 1" },
  { title: "Item2", text: "Sample Text 2" },
  { title: "Item3", text: "Sample Text 3" },
];

const Portfolio = () => {
  return (
    <div className={classes.portfolio}>
      <div>
        <h1>Portfolio</h1>
        {portfolioList.map((item) => (
          <PortfolioItem title={item.title} text={item.text} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
