import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <Link to="/list">
        <h1>open list</h1>
      </Link>
      <Link to="/beers">
        <h1>open beer above 4</h1>
      </Link>
    </div>
  )
}
