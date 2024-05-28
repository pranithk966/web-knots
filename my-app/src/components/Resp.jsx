import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function Resp() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  var newData = []

  useEffect(() => {
    setLoading(true)
    axios
      .get('https://api.sampleapis.com/beers/ale')
      .then((res) => {
        setData(res.data)
        setLoading(false)
      })
      .catch((err) => {
        console.log(err)
        setLoading(false)
      })
  }, [])

  data.map((item) => {
    newData.push(item.price)
  })
  newData && newData.sort()

  // console.log(newData.sort())
  return (
    <div>
      <Link to="/">
        <h3>GO TO HOME..</h3>
      </Link>
      {loading && <h1>loading...</h1>}
      <h1>filters : price low to high</h1>
      {newData && newData.map((item) => <h4>BEER PRICE : {item}</h4>)}
    </div>
  )
}
