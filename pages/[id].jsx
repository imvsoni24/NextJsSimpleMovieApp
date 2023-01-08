import React from 'react'
import MovieDetails from '../components/movieDetails';
import { useRouter } from 'next/router';

const Details = ({data}) => {
  const [watchlist,setWatchlist] = React.useState([])
  const addToWatchList = async()=>{
    console.log("working")
      setWatchlist([...watchlist,data])
      await fetch("http://localhost:8080/watchlist",{
        method:"POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
  }
  console.log(watchlist)
  const router = useRouter();
  const handleClick = ()=>{
    router.push("/watchlist")
  }
  return (
    <div>
         <MovieDetails addToWatchList= {addToWatchList} {...data}/>
         <button onClick={handleClick}>Go on wishlist</button>
    </div>
  )
}

export async function getStaticPaths(){
    let res = await fetch(`http://localhost:8080/movieData`)
    let data = await res.json();
    return {
        paths:data.map((item)=>({params:{id:String(item.id)}})),
        fallback:false
    }
}
export async function getStaticProps(context){
    let id = context.params.id
    let res = await fetch(`http://localhost:8080/movieData/${id}`);
    res = await res.json();
  return {
    props:{
      data:res
    }
  }
}

export default Details