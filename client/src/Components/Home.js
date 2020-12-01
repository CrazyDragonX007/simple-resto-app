import React, {Component} from 'react';
import {Button} from '@material-ui/core';
import Checkout from './Checkout';
import FlashMessage from 'react-flash-message';
import './Home.css';

class Home extends Component{
	state={
		foodList:[],
		cart:[],
		total:0
	}
	componentDidMount(){
		let uri="http://localhost:9000/getFoodItem";
		fetch(uri).then(res=>res.json()).then(res=>{
			this.setState({foodList:res});
			}
		).catch(er=>alert(er));
	}
	onCart=u=>{

		let cart=this.state.cart;
		cart.push(u);
		let total=this.state.total;
		total+=u.price;
		this.setState({cart:cart,total:total});
	}
	
	show=()=>{
		const cart=this.state.cart;
		const total=this.state.total;
		this.props.history.push({
      			pathname:'/checkout',
      			state:{cart:cart,total:total}
      		});
	}
	render(){
		return(
			<div>
		<h1>Welcome to Simple Restaurant App</h1>
			<div className='row'>
				{this.state.foodList.map((u)=>	
					<div className='column' key={u._id}>
					<h3>{u.title}</h3>
      				<img src={u.Imgurl} style={{width:'300px',height:'300px'}} alt=''/>
					<p>Price: {u.price}</p>
					<Button variant='contained' color='primary' onClick={()=>this.onCart(u)}>Add to cart</Button>
					</div>
				)}
			</div>
			<Button variant='contained' onClick={this.show}>Go to checkout page</Button>
			</div>
		)
	}
}
export default Home;