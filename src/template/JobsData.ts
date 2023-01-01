import Job from "../models/Job";

const TSSE = [
  "Created client workflows bridging the gap between previous (C# / .NET) and new web client (PHP, JavaScript / Bootstrap 4 /CSS) by creating 15+ complex workflow screens accounting for more than 20% of the solution while engaging in enhancement / defect work",
  "Aid team in adoption of modern technologies for new cloud initiative (ReactJS, TypeScript, NodeJS, Git, Docker)",
  "Reduce case backlog for legacy systems addressing both server (RHEL7, C/C++) and client side (C# / .NET) workflows",
  "Standup and manage RHEL7/RHEL8 linux systems for diagnosing issues and handling server work, creating bash scripts that automated workloads reducing time spent on repeated procedures by 80%",
  "Conduct meetings with 3rd party vendor providing technical guidance and requirements for client specific web applications",
  "Manage the SQL Requests pipeline executing over 100 requests creating databases for test and customer systems spanning over 20+ different releases",
  "Removed 1000+ compiler warnings and reduced log noise for customer facing messaging by 60% in core server applications (C / C++)",
];
const TSDSI = [
  "Evaluate existing MariaDB database and PHP endpoints resulting in demonstrating 3 new customer KPI targets that could be catpured with predictive analytics platforms",
  "Conduct meetings and presentations with 3rd party vendors of predictive analytics solutions",
  "Hold presentations with management conduting milestone check-ins and evaluations of 3rd party vendors",
];
const SRSF = [
  "Creating fully modular animation engine capable of accepting different asset packages to create different slot-themed systems",
  "Created mini-game systems and associated animation flow",
  "Built menu application different slot-themed reveal systems that contained a one-click auto-update package manager",
];
const TA = [
  "Create 8 different coding projects each designed to teach core object-oriented design patterns",
  "Provide guidance to students by hosting code reviews and Q/A meetings",
  "Implement auto-grading utility (bash scripting) that processed student submissions and evaluated output of assignments with grading rubric",
];

const JobsList: Job[] = [
  new Job(
    "Toptech Systems - Software Engineer I & II",
    "PHP, Javascript, CSS, HTML-Bootstrap 4 (Full-stack Client development) ----- ReactJS / TypeScript, NodeJS, Docker (Cloud Initiative)  -----  C/C++, C# / .NET framework, Bash (Legacy Client and Server Development)  -----  MySQL (Administrative)",
    "Full stack software development in over 3 different technology stacks for different product solutions. Being a part of new development teams charged with creating new Web applications from requirements gathering, design, to implementation for new modernization and cloud initatives.",
    TSSE
  ),
  new Job(
    "Toptech Systems - Data Scientist Intern",
    "MySQL, PHP",
    "Tasked with evaluating existing Data analytics solution and determining new customer KPIs that can be created from assistance with 3rd party vendors big data predictive analytics platforms.",
    TSDSI
  ),
  new Job(
    "Sweepstakes Reveal System - Freelance",
    "C# / Unity, NewtonSoft",
    "Developing a slot-machine front-end user application that integrates with a sweepstakes system coupled with a menu system for auto-updating and navigation to different themed variants. Uses Unity (C#) and NewtonSoft for server integration.",
    SRSF
  ),
  new Job(
    "Teaching Assistant",
    "Java, Bash scripting",
    "Assist students with course materials while collaborating with faculty to create assignments to serve as extended learning material for adept students. Wrote assignments covering different object-oriented design patterns.",
    TA
  ),
];

export default JobsList;
