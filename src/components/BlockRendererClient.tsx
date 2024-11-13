'use client'
import { createContext } from "react";
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import {BlocksRenderer, type BlocksContent} from "@strapi/blocks-react-renderer";
import Link from "next/dist/client/link";
import Navbar from "./navbar/Navbar";



export default function BlockRendererClient({
  content,
}: {
  readonly content: BlocksContent;
}) {
  console.log("Renderer COntent", content);
  if (!content) return null;
  return (
    <div>
      <Navbar />
    <BlocksRenderer
      content={content}
      blocks={{
        paragraph: ({ children }) => <p className="text-neutral900 max-w-396">{children}</p>,
        // ...or point to a design system
        heading: ({ children, level }) => {
          switch (level) {
            case 1:
                return <h1 className="text-3xl font-bold py-6 text-blue-900">{children}</h1>
              case 2:
                return <h2 className="text-3xl font-bold py-6 text-blue-900">{children}</h2>
                case 3:
                return <h3 className="text-3xl font-bold py-6 text-blue-900">{children}</h3>
              // case 3:
              //     return <h3>{children}</h3>
              // case 4:
              //   return <h4>{children}</h4>
              // case 5:
              //   return <h5>{children}</h5>
              
          }
        }
        ,
        // For links, you may want to use the component from your router or framework
        link: ({ children, url }) => <Link href={url}>{children}</Link>,
      }}
      modifiers={{
        bold: ({ children }) => <strong>{children}</strong>,
        italic: ({ children }) => <span className="italic">{children}</span>,
      }}
    />
    </div>
  );
}