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
      title: "Soluções Financeiras",
      items: [
        {
          name: "Financiamentos personalizados para atender suas necessidades",
        },
        {
          name: "Parcerias com bancos e fundos para viabilizar seu projeto",
        },
        {
          name: "Soluções exclusivas que facilitam a implementação do seu sistema",
        },
      ],
    },
    {
      title: "Garantias Inclusas",
      items: [
        {
          name: "Instalação com garantia de 1 ano",
        },
        {
          name: "Garantia de performance de até 25 anos",
        },
        {
          name: "Microinversores garantidos por até 15 anos",
        },
        {
          name: "Inversores com garantia de até 10 anos",
        },
      ],
    },
    {
      title: "Principais Equipamentos e Serviços Inclusos",
      items: [
        {
          name: "17 Módulos fotovoltaicos TRINA 575W Monofacial",
        },
        {
          name: "1 Inversor SUNGROW 8.0RS-L",
        },
        {
          name: "Componentes e complementos adicionais conforme necessidade",
        },
      ],
    },
    {
      title: "Dimensionamento do Sistema",
      items: [
        {
          name: "Sistema projetado para 1.000 kWh/mês",
        },
        {
          name: "Potência de 977 kWp para atender sua demanda energética",
        },
        {
          name: "Equipamentos dimensionados para máxima eficiência",
        },
      ],
    },
    {
      title: "Cronograma",
      items: [
        {
          name: "Gerenciamos todo o processo, do planejamento à conexão final",
        },
      ],
    },
    
  ];
  

const pricingData = [
  {
    Plan: "Plano Premium",
    Price: 24900.00,
    Description: "Pagamento à vista com opções de financiamento",
    Features: [
      { id: 1, name: "Dimensionamento do sistema, com proposta inicial do projeto" },
      { id: 2, name: "Importação de equipamentos e logística de entrega" },
      { id: 3, name: "Instalação do sistema fotovoltaico e do sistema de monitoramento" },
      { id: 4, name: "Agendamento de vistoria junta à concessionária" },
      { id: 5, name: "Desenvolvimento do projeto de engenharia" },
      { id: 6, name: "Ativação do sistema, comissionamento e testes de performance" },
      { id: 7, name: "Instalação de software de Gestão de balanço energético" },
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
        title={pageData?.title || "MS MEGA SOLAR"}
        description={pageData?.description || "Soluções em energia fotovoltaica."}
        canonical="https://msmegasolar.com.br/"
        openGraph={{
          url: "https://msmegasolar.com.br/",
          title: pageData?.title || "MS MEGA SOLAR",
          description: pageData?.description || "Soluções em energia fotovoltaica.",
          images: [
            {
              url: pageData?.image?.url || "default-image-url",
            },
          ],
          site_name: "MS MEGA SOLAR",
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
              Aqui está a sua proposta{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-rose-500">
                Sistema Fotovoltaico 9,77 kWp
              </span>{" "}
            </h1>
            <img 
              src="/images/logo-MS-SOLAR.png" 
              className="mx-auto mt-6" 
            />
            <p className="max-w-xl pt-5 mx-auto text-lg text-gray-600 dark:text-gray-400 md:text-lg">
              Somos uma empresa especializada no desenvolvimento de soluções de energia fotovoltaica para residências, empresas, indústrias e agronegócios. Nosso compromisso é garantir a produção de energia e oferecer soluções exclusivas de financiamento para implementar seu sistema fotovoltaico.
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
                  <span className="flex justify-center">Entrar em contato</span>
                </a>
              </Link>
              
            </div>
          </div>
        </div>
      </section>
      <Metrics metrics={pageData?.Metrics || null} />
      <Features features={features} />
      <Pricing pricing={pricingData} />
      {/* <FAQ faqItems={pageData?.faqData || faqData} /> */}
      <Footer />
    </div>
  );
}

