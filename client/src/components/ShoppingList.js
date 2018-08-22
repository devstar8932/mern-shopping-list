import React, { Component } from 'react';
import { Container, Button } from 'reactstrap';
import { connect } from 'react-redux';
import {getItems, deleteItem} from '../actions/itemActions';
import PropTypes from 'prop-types';

class ShoppingList extends Component {
    componentDidMount() {
        this.props.getItems();
    }

    onDeleteClick = id => {
        this.props.deleteItem(id);
    }
    render() {
        const {items}=this.props.item;
        return (      
            <Container>
                {items.map(({_id, name}) => (
                    <li key={_id}>
                        <Button
                            className="remove-btn"
                            color="danger"
                            size="sm"
                            onClick={this.onDeleteClick.bind(this, _id)}
                        >&times;</Button>
                        {name}
                    </li>
                ))}   
            </Container>
        );
    }
}

ShoppingList.propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
}

const mapStatetToProps = (state) => ({
    item: state.item
});

export default connect(
    mapStatetToProps,
    { getItems, deleteItem }
)(ShoppingList);