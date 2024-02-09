import React from 'react';
import Link from 'next/link';


function index({ serverData}) {

  return (
    <div>
      <h1>Server-Side Rendering in Next.js</h1>
      <div>{serverData.products.map((i,index)=>{

        return(
          <Link href={`/products/${index}`}>
          {index}   {i.title}
            </Link>
        )
      })}</div>
    </div>
  );
}

export async function getServerSideProps() {





  const response = await fetch('https://dummyjson.com/products/');
  const data = await response.json();

  console.log("data",data)

  return {
    props: {
      serverData: data,
    },
  };
}

export default index;

