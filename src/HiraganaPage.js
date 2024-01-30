import React from 'react'
import {useState, useEffect} from 'react'

function HiraganaPage() {

    const hiragana = [
        { romanji: 'a', hiragana: 'あ' },
        { romanji: 'i', hiragana: 'い' },
        { romanji: 'u', hiragana: 'う' },
        { romanji: 'e', hiragana: 'え' },
        { romanji: 'o', hiragana: 'お' },
        { romanji: 'ka', hiragana: 'か' },
        { romanji: 'ki', hiragana: 'き' },
        { romanji: 'ku', hiragana: 'く' },
        { romanji: 'ke', hiragana: 'け' },
        { romanji: 'ko', hiragana: 'こ' },
        { romanji: 'sa', hiragana: 'さ' },
        { romanji: 'shi', hiragana: 'し' },
        { romanji: 'su', hiragana: 'す' },
        { romanji: 'se', hiragana: 'せ' },
        { romanji: 'so', hiragana: 'そ' },
        { romanji: 'ta', hiragana: 'た' },
        { romanji: 'chi', hiragana: 'ち' },
        { romanji: 'tsu', hiragana: 'つ' },
        { romanji: 'te', hiragana: 'て' },
        { romanji: 'to', hiragana: 'と' },
        { romanji: 'na', hiragana: 'な' },
        { romanji: 'ni', hiragana: 'に' },
        { romanji: 'nu', hiragana: 'ぬ' },
        { romanji: 'ne', hiragana: 'ね' },
        { romanji: 'no', hiragana: 'の' },
        { romanji: 'ha', hiragana: 'は' },
        { romanji: 'hi', hiragana: 'ひ' },
        { romanji: 'fu', hiragana: 'ふ' },
        { romanji: 'he', hiragana: 'へ' },
        { romanji: 'ho', hiragana: 'ほ' },
        { romanji: 'ma', hiragana: 'ま' },
        { romanji: 'mi', hiragana: 'み' },
        { romanji: 'mu', hiragana: 'む' },
        { romanji: 'me', hiragana: 'め' },
        { romanji: 'mo', hiragana: 'も' },
        { romanji: 'ya', hiragana: 'や' },
        { romanji: 'yu', hiragana: 'ゆ' },
        { romanji: 'yo', hiragana: 'よ' },
        { romanji: 'ra', hiragana: 'ら' },
        { romanji: 'ri', hiragana: 'り' },
        { romanji: 'ru', hiragana: 'る' },
        { romanji: 're', hiragana: 'れ' },
        { romanji: 'ro', hiragana: 'ろ' },
        { romanji: 'wa', hiragana: 'わ' },
        { romanji: 'wo', hiragana: 'を' },
        { romanji: 'n', hiragana: 'ん' }
    ]

    const [input, setInput] = useState('')
    const [current, setCurrent] = useState(0)

    const [streak, setStreak] = useState(0)
    const [maxStreak, setMaxStreak] = useState(0)

    const [error, setError] = useState(false)

    const setRandomHiragana = () => {
        const randomIndex = Math.floor(Math.random() * hiragana.length)
        setCurrent(randomIndex)
    }

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (input.toLowerCase() === hiragana[current].romanji) {
            setStreak(streak + 1)
            setMaxStreak(Math.max(streak + 1, maxStreak))
            setError(false)

            localStorage.setItem('maxStreak', Math.max(streak, maxStreak))
            localStorage.setItem('streak', streak + 1)
        }else {
            setStreak(0)
            setError(`Wrong, the correct answer for ${hiragana[current].hiragana} is ${hiragana[current].romanji}.`) 
            localStorage.setItem('streak', 0)
        }
        setInput('')
        setRandomHiragana()
    }    

    useEffect(() => {
        setRandomHiragana()
        setStreak(parseInt(localStorage.getItem('streak')) || 0)
        setMaxStreak(parseInt(localStorage.getItem('maxStreak')) || 0)
    }, [])

    return (<div className='hiragana-page'>
                <div className='quiz-container'>
                <h1 className='title'>Hiragana Quiz</h1>
                <div className='streak'>
                    <p>Current streak: {streak}</p>
                </div>
                <div className='character'>
                    {hiragana[current].hiragana}
                </div>
                <div>
                    <form onSubmit={handleSubmit}>
                        <input 
                            type="text"
                            value={input}
                            onChange={handleChange}
                            className='inputText'
                        />
                    </form>
                </div>
                {error && <p className='errorMessage'>{error}</p>}
                </div>
        </div>)

}

export default HiraganaPage