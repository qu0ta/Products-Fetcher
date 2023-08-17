import React, {useState} from "react";
import {IProduct} from "../interfaces/product";

interface ProductProps {
    product: IProduct
}

export function Product({product}: ProductProps) {
    const [display, setDisplay] = useState(false)
    const clickHandler = () => {
        setDisplay(display => !display)
    }
    const btnBgColor = display ? 'bgyellow400' : "bggreen400"
    const btnStyles = ['p2', 'rounded2xl', btnBgColor]
    return (

        <div className="maxw[40%]  mxauto my10 minh[100px] border bordergray700 rounded p2 textcenter">
            <p className="fontbold textxl">{product.title}</p>
            <p className="fontbold text[20px] opacity50">{product.category}</p>

            <img src={product.image} alt={product.title}
                 className="w[120px] h[120px] mxauto my2"/>

            <button className={btnStyles.join(" ")}
                    onClick={clickHandler}
            >
                {display ? "Hide" : "Show"} description
            </button>
            {display && <p className="m2 text[16px]">{product.description}</p>}

        </div>
    )
}