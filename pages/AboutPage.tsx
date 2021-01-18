import React from 'react'
import {useHistory} from "react-router-dom"
export const AboutPage: React.FC = () => {
    const history = useHistory()
return(
    <>
    <h1>Страницы информации </h1>
    <p> бла бла бал бал бал бал бал бал бла бал бла бла бал бал бал бал бла бал бла бла  бла бла бла бла бал бла бал бл</p>
    <button onClick={()=> {history.push('/')}} className="btn" > обратно к списку дел </button>
    </>
)
}