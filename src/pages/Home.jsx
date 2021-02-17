import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Hero from '../components/Hero'
import Popular from '../components/Popular'
import RecipeHome from '../components/RecipeHome'

function Home() {
  const [getDataByLike, setGetDataByLike] = useState([])
  useEffect(() => {
    getData();
  }, [])

  const getData = async () => {
    // await axios.get('http://localhost:3001/v1/recipes/sort/like')
    //   .then(res => {
    //     setGetDataByLike(res.data);
    //   })
    //   .catch(err => console.log(err))
    
    await axios.get('http://localhost:3001/v1/recipes/')
      .then(res => {
        setGetDataByLike(res.data);
      })
      .catch(err => console.log(err))
  }

  return (
    <>
      <Hero />
      {/* {getDataByLike.length > 0 ?
        <Popular getDataByLike={getDataByLike} />
        : <Popular />} */}
      <Popular />
      {getDataByLike.length > 0 ?
        <RecipeHome getDataByLike={getDataByLike} />
        : <RecipeHome />}
      {/* <RecipeHome getDataByLike={getDataByLike} /> */}
    </>
  )
}

export default Home