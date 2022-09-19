import React from 'react';

function Header(props) {
    return (
        <div>
            <h2 className='Title'>
                <a href='/'>Jordan Degerness</a>
            </h2>
            {props.children}
        </div>
    )
};

export default Header;