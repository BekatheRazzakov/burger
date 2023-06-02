import React from "react";
import './burger.css';

interface IProps {
    onInnerChange: any,
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
        </div>
    );
};

export default Burger;