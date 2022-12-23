import { useState } from "react";

import classes from "./PortfolioItem.module.css";

const PortfolioItem: React.FC<{ title: string, text: string }> = (props) => {
  const [isExpanded, setExpanded] = useState(false);

  const portfolioItemClickHandler = () => {
    setExpanded(!isExpanded);
  };

  return (
    <div className={classes.accordion}>
      <div className={classes.accordionTitle} onClick={portfolioItemClickHandler}>
        <span>{props.title}</span>
      </div>
      <div className={classes.accordionContent} aria-expanded={!isExpanded}>{props.text}</div>
    </div>
  );
};

export default PortfolioItem;
