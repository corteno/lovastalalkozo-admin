import React, {Component} from 'react';

const ListItem = (props) => {

    return (
        <li className="admin-content-list-item">
            <p className="name">{props.item.name}</p>
            <p className="contact">{props.item.contact}</p>
            <p className="horsename">{props.item.horsename}</p>
            <p className="company">{props.item.company}</p>
            <p className="comments">{props.item.comments}</p>
            <p className="delete">X</p>
        </li>
    );

};

export default ListItem;