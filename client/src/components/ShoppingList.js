import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';

class ShoppingList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                { id: uuid(), name: 'Eggs' },
                { id: uuid(), name: 'Milk' },
                { id: uuid(), name: 'Steak' },
                { id: uuid(), name: 'Water' }
            ]
        };
    }

    clickMethod = () => {
        const name = prompt('Enter Item');
        if (name) {
            this.setState(state => ({
                items: [...state.items, { id: uuid(), name }]
            }));
        }
    }

    removeMethod = (id) => {
        // console.log(id)
        // console.log(this.state.items);
        // this.setState(state => ({
        //     items: state.items.filter(item => item.id !== id)
        // }));
    }

    render() {
        const {items}=this.state;
        return (      
            <Container>
                <Button
                    color="dark"
                    style={{ marginBottom: '2rem' }}
                    onClick={this.clickMethod}
                >
                Add Item
                </Button>
                
                    {items.map(({id, name}) => (
                        <li key={id}>
                            <Button
                                className="remove-btn"
                                color="danger"
                                size="sm"
                                onClick={()=>{
                                    const newItems = this.state.items.filter(item=>item.id!==id);
                                    this.setState({
                                        items: [...newItems]
                                    })
                                }}
                            >&times;</Button>
                            {name}
                        </li>
                    ))}
                    
            </Container>
        );
    }
}


export default ShoppingList;