import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {

    const [images, setImages] = useState([]);
    const [isLoading, setisLoading] = useState( true );

    const getImages = async() => {
        const newImages = await getGifs( category );
        setImages(newImages);
        setisLoading(false);
     }

    useEffect( () => {
        getImages();
        //getGifs(category)
      //  .then(newImages => setImages(newImages));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

  return {
    images,
    isLoading
  }
}
