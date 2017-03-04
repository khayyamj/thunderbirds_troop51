import React, { Component, PropTypes as T } from 'react';
import { Jumbotron } from 'react-bootstrap';
import { Sidebar, Segment, Button, Menu, Image, Icon, Header, Container } from 'semantic-ui-react'


import HeaderBanner from './header';
import NavBar from './navbar';
import SideBarContent from './sidebar'

export default class App extends Component {
  static contextTypes = {
    router: T.object
  }

  state = { visible: false }
  toggleVisibility = () => this.setState({ visible: !this.state.visible })

 render() {
   const { visible } = this.state
   let children = null;
   if (this.props.children) {
     children = React.cloneElement(this.props.children, {
       auth: this.props.route.auth // sends auth instance from route to children
    })
  }
    return (
       <Container>
          <HeaderBanner />
          <NavBar />
          <div className="main-body">
            <Button onClick={this.toggleVisibility}>Toggle Visibility</Button>
            <Sidebar.Pushable as={Segment}>
              <Sidebar
                  as={Menu}
                  animation='push'
                  width='thin'
                  direction='right'
                  visible={visible}
                  icon='labeled'
                  vertical
                  inverted>
                <SideBarContent />
              </Sidebar>
              <Sidebar.Pusher>
                <Segment basic>
                  {children}
                </Segment>
              </Sidebar.Pusher>
            </Sidebar.Pushable>
          </div>
       </Container>
    );
   }
}
