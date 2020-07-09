import React from 'react'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'
import classes from './burger.module.css'

const burger = (props) => {
    const transformIngredient = Object.keys(props.ingredients).map(igKeys => {
        return [...Array(props.ingredients[igKeys])].map((_, i) => {
            return <BurgerIngredient key={igKeys + i} type={igKeys} />
        })
    })
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type='bread-top'/>
            {transformIngredient}
            <BurgerIngredient type='bread-bottom'/>
        </div>
    )
}

export default burger