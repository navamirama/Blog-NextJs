
import { redirect } from 'next/navigation'
import { fetchArticles, fetchCategories } from '@/http/index';
import type { NextPage } from 'next';
import { AxiosResponse } from 'axios';
import Head from 'next/head';
import { IArticle, ICategory, ICollectionResponse, IQueryOptions } from '../../types/index';
import qs from 'qs';
import './globals.css';
import ArticleList from '@/components/ArticleList';
import Pagination from '@/components/Pagination';
import Tabs from '@/components/Tabs';

interface IPropTypes {
  categories: {
    items: ICategory[];
  };
  articles: {
    items: IArticle[];
  }
}

// export default async function Home({params , searchParams} : {params: {search: string[]}, searchParams: {[key: string]: string | string [] | undefined}}): NextPage<IPropTypes> {
  export default async function Home({ searchParams
} : {
  searchParams: {[key: string]: string | string [] | undefined}}): NextPage<IPropTypes> {
   console.log("Search Params plzz", searchParams);
  const pageData = searchParams['page'] ?? 1;
  const pageCountData = searchParams['pageCount'] ?? 2;
  const search = searchParams['search'] ?? '';
  const categoriesData = await getCategories(search);
  const articlesdata = await getArticles(pageData, search);
  const categories = categoriesData.props.categories;
  const articles = articlesdata.props.articles;
  const {page, pageCount} = articles.pagination;
// console.log("Search from Params", params.search)
  // console.log('Categories Data', categoriesData.props.categories);
  // console.log('Articles Pagination', articles.pagination);
  console.log('Search Params', searchParams['search']);
  console.log('Search Data', search);
  const handleSearch = (query: string) => {
    redirect(`/?search=${query}`);
};

  return (
    <div>
      <Head>
        <title>Mindfulness Blog</title>
      </Head>
      <Tabs categories={categories.items} ></Tabs>
      {/* <Search categories={categories.items} handleOnSearch={debounce(handleSearch, 500)}/> */}
            {/* Articles */}
      <ArticleList articles={articles.items} />
      <Pagination page={page} pageCount={pageCount} />
    </div>
  )
}

async function getCategories(params: string[]) {
  
  const { data: categories }: AxiosResponse<ICollectionResponse<ICategory[]>> = await fetchCategories();
  return {
    props: {
      categories: {
        items: categories.data
      }
    }
  }
}

async function getArticles(pageData: any, params: any) {
  console.log("ARTCLE PLZ", params['search'].value);
  console.log("running");
  const options: IQueryOptions = {
    filters: {
      Title: {
        $contains: params['search']
      }
    },
    populate: ['author.avatar'],
    sort: ['id:desc'],
    pagination: {
      page: pageData ?  + pageData : 1,
      pageSize: 4 // number of articles to be displayed on the page
  },
  }
  console.log(options);
  if(params['search']) {
    console.log("ARTCLE", params['search']);
    options.filters = {
      Title: {
        $contains: params['search']
      }
  }
  }

  const queryString = qs.stringify(options);
  console.log('Stringify', queryString);
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