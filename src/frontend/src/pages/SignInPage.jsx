import { useState } from "react";
import { Link } from "react-router-dom";
import { AuthService } from "../services/AuthService";

export function SignInPage() {
    const [alertMessage, setAlertMessage] = useState('');
    const [signInForm, setSignInForm] = useState({
        username: '',
        password: '',
    });
    const handleTextChange = (e) => {
        setSignInForm({
            ...signInForm,
            [e.target.name]: e.target.value,
        });
    };
    let signInClicked = async (e) => {
        e.preventDefault();
        console.log(`username ${signInForm.username} password ${signInForm.password}`);
        let result = await AuthService.SignIn(signInForm)
        if (result.errorMessage.trim())
            setAlertMessage(result.errorMessage.trim());
        else
            setAlertMessage('');
    }

    return <>
        <div className="row">
            <div className="col-md-4 offset-md-4">
                <div className="card mt-md-5">
                    <div className="card-body">
                        <h1 className="text-center">Sign In</h1>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="username" className="form-label">Username</label>
                                <input type="text" className="form-control" id="username" name="username" onChange={handleTextChange} />
                                {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input type="password" className="form-control" id="password" name="password" onChange={handleTextChange} />
                                {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                            </div>
                            {alertMessage.trim()
                                ? <div className="mb-3">
                                    <div className="form-text text-danger">{alertMessage}</div>
                                </div>
                                : <></>}
                            <div className="mb-3">
                                <div className="d-flex justify-content-between">
                                    <button className="btn btn-success" onClick={signInClicked} >Sign In</button>
                                    <Link to={'/signup'} className="btn btn-danger">Sign Up</Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
}