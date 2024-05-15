import { IArticle } from "../../types/index";
import BlockCardWithImage from "./BlockCardWithImage";
import BlogCard from "./BlogCard";

//comment test
// interface IPropType {
//     articles: IArticle[];

// }

// export default function ArticleList({ articles }: IPropType) {
//     return <div className="grid lg:grid-cols-2 grid-gap gap-16 mt-16">
//         {
//             articles.map((article, idx) => {
//                 console.log("Article LIST", articles.length );
//                 return <div key={article.id}>
//                     {
//                         // idx === 1 ? <BlockCardWithImage article={article} /> : <BlogCard article={article} />
//                         <BlogCard article={article} />
//                     }


//                 </div>
//                 // return 
//             })
//         }</div>
// }

interface IPropType {
    articles: IArticle[];
}
const ArticleList = ({ articles }: IPropType) => {
    return (
        <div className="grid lg:grid-cols-2 grid-gap gap-16 mt-16">
            {articles.map((article, idx) => {
                return (
                    <div key={article.id}>
                       
                            <BlogCard article={article} />
                       
                    </div>
                );
            })}
        </div>
    );
};

export default ArticleList;