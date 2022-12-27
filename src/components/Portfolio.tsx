import {useState, useEffect} from 'react';
import classes from "./Portfolio.module.css";

import ProjectList from '../template/ProjectData';

import PortfolioItem from "./PortfolioItem";

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
        {ProjectList.map((project) => {
          return(<PortfolioItem item={project} key={project.id} isOpen={project.id == activeItem} setActive={manageActiveItem}/>);
        })}
      </div>
    </div>
  );
};

export default Portfolio;
