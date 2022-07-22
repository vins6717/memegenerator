import React from 'react';
import memeGeneratorLogo from '../images/memegeneratorlogo.svg';

export default function Header() {
    return (
        <header className="header">
            <img src={memeGeneratorLogo} className="logo"/>
            <h2 className="header-text">Meme Generator</h2>
        </header>
            )

}