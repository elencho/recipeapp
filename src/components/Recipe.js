import React from 'react';


const Recipe = ({ title, calories, image, ingredient }) => {
    return (
        <div className='recipe'>
            <h1>{title}</h1>
            <img src={image} alt="" />
            <div className="dropdown">
                <span>Show ingredients</span>
                <div className="dropdown-content">
                    <p>Ingridients : {ingredient} </p>
                </div>
            </div>
            <p>Calories : {Math.trunc(calories)} KCAL</p>
        </div>
    )
}

export default Recipe