import React from "react";

function Form(props) {
    return (
        <div className="col-md-6">
            <form className="form">
                <h2 className="text-center mb-3">{props.isRegistered ? "Login" : "Register"}</h2>
                <div className="form-group">
                    <label htmlFor="username">User name:</label><br />
                    <input type="text" placeholder="Username" id="username" className="form-control" />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password:</label><br />
                    <input type="password" id="password" placeholder="Password" className="form-control" />
                </div>
                {!props.isRegistered && (
                    <div className="form-group">
                        <label htmlFor="confirm-password">Confirm Password:</label><br />
                        <input type="password" id="confirm-password" placeholder="Confirm Password" className="form-control" />
                    </div>
                )}

                <button className="mt-2" type="submit">{props.isRegistered ? "Login" : "Register"}</button>
            </form>
        </div>
    );
}

export default Form;
