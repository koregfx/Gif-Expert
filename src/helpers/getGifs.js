

export  const getGifs = async(name) =>{
    const url  = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(name)}&limit=10&api_key=vrNoFiWclSD3YufsbVPLHZ4uf3fJ1NZn`
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map(img =>{
        return{
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    return gifs;
}