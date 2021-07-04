import React, { useState } from 'react';
import Proptypes from 'prop-types' ;


export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('')

    const handleInputChange = ({target:{value}})=>{

        setInputValue(value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(inputValue.trim().length>2)
        {
            setCategories(categories =>[ inputValue, ...categories]);
            setInputValue('');
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text" 
                value={ inputValue }
                onChange ={handleInputChange}
            />
        </form>
    )
}

AddCategory.prototype = {
    setCategories: Proptypes.func.isRequired
}

export default AddCategory