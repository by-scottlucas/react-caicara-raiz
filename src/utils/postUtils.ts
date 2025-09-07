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
