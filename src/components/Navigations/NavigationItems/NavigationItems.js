import React from 'react'
import classes from './navigationItems.module.css'
import NavigationItem from '../NavigationItems/NavigationItem/NavigitionItem'

const navigationItems =() => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link='/' exact>Burger Builder</NavigationItem>
        <NavigationItem link='/orders'>Orders</NavigationItem>
        <NavigationItem link='/auth'>Authenticate</NavigationItem>
    </ul>
)

export default navigationItems