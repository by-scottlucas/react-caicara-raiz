import parse, {
  DOMNode,
  domToReact,
  Element as HtmlElement,
} from "html-react-parser";
import { ReactNode } from "react";

import { Post } from "../models/Post";

export const getPostImage = (post: Post): string => {
  const keys = post.attachments ? Object.keys(post.attachments) : [];
  return keys.length > 0
    ? post.attachments![keys[0]].URL
    : "https://placehold.co/600x400";
};

export const getPostCategory = (post: Post): string => {
  if (post.categories && Object.keys(post.categories).length > 0) {
    const firstKey = Object.keys(post.categories)[0];
    return post.categories[firstKey].name;
  }
  return "Sem categoria";
};

export const formatPostDate = (date: string) => {
  return new Intl.DateTimeFormat("pt-BR", {
    month: "long",
    day: "2-digit",
    year: "numeric",
  }).format(new Date(date));
};

export const extractPostContent = (content: string) => {
  const cleaned = content.replace(/<figure[^>]*>.*?<\/figure>/, "");

  let description: ReactNode | null = null;
  const sections: {
    title: ReactNode;
    content: ReactNode;
    image?: ReactNode;
  }[] = [];

  parse(cleaned, {
    replace: (domNode: DOMNode) => {
      if ("attribs" in domNode) {
        const el = domNode as HtmlElement;

        if (el.attribs?.id === "post-description") {
          description = domToReact(el.children as unknown as DOMNode[]);
        }

        if (el.attribs?.id === "post-section-title") {
          sections.push({
            title: domToReact(el.children as unknown as DOMNode[]),
            content: "",
          });
        }

        if (el.attribs?.id === "post-section-content") {
          const last = sections[sections.length - 1];
          if (last)
            last.content = domToReact(el.children as unknown as DOMNode[]);
        }

        if (el.attribs?.id === "post-section-image") {
          const last = sections[sections.length - 1];
          if (last) {
            last.image = domToReact(el.children as unknown as DOMNode[]);
          }
        }
      }
    },
  });

  return { description, sections };
};
