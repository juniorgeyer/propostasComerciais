import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <>
      <NextSeo
        title="Plutonium"
        description="Plutonium – where darkness meets the web."
        canonical="https://plutonium.saurish.com/"
        openGraph={{
          url: "https://plutionium.saurish.com/",
        }}
      />
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <script
          async
          defer
          src="https://aurora.saurish.com/aurora.js"
          aurora-id="b46b1e570b88922ca7304cfcdb6127b9"
        ></script>
      </Head>
      <Header />
      <section className="relative">
        <div className="px-4 pt-10 mx-auto max-w-7xl md:pt-16">
          <div className="w-full pb-5 mx-auto text-center md:w-11/12">
            <h1 className="mb-3 text-5xl font-bold tracking-tight text-gray-900 dark:text-gray-100 md:text-6xl">
              Bringing darkness
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r dark:bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 dark:from-pink-500 dark:via-purple-400 dark:to-indigo-500">
                straight to the web.
              </span>
            </h1>
            <p className="max-w-xl pt-5 mx-auto text-lg text-gray-600 dark:text-gray-400 md:text-lg">
              Plutonium is a Next.js template styled with TailwindCSS. It boasts
              built-in dark-mode support, configured Next-SEO for the best SEO
              optimizations, and clean, organized, easy-to-edit code.
            </p>
            <div className="mt-6 ml-6 text-center">
              <a
                className="inline-flex items-center px-5 py-3 text-sm font-medium text-gray-300 transition duration-300 bg-black rounded hover:bg-gray-800 dark:hover:bg-gray-200 dark:text-gray-700 dark:bg-white"
                aria-label="learn more"
                href="https://github.com/minor/plutonium/"
              >
                <span className="flex justify-center">Learn More</span>
              </a>
              <br className="sm:hidden" />
              <a
                className="inline-flex items-center px-5 py-3 mt-2 ml-0 text-sm font-medium text-gray-700 transition duration-300 border rounded shadow dark:hover:border-gray-500 hover:shadow-md md:ml-2 dark:text-gray-300"
                aria-label="learn more"
                href="#"
              >
                <span className="flex justify-center">See a Demo</span>
              </a>
            </div>
          </div>
          <div className="relative w-full py-10 mx-auto text-center md:py-32 md:my-12 md:w-10/12">
            <div className="relative z-10">
              <a target="_blank" href="https://unsplash.com/photos/e9TrFZZ72DQ">
                <img
                  className="transition duration-700 shadow-xl rounded-xl ring-1 ring-black ring-opacity-5 hover:transform hover:scale-105"
                  src="/images/placeholder.webp"
                  alt="Placeholder Image"
                />
              </a>
            </div>
            <p className="z-10 my-8 text-sm font-medium text-gray-500">
              Maybe we're bringing brightness too?
            </p>
          </div>
        </div>
        <div
          style={{ backgroundImage: "url(/images/blur.png)" }}
          className="absolute inset-0 w-full h-full bg-bottom bg-no-repeat bg-cover -z-1"
        />
      </section>
      <section className="pb-10" id="sponsors">
        <div className="px-4 pb-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <h1 className="mb-16 text-2xl font-bold tracking-tight tracking-normal text-center text-gray-800 md:leading-tight md:tracking-normal dark:text-gray-200 md:text-4xl">
            Sponsored by forward-thinking companies.
          </h1>
          <div className="grid grid-cols-2 gap-8 mt-6 md:grid-cols-4">
            <div className="flex justify-center col-span-1 md:col-span-2 lg:col-span-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="800"
                width="1200"
                version="1.0"
                className="mt-6 text-gray-400 transition duration-300 fill-current h-14 filter grayscale hover:grayscale-0"
                viewBox="-150 -75.3385 1300 452.031"
              >
                <path
                  d="M620.38 235.668c-58.111 42.833-142.34 65.686-214.86 65.686-101.685 0-193.227-37.61-262.483-100.161-5.44-4.92-.565-11.623 5.964-7.792 74.74 43.486 167.153 69.647 262.613 69.647 64.38 0 135.202-13.32 200.322-40.961 9.837-4.179 18.064 6.442 8.444 13.581"
                  fill="#f90"
                  fillRule="evenodd"
                />
                <path
                  d="M644.54 208.027c-7.4-9.49-49.102-4.484-67.82-2.264-5.702.697-6.572-4.266-1.436-7.835 33.213-23.375 87.712-16.628 94.067-8.793 6.355 7.879-1.654 62.508-32.865 88.582-4.788 4.005-9.359 1.872-7.226-3.439 7.009-17.498 22.723-56.718 15.28-66.251"
                  fill="#f90"
                  fillRule="evenodd"
                />
                <path
                  d="M578.026 32.908V10.186c0-3.439 2.612-5.746 5.746-5.746H685.5c3.265 0 5.877 2.35 5.877 5.746v19.457c-.044 3.265-2.786 7.531-7.661 14.278l-52.714 75.262c19.588-.478 40.264 2.438 58.024 12.45 4.005 2.263 5.093 5.572 5.398 8.836v24.246c0 3.308-3.657 7.182-7.487 5.18-31.298-16.41-72.868-18.195-107.474.174-3.526 1.916-7.226-1.915-7.226-5.223v-23.027c0-3.7.043-10.012 3.743-15.627l61.072-87.581h-53.15c-3.264 0-5.876-2.307-5.876-5.703M206.939 174.683h-30.95c-2.96-.217-5.31-2.437-5.528-5.267V10.578c0-3.178 2.655-5.703 5.963-5.703h28.86c3.004.13 5.398 2.438 5.616 5.31V30.95h.566c7.53-20.067 21.677-29.425 40.743-29.425 19.37 0 31.472 9.358 40.178 29.425 7.487-20.067 24.507-29.425 42.746-29.425 12.971 0 27.162 5.354 35.824 17.368 9.794 13.363 7.792 32.777 7.792 49.797l-.044 100.248c0 3.178-2.655 5.746-5.963 5.746h-30.906c-3.09-.217-5.572-2.698-5.572-5.746V84.752c0-6.704.61-23.42-.87-29.774-2.307-10.665-9.228-13.669-18.196-13.669-7.487 0-15.322 5.006-18.5 13.016-3.177 8.01-2.872 21.416-2.872 30.427v84.185c0 3.178-2.656 5.746-5.964 5.746h-30.906c-3.134-.217-5.572-2.698-5.572-5.746l-.043-84.185c0-17.717 2.916-43.79-19.066-43.79-22.243 0-21.373 25.42-21.373 43.79v84.185c0 3.178-2.655 5.746-5.963 5.746M778.958 1.524c45.923 0 70.779 39.437 70.779 89.583 0 48.448-27.467 86.885-70.78 86.885-45.096 0-69.646-39.438-69.646-88.583 0-49.449 24.855-87.885 69.647-87.885m.261 32.429c-22.81 0-24.246 31.08-24.246 50.45 0 19.415-.304 60.854 23.985 60.854 23.985 0 25.116-33.43 25.116-53.802 0-13.407-.566-29.426-4.614-42.136-3.482-11.057-10.403-15.366-20.24-15.366m130.065 140.73h-30.819c-3.09-.217-5.572-2.698-5.572-5.746l-.043-158.882c.26-2.916 2.83-5.18 5.963-5.18H907.5c2.699.13 4.919 1.96 5.528 4.44v24.29h.566c8.663-21.721 20.807-32.081 42.18-32.081 13.886 0 27.424 5.005 36.13 18.717C1000 32.951 1000 54.325 1000 69.691v99.986c-.348 2.786-2.916 5.006-5.963 5.006H963c-2.83-.217-5.18-2.307-5.485-5.006V83.402c0-17.368 2.003-42.79-19.37-42.79-7.53 0-14.452 5.05-17.89 12.711-4.354 9.708-4.92 19.371-4.92 30.08v85.534c-.043 3.178-2.742 5.746-6.05 5.746M496.931 98.812c0 12.057.305 22.113-5.79 32.82-4.918 8.707-12.753 14.06-21.416 14.06-11.883 0-18.848-9.053-18.848-22.417 0-26.379 23.637-31.167 46.054-31.167v6.704m31.21 75.436c-2.045 1.828-5.005 1.959-7.312.74-10.273-8.532-12.145-12.493-17.76-20.633-16.977 17.325-29.034 22.505-51.017 22.505-26.074 0-46.315-16.063-46.315-48.23 0-25.117 13.581-42.224 32.995-50.582 16.803-7.4 40.265-8.706 58.2-10.752v-4.004c0-7.357.565-16.063-3.788-22.418-3.743-5.702-10.97-8.053-17.368-8.053-11.797 0-22.287 6.05-24.855 18.587-.523 2.786-2.569 5.528-5.398 5.659l-29.992-3.221c-2.524-.566-5.354-2.612-4.614-6.486C417.795 10.97 450.703 0 480.13 0c15.061 0 34.736 4.005 46.62 15.41 15.06 14.06 13.624 32.82 13.624 53.236v48.23c0 14.496 6.008 20.85 11.666 28.686 1.96 2.786 2.394 6.138-.13 8.227-6.312 5.267-17.543 15.061-23.724 20.546l-.043-.087M91.194 98.812c0 12.057.305 22.113-5.79 32.82-4.918 8.707-12.71 14.06-21.416 14.06-11.883 0-18.805-9.053-18.805-22.417 0-26.379 23.637-31.167 46.011-31.167v6.704m31.21 75.436c-2.045 1.828-5.005 1.959-7.312.74-10.273-8.532-12.102-12.493-17.76-20.633-16.977 17.325-28.99 22.505-51.017 22.505C20.285 176.86 0 160.797 0 128.63c0-25.117 13.625-42.224 32.995-50.582 16.803-7.4 40.265-8.706 58.199-10.752v-4.004c0-7.357.566-16.063-3.744-22.418-3.787-5.702-11.012-8.053-17.368-8.053-11.796 0-22.33 6.05-24.899 18.587-.522 2.786-2.568 5.528-5.354 5.659L9.794 53.846c-2.525-.566-5.31-2.612-4.614-6.486C12.101 10.97 44.966 0 74.392 0c15.06 0 34.736 4.005 46.62 15.41 15.06 14.06 13.624 32.82 13.624 53.236v48.23c0 14.496 6.007 20.85 11.666 28.686 2.003 2.786 2.438 6.138-.087 8.227-6.312 5.267-17.542 15.061-23.723 20.546l-.087-.087"
                  fillRule="evenodd"
                />
              </svg>
            </div>
            <div className="flex justify-center col-span-1 md:col-span-2 lg:col-span-1">
              <img
                className="h-24 transition duration-300 filter grayscale hover:grayscale-0"
                src="/logos/google.svg"
                alt="Google"
              />
            </div>
            <div className="flex justify-center col-span-1 md:col-span-2 lg:col-span-1">
              <img
                className="h-24 transition duration-300 filter grayscale hover:grayscale-0"
                src="/logos/intel.svg"
                alt="Intel"
              />
            </div>
            <div className="flex justify-center col-span-1 md:col-span-2 lg:col-span-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="800"
                width="1200"
                className="h-24 text-gray-400 transition duration-300 fill-current filter grayscale hover:grayscale-0"
                viewBox="-150 -296.79925 1300 1780.7955"
              >
                <path d="M979.042 925.187c-17.954 41.478-39.206 79.657-63.828 114.76-33.563 47.852-61.044 80.975-82.222 99.37-32.83 30.191-68.006 45.654-105.672 46.533-27.041 0-59.652-7.695-97.611-23.304-38.085-15.535-73.084-23.23-105.086-23.23-33.563 0-69.56 7.695-108.061 23.23-38.561 15.61-69.625 23.744-93.376 24.55-36.12 1.539-72.123-14.364-108.06-47.78-22.938-20.006-51.627-54.302-85.997-102.887-36.875-51.884-67.191-112.048-90.942-180.64C12.751 781.703 0 709.96 0 640.504c0-79.562 17.192-148.183 51.627-205.687 27.063-46.189 63.066-82.625 108.127-109.372 45.06-26.748 93.749-40.379 146.182-41.25 28.69 0 66.312 8.874 113.066 26.315 46.622 17.5 76.557 26.374 89.682 26.374 9.812 0 43.068-10.377 99.443-31.064 53.313-19.185 98.307-27.13 135.168-24 99.883 8.061 174.923 47.435 224.828 118.372-89.33 54.126-133.52 129.935-132.64 227.187.806 75.751 28.287 138.788 82.295 188.84 24.476 23.23 51.81 41.184 82.222 53.935-6.595 19.126-13.557 37.447-20.958 55.034zM749.964 23.751c0 59.373-21.692 114.81-64.928 166.122-52.176 61-115.286 96.248-183.724 90.686a184.836 184.836 0 01-1.378-22.498c0-56.998 24.813-117.998 68.878-167.873 21.999-25.253 49.978-46.25 83.907-63 33.856-16.5 65.88-25.625 95.999-27.188.88 7.937 1.246 15.875 1.246 23.75z" />
              </svg>
            </div>
          </div>
        </div>
      </section>
      <section id="features" className="py-12">
        <div className="max-w-xl px-4 py-12 mx-auto sm:px-6 lg:max-w-6xl lg:px-8">
          <h1 className="mb-8 text-2xl font-bold tracking-tight tracking-normal text-center text-gray-800 md:leading-tight md:tracking-normal dark:text-gray-200 md:text-4xl">
            Supporting the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r dark:bg-gradient-to-r from-rose-500 via-fuchsia-500 to-indigo-500 dark:from-rose-400 dark:via-fuchsia-400 dark:to-indigo-400">
              finest
            </span>{" "}
            and{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r dark:bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-rose-500 dark:from-indigo-400 dark:via-fuchsia-400 dark:to-rose-400">
              richest
            </span>{" "}
            features.
          </h1>
          <p className="max-w-md mx-auto mb-10 text-lg text-gray-600 dark:text-gray-400 md:text-lg">
            We're introducing a new wave of template designs that sky-rocket the
            interaction between users and <b>your</b> app.
          </p>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="mb-10 space-y-6">
              <h1 className="text-xl font-bold text-center text-rose-600 dark:text-rose-300 md:text-2xl sm:text-left">
                Next.js 11
              </h1>
              <div className="h-auto">
                <a
                  href="https://unsplash.com/photos/ymVslcVAzg8"
                  target="_blank"
                >
                  <img
                    className="transition duration-700 rounded shadow-2xl h-80 hover:shadow-3xl md:hover:transform md:hover:scale-105"
                    src="/images/placeholder-2.webp"
                    alt="Plcaeholder for Next.js"
                  />
                </a>
              </div>
              <p className="mx-2 font-normal text-gray-500 dark:text-gray-400 text-md">
                <ul className="mr-0 md:mr-10">
                  <li className="mb-2">
                    <span className="font-semibold">Conformance</span>: A system
                    that provides carefully crafted solutions to support optimal
                    UX.
                  </li>
                  <li className="mb-2">
                    <span className="font-semibold">Improved Performance</span>:
                    Further optimizations to improve cold startup time so you
                    can start coding faster.
                  </li>
                  <li className="mb-2">
                    <span className="text-purple-500 dark:text-purple-400 px-1 py-0.75 border border-gray-200 dark:border-gray-800 rounded-md bg-gray-100 dark:bg-gray-900">
                      `next/script`
                    </span>{" "}
                    updates
                  </li>
                  <li className="mb-2">
                    <span className="text-purple-500 dark:text-purple-400 px-1 py-0.75 border border-gray-200 dark:border-gray-800 rounded-md bg-gray-100 dark:bg-gray-900">
                      `next/image`
                    </span>{" "}
                    updates
                  </li>
                </ul>
              </p>
            </div>
            <div className="mb-10 space-y-6">
              <h1 className="text-xl font-bold text-center text-rose-600 dark:text-rose-300 md:text-2xl sm:text-left">
                TailwindCSS JIT
              </h1>
              <div className="h-auto">
                <a
                  href="https://unsplash.com/photos/qOEiV-8w-MQ"
                  target="_blank"
                >
                  <img
                    className="transition duration-700 rounded shadow-2xl h-80 hover:shadow-3xl md:hover:transform md:hover:scale-105"
                    src="/images/placeholder-3.webp"
                    alt="Plcaeholder for TailwindCSS JIT"
                  />
                </a>
              </div>
              <p className="mx-2 font-normal text-gray-500 dark:text-gray-400 text-md">
                <ul className="mr-0 md:mr-10">
                  <li className="mb-2">
                    <span className="font-semibold">Just-in-Time Mode</span>: A
                    faster, more powerful, on-demand engine for Tailwind CSS
                    v2.1+.
                  </li>
                  <li className="mb-2">
                    <span className="font-semibold">
                      Lightning fast build times
                    </span>
                  </li>
                  <li className="mb-2">
                    <span className="font-semibold">
                      Identical CSS in development and production
                    </span>
                  </li>
                  <li className="mb-2">
                    <span className="font-semibold">
                      Better browser performance in development
                    </span>
                  </li>
                  <li className="mb-2">
                    <span className="text-purple-500 dark:text-purple-400 px-1 py-0.75 border border-gray-200 dark:border-gray-800 rounded-md bg-gray-100 dark:bg-gray-900">
                      `mode: 'jit'`
                    </span>
                  </li>
                </ul>
              </p>
            </div>
            <div className="mb-10 space-y-6">
              <h1 className="text-xl font-bold text-center text-rose-600 dark:text-rose-300 md:text-2xl sm:text-left">
                Dark Mode
              </h1>
              <div className="h-auto">
                <a
                  href="https://unsplash.com/photos/p7o0qrl8hv8"
                  target="_blank"
                >
                  <img
                    className="transition duration-700 rounded shadow-2xl h-80 hover:shadow-3xl md:hover:transform md:hover:scale-105"
                    src="/images/placeholder-4.webp"
                    alt="Plcaeholder for Dark Mode"
                  />
                </a>
              </div>
              <p className="mx-2 font-normal text-gray-500 dark:text-gray-400 text-md">
                <ul className="mr-0 md:mr-10">
                  <li className="mb-2">
                    <a
                      href="https://github.com/pacocoursey/next-themes"
                      target="_blank"
                      className="font-semibold"
                    >
                      next-themes
                    </a>
                    : An abstraction for themes in your Next.js app.
                  </li>
                  <li className="mb-2">
                    <span className="font-semibold">System settings</span>: Uses
                    system settings to activate dark mode/light mode.
                  </li>
                  <li className="mb-2">
                    <span className="font-semibold">No flash</span>: No flash on
                    switching themes or load in both SSG and SSR.
                  </li>
                  <li className="mb-2">
                    <span className="text-purple-500 dark:text-purple-400 px-1 py-0.75 border border-gray-200 dark:border-gray-800 rounded-md bg-gray-100 dark:bg-gray-900">
                      `useTheme`
                    </span>{" "}
                    hook
                  </li>
                </ul>
              </p>
            </div>
            <div className="mb-10 space-y-6">
              <h1 className="text-xl font-bold text-center text-rose-600 dark:text-rose-300 md:text-2xl sm:text-left">
                Next-SEO
              </h1>
              <div className="h-auto">
                <a
                  href="https://unsplash.com/photos/_CrD1UmfWqc"
                  target="_blank"
                >
                  <img
                    className="transition duration-700 rounded shadow-2xl h-80 hover:shadow-3xl md:hover:transform md:hover:scale-105"
                    src="/images/placeholder-5.webp"
                    alt="Plcaeholder for Next-SEO"
                  />
                </a>
              </div>
              <p className="mx-2 font-normal text-gray-500 dark:text-gray-400 text-md">
                <ul className="mr-0 md:mr-10">
                  <li className="mb-2">
                    <a
                      href="https://github.com/garmeeh/next-seo"
                      target="_blank"
                      className="font-semibold"
                    >
                      next-seo
                    </a>
                    : A plugin that makes managing your SEO easier in Next.js
                    projects.
                  </li>
                  <li className="mb-2">
                    <span className="font-semibold">Renders to head</span>: All
                    props passed into{" "}
                    <span className="text-purple-500 dark:text-purple-400 px-1 py-0.75 border border-gray-200 dark:border-gray-800 rounded-md bg-gray-100 dark:bg-gray-900">
                      `next-seo`
                    </span>{" "}
                    will render tags into the{" "}
                    <span className="text-purple-500 dark:text-purple-400 px-1 py-0.75 border border-gray-200 dark:border-gray-800 rounded-md bg-gray-100 dark:bg-gray-900">
                      {"`<head>`"}
                    </span>{" "}
                  </li>
                  <li className="mb-2">
                    <span className="font-semibold">Bare minimum</span>:
                    Next-SEO should at least have access to a description & a
                    title.
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="features" className="py-12">
        <div className="max-w-xl px-4 py-12 mx-auto sm:px-6 lg:max-w-6xl lg:px-8">
          <h1 className="mb-8 text-2xl font-bold tracking-tight tracking-normal text-center text-gray-800 md:leading-tight md:tracking-normal dark:text-gray-200 md:text-4xl">
            All with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r dark:bg-gradient-to-r from-rose-500 via-fuchsia-500 to-indigo-500 dark:from-rose-400 dark:via-fuchsia-400 dark:to-indigo-400">
              affordable
            </span>{" "}
            pricing.
          </h1>
          <p className="max-w-md mx-auto mb-8 text-lg text-gray-600 dark:text-gray-400 md:text-lg">
            Plutonium is a <b>free</b> template to kickstart your app, business,
            or portfolio. We don't take a single penny.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
}
