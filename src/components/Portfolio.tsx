import {useState, useEffect} from 'react';
import classes from "./Portfolio.module.css";

import PortfolioItem from "./PortfolioItem";

//CLEANUP: Refactor into model
const portfolioList = [
  { id: "item1", title: "Item1", text: "Sample Text 1" },
  { id: "item2", title: "Item2", text: "Sample Text 2" },
  { id: "item3", title: "Item3", text: "Sample Text 3" },
];

const Portfolio = () => {

  const [activeItem, setActiveItem] = useState("");

  const manageActiveItem = (itemId : string, open: boolean) => {
    if(open){
      setActiveItem(itemId);

    }
    else{
      setActiveItem("");
    }
  }

  return (
    <div className={classes.portfolio}>
      <div>
        <h1>Portfolio</h1>
        {portfolioList.map((item) => {
          return(<PortfolioItem key={item.id} itemId={item.id} title={item.title} text={item.text} isOpen={item.id == activeItem} setActive={manageActiveItem}/>);
        })}
      </div>
    </div>
  );
};

export default Portfolio;
