import React, {useState} from 'react';
import {nanoid} from "nanoid";
import meatImage from './assets/meat.png';
import cheeseImage from './assets/cheese.png';
import saladImage from './assets/salad.png';
import baconImage from './assets/bacon.png';
import Burger from "./Burger/Burger";
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

    const [addedIngredients, setAddedIngredients] = useState<string[]>([]);

    const [price, setPrice] = useState(30);

    const showIngredients = INGREDIENTS.map(ingredient => {
        const index = INGREDIENTS.indexOf(ingredient);

        const addIngredient = () => {
            const ingredientsCopy = [...ingredients];
            ingredientsCopy[index].count++;

            const addedIngredientsCopy = [...addedIngredients];
            addedIngredientsCopy.push(ingredient.name);
            setAddedIngredients(addedIngredientsCopy);

            setIngredients(ingredientsCopy);

            setPrice(price + ingredient.price);
        };

        const removeIngredient = () => {
            const addedIngredientsCopy = [...addedIngredients];
            const remIngredientName = addedIngredientsCopy.filter(remIngredient => ingredient.name === remIngredient)[0];
            const remIngredientIndex = addedIngredientsCopy.indexOf(remIngredientName);

            if (ingredient.name === remIngredientName) {
                addedIngredientsCopy.splice(remIngredientIndex, 1);
            }
            setAddedIngredients(addedIngredientsCopy);

            const ingredientsCopy = [...ingredients];

            if (ingredientsCopy[index].count >= 1) {
                setPrice(price - ingredient.price);
                ingredientsCopy[index].count--;
                setIngredients(ingredientsCopy);
            }
        };

        return (
            <div className='ingredient-block' key={ingredient.id}>
                <button  onClick={addIngredient} className='add-btn' type='button'>
                    <img src={ingredient.image} alt='ingredient'/>
                </button>
                <span className='ingredient-name'>{ingredient.name}</span>
                <span className='ingredient-amount'>x{ingredients[index].count}</span>
                <button onClick={removeIngredient} className='remove-btn'></button>
            </div>
        );
    });

    const showBurgerInners = addedIngredients.map((ingredient) => {
        return (
            <div className={ingredient} key={nanoid()}></div>
        );
    })

    return (
        <div className="App">
            <div className='ingredients-container'>
                <h1>Ingredients</h1>
                {showIngredients}
            </div>
            <div className='burger-container'>
                <h1>Burger</h1>
                <Burger onInnerChange={showBurgerInners} burgerPrice={price}/>
            </div>
        </div>
    );
};

export default App;