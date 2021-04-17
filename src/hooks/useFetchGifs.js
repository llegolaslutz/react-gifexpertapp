// import React from 'react'; no es necesearia a menos q regresemos jsx (etiq html x ej)
import { useState, useEffect } from 'react';
import { getFetchGifs } from '../Helppers/getFetchGifs';

export const useFetchGifs = ( cat ) => { // los hoocks son funciones

    const [state, setstate] = useState({

        data: [],
        loading: true    // estado inicial
    });

    useEffect(() => { // efecto para q solo cambie cuando cambia cat

        getFetchGifs( cat )   //hago peticion http api
            .then(imgs => { // tenemos las imagenes                 

                setstate({ // cambio la info.. setstate dispara renderizacion en el componente GifGrid
                    data: imgs,
                    loading: false
                });
              
            });

    }, [ cat ]);

   
    return state;

}
