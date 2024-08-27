import { useRouter } from "next/router";
import Link from "next/link";

export default function Footer() {
  const router = useRouter();
  return (
    <footer className="text-black dark:text-gray-300 body-font">
      <div className="container flex flex-col items-center px-10 pb-8 mx-auto border-t border-purple-600 dark:border-purple-300 sm:flex-row">
        <Link href="/">
          <a className="flex items-center justify-center mt-3 text-xl font-medium title-font md:ml-3 md:justify-start">
            MS MEGA SOLAR
          </a>
        </Link>
        <div className="invisible h-5 mt-3 ml-4 border-l border-black md:visible dark:border-gray-300"></div>

        <span className="inline-flex justify-center mt-4 sm:ml-auto sm:mt-3 sm:justify-start display:none">
          <a
            aria-label="instagram"
            className="ml-3"
            href="https://instagram.com/ctech_ds"
          >
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </a>
        </span>
      </div>
    </footer>
  );
}
