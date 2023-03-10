import classes from "./InfoCard.module.css";

const InfoCard: React.FC<{
  title?: string;
  titleNote?: string
  subTitle?: string;
  text?: string;
  listedText?: string[];
  footerText?: string[];
}> = (props) => {
  return (
    <div className={classes.Card}>
      {props.title && (
        <h2>
          {props.title}
          {props.titleNote && <em>{props.titleNote}</em>}
        </h2>
      )}
      <div className={classes.CardContent}>
        {props.subTitle && <em>{props.subTitle}</em>}
        {props.text && <p className={classes.text}>{props.text}</p>}
        <ul>
          {props.listedText &&
            props.listedText.map((listItem, index) => {
              return <li key={index}>{listItem}</li>;
            })}
        </ul>
      </div>
      <div className={classes.CardFooter}>
        {props.footerText &&
          props.footerText.map((text) => {
            return <p>{text}</p>;
          })}
      </div>
    </div>
  );
};

export default InfoCard;
