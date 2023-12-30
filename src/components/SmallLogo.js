import React from 'react';

let SmallLogo = ({styleText, styleImg, alt, src}) => {
    return(
    <div>
        <label className={styleText}></label>
        <img className={styleImg} alt={alt} src={src}></img>
    </div>
    );
};

export default SmallLogo;