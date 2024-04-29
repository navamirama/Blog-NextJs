import type { NextPage } from 'next';
import Head from 'next/head';
const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Mindfulness Blog</title>
      </Head>
      <main><h1 className="text-primary" >Welcome home</h1></main>
    </div>
  )
}

export default Home;