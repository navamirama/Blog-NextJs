import Image from "../../node_modules/next/image";
import Link from "../../node_modules/next/link";
import { IArticle } from "../../types/index";

interface IPropType {
    article: IArticle;

}
export default function BlockCardWithImage({ article }: IPropType) {
    return (<div className="bg-gradient-to-r from-violet-500 to-violet-900 rounded-md flex items-center h-64">

        <Link href="">
            <span className="text-2xl w-2/3 text-white p-6 font-bold after:content-[''] after:bg-primary after:block after:w-16 after:h-1 after:rounded-md after:mt-2 cursor-pointer">
                {article.attributes.Title}
            </span>
        </Link>
        <Image src="/blog-budha.png" alt="img" width={350} height={325} />
    </div>)
}