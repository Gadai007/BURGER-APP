import React from 'react'
import classes from './layout.module.css'
import Aux from '../../hoc/Auxiliary'
import Toolbar from '../Navigations/Toolbar/Toolbar'
import SideDrawer from '../Navigations/SideDrawer/SideDrawer'

const layout = (props) => (
    <Aux>
    <Toolbar/>
    <SideDrawer/>
    <main className={classes.Content}>
        {props.children}
    </main>
    </Aux>
)

export default layout