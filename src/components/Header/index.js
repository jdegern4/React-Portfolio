import React from 'react';

function Header(props) {
    return (
        <div>
            <h2 className='Title'>
                <a href='/'><strong>Jordan Degerness, Developer</strong></a>
            </h2>
            {props.children}
        </div>
    )
};

export default Header;