import React from 'react'
import Aux from '../../../hoc/Auxiliary'
import Button from '../../UI/Button/Button'

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
    .map(igKeys => {
    return <li key={igKeys}><span style={{textTransform: 'capitalize'}}>{igKeys}</span>  : {props.ingredients[igKeys]}</li>
    })

    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to checkout?</p>
            <Button BtnType="Danger" clicked={props.purchaseCanceled}>CANCEL</Button>
            <Button BtnType="Success" clicked={props.purchaseContinue}>CONTINUE</Button>
        </Aux>
    )
}

export default orderSummary