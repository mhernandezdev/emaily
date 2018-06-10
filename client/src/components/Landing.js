import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Landing = ({ auth }) => {
    return(
        <div style={{ textAlign:'center' }}>
            <h1>Emaily!</h1>

            <p className="flow-text">Easily create surveys questions, email, and collect user feedback.</p>

            {
                 auth ?
                 <Link to={ '/surveys' } className="waves-effect waves-light btn-large">My Dashboard</Link> :
                 <a href="/auth/google" className="waves-effect waves-light btn-large">Login To Get Started</a>
            }

        </div>
    );
}

function mapStateToProps({ auth }){
    return { auth };
}

export default connect(mapStateToProps)(Landing);