import { Grid } from '@chakra-ui/react';
import Head from 'next/head'
import MovieCard from '../components/movieCard';
import { useRouter } from 'next/router';

export default function Movie({data}) {
  
  const router = useRouter();
  const handleClick = ()=>{
    router.push("/watchlist")
  }
  return (
    <>
      <Head>  
        <title>Netflix</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://cdn.iconscout.com/icon/free/png-128/netflix-6-722723.png" />
      </Head>
      <h1 style={{textAlign:"center",fontSize:"30px",color:"black"}}>Movie App</h1>
      <Grid templateColumns='repeat(4, 1fr)'>
      {data.map((item)=>(
         <MovieCard key={item.id}  {...item}/>
      ))}
      <button onClick={handleClick}>Go on wishlist page</button>
      </Grid>
    </>
  )
}
export async function getStaticProps(){
  let res = await fetch("http://localhost:8080/movieData");
  res = await res.json();
  return {
    props:{
      data:res
    }
  }
}