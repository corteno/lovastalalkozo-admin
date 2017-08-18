import React, {Component} from 'react';
import {connect} from 'react-redux';

import {deleteCandidate} from "../actions"

const ListItem = (props) => {

    return (
        <li className="admin-content-list-item">
            <p className="name">{props.item.name}</p>
            <p className="contact">{props.item.contact}</p>
            <p className="location">{props.item.location}</p>
            <p className="horsename">{props.item.horsename}</p>
            <p className="horsetype">{props.item.horsetype}</p>
            <p className="company">{props.item.company}</p>
            <p className="delete" onClick={() => {props.deleteCandidate(props.item._id)}}>✖</p>
        </li>
    );

};

export default connect(null, {deleteCandidate})(ListItem);