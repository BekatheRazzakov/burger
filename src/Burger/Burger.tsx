import React, {ReactNode} from "react";
import './burger.css';

interface IProps {
    onInnerChange: ReactNode,
    burgerPrice: number,
}

const Burger = (props: IProps) => {
    return (
        <div className='burger'>
            <div className="burger-block">
                <div className="BreadTop">
                    <div className="Seeds1"></div>
                    <div className="Seeds2"></div>
                </div>
                {props.onInnerChange}
                <div className="BreadBottom"></div>
            </div>
            <h1 className='burger-price'>Price: {props.burgerPrice}</h1>
        </div>
    );
};

export default Burger;