import React, {Component } from 'react'
import classes from './layout.module.css'
import Aux from '../../hoc/Auxiliary'
import Toolbar from '../Navigations/Toolbar/Toolbar'
import SideDrawer from '../Navigations/SideDrawer/SideDrawer'

class Layout extends Component {

    state = {
        showSideDrawer: false
    }

    sideDrawerHandler = () => {
        this.setState({ showSideDrawer: false})
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer}
        })
    }

   render(){
       return(
        <Aux>
        <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
        <SideDrawer
            open={this.state.showSideDrawer}
            closed = {this.sideDrawerHandler}/>
        <main className={classes.Content}>
            {this.props.children}
        </main>
        </Aux>
       )
   }
}

export default Layout