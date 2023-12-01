import React from 'react'
import Card from '../Components/Card'
import { useGlobalContext } from '../Context/global.context';


const Home = () => {
  const {state} = useGlobalContext()
  return (
    <main  >
      <h1>Home</h1>
      <div className="card-grid">
      {state.list.map(item => <Card item={item} key={item.id} showButton={true}/>)}
    </div>
    </main>
  )
}

export default Home