const Feature = ({ text }) => {
  return (
    <li className="flex mb-1 space-x-3">
      <svg
        width="24"
        height="24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-green-500 w-7"
        aria-hidden="true"
      >
        <path d="M20 6L9 17l-5-5" />
      </svg>
      <span className="text-sm text-gray-500 dark:text-gray-400">{text}</span>
    </li>
  );
};

const PricingCard = ({ plan, price, description, features, buttonLabel }) => {
  return (
    <div className="p-5 mt-5 mb-10 space-y-6 border shadow-md rounded-2xl">
      <h1 className="text-xl font-bold text-center text-teal-600 dark:text-teal-300 md:text-2xl sm:text-left">
        {plan}
      </h1>
      <p className="text-gray-600 text-md dark:text-gray-400">{description}</p>
      <div className="mt-8">
        <span className="text-4xl font-extrabold text-gray-900 dark:text-gray-100">
          {price}
        </span>
        <span className="text-base font-medium text-gray-500"></span>
        <a
          href="#"
          className="block w-full py-2 mt-8 text-sm font-semibold text-center text-gray-300 transition duration-300 bg-black rounded-md hover:bg-gray-800 dark:hover:bg-gray-600 dark:text-gray-200 dark:bg-gray-800"
        >
          {buttonLabel}
        </a>
      </div>
      <div className="w-full border border-gray-300 dark:border-gray-500" />
      <h1 className="text-sm font-semibold text-gray-500 uppercase">
        O que está incluído:
      </h1>
      <p className="font-normal text-gray-500 dark:text-gray-400 text-md">
        <ul>
          {features.map((feature, idx) => (
            <Feature key={idx} text={feature} />
          ))}
        </ul>
      </p>
    </div>
  );
};

export default function Pricing({ pricing }) {
  return (
    <section id="pricing" className="py-12">
      <div className="max-w-xl px-4 py-12 mx-auto sm:px-6 lg:max-w-6xl lg:px-8">
        <h1 className="mb-8 text-2xl font-bold tracking-normal text-center text-gray-800 md:leading-tight md:tracking-normal dark:text-gray-200 md:text-4xl">
          E qual seria o{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r dark:bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-rose-500 dark:from-indigo-400 dark:via-fuchsia-400 dark:to-rose-400">
            investimento
          </span>{" "}
          do seu próprio sistema?
        </h1>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {pricing.map((data, index) => (
            <PricingCard
              key={index}
              plan={data.plan}
              price={data.price}
              description={data.description}
              features={data.features}
              buttonLabel={data.buttonLabel}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
