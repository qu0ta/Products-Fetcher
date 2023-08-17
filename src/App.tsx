import React, {useEffect, useState} from 'react';
import {Navigation} from "./components/Navigation";
import {Footer} from "./components/Footer";
import {Product} from "./components/Product";
import axios from "axios";
import {IProduct} from "./interfaces/product";

function App() {
    const [products, setProducts] = useState<IProduct[]>([])
    const [categories, setCategories] = useState([])


    async function fetchProducts() {
        const response = await axios.get('https://fakestoreapi.com/products')
        setProducts(response.data)
    }

    async function fetchCategories() {
        const categories = await axios.get('https://fakestoreapi.com/products/categories')
        setCategories(categories.data)
    }

    useEffect(() => {
        fetchProducts()
        fetchCategories()
    }, [])

    async function getButtonClick(category: string) {
        if (category !== 'all') {
            const response = await axios.get(`https://fakestoreapi.com/products/category/${category}`)
            setProducts(response.data)
        } else {
            const response = await axios.get('https://fakestoreapi.com/products')
            setProducts(response.data)
        }
    }

    return (

        <>
            <Navigation categories={categories} handler={getButtonClick}/>
            {products.map((product) => <Product key={product.id} product={product}/>)}
            <div className="flex flexcol minh[92vh]">
                <Footer/>
            </div>
        </>
    )

}

export default App