import Job from "../models/Job";

const TSSE = [
  "Creating client workflows, bridging the gap between previous client (C# / .NET) to a new web client (PHP, JavaScript / Bootstrap 4 /CSS) from requirements gathering, gap analysis, design, to implementation",
  "Aid team in adoption of modern technologies for new cloud initiative (ReactJS, TypeScript, NodeJS, Git, Docker)",
  "Reduce case backlog for legacy systems, addressing both server applications (RHEL7, C/C++) and client side (C# / .NET) workflows",
  "Be a member of the highly coveted 'Kobayashi' and code review meetings where we peer evaluated projects at all stages of development with a hard focus on consistency, ownership, and value",
  "Standup and manage RHEL7/RHEL8 linux systems for diagnosing issues and handling server work, creating bash scripts that automated workloads reducing time spent on repeated procedures by roughly 80%",
  "Conduct meetings with 3rd party vendor providing technical guidance and requirements for client specific web applications",
  "Manage the SQL Requests pipeline executing over 100 requests creating databases for test and customer systems spanning over 20+ different releases",
  "Removed 1000+ compiler warnings and refactored log messaging in core server applications (C / C++)",
];
const TSDSI = [
  "Evaluate existing MariaDB database and PHP endpoints demonstrating 3 new customer KPI targets that could be catpured with predictive analytics platforms",
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
    "January 2018 - Present",
    "PHP, Javascript, CSS, HTML-Bootstrap 4 (Full-stack Client development) ----- ReactJS / TypeScript, NodeJS, Docker (Cloud Initiative)  -----  C/C++, C# / .NET framework, Bash (Legacy Client and Server Development)  -----  MySQL (Administrative)",
    "Full stack software development in over 3 different technology stacks for different product solutions. Being a part of new development teams charged with creating new Web applications with responsiblity at every level of a project for modernization and cloud initatives.",
    TSSE,
    ["Toptech Systems", "1124 Florida Central Pkwy", "Longwood, FL 32750"]
  ),
  new Job(
    "Toptech Systems - Data Scientist Intern",
    "June 2017 - August 2017",
    "MySQL, PHP",
    "Tasked with evaluating existing Data analytics solution and determining new customer KPIs that can be created from assistance with 3rd party vendors big data predictive analytics platforms.",
    TSDSI,
    ["Toptech Systems", "1124 Florida Central Pkwy", "Longwood, FL 32750"]
  ),
  new Job(
    "Horseshoe: Sweepstakes Reveal System - Freelance",
    "August 2015 - June 2016",
    "C# / Unity, NewtonSoft",
    "Developing a slot-machine front-end user application that integrates with a sweepstakes system coupled with a menu system for auto-updating and navigation to different themed variants. Uses Unity (C#) and NewtonSoft for server integration.",
    SRSF,
    ["Dr. Leinecker", "Phone Number: (336)-394-8830"]
  ),
  new Job(
    "University of Central Florida - Teaching Assistant (COP 3503)",
    "",
    "Java, Bash scripting",
    "Assist students with course materials while collaborating with faculty to create assignments to serve as extended learning material for adept students. Wrote assignments covering different object-oriented design patterns.",
    TA,
    [
      "Department of Computer Science",
      "University of Central Florida",
      "4328 Scorpius Street",
      "Building 116-Room 346",
      "Orlando, FL 32816",
    ]
  ),
];

export default JobsList;
