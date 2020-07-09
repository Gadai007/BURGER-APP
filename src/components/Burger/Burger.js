import React from 'react'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'
import classes from './burger.module.css'

const burger = (props) => {
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type='bread-top'/>
            <BurgerIngredient type='cheese'/>
            <BurgerIngredient type='meat'/>
            <BurgerIngredient type='salad'/>
            <BurgerIngredient type='bacon'/>
            <BurgerIngredient type='bread-bottom'/>
        </div>
    )
}

export default burger