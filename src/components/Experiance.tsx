import InfoCard from "./InfoCard";
import JobsList from "../template/JobsData";

import classes from "./Experiance.module.css";

const Experiance = () => {
  return (
    <div className={classes.container}>
      <h1>Experiance</h1>
      {JobsList.map((job) => {
        return (
          <InfoCard
            key={job.title}
            title={job.title}
            subTitle={job.specifications}
            text={job.description}
            listedText={job.specifics}
          />
        );
      })}
    </div>
  );
};

export default Experiance;
