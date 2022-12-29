import Carousel from "./carousel";
import classes from "./PortfolioItem.module.css";
import Project from "../models/Project";

const PortfolioItem: React.FC<{ item: Project, isOpen: boolean, setActive: (itemId: string, open: boolean) => void }> = (props) => {

  const portfolioItemClickHandler = () => {
    props.setActive(props.item.id, !props.isOpen);
  };

  return (
    <div className={classes.accordion}>
      <div className={classes.accordionTitle} onClick={portfolioItemClickHandler}>
        <span>{props.item.title}</span>
      </div>
      <div className={classes.accordionContent} aria-expanded={!props.isOpen}>
        <div className={classes.topContent}>
          <Carousel images={props.item.images}/>
        </div>
        <div className={classes.bottomContent}>
          <h2>{props.item.title}</h2>
          <em>SPECIFICATIONS: {props.item.specifications}</em>
          <p>{props.item.description}</p>
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;
