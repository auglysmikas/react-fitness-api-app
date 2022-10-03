export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '3a369cf827msh3d38714b6581282p1bf001jsn6baa4133886d',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };


export const fetchData = async(url, options)=>{

    const response = await fetch(url, options);
    const data = await response.json();

    return data;
 }