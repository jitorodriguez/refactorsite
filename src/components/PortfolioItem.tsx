import { useState } from "react";

import Carousel from "./carousel";
import classes from "./PortfolioItem.module.css";
import Project from "../models/Project";

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
      <div className={classes.accordionContent} aria-expanded={!props.isOpen}>
        <div>
          <Carousel images={props.item.images}/>
        </div>
        <div>
          <p>{props.item.description}</p>
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;
