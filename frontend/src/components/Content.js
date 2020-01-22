import React from 'react';
import './Content.css';

const Content = ({children}) => {
    return(
        <div classNmae = 'content'>
            {children}
        </div>
    );
}

export default Content;
