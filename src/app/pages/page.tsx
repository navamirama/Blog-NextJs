import { fetchCategories } from '@/http/index';
import type { GetServerSideProps, NextPage } from 'next';
import { AxiosResponse } from 'axios';
import Head from 'next/head';
import { ICategory, ICollectionResponse } from '../../types/index';

import './globals.css';

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


export const getServerSideProps: GetServerSideProps = async () => {
  console.log('I am here')
  const { data: categories }: AxiosResponse<ICollectionResponse<ICategory[]>> = await fetchCategories();
  console.log('categories', categories);
  return {
    props: {

      categories: {
        items: categories.data
      }

    }
  }
}
export default Home;