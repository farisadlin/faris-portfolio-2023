import Head from "next/head";

const Meta = ({
  title = 'Faris Adlin',
  keywords = `Faris Adlin's Portfolio website`,
  description = `Faris Adlin's Portfolios`,
  currentURL = 'https://faris-portfolio-2023.vercel.app/',
  siteName = 'Faris Adlin',
  urlImg = 'https://res.cloudinary.com/https-farisadlin-com/image/upload/v1683831852/Slideshow/Faris%20Porfolio%20Site/Screenshot_2023-05-12_at_02.03.38_skzzzl.png',
}) => {
  return (
    <Head>
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@shifairs" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={urlImg} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta property="og:url" content={currentURL} key="ogurl" />
      <meta property="og:image" content={urlImg} key="ogimage" />
      <meta property="og:site_name" content={siteName} key="ogsitename" />
      <meta property="og:title" content={title} key="ogtitle" />
      <meta property="og:description" content={description} key="ogdesc" />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>
    </Head>
  );
};

export default Meta;
