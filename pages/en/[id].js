import Head from "next/head";
import { NextSeo } from "next-seo";
import Link from "next/link";
import Header from ".//Header";
import Footer from "./Footer";
import Features from "./Features";
import Pricing from "./PricingSorte";
import FAQ from "../../components/FAQ";

const pageData = {
  title: "CTECH",
  description: "Soluções para o seu dia a dia.",
  image: {
    url: "default-image-url",
  },
  Client: "CTECH",
  subheading:
    "CTECH is a technology company that develops solutions for the digital market. Whatever you need for your business, we have the solution.",

  Features: [
    {
      title: "Real-time reports",
      items: [
        {
          name: "We check results every hour",
        },
        {
          name: "That way we can make decisions quickly and optimize campaigns",
        },
      ],
    },
    {
      title: "Campaigns with client-defined goals",
      items: [
        {
          name: "We work with the client to define the goals. If the goal is registers, if it deposits, we change the campaign to reach the goal.",
        },
      ],
    },
    {
      title: "Kwai",
      items: [
        {
          name: "Average CPA and deposit for Kwai",
        },
      ],
    },
    {
      title: "Google",
      items: [
        {
          name: "Google average CPA and deposit",
        },
      ],
    },
  ],
  Plans: [
    {
      Plan: "Plan 1",
      Price: 40000,
      Description:
        "Plan with a fixed monthly fee of R$40,000.00 + 10% of the NGR (Net Gaming Revenue)",
      Features: [
        {
          name: "Kwai",
        },

        {
          name: "Google Ads",
        },
        {
          name: "Meta (Facebook)",
        },
      ],
      ButtonLabel: "Choose this plan",
    },
    {
      Plan: "Plan 2",
      Price: 40000,
      Description:
        "Plan with a fixed monthly fee of R$40,000.00 + 5% of the amount invested in marketing campaigns",
      Features: [
        {
          name: "Kwai",
        },

        {
          name: "Google Ads",
        },
        {
          name: "Meta (Facebook)",
        },
      ],
      ButtonLabel: "Choose this plan",
    },
    {
      Plan: "Plan 3",
      Price: 40000,
      Description:
        "Plan with a fixed monthly fee of R$40,000.00 + 2.5% of the total deposits made by players",
      Features: [
        {
          name: "Kwai",
        },

        {
          name: "Google Ads",
        },
        {
          name: "Meta (Facebook)",
        },
      ],
      ButtonLabel: "Choose this plan",
    },
  ],
  faqData: [
    {
      question: "Como faço para contratar?",
      answer: "Entre em contato conosco pelo WhatsApp e solicite um orçamento.",
    },
    {
      question: "Quais são as formas de pagamento?",
      answer:
        "Aceitamos cartão de crédito, débito, boleto e transferência bancária.",
    },
  ],
};

export default function Home() {
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
              Here is what we can do for you,
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r dark:bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 dark:from-pink-500 dark:via-purple-400 dark:to-indigo-500">
                {pageData ? pageData.Client : "BRAZINO"}
              </span>
            </h1>
            <p className="max-w-xl pt-5 mx-auto text-lg text-gray-600 dark:text-gray-400 md:text-lg">
              {pageData?.subheading ||
                "CTECH is a technology company that develops solutions for the digital market. Whatever you need for your business, we have the solution."}
            </p>
            <div className="mt-6 text-center md:ml-6">
              <a
                className="inline-flex items-center px-5 py-3 text-sm font-medium text-gray-300 transition duration-300 bg-black rounded hover:bg-gray-800 dark:hover:bg-gray-200 dark:text-gray-700 dark:bg-white"
                aria-label="learn more"
                rel="noreferrer"
                href="#features"
              >
                <span className="flex justify-center">See the plans</span>
              </a>
              <br className="sm:hidden" />
              <Link href="404">
                <a
                  className="inline-flex items-center px-5 py-3 mt-2 ml-0 text-sm font-medium text-gray-700 transition duration-300 border rounded shadow dark:hover:border-gray-500 hover:shadow-md md:ml-2 dark:text-gray-300"
                  aria-label="learn more"
                  href="https://wa.me/5594991006004"
                >
                  <span className="flex justify-center">Get in contact</span>
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
