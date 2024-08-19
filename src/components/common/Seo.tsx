
import { FC } from 'react';
import { Helmet } from 'react-helmet';


interface SeoProps {
  title: string;
  description: string;
  keywords?: string;
}
const Seo: FC<SeoProps> = ({ title, description, keywords }) => {
  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <title>{`${title} || ElFeshawy`}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content={keywords && keywords} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
      </Helmet>
    </div>
  );
};

export default Seo;
