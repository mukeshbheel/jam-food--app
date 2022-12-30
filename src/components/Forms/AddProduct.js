// import { json } from "body-parser";
import { useState } from "react";


const AddProduct = () => {

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');

    const namehandler = event => {
        setName(prev => event.target.value);
    }

    const priceHandler = event => {
        setPrice(prev => event.target.value);
    }

    const descriptionHandler = event => {
        setDescription(prev => event.target.value);
    }

    const submitHandler = async (event) => {
        event.preventDefault();

        if (name.trim === '' || price.trim === '' || description.trim === '') {
            alert('one of the field is empty');
            return;
        }


        const priceInNumber = +price;

        const response = await fetch('https://react-jas-meal-app-default-rtdb.firebaseio.com/meals.json', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'name': name,
                'price': priceInNumber,
                'description': description
            })
        });

        if (!response.ok) {
            alert('something went wrong adding meal');
            return;
        }

        alert('product added successfully to the database');

        const data = await response.json();
        console.log(data);

    }


    return <form onSubmit={submitHandler}>
        <div>
            <input type="text" placeholder="Product name" onChange={namehandler}></input>
            <input type="text" placeholder="Product price" onChange={priceHandler}></input>
            <input type="text" placeholder="Product description" onChange={descriptionHandler}></input>
        </div>
        <div>
            <button type="submit">Add Product</button>
        </div>

    </form>
};

export default AddProduct;