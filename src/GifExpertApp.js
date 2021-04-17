import React, { useState } from 'react'; // rafc tab crea todo
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () =>{

    //const categories = ['Perro', 'Gato', 'Caballo'];
    
    const [categories, setCategories] = useState(['Perro']);

    /* const handleAdd = ( ) => {
        //setCategories ('vaca');  así le cambio el estado a categories a string
        //setCategories ([...categories, 'vaca']);
        // recibe estado anetior del arreglo y lo reemplaza x un nuevo arreglo con los vlores ant + el nuevo
        setCategories (cats => [...cats, 'vaca']);} */
    

    return (
        <>
            <h2> GifExpertApp   </h2>
            <AddCategory setCat={ setCategories } /> 

            <hr />

            <ol>
                {
                    categories.map( category => 
                      <GifGrid 
                      key={ category }
                      cat={ category } /> 
                    )   
                        /* return <li key ={category}>{category}</li>
                        //          id unico          elemento  */      
                }

            </ol>
            
        </>
    );
}

// 0W9kUPNYYyTU5W7kv7pvCJsbbntKKC0X