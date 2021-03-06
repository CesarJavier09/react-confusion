import React, { Component } from 'react';
import Menu from './Menucomponent';
import DishDetail from './DishDetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import {DISHES} from '../shared/dishes';

class Main extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
      selectedDish: null
    };
  }

  onDishSelect(dishId){
    this.setState({setlectedDish: dishId});
}

  render() {
    return (
      <div>
          <Header/>
          <Menu dishes={this.state.dishes}
          onClick={(dishId) => this.onDishSelect(dishId)}/>
          <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
          <Footer/>      
      </div>
    );
  }
}

export default Main;