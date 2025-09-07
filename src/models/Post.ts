export interface Post {
  ID: number;
  title: string;
  date: string;
  content: string;
  excerpt: string;
  attachments?: { [key: string]: { URL: string } };
  categories?: { [key: string]: { name: string } };
}
