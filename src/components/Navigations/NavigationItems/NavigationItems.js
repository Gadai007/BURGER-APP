import React from 'react'
import classes from './navigationItems.module.css'
import NavigationItem from '../NavigationItems/NavigationItem/NavigitionItem'

const navigationItems =() => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link='/' active>Burger Builder</NavigationItem>
        <NavigationItem link='/'>Ckeckout</NavigationItem>
    </ul>
)

export default navigationItems