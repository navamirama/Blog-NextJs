import { serialize } from 'next-mdx-remote/serialize';
import { IArticle } from '../types';

export const formatDate = (dateString: string): string => {
    const date = new Date(dateString).toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
    return date;
};

export const makeCategory = (slug: string) => {
    console.log('recieved slug', slug);
if(typeof slug === 'string') {
  return slug.split('-').join(' ');
}
return '';
}


export const capitalizeFirstLetter = (str: string) => {
    console.log(str.charAt(0).toUpperCase() + str.slice(1));
    return str.charAt(0).toUpperCase() + str.slice(1);
} 