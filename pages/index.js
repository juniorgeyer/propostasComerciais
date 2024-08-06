import Head from "next/head";
import { NextSeo } from "next-seo";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Features from "../components/Features";
import Pricing from "../components/Pricing";
import FAQ from "../components/FAQ";
const featureData = [
  {
    title: "Soluções Personalizadas",
    items: [
      "Desenvolvimento sob medida para atender as necessidades específicas do seu negócio.",
      "Consultoria dedicada para entender e solucionar os desafios do seu projeto.",
      "Integração perfeita com sistemas existentes e novas tecnologias.",
    ],
  },
  {
    title: "Tecnologia de Ponta",
    items: [
      "Utilização das mais recentes tecnologias para garantir a máxima eficiência e desempenho.",
      "Implementação de infraestruturas robustas e seguras.",
      "Adoção de melhores práticas de desenvolvimento e segurança.",
    ],
  },
  {
    title: "Suporte Contínuo",
    items: [
      "Suporte técnico especializado disponível 24/7.",
      "Monitoramento proativo e manutenção regular.",
      "Treinamento e capacitação para a sua equipe.",
    ],
  },
  {
    title: "Escalabilidade e Flexibilidade",
    items: [
      "Soluções escaláveis para acompanhar o crescimento do seu negócio.",
      "Flexibilidade para adaptações e melhorias contínuas.",
      "Capacidade de atender desde pequenas empresas até grandes corporações.",
    ],
  },
  {
    title: "Experiência e Expertise",
    items: [
      "Equipe de profissionais experientes e altamente qualificados.",
      "Histórico comprovado de sucesso em projetos diversos.",
      "Parcerias estratégicas com líderes do setor de tecnologia.",
    ],
  },
  {
    title: "Custo-Benefício",
    items: [
      "Planos de pagamento flexíveis e adaptados ao seu orçamento.",
      "Transparência nos custos e nos processos.",
      "Alta qualidade a um preço competitivo.",
    ],
  },
  {
    title: "Inovação Constante",
    items: [
      "Investimento contínuo em pesquisa e desenvolvimento.",
      "Acompanhamento das tendências de mercado e inovações tecnológicas.",
      "Implementação de soluções inovadoras para manter seu negócio à frente.",
    ],
  },
];
const pricingData = [
  {
    plan: "Opção 1: Pagamentos Mensais",
    price: "6x R$ 7.541,65",
    description: "Pagamento parcelado em 6 vezes.",
    features: ["6 Parcelas de R$ 7.541,65"],
    buttonLabel: "Escolher Opção 1",
  },
  {
    plan: "Opção 2: Entrada + Parcelas",
    price: "R$ 45.250,00",
    description: "Pagamento com entrada e parcelas mensais.",
    features: [
      "Entrada: R$ 15.837,50",
      "5 Parcelas de R$ 4.977,50",
      "Finalização: R$ 4.525,00",
    ],
    buttonLabel: "Escolher Opção 2",
  },
  {
    plan: "Opção 3: Pagamento Único",
    price: "R$ 40.000,00",
    description: "Pagamento à vista.",
    features: ["Pagamento total de R$ 40.000,00 à vista."],
    buttonLabel: "Escolher Opção 3",
  },
];

const faqData = [
  {
    title: "Gestão de Matrículas e Controle de Grupos",
    items: ["Cadastro de Alunos", "Formação de Grupos", "Matrículas"],
  },
  {
    title: "Gestão Financeira e Controle de Valores a Receber e Pagar",
    items: [
      "Entidades Financeiras: Cadastro e gerenciamento de Matriz, Franquias e Professores. Definição de taxas de royalties entre Matriz, Franquias e Professores.",
      "Transações Financeiras: Registro de pagamentos recebidos dos alunos. Cálculo automático dos royalties a serem pagos. Registro de comprovantes de transações financeiras. Relatórios de valores a receber e a pagar para cada entidade.",
    ],
  },
  {
    title: "Controle de Leads, Alunos Ativos e Ex-Alunos (CRM Básico)",
    items: ["Cadastro de Leads", "Gestão de Alunos Ativos"],
  },
  {
    title: "Disponibilização de Materiais Didáticos",
    items: [
      "Acesso a Livros (PDF): Upload de materiais didáticos (PDFs) pelos administradores; Acesso controlado aos professores; Acesso controlado aos alunos.",
    ],
  },
  {
    title: "Gestão de Agenda e Aulas dos Professores",
    items: ["Agenda de Aulas e Relatórios de Aulas"],
  },
  {
    title: "Análise Financeira e de Metas",
    items: ["Análise Financeira e Metas e Desempenho Educacional"],
  },
  {
    title: "Geração Automática de Contratos",
    items: ["Contratos com Professores, Alunos e Franquias"],
  },
];

export default function Home() {
  return (
    <div className="bg-white dark:bg-black">
      <NextSeo
        title="Plutonium"
        description="Plutonium – where darkness meets the web."
        canonical="https://plutonium.vercel.app/"
        openGraph={{
          url: "https://plutonium.vercel.app/",
          title: "Plutonium",
          description: "Plutonium – where darkness meets the web.",
          images: [
            {
              url: "blob:https://og-playground.vercel.app/8baff750-c782-4a04-b198-7ee3dd1e1974",
            },
          ],
          site_name: "Plutonium",
        }}
        twitter={{
          handle: "@saurishhh",
          site: "https://plutonium.vercel.app/",
          cardType: "summary_large_image",
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
                Flex English
              </span>
            </h1>
            <p className="max-w-xl pt-5 mx-auto text-lg text-gray-600 dark:text-gray-400 md:text-lg">
              A CTECH é uma empresa de tecnologia que desenvolve soluções para o
              mercado digital. O que você precisar para o seu negócio, nós temos
              a solução.
            </p>
            <div className="mt-6 text-center md:ml-6">
              <a
                className="inline-flex items-center px-5 py-3 text-sm font-medium text-gray-300 transition duration-300 bg-black rounded hover:bg-gray-800 dark:hover:bg-gray-200 dark:text-gray-700 dark:bg-white"
                aria-label="learn more"
                rel="noreferrer"
                href="https://github.com/minor/plutonium/"
              >
                <span className="flex justify-center">Ver proposta</span>
              </a>
              <br className="sm:hidden" />
              <Link href="404">
                <a
                  className="inline-flex items-center px-5 py-3 mt-2 ml-0 text-sm font-medium text-gray-700 transition duration-300 border rounded shadow dark:hover:border-gray-500 hover:shadow-md md:ml-2 dark:text-gray-300"
                  aria-label="learn more"
                >
                  <span className="flex justify-center">Entra em contato</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
        {/* <div
          style={{ backgroundImage: "url(/images/blur.png)" }}
          className="absolute inset-0 w-full h-full bg-bottom bg-no-repeat bg-cover -z-1"
        /> */}
      </section>
      {/* <Sponsors /> */}
      <Features features={featureData} />
      <FAQ faqItems={faqData} />
      <Pricing pricing={pricingData} />
      <Footer />
    </div>
  );
}
