import React, { Component } from 'react';
import Home from './HomeComponent';
import Menu from './Menucomponent';
import Contact from './ContacComponent';
import DishDetail from './DishDetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import About from './AboutComponent';
import {DISHES} from '../shared/dishes';
import {COMMENTS} from '../shared/comments';
import {LEADERS} from '../shared/leaders';
import {PROMOTIONS} from '../shared/promotions';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS
    };
  }

  render() {

    const HomePage = () => {
      return(
        <Home dish={this.state.dishes.filter((dish) => dish.featured)[0]}
          promotions={this.state.promotions.filter((promotions) => promotions.featured)[0]}
          leader = {this.state.leaders.filter((leader) => leader.featured)[0]}
        />
      );
    }

    const DishWithID = ({match}) =>{
      return(
        <DishDetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
        comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))}
        />
      );
    }

    console.log();
    return (
      <div>
          <Header/>
          <Switch>
            <Route path="/home" component={HomePage}/>
            <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes}/>}/>
            <Route path="/menu/:dishId" component={DishWithID}/>
            <Route exact path="/contactus" component={Contact}/>
            <Route path="/aboutus" component={() => <About leaders={this.state.leaders}/>}/>
            <Redirect to="/home" />
          </Switch>
          <Footer/>      
      </div>
    );
  }
}

export default Main;