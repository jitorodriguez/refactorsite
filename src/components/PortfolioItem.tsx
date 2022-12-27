import { useState } from "react";

import classes from "./PortfolioItem.module.css";
import Project from "../models/Project";

//CLEANUP: Refactor associated portfoio information props to model
const PortfolioItem: React.FC<{ item: Project, isOpen: boolean, setActive: (itemId: string, open: boolean) => void }> = (props) => {
  const [isExpanded, setExpanded] = useState(props.isOpen);

  const portfolioItemClickHandler = () => {
    props.setActive(props.item.id, !props.isOpen);
  };

  return (
    <div className={classes.accordion}>
      <div className={classes.accordionTitle} onClick={portfolioItemClickHandler}>
        <span>{props.item.title}</span>
      </div>
      <div className={classes.accordionContent} aria-expanded={!props.isOpen}>{props.item.description}</div>
    </div>
  );
};

export default PortfolioItem;
