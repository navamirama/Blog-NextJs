import axios from 'axios';
import { IArticle, ICollectionResponse } from '../../types/index';
import { AxiosResponse } from 'axios';
import qs from 'qs';

const api = axios.create({
    baseURL: process.env.API_BASE_URL,
    headers: {
        Authorization: `Bearer ${process.env.BACKEND_API_KEY}`
    }
})

console.log("API is", api);
// Categories
export const fetchCategories = async () => api.get('/api/categories');

// Articles
export const fetchArticles = async (queryString: string) => api.get(`/api/articles?${queryString}`);

export const fetchArticleBySlug = async(queryString: string) => api.get(`/api/articles?${queryString}`);

export async function getArticles(params: any) {
    console.log("HTTP params", params);
    console.log("running");
    

    const queryString = qs.stringify({
        populate: ['Image', 'author.avatar'],
        filters: {
            slug: {
                $eq: params.slug,
            },
        },
    });
    console.log('Single Articles Before', queryString);
    const { data: articles }: AxiosResponse<ICollectionResponse<IArticle[]>> = await fetchArticles(queryString);
    console.log('Single Articles', articles);
    return {
      props: {
        articles: {
          items: articles.data,
          pagination: articles.meta.pagination,
        }
  
      }
    }
  }

