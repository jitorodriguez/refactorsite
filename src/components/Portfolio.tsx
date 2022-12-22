import classes from "./Portfolio.module.css";

import PortfolioItem from "./PortfolioItem";

const Portfolio = () => {
  return (
    <div className={classes.portfolio}>
      <div>
        <h1>Portfolio</h1>
        <PortfolioItem/>
        <PortfolioItem/>
        <PortfolioItem/>
      </div>
    </div>
  );
};

export default Portfolio;
