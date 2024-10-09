import React from 'react';
import { NavLink } from 'react-router-dom';

const PrimaryBtn = ({link,text}) => {
    return (
        <>
           <NavLink to={link} className="primary-btn">{text}</NavLink>
        </>
    );
};

export default PrimaryBtn;