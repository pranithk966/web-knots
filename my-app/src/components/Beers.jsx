import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function Beers() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  const newData = []

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
    if (Number(item.price[1]) > 4) {
      newData.push(item.price)
    }
  })

  return (
    <div>
      <Link to="/">
        <h1>Go To Home..</h1>
      </Link>
      {loading && <h1>loading..</h1>}
      list above 4$
      {newData && newData.map((item) => <h3>{item}</h3>)}
    </div>
  )
}
