import React, {Component} from 'react';
import { Jumbotron, Navbar, NavbarBrand } from 'reactstrap';

class Header extends Component{

    render(){
        return(
            <React.Fragment>
            <Navbar dark>
                <div className='container'> 
                <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
                </div>
            </Navbar>
            <Jumbotron>
                <div className='container'> 
                    <di className="row row-header">
                        <div className='col-12 col-sm-6'>
                            <h1>Ristorante Con Fusion</h1>
                            <p>We take inspiration from the world's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                        </div>
                    </di>
                </div>
            </Jumbotron>
            </React.Fragment>
        );
    }
}

export default Header;