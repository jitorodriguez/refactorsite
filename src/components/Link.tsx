import { Fragment } from "react";

import classes from "./Link.module.css";

const Link: React.FC<{ link: string; linkText: string; img?: string }> = (
  props
) => {
  return (
    <Fragment>
      <div className={classes.container}>
        <a className={classes.link} href={props.link}>
          {props.linkText}
        </a>
        {props.img && (
          <a href={props.link}>
            <img
              className={classes.img}
              src={props.img}
              alt="Sample Text"
            ></img>
          </a>
        )}
      </div>
    </Fragment>
  );
};

export default Link;
