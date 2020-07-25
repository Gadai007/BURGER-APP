import React from 'react'
import Burger from '../../Burger/Burger'
import Button from '../../UI/Button/Button' 
import classes from './checkoutSummary.module.css'

const checkoutSummary = (props) => {
    return(
        <div className={classes.CheckoutSummary}>
            <h1>We hope it tastes good!!</h1>
            <div style={{width: '100%', margin: 'auto'}}>
                <Burger ingredients={props.ingredients}/>
            </div>
            <Button 
                BtnType='Danger'
                clicked>CANCEL</Button>
            <Button 
                BtnType='Success'
                clicked>CONTINUE</Button>
        </div>
    )
}

export default checkoutSummary