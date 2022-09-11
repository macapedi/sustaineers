
import { Link } from "react-router-dom";

import "./LoginPage.scss";
import Input from "../../components/Input/Input";

function LoginPage() {



return (
    <main className="login-page">
        <div className="login-page__wrapper">
            <div>
                <div className="intro-container">
                    <h1 className="login-page__title">Welcome to Sustaineers!</h1>
                </div>
            </div>
            <form className="login" >
                <h1 className="login__title">Log in</h1>

                <Input type="text" name="email" label="Email" />
                <Input type="password" name="password" label="Password" />

                <Link to="/home" className="login__button">Log in</Link>
              
                <p>
                    Need an account? <Link >Sign up</Link>
                </p>
            </form>
        </div>
    </main>
);
}

export default LoginPage;
