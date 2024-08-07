import Head from "next/head";
import { NextSeo } from "next-seo";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Features from "../../components/Features";
import Pricing from "../../components/Pricing";
import FAQ from "../../components/FAQ";
export async function getStaticPaths() {
  const res = await fetch(
    "https://cms-sorte-esportiva.herokuapp.com/api/tender-pages?populate=*"
  );
  const data = await res.json();

  const paths = data.data.map((page) => ({
    params: { id: page.attributes.slug.toString() }, // Ensure the slug is a string
  }));

  return {
    paths,
    fallback: false, // Set to 'blocking' or 'true' if you want to enable incremental static generation
  };
}

// Fetch the data for each page
export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://cms-sorte-esportiva.herokuapp.com/api/tender-pages?populate[Plans][populate]=Features&populate[Features][populate]=*&filters[slug][$eq]=${params.id}`
  );
  const data = await res.json();

  const pageData = data.data[0].attributes || null;

  console.log(pageData);

  return {
    props: {
      pageData,
    },
    revalidate: 10, // Revalida a cada 10 segundos, ajuste conforme necessário
  };
}

export default function Home({ pageData }) {
  return (
    <div className="bg-white dark:bg-black">
      <NextSeo
        title={pageData?.title || "CTECH"}
        description={pageData?.description || "Soluções para o seu dia a dia."}
        canonical="https://portalctech.com.br/"
        openGraph={{
          url: "https://portalctech.com.br/",
          title: pageData?.title || "CTECH",
          description:
            pageData?.description || "CTECH - Soluções para o seu dia a dia.",
          images: [
            {
              url: pageData?.image?.url || "default-image-url",
            },
          ],
          site_name: "CTECH",
        }}
      />
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <section className="relative">
        <div className="px-4 pt-10 mx-auto max-w-7xl md:pt-16">
          <div className="w-full pb-5 mx-auto text-center md:w-11/12">
            <h1 className="mb-3 text-5xl font-bold tracking-tight text-gray-900 dark:text-gray-100 md:text-6xl">
              Aqui está a sua proposta
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r dark:bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 dark:from-pink-500 dark:via-purple-400 dark:to-indigo-500">
                {pageData ? pageData.Client : "CTECH"}
              </span>
            </h1>
            <p className="max-w-xl pt-5 mx-auto text-lg text-gray-600 dark:text-gray-400 md:text-lg">
              {pageData?.subheading ||
                "A CTECH é uma empresa de tecnologia que desenvolve soluções para o mercado digital. O que você precisar para o seu negócio, nós temos a solução."}
            </p>
            <div className="mt-6 text-center md:ml-6">
              <a
                className="inline-flex items-center px-5 py-3 text-sm font-medium text-gray-300 transition duration-300 bg-black rounded hover:bg-gray-800 dark:hover:bg-gray-200 dark:text-gray-700 dark:bg-white"
                aria-label="learn more"
                rel="noreferrer"
                href="#features"
              >
                <span className="flex justify-center">Ver proposta</span>
              </a>
              <br className="sm:hidden" />
              <Link href="404">
                <a
                  className="inline-flex items-center px-5 py-3 mt-2 ml-0 text-sm font-medium text-gray-700 transition duration-300 border rounded shadow dark:hover:border-gray-500 hover:shadow-md md:ml-2 dark:text-gray-300"
                  aria-label="learn more"
                  href="https://wa.me/5594991006004"
                >
                  <span className="flex justify-center">Entra em contato</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Features features={pageData.Features || null} />
      <Pricing pricing={pageData.Plans || null} />
      {/* <FAQ faqItems={pageData?.faqData || faqData} />*/}
      <Footer />
    </div>
  );
}
