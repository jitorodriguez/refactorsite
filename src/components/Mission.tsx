import classes from "./Mission.module.css";

const Mission: React.FC<{
  title: string;
  message: string;
  image: string;
  altImage: string;
}> = (props) => {
  return (
    <div className={classes.mission}>
      <div>
        <h2>{props.title}</h2>
        <p>{props.message}</p>
      </div>
      <img
        className={classes.imageFit}
        src={props.image}
        alt={props.altImage}
      ></img>
    </div>
  );
};

export default Mission;
