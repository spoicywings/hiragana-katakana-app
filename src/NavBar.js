import React from 'react'

function NavBar() {

    return <nav className='nav'>
        <a href="#/hiragana-katakana-app" className='site-title'>Home</a>
        <ul>
            <li><a href="#/hiragana-katakana-app/hiragana">Hiragana</a></li>
            <li><a href="#/hiragana-katakana-app/katakana">Katakana</a></li>
        </ul>
    </nav>
}

export default NavBar