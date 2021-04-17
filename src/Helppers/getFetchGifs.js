

export  const getFetchGifs  = async ( cat ) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=0W9kUPNYYyTU5W7kv7pvCJsbbntKKC0X&q=${ encodeURI( cat )  }&limit=10`
    const resp = await fetch( url );
    const { data } = await resp.json();
    const gifs = data.map ( img => {
        return{ 
          id: img.id,
          title: img.title,    
          url: img.images?.downsized_medium.url
        }    // ? si vienen las imagenes q lo utilice          
    });
    console.log(cat);
    return gifs;
}
