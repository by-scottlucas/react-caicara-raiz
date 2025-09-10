export interface Post {
  ID: number;
  title: string;
  date: string;
  content: string;
  excerpt: string;
  author?: { name: string };
  attachments?: { [key: string]: { URL: string } };
  categories?: { [key: string]: { name: string } };
}
