import React, {Component } from 'react'
import classes from './layout.module.css'
import Aux from '../../hoc/Auxiliary'
import Toolbar from '../Navigations/Toolbar/Toolbar'
import { connect} from 'react-redux'
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
        <Toolbar 
            isAuth={this.props.isAuthenticated}
            drawerToggleClicked={this.sideDrawerToggleHandler}/>
        <SideDrawer
            isAuth={this.props.isAuthenticated}
            open={this.state.showSideDrawer}
            closed = {this.sideDrawerHandler}/>
        <main className={classes.Content}>
            {this.props.children}
        </main>
        </Aux>
       )
   }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    }
}

export default connect(mapStateToProps)(Layout)