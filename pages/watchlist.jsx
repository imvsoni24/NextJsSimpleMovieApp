import React from 'react'
import { useRouter } from 'next/router';

const Watchlist = ({data}) => {
    const [watchlist, setWatchlist] = React.useState([]);
    const router = useRouter();
    const handleClick = ()=>{
      router.push("/")
    }
    const removeFromWatchlist = async (id) => {
        let updatedWatchlist = watchlist.filter((m) => m !== movie);
        setWatchlist(updatedWatchlist);
        await fetch(`http://localhost:8080/watchlist/${id}`, {
          method: 'DELETE'
        })
        router.push("/watchlist")
        // const res = await fetch('http://localhost:8080/watchlist');
        // updatedWatchlist = await res.json();
        // setWatchlist(updatedWatchlist)
      }
      
  return (
    <div>
        <button onClick={handleClick}>Go Back</button>
        <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Year</th>
          <th>Genre</th>
          <th>Remove</th>
        </tr>
      </thead>
      <tbody>
        {data.map((movie) => (
          <tr key={movie.id}>
            <td>{movie.Title}</td>
            <td>{movie.Year}</td>
            <td>{movie.Genre}</td>
            <td>
              <button onClick={() => removeFromWatchlist(movie.id)}>Remove</button>
            </td>
          </tr>
        ))}
      </tbody>
      </table>
    </div>
  )
}


export async function getServerSideProps(){
  let res = await fetch('http://localhost:8080/watchlist');
  res = await res.json();
  return {
    props: {
      data: res
    }
  }
}

export default Watchlist