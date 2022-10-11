import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import { cartContext } from './CartContext';
import { Link } from 'react-router-dom';

function ProductList() {

    const [products, setproducts] = useState([]);

    const { cart, setcart } = useContext(cartContext)

    useEffect(() => {

        axios.get("https://northwind.vercel.app/api/products")
            .then(res => {
                setproducts(res.data);
            })

    }, []);

    const addToCart = (item) => {
        let cartProduct = cart.find(q => q.id === item.id);

        if (!cartProduct) {
            setcart([...cart, item])
        }
    }

    const sortedData = products.sort((a, b) => (a.id - b.id))

    return (
        <table className='table table-striped-columns table-dark'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Stock</th>
                    <th>Company Name</th>
                    <th>Contact Title</th>
                    <th>Add</th>
                </tr>
            </thead>
            <tbody>
                {
                    sortedData && sortedData.map((item, index) => {
                        return <tr key={item.id}>
                            <td><Link to={'/' + item.id} style={{ textDecoration: "none", color: "white" }} >{item.id}</Link></td>
                            <td>{item.name}</td>
                            <td>{item.unitPrice}</td>
                            <td>{item.unitsInStock}</td>
                            <td>{item.supplier?.companyName}</td>
                            <td>{item.supplier?.contactTitle}</td>
                            <td><button onClick={() => addToCart(item)}>Add to favorites</button></td>
                        </tr>
                    })
                }

            </tbody>
        </table>
    )
}
export default ProductList