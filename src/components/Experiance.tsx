import InfoCard from "./InfoCard";
import JobsList from "../template/JobsData";

import classes from "./Experiance.module.css";

const Experiance = () => {
  return (
    <div className={classes.ExperianceContainer}>
      <h1>Sample Title</h1>
      {JobsList.map((job) => {
        return (
          <InfoCard
            key={job.title}
            title={job.title}
            subTitle={job.specifications}
            text={job.description}
          />
        );
      })}
    </div>
  );
};

export default Experiance;
