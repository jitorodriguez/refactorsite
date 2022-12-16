import classes  from "./UnderConstruction.module.css";

const UnderConstruction: React.FC<{}> = () => {
  return (
    <div>
      <p className={classes.message}>Under Construction :)</p>
      <img className={classes.centertemp}src="https://halo.wiki.gallery/images/c/c4/HINF-Unggoy_Conscript.png" alt={"Unngoy holding plasma pistol looking to the left."}></img>
      <p className={classes.message}>See you very soon.</p>
    </div>
  );
};

export default UnderConstruction;
