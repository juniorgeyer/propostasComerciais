import Head from "next/head";
import { NextSeo } from "next-seo";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Features from "../../components/Features";
import Pricing from "../../components/PricingSorte";
import FAQ from "../../components/FAQ";
import Metrics from "../../components/Metrics";

const features = [
  {
    title: "Gestão de Campanhas e Públicos Segmentados",
    items: [
      {
        name: "Criação e gestão de campanhas publicitárias em várias plataformas",
      },
      { name: "Segmentação detalhada de públicos-alvo" },
      { name: "Otimização contínua para maximizar ROI" },
    ],
  },
  {
    title: "Análise de Resultados e Relatórios Personalizados",
    items: [
      { name: "Monitoramento em tempo real das campanhas" },
      { name: "Relatórios personalizados de desempenho" },
      { name: "Ajustes estratégicos com base nos resultados" },
    ],
  },
  {
    title: "Acompanhamento e Retargeting de Leads",
    items: [
      { name: "Gestão de leads capturados" },
      { name: "Estratégias de retargeting para maximizar conversões" },
      { name: "Ferramentas de automação de marketing para nutrição de leads" },
    ],
  },
  {
    title:
      "Assessoria na criação de Conteúdo Personalizado e Criativos Atraentes",
    items: [
      { name: "Personalização de anúncios para diferentes públicos" },
      { name: "Acesso a uma equipe especializada em design e copywriting" },
    ],
  },
  {
    title: "Consultoria e Planejamento Estratégico",
    items: [
      { name: "Análise detalhada de mercado e concorrência" },
      { name: "Planejamento estratégico para campanhas de longo prazo" },
      { name: "Consultoria para melhoria contínua das estratégias de tráfego" },
    ],
  },
];

const pricingData = [
  {
    Plan: "Plano Premium",
    Price: 30000,
    Description: "Mais 1.5% de depósito",
    Features: [
      { id: 1, name: "Acompanhamento diário de campanhas" },

      { id: 2, name: "Automação de mensagens" },
      { id: 3, name: "Adaptação de estratégias conforme resultados" },
    ],
    ButtonLabel: "Escolha esse plano",
  },
];

export async function getServerSideProps({ params }) {
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
              {
                "A CTECH é uma empresa especializada em tráfego pago, dedicada a impulsionar resultados no mercado digital. Tudo o que você precisa para aumentar suas conversões e alcançar o sucesso, nós temos a solução."
              }
            </p>
            <div className="mt-6 text-center md:ml-6">
              <a
                className="inline-flex items-center px-5 py-3 text-sm font-medium text-gray-300 transition duration-300 bg-black rounded hover:bg-gray-800 dark:hover:bg-gray-200 dark:text-gray-700 dark:bg-white"
                aria-label="learn more"
                rel="noreferrer"
                href="#features"
              >
                <span href="#footer" className="flex justify-center">
                  Ver proposta
                </span>
              </a>
              <br className="sm:hidden" />
              <Link href="404">
                <a
                  className="inline-flex items-center px-5 py-3 mt-2 ml-0 text-sm font-medium text-gray-700 transition duration-300 border rounded shadow dark:hover:border-gray-500 hover:shadow-md md:ml-2 dark:text-gray-300"
                  aria-label="learn more"
                  href="https://wa.me/5594991006004"
                >
                  <span className="flex justify-center">Entrar em contato</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Metrics metrics={pageData.Metrics || null} />
      <Features features={features} />
      <Pricing pricing={pageData.Plans ? pageData.Plans : pricingData} />
      {/* <FAQ faqItems={pageData?.faqData || faqData} />*/}
      <Footer />
    </div>
  );
}
