import React, { Component } from "react";

import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText
} from "@trendmicro/react-sidenav";

class Home extends Component {
  state = {
    count: 10
  };
  render() {
    return (
      <div>
        <SideNav
          onSelect={selected => {
            // Add your code here
          }}
        >
          <SideNav.Toggle />
          <SideNav.Nav defaultSelected="home">
            <NavItem eventKey="home">
              <NavIcon>
                <i
                  className="fa fa-fw fa-home"
                  style={{ fontSize: "1.75em" }}
                />
              </NavIcon>
              <NavText>Homed</NavText>
            </NavItem>
            <NavItem eventKey="search">
              <NavIcon>
                <i
                  className="fa fa-fw fa-search"
                  style={{ fontSize: "1.75em" }}
                />
              </NavIcon>
              <NavText>Homed</NavText>
            </NavItem>

            <NavItem eventKey="client">
              <NavIcon>
                <i
                  className="fa fa-fw fa-user"
                  style={{ fontSize: "1.75em" }}
                />
              </NavIcon>
              <NavText>Contacts</NavText>
            </NavItem>
            <NavItem eventKey="client sphere">
              <NavIcon>
                <i
                  className="fa fa-fw fa-globe"
                  style={{ fontSize: "1.75em" }}
                />
              </NavIcon>
              <NavText>Dashboard</NavText>
            </NavItem>
            <NavItem eventKey="charts">
              <NavIcon>
                <i
                  className="fa fa-fw fa-line-chart"
                  style={{ fontSize: "1.75em" }}
                />
              </NavIcon>
              <NavText>Charts</NavText>
              <NavItem eventKey="charts/linechart">
                <NavText>Line Chart</NavText>
              </NavItem>
              <NavItem eventKey="charts/barchart">
                <NavText>Bar Chart</NavText>
              </NavItem>
            </NavItem>
            <NavItem eventKey="toolBox">
              <NavIcon>
                <i
                  className="fa fa-fw fa-toolbox"
                  style={{ fontSize: "36px" }}
                />
              </NavIcon>
              <NavText>Dashboard</NavText>
            </NavItem>
            <NavItem eventKey="Aid">
              <NavIcon>
                <i
                  className="fa fa-fw fa-info-circle"
                  style={{ fontSize: "1.75em" }}
                />
              </NavIcon>
              <NavText>Dashboard</NavText>
            </NavItem>
          </SideNav.Nav>
        </SideNav>
      </div>
    );
  }
  format() {
    const { count } = this.state;
    return count === 0 ? "zero" : count;
  }
}

export default Home;
