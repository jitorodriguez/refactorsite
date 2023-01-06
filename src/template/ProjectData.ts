import Project from '../models/Project';

// Cabal Effect Project Images
import CabalEffect1 from "../assets/img/CabalEffect1.jpg";
import CabalEffect2 from "../assets/img/CabalEffect1.jpg";
import CabalEffect3 from "../assets/img/CabalEffect3.jpg";
import CabalEffect4 from "../assets/img/CabalEffect4.jpg";
import CabalEffect5 from "../assets/img/CabalEffect5.jpg";
import CabalEffect6 from "../assets/img/CabalEffect6.jpg";

//Horseshoe Project Images
import Horseshoe1 from "../assets/img/ReelAnimation.gif";
import Horseshoe2 from "../assets/img/MafiaDefault.jpg";
import Horseshoe3 from "../assets/img/GreekDefault.jpg";
import Horseshoe4 from "../assets/img/MedievalDefault.jpg";
import Horseshoe5 from "../assets/img/ReelSlotsDefault.jpg";
import Horseshoe6 from "../assets/img/SkillGame.gif";

//Phoodbuddy Project Images
import PhoodBuddy1 from "../assets/img/pb-01.jpg";
import PhoodBuddy2 from "../assets/img/pb-02.jpg";
import PhoodBuddy3 from "../assets/img/pb-13.jpg";
import PhoodBuddy4 from "../assets/img/pb-17.jpg";
import PhoodBuddy5 from "../assets/img/pb-19.jpg";
import PhoodBuddy6 from "../assets/img/pb-20.jpg";
import PhoodBuddy7 from "../assets/img/pb-22.jpg";

//VEDIC Project Images
import Vedic1 from "../assets/img/AnalyticObject2.gif";
import Vedic2 from "../assets/img/DataCache.gif";
import Vedic3 from "../assets/img/SegmentingTableShort.gif";
import Vedic4 from "../assets/img/Teleportation.gif"


const ProjectList: Project[] = [
    new Project(
        "VEDIC",
        "Unity, C#, Leap Motion, Oculus DK2, MySQL",
        "The 'Virtual Enivorment for the Development of Interactive Code' is a software platform developed in Unity to develop and discover tools that can make Virtual Reality a medium for developer tasks. Coupled with a Leap Motion Controller and Oculus Headset, users can manipulate and inspect their remote MySQL databases in a virtual enviorment.",
        [Vedic1, Vedic2, Vedic3, Vedic4],
        "https://github.com/WilliamRADFunk/vedic",
        "Download on Github"),
    new Project(
        "Horseshoe",
        "C#, Unity",
        "This system was built with the intentions of building a Slot system that can be modular to fit a variety of configuration, themes, and playstyles. The variant of the current system is a Sweepstakes Entry reader, which communicates with servers to retrieve information of user entries. A menu system accompanies the game library for ease of use and auto-updating of games. The games include options to enable thematic one-click skill games, bonus games, and eligibility systems. Currently 16 total games.",
        [Horseshoe1, Horseshoe2, Horseshoe3, Horseshoe4, Horseshoe5, Horseshoe6]),
    new Project(
        "Cabal Effect",
        "HTML5, CSS, Javascript, Parse",
        "At the 2016 Knight Hacks Hackathon, we had less than 24 hours to create a a conspiracy-based social media platform where users can post content about conspiricies to share and discuss. There was the Parse-back-end (my contribution), and the website and Android front-ends created by William Funk and Evan Glazer respectivley.",
        [CabalEffect1, CabalEffect2, CabalEffect3, CabalEffect4, CabalEffect5, CabalEffect6],
        "http://www.williamrobertfunk.com/applications/the-cabal-effect/",
        "See an example"),
    new Project(
        "PhoodBuddy",
        "HTML5, CSS, JavaScript, Firebase",
        "Phoodbuddy was a project built to allow users to customize 'taste' profiles and search for recipes. Under the hood, Phoodbuddy utilizes a algorithm to determine potential recipes based off of previous repcipes and comparing ingrediants with their taste profile. It runs off of Firebase and at its finalization had multiple platform supports including an android and windows phone with a main web portal.",
        [PhoodBuddy1, PhoodBuddy2, PhoodBuddy3, PhoodBuddy4, PhoodBuddy5, PhoodBuddy6, PhoodBuddy7],
        "https://phood-buddy.com/login.html",
        "See it in action")
];

export default ProjectList;