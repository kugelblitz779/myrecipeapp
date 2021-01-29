import React from 'react'
import style from '../style.module.css'

const Recipe = (props) => {

    const {title, calorie, image, ingredients} = props

    return (
        <div>
            
            <div className={style.recipe}>
            <h2>{title}</h2>
                <div className={style.gap}>
                    {ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient.text}</li>
                    ))}
                </div>
                <div>
                    <img src={image}></img>
                    <p>Calories : {calorie}</p>
                </div>
            </div>
            
        </div>
    )
}

export default Recipe
