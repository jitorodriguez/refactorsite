import { useState } from "react";

import classes from "./PortfolioItem.module.css";

const PortfolioItem = () => {

    const [isExpanded, setExpanded] = useState(false);

    const portfolioItemClickHandler = () => {
      setExpanded(!isExpanded)
    }
    
    
  return (
    <div className={classes.panelContainer}>
      <div onClick={portfolioItemClickHandler} className={classes.panelHeader}>Sample Text</div>
      {isExpanded && <div className={classes.panelContent}></div>}
    </div>
  );
};

export default PortfolioItem;
