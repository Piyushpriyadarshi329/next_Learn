import React from 'react';

function SSRPage({ serverData=[] }) {

    console.log("serverData",serverData)
  return (
    <div>
      <h1>Server-Side Rendering in Next.js</h1>
      <div>{serverData.products.map((i,index)=>{

        return(
            <div>
             {index}   {i.title}
            </div>
        )
      })}</div>
    </div>
  );
}

export async function getServerSideProps() {
  // Fetch data from an API or database
  const response = await fetch('https://dummyjson.com/products/');
  const data = await response.json();

  console.log("data",data)

  return {
    props: {
      serverData: data,
    },
  };
}

export default SSRPage;