import Head from 'next/head'
import Image from 'next/image'
import Nav from '../components/Nav';
import { getData } from '../lib/sheets-api';

export async function getStaticProps(context) {
  const data = await getData();

  return {
    props: {
      data,
      revalidate: 5
    },
  };
}

export default function Home({ data }) {
  return (
    <div>
      <Nav />
      <Head>
        <title>CompCon</title>
        <meta name="description" content="NextJS 10 + Tailwind powered by Google Sheets as a CMS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex place-content-center h-full">
        <Image src="/logo.png" width={350} height={350} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data
          .slice(1, data.length - 1) // remove headers
          .map(({ title, description }) => (
            <a
              className="border border-grey-200 rounded p-4 hover:shadow-lg hover:border-transparent"
              key={title}
              target="_blank"
            >
              <h3 className="font-bold mb-2">{title}</h3>
              <div dangerouslySetInnerHTML={{ __html: description }} />
            </a>
          ))}
      </div>
    </div>)
}
