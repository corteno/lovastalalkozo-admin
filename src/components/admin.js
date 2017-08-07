import React, {Component} from 'react';
import AuthServices from '../utils/AuthServices';

class Admin extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    componentWillMount(){
        document.title = 'Admin';
    }



    render() {
        return (
            <div className="admin-wrapper">
                <nav className="sidebar">

                </nav>
            </div>
        );
    }
}

export default Admin;