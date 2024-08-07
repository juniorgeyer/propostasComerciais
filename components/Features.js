const Feature = ({ title, items }) => {
  return (
    <div className="p-5 mt-5 mb-10 space-y-6 border shadow-md rounded-2xl">
      <h1 className="text-xl font-bold text-center text-teal-600 dark:text-teal-300 md:text-2xl sm:text-left">
        {title}
      </h1>
      <p className="font-normal text-gray-500 dark:text-gray-400 text-md">
        <ul>
          {items.map((item, idx) => (
            <li key={idx} className="mb-2">
              {item.name}
            </li>
          ))}
        </ul>
      </p>
    </div>
  );
};

export default function Features({ features }) {
  console.log(features);
  return (
    <section id="features" className="py-12">
      <div className="max-w-xl px-4 py-12 mx-auto sm:px-6 lg:max-w-6xl lg:px-8">
        <h1 className="mb-8 text-2xl font-bold tracking-normal text-center text-gray-800 md:leading-tight md:tracking-normal dark:text-gray-200 md:text-4xl">
          Tudo com{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r dark:bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-rose-500 dark:from-indigo-400 dark:via-fuchsia-400 dark:to-rose-400">
            funcionalidades
          </span>{" "}
          avançadas e{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r dark:bg-gradient-to-r from-rose-500 via-fuchsia-500 to-indigo-500 dark:from-rose-400 dark:via-fuchsia-400 dark:to-indigo-400">
            eficientes
          </span>
        </h1>
        <p className="max-w-md mx-auto mb-12 text-lg text-gray-600 dark:text-gray-400 md:text-lg">
          Nosso sistema oferece uma variedade de recursos para atender às suas
          necessidades. Veja abaixo as funcionalidades incluídas.
        </p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {features &&
            features.map((feature, index) => (
              <Feature
                key={index}
                title={feature.title}
                items={feature.items}
              />
            ))}
        </div>
      </div>
    </section>
  );
}
