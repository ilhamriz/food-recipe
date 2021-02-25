import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Hero from '../components/Hero'
import Popular from '../components/Popular'
import RecipeHome from '../components/RecipeHome'

function Home() {
  const [getDataPopular, setGetDataPopular] = useState([])
  const [getDataNewest, setGetDataNewest] = useState([])
  useEffect(() => {
    getData();
  }, [])

  // useEffect(() => {
  //   console.log(getDataByLike);
  // }, [getDataByLike])

  const getData = () => {
    axios.get('http://localhost:3001/v1/recipes/sort/like')
      .then(res => {
        setGetDataPopular(res.data);
      })
      .catch(err => console.log(err))
    
    axios.get('http://localhost:3001/v1/recipes/sort/createdAt')
      .then(res => {
        setGetDataNewest(res.data);
      })
      .catch(err => console.log(err))
  }

  return (
    <>
      <Hero />
      {getDataPopular.length > 0 ?
        <Popular getDataPopular={getDataPopular} />
        : <Popular />}
      {getDataNewest.length > 0 ?
        <RecipeHome getDataNewest={getDataNewest} />
        : <RecipeHome />}
      {/* <RecipeHome getDataByLike={getDataByLike} /> */}
    </>
  )
}

export default Home