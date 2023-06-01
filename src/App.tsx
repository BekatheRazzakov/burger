import React, {useState} from 'react';
import {nanoid} from "nanoid";
import meatImage from './assets/meat.png';
import cheeseImage from './assets/cheese.png';
import saladImage from './assets/salad.png';
import baconImage from './assets/bacon.png';
import './App.css';

const App = () => {
    const INGREDIENTS = [
        {name: 'Meat', price: 80, image: meatImage, id: nanoid()},
        {name: 'Cheese', price: 50, image: cheeseImage, id: nanoid()},
        {name: 'Salad', price: 10, image: saladImage, id: nanoid()},
        {name: 'Bacon', price: 60, image: baconImage, id: nanoid()},
    ];

    const [ingredients, setIngredients] = useState([
        {name: 'Meat', count: 0},
        {name: 'Cheese', count: 0},
        {name: 'Salad', count: 0},
        {name: 'Bacon', count: 0},
    ]);

    const showBurger = () => {
        return (
            <div className="burger-block">
                <div className="BreadTop">
                    <div className="Seeds1"></div>
                    <div className="Seeds2"></div>
                </div>
                <div className="BreadBottom"></div>
            </div>
        );
    };

    const showIngredients = INGREDIENTS.map((ingredient: any) => {
        const index = INGREDIENTS.indexOf(ingredient);

        const addIngredient = () => {
            const ingredientsCopy = [...ingredients];
            ingredientsCopy[index].count++;
            setIngredients(ingredientsCopy);
        };

        return (
            <div className='ingredient-block'>
                <img src={ingredient.image}/>
                <span className='ingredient-name'>{ingredient.name}</span>
                <span className='ingredient-amount'>x{ingredients[index].count}</span>
                <button onClick={addIngredient} className='remove-btn'>Remove x1</button>
            </div>
        );
    });

    return (
        <div className="App">
            <div className='ingredients-container'>
                <h1>Ingredients</h1>
                {showIngredients}
            </div>
            <div className='burger-container'>
                <h1>Burger</h1>
                {showBurger()}
            </div>
        </div>
    );
};

export default App;
