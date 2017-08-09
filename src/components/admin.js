import React, {Component} from 'react';
import AuthServices from '../utils/AuthServices';
import {connect} from 'react-redux';

import {getCandidates} from "../actions"
import List from './list';

class Admin extends Component {
    constructor(props) {
        super(props);

        this.state = {
            content: 'candidates'
        };
    }

    componentWillMount() {
        document.title = 'Admin';
        this.props.getCandidates();
    }

    getCurrentDate = () => {
        let days = ['Vasárnap', 'Hétfő', 'Kedd', 'Szerda', 'Csütörtök', 'Péntek', 'Szombat'];
        let months = ['December', 'Január', 'Február', 'Március', 'Április', 'Június', 'Július', 'Augusztus', 'Szeptember', 'Október', 'November'];
        return months[new Date().getMonth()] + " " + new Date().getDate() + ", " + days[new Date().getDay()];
    };

    onMenuClick = (e) => {
        if(e.target.innerHTML === 'Felhasználók'){
            this.setState({content: 'users'})
        } else if(e.target.innerHTML === 'Jelentkezők'){
            this.setState({content: 'candidates'})
        }
    };

    renderList = () => {
        if(this.props.candidates.length > 0){
            switch(this.state.content){
                case 'users':

                    break;

                case 'candidates':
                    return (
                        <List
                            list={this.props.candidates}
                        />
                    );
                    break;

                default:
                    break;
            }
        }

    };

    render() {
        let title;
        switch(this.state.content){
            case 'start':
                title = 'Üdvözlöllek Admin!';
                break;
            case 'users':
                title = 'Felhasználók';
                break;
            case 'candidates':
                title = 'Jelentkezők';
                break;
        }

        return (
            <div className="admin-wrapper">
                <nav className="sidebar col box-shadow">
                    <h1 className="sidebar-title">Admin felület</h1>
                    <ul className="sidebar-menu-list col">
                        <li
                            className="sidebar-menu-item"
                            onClick={event => this.onMenuClick(event)}
                            
                        >Felhasználók
                        </li>
                        <li
                            className="sidebar-menu-item"
                            onClick={event => this.onMenuClick(event)}
                        >Jelentkezők
                        </li>
                    </ul>
                    <p className="sidebar-made-by">Készítette Borsodi Dávid © 2017</p>
                </nav>
                <section className="admin-content-wrapper col">
                    <header className="admin-content-header col">
                        <h2 className="admin-content-title">{title}</h2>
                        <h3 className="admin-content-date">{this.getCurrentDate()}</h3>
                    </header>
                    <div className="admin-content-list-wrapper">
                        {this.renderList()}
                    </div>
                </section>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {candidates: state.candidates}
};

export default connect(mapStateToProps, {getCandidates})(Admin);