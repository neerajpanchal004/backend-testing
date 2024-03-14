import Link from 'next/link'
import React from 'react'

const Home = () => {
  return (
    <>
     <Link href="/details/user" ><h1>Users</h1></Link>
    <Link href="/details/dashbord" ><h1>Dashboard</h1></Link>
    </>
   

  )
}

export default Home