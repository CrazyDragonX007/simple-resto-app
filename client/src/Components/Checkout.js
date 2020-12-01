import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Button} from '@material-ui/core';
import './Home.css'

class Checkout extends Component{

	check=()=>{
		alert("Thank you for dining with us!");
		this.props.history.push('/');
	}

	render(){
		let tr=(<div><p>Go back and add items to your cart</p>
				<Link to="/">Back to Menu</Link>
				</div>);
		if(this.props.location.state.cart!=[]){
			console.log(this.props.location.state.cart);
			tr=(<div><h1>Items in your cart</h1>
				<div>
				{this.props.location.state.cart.map((u,i)=>
				<div style={{display: 'flex',justifyContent: 'space-evenly'}} key={i}>	
					<h3 style={{marginRight:'10px'}}><b>{u.title}</b></h3>
					<p>{u.price}</p>
				</div>
				)}
				</div>
				<h2>Total:{this.props.location.state.total}</h2>
				<Button variant='contained' color='primary' onClick={this.check}>Checkout</Button>
				</div>)
		}
		return(
			<div>
				{tr}
			</div>
	)}
}
export default Checkout;