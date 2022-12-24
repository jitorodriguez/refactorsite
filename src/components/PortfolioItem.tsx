import { useState } from "react";

import classes from "./PortfolioItem.module.css";

//CLEANUP: Refactor associated portfoio information props to model
const PortfolioItem: React.FC<{ itemId: string, title: string, text: string, isOpen: boolean, setActive: (itemId: string, open: boolean) => void }> = (props) => {
  const [isExpanded, setExpanded] = useState(props.isOpen);

  const portfolioItemClickHandler = () => {
    props.setActive(props.itemId, !props.isOpen);
  };

  return (
    <div className={classes.accordion}>
      <div className={classes.accordionTitle} onClick={portfolioItemClickHandler}>
        <span>{props.title}</span>
      </div>
      <div className={classes.accordionContent} aria-expanded={!props.isOpen}>{props.text}</div>
    </div>
  );
};

export default PortfolioItem;
