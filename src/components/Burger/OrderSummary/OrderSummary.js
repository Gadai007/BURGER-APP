import React, {Component} from 'react'
import Aux from '../../../hoc/Auxiliary'
import Button from '../../UI/Button/Button'

class OrderSummary extends Component {
    render(){
        const ingredientSummary = Object.keys(this.props.ingredients)
        .map(igKeys => {
        return <li key={igKeys}><span style={{textTransform: 'capitalize'}}>{igKeys}</span>  : {this.props.ingredients[igKeys]}</li>
    })
        return (
            <Aux>
                <h3>Your Order</h3>
                <p>A delicious burger with following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
                <p>Continue to checkout?</p>
                <Button BtnType="Danger" clicked={this.props.purchaseCanceled}>CANCEL</Button>
                <Button BtnType="Success" clicked={this.props.purchaseContinue}>CONTINUE</Button>
            </Aux>
        )
    }
}

export default OrderSummary