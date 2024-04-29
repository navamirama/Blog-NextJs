'use client'
import React, {useEffect, useState} from 'react';
import Link from '../../node_modules/next/link';
import {  usePathname ,  useSearchParams} from '../../node_modules/next/navigation';
import { ICategory, IArticle, ICollectionResponse, IQueryOptions} from '../../types/index';
import {useRouter} from 'next/navigation';
import { AxiosResponse } from 'axios';
import { fetchArticles } from '@/http/index';
import qs from 'qs';
import { headers } from 'next/headers';

interface IPropTypes {
    categories: ICategory[];

}

export default function Tabs({ categories }: IPropTypes) {
    const [url, setUrl] = useState(" ");
    const searchParams = useSearchParams();
    const pathName = usePathname();
    
    useEffect(() => {
        const newUrl = `${pathName}?${searchParams}`
        setUrl(newUrl);
      }, [pathName, searchParams])
     
    // console.log("Path Name", pathName);
const router = useRouter();
 console.log("URL", url);
    const isActiveLink = (categories: ICategory) => {
        return url.includes(categories.attributes.Slug);
    }

    // const  handleOnSearch = async (query: string) => {
    //     console.log(query);
       
    //     // router.push(`/search=${query}`);
    //     return await getArticles(2, query);
    // }

    return (
        <div className="my-8 flex items-center justify-between border-b-2 border-gray-100">
            <ul className="flex items-center">
                <li
                    className={
                        'mr-6 pb-6 border-b-4 rounded-sm ' +
                        `${
                            pathName === '/'
                                ? 'border-primary text-primary font-bold'
                                : 'border-white text-primary '
                        }`
                    }>
                    <Link href="/">Recent</Link>
                </li>
                {categories.map((category) => {
                    return (
                        <li
                            key={category.id}
                            className={
                                'mr-6 pb-6 border-b-4 rounded-sm ' +
                                `${
                                    isActiveLink(category)
                                        ? 'border-primary text-primary'
                                        : 'border-white  text-secondary'
                                }`
                            }>
                            <Link
                                href={`/category/${category.attributes.Slug}`}>
                               {category.attributes.Title}
                            </Link>
                        </li>
                    );
                })}
            </ul>
            <div className="flex items-center">
                <svg
                    className="h-4 fill-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512">
                    <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" />
                </svg>
                {/* <input
                    onChange={(e) => handleOnSearch(e.target.value)}
                    type="text"
                    placeholder="Search"
                    className="outline-none px-2 py-1 ml-1"
                /> */}
            </div>
        </div>
    );
}

async function getArticles(pageData: any, search: any) {
    console.log("Inside Search CLass", search);
    console.log("running");
    const options: IQueryOptions = {
      filters: {
        Title: {
          $contains: search
        }
      },
      populate: ['author.avatar'],
      sort: ['id:desc'],
      pagination: {
        page: pageData ?  + pageData : 1,
        pageSize: 4 // number of articles to be displayed on the page
    },
    }
    console.log("Inside Search options", options);
    const queryString = qs.stringify(options);
    console.log('Inside Search Stringify', queryString);
    const { data: articles }: AxiosResponse<ICollectionResponse<IArticle[]>> = await fetchArticles(queryString);
    console.log('Articles', articles);
    return {
      props: {
        articles: {
          items: articles.data,
          pagination: articles.meta.pagination,
        }
  
      }
    }
  }