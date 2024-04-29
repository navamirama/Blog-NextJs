import { fetchCategories } from '@/http/index';
import type { GetServerSideProps, NextPage } from 'next';
import { AxiosResponse } from 'axios';
import Head from 'next/head';
import { ICategory, ICollectionResponse } from '../../types/index';

// import './globals.css';

interface IPropTypes {
    categories: ICategory[];
    handleOnSearch: (query: string) => void;

}

export default function Search({ categories, handleOnSearch }: IPropTypes) {
  return (
    <div>
      <input
                    onChange={(e) => handleOnSearch(e.target.value)}
                    type="text"
                    placeholder="Search"
                    className="outline-none px-2 py-1 ml-1"
                />
    </div>
  )
}


// export const getServerSideProps: GetServerSideProps = async () => {
//   console.log('I am here')
//   const { data: categories }: AxiosResponse<ICollectionResponse<ICategory[]>> = await fetchCategories();
//   console.log('categories', categories);
//   return {
//     props: {

//       categories: {
//         items: categories.data
//       }

//     }
//   }
// }