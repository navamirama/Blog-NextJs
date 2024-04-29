import { fetchCategories } from '@/http/index';
import type { NextPage } from 'next';
import { AxiosResponse } from 'axios';
import Head from 'next/head';
import {  ICategory, ICollectionResponse } from '../../types/index';

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


async () => {
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