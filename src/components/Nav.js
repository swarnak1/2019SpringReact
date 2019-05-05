import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import logo from '../assets/logo.svg';


export default props=> (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <Link className="navbar-brand" to="/" >
            <img src={logo} className="App-logo" alt="logo" height="30" />
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item ">
                    <Link className="nav-link" to="/" activeClassName="active" exact>Home <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/About" activeClassName="active">About</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/MyFriends" activeClassName="active">My Friends</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link disabled" to="#" >Disabled</Link>
                </li>
            </ul>
            {!props.user &&
            <form className="form-inline mt-2 mt-md-0" >
                <Link to="/Login" className="nav-link">Login</Link>
                <Link to="/Register" className="nav-link">Sign Up</Link>
            </form>
            }
            { props.user &&
            <span className="navbar-text">
                <img width="30" src={`https://graph.facebook.com/${props.oAuthUser.id}/picture`} alt="facebook img" />
                Welcome {props.user.FirstName} {props.user.LastName}
            </span>
            }

        </div>
    </nav>
    
)

