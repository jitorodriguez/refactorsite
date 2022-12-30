import classes from "./InfoCard.module.css";

const InfoCard: React.FC<{
  title?: string;
  subTitle?: string;
  text?: string;
}> = (props) => {
  return (
    <div>
      <div className={classes.Card}>
        { props.title && <h2>{props.title}</h2>}
        { props.subTitle && <em>{props.subTitle}</em>}
        { props.text && <p className={classes.text}>{props.text}</p>}
      </div>
    </div>
  );
};

export default InfoCard;
