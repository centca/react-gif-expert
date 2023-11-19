import { useState } from "react";
import { AddCategory, GifGrid } from "./components";


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['']);

    const onAddCategory = (newCategory) => {

        if( categories.includes(newCategory) ) return;

        setCategories([...categories, newCategory]);
    }

    return (

        <>
            {/* titulo */}
            <h1>Super heroes</h1>

            {/* Input */}
            <AddCategory newCategory = { (event) => onAddCategory(event)}/>
        
            {/* Listado gif */}

            <ol>
            
                { categories.map((category) => (
                    <GifGrid key={category} category={category}/>
                    ))
                }

            </ol>

                {/* Gif item */}
        </>

    );
}