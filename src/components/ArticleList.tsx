import { IArticle } from "../../types/index";
import BlockCardWithImage from "./BlockCardWithImage";
import BlogCard from "./BlogCard";

interface IPropType {
    articles: IArticle[];

}

export default function ArticleList({ articles }: IPropType) {
    return <div className="grid lg:grid-cols-2 grid-gap gap-16 mt-16">
        {
            articles.map((article, idx) => {
                console.log("Article LIST", articles.length );
                return <div key={article.id}>
                    {
                        // idx === 1 ? <BlockCardWithImage article={article} /> : <BlogCard article={article} />
                        <BlogCard article={article} />
                    }


                </div>
                // return 
            })
        }</div>
}