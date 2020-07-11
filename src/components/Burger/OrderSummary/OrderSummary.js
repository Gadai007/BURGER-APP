import React from 'react'
import Aux from '../../../hoc/Auxiliary'

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
        </Aux>
    )
}

export default orderSummary