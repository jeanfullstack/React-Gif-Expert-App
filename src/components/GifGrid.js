import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';


export const GifGrid = ({ category }) => {
    

    const { data: images, loading } = useFetchGifs( category );


    return (
        <>
            <h3 className="animate__animated animate__fadeIn"> { category } </h3>

            {/* { loading ? 'Cargando...' : 'Data cargada' } */}

            { loading && <p className="animate__animated animate__flash">Loading</p> }

            <div className="card-grid">
            {
                images.map( img => (
                    <GifGridItem 
                        key={ img.id }
                        { ...img }
                    />
                 ))
            }
    
                     
            </div> 
        </>
        
    )
}

/* <h3> { count } </h3>
<button onClick={ () => setCount( count + 1 ) }></button> */

//const [count, setCount] = useState(0);

//const [images, setImages] = useState([]);

//console.log(data);

//console.log(loading);

//getGifs();

//setImgs

//import { getGifs } from '../helpers/getGifs';