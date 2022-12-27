import Project from '../models/Project';

const ProjectList = [
    new Project("VEDIC", "Unity, C#, Leap Motion, Oculus DK2, MySQL", "The 'Virtual Enivorment for the Development of Interactive Code' is a software platform developed in Unity to develop and discover tools that can make Virtual Reality a medium for developer tasks. Coupled with a Leap Motion Controller and Oculus Headset, users can manipulate and inspect their remote MySQL databases in a virtual enviorment."),
    new Project("Cabal Effect", "HTML5, CSS, Javascript, Parse", "At the 2016 Knight Hacks Hackathon, we had less than 24 hours to create a a conspiracy-based social media platform where users can post content about conspiricies to share and discuss. There was the Parse-back-end (my contribution), and the website and Android front-ends created by William Funk and Evan Glazer respectivley."),
    new Project("Horseshoe", "C#, Unity", "This system was built with the intentions of building a Slot system that can be modular to fit a variety of configuration, themes, and playstyles. The variant of the current system is a Sweepstakes Entry reader, which communicates with servers to retrieve information of user entries. A menu system accompanies the game library for ease of use and auto-updating of games. The games include options to enable thematic one-click skill games, bonus games, and eligibility systems. Currently 16 total games."),
    new Project("PhoodBuddy", "HTML5, CS, JavaScript, Firebase", "Phoodbuddy was a project built to allow users to customize 'taste' profiles and search for recipes. Under the hood, Phoodbuddy utilizes a algorithm to determine potential recipes based off of previous repcipes and comparing ingrediants with their taste profile. It runs off of Firebase and at its finalization had multiple platform supports including an android and windows phone with a main web portal.")
];

export default ProjectList;