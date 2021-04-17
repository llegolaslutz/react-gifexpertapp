import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';



export const GifGrid = ({ cat }) => {

                                    //llamo custom hook
    const { loading, data: images } = useFetchGifs ( cat );
    
    return (
        <>
        <h3 className ="animate__animated animate__fadeInDown"> { cat }  </h3>

        { loading && <p className ="animate__animated animate__flash"> Cargando...</p>}


        <div className ="card-grid animate__animated animate__fadeInDown">
            
            { images.map ( ( img ) => ( 
                   < GifGridItem 
                        { ...img } // spread para enviar las propiedades de las imagenes como una propiedad indepte
                        key = { img.id }                    
                   />
                ))
            }          
            
        </div>
        </>
    )
}


/*
<ol>
 // desestructuro pa no poner i.id y i.title 
     { images.map ( ({ id, title }) => ( 
        <li key = { id }> {title} </li>
        ))
     } 
</ol> */

 //  const [images, setImages] = useState([]);

    // useEffect(() => { // PARA QUE no se ejecute la funcion cada vez que se modifica algo de este componente ej count
    //     getGifs( cat )  //.then(gif  => setImages(gif));
    //     .then(setImages);
    //     }, [ cat ]); // si la categoria cambia vuelve a ejecutar esto.. no es este caso
