import React from 'react'

function NavBar() {

    return <nav className='nav'>
        <a href="/" className='site-title'>Home</a>
        <ul>
            <li><a href="/hiragana">Hiragana</a></li>
            <li><a href="/katakana">Katakana</a></li>
        </ul>
    </nav>
}

export default NavBar