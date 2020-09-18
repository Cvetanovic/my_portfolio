import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Navbar from "./components/layout/Navigation/Navbar/Navbar";
import Home from "./components/layout/Home/Home";
import About from "./components/layout/About/About";
import Skills from "./components/layout/Skills/Skills";
import Contact from "./components/layout/Contact/Contact";
import ProjectList from "./components/projects/ProjectList/ProjectList";
import ProjectDetails from "./components/projects/ProjectDetails/ProjectDetails";
import Background from "./components/layout/Navigation/Background/Background";
import NavbarToggle from "./components/layout/Navigation/NavbarToggle/NavbarToggle";
import PageNotFound from "./components/layout/PageNotFound/PageNotFound";

class App extends Component {
  state = {
    navbarToggleOpen: false,
    projects: [
      {
        id: 1,
        title: "Tinie Hoek",
        info: "Books Ecommerce Website",
        imgLarge: "../../images/tinie.jpg",
        imgMedium: "../../images/tinie_tablet.jpg",
        imgSmall: "../../images/tinie_mobile.jpg",
        projectUrl: "https://tiniehoek.nl/",
        description: "The website developed with Divi thema.",
        tehnologies: ["HTML","CSS(SCSS)","WordPress"],
      },
      {
        id: 2,
        title: "Shamliza",
        info: "Furniture Sales Website",
        imgLarge: "../../images/shamliza.jpg",
        imgMedium: "../../images/shamliza_tablet.jpg",
        imgSmall: "../../images/shamliza_mobile.jpg",
        projectUrl: "https://shamliza.eu/en/",
        description: "The complex website for selling furniture.",
        tehnologies: ["HTML","CSS","WordPress"],
      },
      {
        id: 3,
        title: "Cober",
        info: "Jewelry Ecommerce Website",
        imgLarge: "../../images/cober.jpg",
        imgMedium: "../../images/cober_tablet.jpg",
        imgSmall: "../../images/cober_mobile.jpg",
        projectUrl: "https://cober.nl/nl/",
        description: "The complex website for selling jewelry.",
        tehnologies: ["HTML","CSS","WordPress"],
      },
      {
        id: 4,
        title: "Mihome",
        info: "Architectural Website",
        imgLarge: "../../images/mihome.jpg",
        imgMedium: "../../images/mihome_tablet.jpg",
        imgSmall: "../../images/mihome_mobile.jpg",
        projectUrl: "https://mihomegroup.com.au/",
        description: "The architectural website with animation effects.",
        tehnologies: ["HTML","CSS(SCSS)","WordPress"],
      },
      {
        id: 5,
        title: "Redminn",
        info: "Industry Website",
        imgLarge: "../../images/redminn.jpg",
        imgMedium: "../../images/redminn_tablet.jpg",
        imgSmall: "../../images/redminn_mobile.jpg",
        projectUrl: "https://redminn.com.au/",
        description:
          "The industry website with hover actions.",
        tehnologies: ["HTML","CSS(SCSS)","WordPress"],
      },
      {
        id: 6,
        title: "Thai",
        info: "Restaurant Website",
        imgLarge: "../../images/thai.jpg",
        imgMedium: "../../images/thai_tablet.jpg",
        imgSmall: "../../images/thai_mobile.jpg",
        projectUrl:
          "https://cvetanovic.github.io/thai_restaurant/index.html#intro",
        description: "The restaurant website built with Bootstrap.",
        tehnologies: ["HTML","CSS","Bootstrap","jQuery"],
      },
      {
        id: 7,
        title: "Address Book",
        info: "Web Application",
        imgLarge: "../../images/addressBook.jpg",
        imgMedium: "../../images/addressBook_tablet.jpg",
        imgSmall: "../../images/addressBook_mobile.jpg",
        projectUrl: "https://address-book-react.netlify.app/",
        description:
          "The web application with React router and validation form.",
        tehnologies: ["React","CSS"],
      },
      {
        id: 8,
        title: "Events",
        info: "Web Application",
        imgLarge: "../../images/events.jpg",
        imgMedium: "../../images/events_tablet.jpg",
        imgSmall: "../../images/events_mobile.jpg",
        projectUrl: "https://events-app-4fc5e.web.app/",
        description: "The web application with Firebase authentication.",
        tehnologies: ["React/Redux","CSS","Firebase"],
      },
      {
        id: 9,
        title: "Shop",
        info: "Ecommerce Web Application",
        imgLarge: "../../images/shop.jpg",
        imgMedium: "../../images/shop_tablet.jpg",
        imgSmall: "../../images/shop_mobile.jpg",
        projectUrl: "https://react-shop-app.netlify.app/",
        description:
          "The web application with animation effects and click actions.",
        tehnologies: ["React/Redux","Materialize"],
      },
    ],
  };

  navbarToggleClickHandler = () => {
    this.setState((prevState) => {
      return { navbarToggleOpen: !prevState.navbarToggleOpen };
    });
  };

  backgroundClickHandler = () => {
    this.setState({ navbarToggleOpen: false });
  };
  render() {
    let background;

    if (this.state.navbarToggleOpen) {
      background = <Background click={this.backgroundClickHandler} />;
    }
    return (
      <div className="App">
        <div style={{ height: "100%" }}>
          <Navbar toggleClickHandler={this.navbarToggleClickHandler} />
          <NavbarToggle show={this.state.navbarToggleOpen} />
          {background}
        </div>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/skills" component={Skills} />
          <Route path="/contact" component={Contact} />
          <Route
            path="/projects"
            render={(props) => (
              <ProjectList projects={this.state.projects} {...props} />
            )}
          />
          <Route
            path="/project/:id"
            render={(props) => (
              <ProjectDetails
                project={
                  this.state.projects.filter(
                    (project) =>
                      project.id === parseInt(props.match.params.id, 10)
                  )[0]
                }
                {...props}
              />
            )}
          />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
