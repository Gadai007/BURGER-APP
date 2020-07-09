import React from 'react'
import classes from './layout.module.css'
import Aux from '../../hoc/Auxiliary'

const layout = (props) => (
    <Aux>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main className={classes.Content}>
        {props.children}
    </main>
    </Aux>
)

export default layout