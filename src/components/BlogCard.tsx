import Image from "../../node_modules/next/image";
import Link from "../../node_modules/next/link";
import { IArticle } from "../../types";
import { formatDate } from "../../utils/index";

interface IPropTypes {
    article: IArticle;

}

export default function BlogCard({ article }: IPropTypes) {
    // console.log("Blog Card", article);
    console.log("Image Url", article.attributes.author.data.attributes.avatar.data.attributes.formats.thumbnail.url);
    return (<div>
        <Link href={`/article/${article.attributes.slug}`}>
            <h1 className="text-xl  text-primary font-bold hover:decoration-2 hover:underline hover:cursor-pointer hover:decoration-primary">
                {article.attributes.Title}
            </h1>
        </Link>
        <div className="flex items-center my-4 ">
            <div className="rounded-lg overflow-hidden flex items-center justify-center mr-2">
                <Image height={20} width={20} src={`${article.attributes.author.data.attributes.avatar.data.attributes.formats.thumbnail.url}`} alt=""></Image>
            </div>

            <span className="text-sm font-bold text-gray-600">
                {article.attributes.author.data.attributes.firstname} {' '} {article.attributes.author.data.attributes.lastname} On {' '}
                <span className="text-gray-400">
                    {formatDate(article.attributes.createdAt)}
                </span>
            </span>

        </div>
        <div className="text-black-100">
            {article.attributes.shortDescription.slice(0, 250)}{' '}
            {article.attributes.shortDescription.length > 250 ? '...' : ''}
        </div>
    </div>
    );
}