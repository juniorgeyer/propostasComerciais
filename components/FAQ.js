const FAQItem = ({ title, items }) => {
  return (
    <div className="p-5 mt-5 mb-10 space-y-6 border shadow-md rounded-2xl">
      <h1 className="text-xl font-bold text-center text-teal-600 dark:text-teal-300 md:text-2xl sm:text-left">
        {title}
      </h1>
      <ul className="font-normal text-gray-500 dark:text-gray-400 text-md">
        {items.map((item, idx) => (
          <li key={idx} className="flex mb-1 space-x-3">
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
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default function FAQ({ faqItems }) {
  return (
    <section id="faq" className="py-12">
      <div className="max-w-xl px-4 py-12 mx-auto sm:px-6 lg:max-w-6xl lg:px-8">
        <h1 className="mb-8 text-2xl font-bold tracking-normal text-center text-gray-800 md:leading-tight md:tracking-normal dark:text-gray-200 md:text-4xl">
          E qual seriam os módulos do seu{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r dark:bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-rose-500 dark:from-indigo-400 dark:via-fuchsia-400 dark:to-rose-400">
            próprio sistema?
          </span>{" "}
        </h1>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {faqItems.map((faq, index) => (
            <FAQItem key={index} title={faq.title} items={faq.items} />
          ))}
        </div>
      </div>
    </section>
  );
}
