import React, {Component} from 'react';

import AuthServices from '../utils/AuthServices';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        };
    }

    componentWillMount() {
        document.title = 'Bejelentkezés'
    }

    onInputChange = (e) => {
        switch (e.target.name) {
            case 'username':
                this.setState({username: e.target.value});
                break;

            case 'password':
                this.setState({password: e.target.value});
                break;

        }
    };

    onSubmit = (e) => {
        e.preventDefault();
        AuthServices.login({username: this.state.username, password: this.state.password});
        this.resetForm();
    };

    resetForm = () => {
        this.setState({username: ''});
        this.setState({password: ''});
    };


    render() {
        return (
            <div className="login-wrapper">
                <form action="" className="login-form col box-shadow" onSubmit={this.onSubmit}>
                    <h1 className="login-title">Bejelentkezés</h1>
                    <div className="form-input-wrapper col">
                        <input
                            type="text"
                            name="username"
                            className="form-input"
                            required={true}
                            onChange={event => this.onInputChange(event)}
                            value={this.state.username}
                        />
                        <label htmlFor="" className="form-label">Felhasználónév</label>
                        <div className="bar"></div>
                    </div>

                    <div className="form-input-wrapper col">
                        <input
                            type="password"
                            name="password"
                            className="form-input"
                            required={true}
                            onChange={event => this.onInputChange(event)}
                            value={this.state.password}
                        />
                        <label htmlFor="" className="form-label">Jelszó</label>
                        <div className="bar"></div>
                    </div>

                    <input type="submit" value='Bejelentkezés' className="form-submit"/>
                </form>
            </div>
        );
    }
}

export default Login;