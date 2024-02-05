
import { useSearchParams } from 'next/navigation'
import { fetchArticles, fetchCategories } from '@/http/index';
import type { GetServerSideProps, NextPage } from 'next';
import { AxiosResponse } from 'axios';
import Head from 'next/head';
import { IArticle, ICategory, ICollectionResponse } from '../../types/index';
import qs from 'qs';

import './globals.css';
import Tabs from '@/components/Tabs';
import ArticleList from '@/components/ArticleList';
import Pagination from '@/components/Pagination';

interface IPropTypes {
  categories: {
    items: ICategory[];
  };
  articles: {
    items: IArticle[];
  }
}

export default async function Home({searchParams} : {searchParams: {[key: string]: string | string [] | undefined}}): NextPage<IPropTypes> {
  const pageData = searchParams['page'] ?? 1;
  const pageCountData = searchParams['pageCount'] ?? 2;
  console.log('Page Number', pageData);
  const categoriesData = await getCategories();
  const articlesdata = await getArticles(pageData);
  const categories = categoriesData.props.categories;
  const articles = articlesdata.props.articles;
  const {page, pageCount} = articles.pagination;
  console.log('Categories Data', categoriesData.props.categories);
  console.log('Articles Pagination', articles.pagination);
  console.log('Search Params', searchParams);
  return (
    <div>
      <Head>
        <title>Mindfulness Blog</title>
      </Head>
      <Tabs categories={categories.items}></Tabs>
      {/* Articles */}
      <ArticleList articles={articles.items} />
      <Pagination page={page} pageCount={pageCount} />
    </div>
  )
}

async function getCategories() {
  const { data: categories }: AxiosResponse<ICollectionResponse<ICategory[]>> = await fetchCategories();
  return {
    props: {
      categories: {
        items: categories.data
      }
    }
  }
}

async function getArticles(pageData: any) {
  const options = {
    populate: ['author.avatar'],
    sort: ['id:desc'],
    pagination: {
      page: pageData ?  + pageData : 1,
      pageSize: 1 // number of articles to be displayed on the page
  },
  }
  console.log(options);
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