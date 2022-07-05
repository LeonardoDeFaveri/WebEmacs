import React from "react";

class LoginPage extends React.Component {
    constructor(props:any) {
        super(props);
    }

    render(): React.ReactNode {
        return (
            <div className="center">
                <h3>Login page</h3>
                <form method="post">
                    <fieldset>
                        <legend>Login</legend>
                        <label >Username/email
                            <input type="text" id="username" name="username" placeholder="username/email" required></input>
                        </label>
                        <label>Password
                            <input type="password" id="password" name="password"></input>
                        </label>
                        <div className="row">
                            <button type="button">Sign Up</button>
                            <button type="submit">Login</button>
                        </div>
                    </fieldset>
                </form>
            </div>
        )
    }
}

export default LoginPage;