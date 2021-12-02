import React, { Component } from 'react'

export default class CheckoutSuccess extends Component {

    componentDidMount(){
        this.props.clearCart();
    }

    render() {
        return (
            <div>
                You have made your payment! Thanks for shopping
            </div>
        )
    }
}
