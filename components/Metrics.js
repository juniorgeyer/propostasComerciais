import {
  FaBullseye,
  FaRegClock,
  FaCogs,
  FaMoneyBillWave,
  FaSolarPanel,
  FaChartLine,
  FaMoneyCheckAlt,
  FaHandsHelping,
} from "react-icons/fa";

const MetricCard = ({ Icon, title, description }) => {
  return (
    <div className="p-5 mt-5 mb-10 space-y-4 border shadow-md rounded-2xl">
      <div className="flex justify-center">
        <Icon style={{ color: "#000" }} className="w-16 h-16 text-indigo-500" />
      </div>
      <h1 className="text-lg font-bold text-center text-gray-800 dark:text-gray-200">
        {title}
      </h1>
      <p className="text-center text-gray-600 dark:text-gray-400">
        <span
          dangerouslySetInnerHTML={{
            __html: description,
          }}
        />
      </p>
    </div>
  );
};

export default function Metrics() {
  const metrics = [
    {
      Icon: FaChartLine,
      title: "Nosso ROI",
      description:
        "Com um custo médio de <b>R$ 15,00 por depositante</b>, conseguimos trazer bons resultados para sua plataforma.",
    },
    {
      Icon: FaBullseye,
      title: "Tipo de Campanha",
      description:
        "Especialistas em campanhas personalizadas, adequadas para diferentes plataformas e objetivos. <b>A taxa de conversão tem uma média maior que 50%</b>",
    },
    {
      Icon: FaRegClock,
      title: "Nosso Acompanhamento",
      description:
        "Acompanhamento contínuo com relatórios detalhados e ajustes <b>estratégicos a cada HORA</b>. Recebemos relatório de cada campanha a cada 60 minutos e analisamos para ter o melhor resultado. ",
    },
    {
      Icon: FaCogs,
      title: "Automações",
      description:
        "Podemos desenvolver a automação que você precisar para ver seus resultados em tempo real",
    },
  ];

  return (
    <section id="metrics" className="py-12">
      <div className="max-w-7xl px-4 mx-auto sm:px-6 lg:px-8">
        <h1 className="mb-8 text-2xl font-bold tracking-normal text-center text-gray-800 md:leading-tight md:tracking-normal dark:text-gray-200 md:text-4xl">
          Nosso{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-rose-500">
            Diferencial
          </span>{" "}
          de Sucesso
        </h1>
        <p className="max-w-md mx-auto mb-12 text-lg text-gray-600 dark:text-gray-400 md:text-lg text-center">
          Medimos nosso sucesso através de métricas-chave que garantem a
          qualidade e eficácia de nossos serviços.
        </p>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric, index) => (
            <MetricCard
              key={index}
              Icon={metric.Icon}
              title={metric.title}
              description={metric.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
