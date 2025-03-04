
//import React from 'react'

//import { useEffect, useState } from "react";
import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';
//import { getGifs } from "../helpers/getGifs";


export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs( category );

    //En archivos jsx no esta permitida la palabra class, sino className

  return (
    <>
        <h3>{ category }</h3>
        {
            isLoading && ( <h2>Cargando...</h2> )
        }
        
            
        <div className="card-grid">
            {
                images.map(( image ) => (
                    <GifItem 
                        key={ image.id} 
                        //title={ image.title}
                        //url={ image.url}
                        { ...image }
                    />
                ))
            }
            
        </div>
    </>
  )
}
