import Carousel from "./carousel";
import Link from "./Link";
import classes from "./PortfolioItem.module.css";
import Project from "../models/Project";
import {FaPlus, FaMinus} from "react-icons/fa"

const PortfolioItem: React.FC<{ item: Project, isOpen: boolean, setActive: (itemId: string, open: boolean) => void }> = (props) => {

  const portfolioItemClickHandler = () => {
    props.setActive(props.item.id, !props.isOpen);
  };

  const icon = props.isOpen ? <FaMinus title="minus" className={classes.expandIcon} /> : <FaPlus title="plus" className={classes.expandIcon}/>;

  return (
    <div className={classes.accordion}>
      <div className={classes.accordionTitle} onClick={portfolioItemClickHandler}>
        {props.item.title}
        <div className={classes.expandIcon}>{icon}</div>
      </div>
      <button className={classes.accordionContent} aria-expanded={props.isOpen}>
        <div className={classes.topContent}>
          <Carousel images={props.item.images}/>
        </div>
        <div className={classes.bottomContent}>
          <h2>{props.item.title}</h2>
          <em>SPECIFICATIONS: {props.item.specifications}</em>
          <p>{props.item.description}</p>
        </div>
        <div className={classes.footer}>
          {props.item.link && <Link link={props.item.link} linkText={props.item.linkText}></Link>}
        </div>
      </button>
    </div>
  );
};

export default PortfolioItem;
