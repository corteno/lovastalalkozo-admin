import React, {Component} from 'react';
import ListItem from './listItem';

class List extends Component {
    constructor(props){
        super(props)
    }

    renderList = () => {
        return this.props.list.map((item) => {
            return (
                <ListItem
                    item={item}
                    key={item._id}
                />
            );

        })
    };


    render() {
        return (
            <ul className="admin-content-list col">
                <li className="admin-content-list-item-header">
                    <p className="name">Versenyző neve</p>
                    <p className="contact">Elérhetőség</p>
                    <p className="location">Lakhely</p>
                    <p className="horsename">Ló neve</p>
                    <p className="horsetype">Ló fajtája</p>
                    <p className="company">Kísérők száma</p>
                    <p className="delete">Törlés</p>
                </li>
                {this.renderList()}
            </ul>
        );
    }
}

export default List;