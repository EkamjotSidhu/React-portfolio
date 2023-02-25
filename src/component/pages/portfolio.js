import React from "react";
import miniGames from ".././Assets/Images/mini games.png"
import github from ".././Assets/Images/github.png"
import web from ".././Assets/Images/web.png"
import notemaker from ".././Assets/Images/notemaker.png"
import custompcbuild from ".././Assets/Images/cutompcbuild.png"
import weatherdashboard from ".././Assets/Images/weatherdashboard.png"
import quizchallenge from ".././Assets/Images/quizchallenge.png"
import workdayscheduler from ".././Assets/Images/workdayscheduler.png"
import eCommerce from "../Assets/Images/collections.jpg"
function Portfolio() {
    const portfolio = [{
        "image": miniGames,
        "title": "Mini games",
        "github": {
            "icon": github,
            "link": "https://github.com/Jon-Ledo/Collab-MiniGames-plusAPI"
        },
        "deployedLink": {
            "icon": web,
            "link": "https://jon-ledo.github.io/Collab-MiniGames-plusAPI/"
        }
    },
    {
        "image": custompcbuild,
        "title": "Custom Pc Build",
        "github": {
            "icon": github,
            "link": "https://github.com/DustinLee0/Project-2-Custom-PC-Build"
        },
        "deployedLink": {
            "icon": web,
            "link": "https://custom-pc.herokuapp.com/"
        }
    },
    {
        "image": notemaker,
        "title": "Note Maker",
        "github": {
            "icon": github,
            "link": "https://github.com/EkamjotSidhu/Note-taking-app"
        },
        "deployedLink": {
            "icon": web,
            "link": "https://note-app-111.herokuapp.com/"
        }
    },
    {
        "image": weatherdashboard,
        "title": "Weather Dashboard",
        "github": {
            "icon": github,
            "link": "https://github.com/EkamjotSidhu/Weather-forecast-app"
        },
        "deployedLink": {
            "icon": web,
            "link": "https://ekamjotsidhu.github.io/Weather-forecast-app/"
        }
    },
    {
        "image": quizchallenge,
        "title": "Quiz Challenge",
        "github": {
            "icon": github,
            "link": "https://github.com/EkamjotSidhu/Week-4-Challenge-Quiz"
        },
        "deployedLink": {
            "icon": web,
            "link": "https://ekamjotsidhu.github.io/Week-4-Challenge-Quiz/"
        }
    },
    {
        "image": workdayscheduler,
        "title": "Work Day Scheduler",
        "github": {
            "icon": github,
            "link": "https://github.com/EkamjotSidhu/Workday-scheduler"
        },
        "deployedLink": {
            "icon": web,
            "link": "https://ekamjotsidhu.github.io/Workday-scheduler/"
        }
    },
    {
        "image": eCommerce,
        "title": "E Commerce",
        "github": {
            "icon": github,
            "link": "https://github.com/EkamjotSidhu/project-3-E-commerce"
        },
        "deployedLink": {
            "icon": web,
            "link": "https://on-code-e-commerce.herokuapp.com/"
        }
    }
    ]


    const pop = portfolio.map(activity => {
        console.log(activity.deployedLink)
        return (<div className="card-div">
            <div className="img-portfolio">
                <img src={activity.image} alt="project-img"></img>
            </div>
            <div className="content-div">
                <div className="title">
                    <h3>{activity.title}</h3>
                </div>
                <div className="links">
                    <div>
                        <a href={activity.github.link}><img className="iconss" src={activity.github.icon}></img></a>
                    </div>
                    <div>
                        <a href={activity.deployedLink.link}><img className="iconss" src={activity.deployedLink.icon}></img></a>
                    </div>
                </div>
            </div>

        </div>)
    })


    return (
        <div className="portfolio-main-div">
            <div className="portfolio-heading-div">
                <h1>MY  <mark className="mark">PORTFOLIO</mark></h1>
            </div>
            <div className="cards-main-div">
                {pop}
            </div>
        </div>
    )
}

export default Portfolio;