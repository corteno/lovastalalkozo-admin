import React, {Component} from 'react';

class Login extends Component {
    
    componentWillMount() {
        document.title = 'Bejelentkezés'
    }
    
    render() {
        return (
            <div className="login-wrapper">
                <form action="" className="login-form col box-shadow">
                    <h1 className="login-title">Bejelentkezés</h1>
                    <div className="form-input-wrapper col">
                        <input type="text" className="form-input" required={true}/>
                        <label htmlFor="" className="form-label">Felhasználónév</label>
                        <div className="bar"></div>
                    </div>

                    <div className="form-input-wrapper col">
                        <input type="text" className="form-input" required={true}/>
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