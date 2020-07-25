import React, { Component } from 'react'
import Button from '../../../components/UI/Button/Button'
import Spinner from '../../../components/UI/Spinner/Spinner'
import classes from './contactData.module.css'
import axios from '../../../axios-order'


class ContactData extends Component{

    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault()
        this.setState({ loading: true})
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Debayan Debnath',
                address: {
                    street: 'Indranagar',
                    zipCode: '1234',
                    country: 'India',
                },
                email: 'hola@gmail.com'
            },
            deliveryMethod: 'fastest'
        }

        axios.post('/orders.json', order)
            .then(response => {
                this.setState({ loading : false})
                this.props.history.push('/')
            })
            .catch(error => {
                this.setState({ loading : false})
            })
    }

    render(){

        let form = (
            <form>
                    <input className={classes.Input} type='text' name='name' placeholder='Your Name'/>
                    <input className={classes.Input} type='email' name='email' placeholder='Your Mail'/>
                    <input className={classes.Input} type='text' name='street' placeholder='Your Street'/>
                    <input className={classes.Input} type='text' name='postalCode' placeholder='Your Postal Code'/>
                    <Button BtnType='Success' clicked={this.orderHandler}>ORDER</Button>
                </form>
        )

        if(this.state.loading){
            form = <Spinner/>
        }
        return(
            <div className={classes.ContactData}>
                <h4>Enter your contact data</h4>
                {form}
            </div>
        )
    }
}

export default ContactData