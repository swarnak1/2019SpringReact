import React from 'react';
import { Globals } from "../models/api";
import { Login } from "../models/users";
import * as fb from "../models/facebook";
import toastr from 'toastr';

export default props=> {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  async function submit(e){
    e.preventDefault();
    try {
      props.login({ x: await Login({email, password})});
      props.history.push('/')
      toastr.success("You've logged in successfully!")
    } catch (error) {
      Globals.errors.push(error);
      toastr.error(error.message);
    }
  }
  async function facebookLogin(e){
    e.preventDefault();
    const m = await fb.Login();
    props.login(m);
    console.log( {m} );
  }

return (
<div className="row">
    <div className="col-lg-6">
    <div className="card">
      <div className="card-header">
        <ul className="nav nav-pills card-header-pills">
          <li className="nav-item">
            <a className="nav-link " href="/Register">Register</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="/Login">Login</a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#">Single Sign in</a>
          </li>
        </ul>
      </div>
      <div className="card-body">
        <h4 className="card-title">Login</h4>
        <div className="card-text">
            <form onSubmit={submit}>
                <div className="form-group">
                  <label htmlFor="Email">Email</label>
                  <input type="text" value={email} onChange={e=> setEmail(e.currentTarget.value)}
                    className="form-control" name="Email" id="Email" aria-describedby="helpEmail" placeholder="Email" />
                  <small id="helpEmail" className="form-text text-muted">You can use any email that you've use on our site</small>
                </div>
                <div className="form-group">
                  <label htmlFor="Password">Password</label>
                  <input type="password"  value={password} onChange={e=> setPassword(e.currentTarget.value)}
                    className="form-control" name="Password" id="Password" placeholder="Password" />
                </div>
                <button type="submit" className="btn btn-success">Login</button>
            </form>
            <br />
            <button className="btn btn-primary btn-block" onClick={facebookLogin}>Log in with Facebook</button>
        </div>
      </div>
    </div>
    </div>
</div>
)}
