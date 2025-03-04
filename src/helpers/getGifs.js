export const getGifs = async ( category ) => {

    //const url = `https://api.giphy.com/v1/gifs/search?api_key=RXn3O16Hs9qDwJPOUgTmupT81GOJ4moe&q==${ category }&limit=10`;
    const url = `https://api.giphy.com/v1/gifs/search?api_key=sSqW66rJBQ56GjVDIf2xAwGPrOs94a8N&q==${ category }&limit=10`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    return gifs;

  }
