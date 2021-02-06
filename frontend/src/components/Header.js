import React from 'react';

class Header extends React.Component {

    render() {
        return(
            <header class='row'>
                <div>
                    <a href='index.html' class='brand'>Tronicom</a>
                </div>
                <div>
                    <a href='cart.html'>Cart</a>
                    <a href='signin.html'> Sign in</a>
                </div>
            </header>
        );
    }
}

export default Header;