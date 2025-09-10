import { Helmet } from "react-helmet-async";

interface SeoProps {
  title: string;
  description?: string;
  url?: string;
  image?: string;
  type?: string;
}

export default function Seo({
  title,
  description = "Descrição padrão do site",
  url = window.location.href,
  image = "/default-image.jpg",
  type = "website",
}: SeoProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />

      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <link rel="dns-prefetch" href="https://praiagrandedicas.wordpress.com" />
      <link rel="preconnect" href="https://praiagrandedicas.wordpress.com" crossOrigin="anonymous" />
    </Helmet>
  );
}