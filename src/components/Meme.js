import React, {useState} from 'react';




export default function Meme() {

    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    })

   
    const [allMemes, setAllMemes] = useState([])

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then(response => setAllMemes(response.data.memes))

    }, [])

    function getMemeImage(event) {
        event.preventDefault();
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return(
        <main className="meme-container">
            <div className="container">
                <form className="form">
                    <input 
                        type="text" 
                        className="form-input" 
                        placeholder="Top Text" 
                        name="topText"
                        value={meme.topText}
                        onChange={handleChange}
                    />
                    <input 
                        type="text" 
                        className="form-input" 
                        placeholder="Bottom Text"
                        name="bottomText"
                        value={meme.bottomText}
                        onChange={handleChange}
                    />
                    <button 
                        className="form-button" 
                        onClick={getMemeImage}>
                            Generate Meme
                            </button>
                </form>
            </div>
        
            <div className="meme full-width">
                <img src={meme.randomImage} className="meme-image" alt='your-meme-image'/>
                <h2 className="meme-text top">{meme.topText}</h2>
                <h2 className="meme-text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}

