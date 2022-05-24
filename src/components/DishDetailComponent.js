import React, {Component} from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';

class DishDetail extends Component{

    constructor(props){
        super(props);
    }

    RenderDish() {
      
        return (
            <Card>
                <CardImg width="100%" src={this.props.dish.image} alt={this.props.dish.name}/>
                <CardBody>
                    <CardTitle>{this.props.dish.name}</CardTitle>
                    <CardText>{this.props.dish.description}</CardText>
                </CardBody>
            </Card>
        );
    }

    RenderComments() {
        const commentList = this.props.dish.comments.map((comment) => {
          return (
            <li key={comment.id}>
                {comment.comment}
                <br />
                <br />
                -- {comment.author},
                {new Intl.DateTimeFormat("en-US", {
                year: "numeric",
                month: "short",
                day: "2-digit",
                }).format(new Date(Date.parse(comment.date)))}
                <br />
                <br />
            </li>
          );
        });
      
        return (
          <div>
            <h4>Comments</h4>
            <ul className="list-unstyled">{commentList}</ul>
          </div>
        );
      }

    render() {
      console.log(this.props.dis);
          return (
           <div className="container">
              <div className='row'>
                <div className="col-xs-ms-12 col-md-5 m-1">
                    {this.RenderDish()}
                </div>
                <div className="col-xs-ms-12 col-md-5 m-1">
                    <Card>
                        {this.RenderComments()}
                    </Card>
                </div>
            </div>
           </div>
          );
    }
}

export default DishDetail;