import React from 'react';

const TermsAndConditions = ({type, styleLink}) => {
    <label>
        <input type={type} name="TOS"></input>I agree to <a className={styleLink} href="link">terms and conditions</a>
    </label>
};

export default TermsAndConditions;