import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex h-screen items-center justify-center bg-white">
      <div className="text-center">
        <Image
          src="/404.svg"
          alt="Page Not Found"
          width={500}
          height={500}
          className="mx-auto"
        />
        <h1 className="mt-6 text-4xl font-bold text-gray-800 dark:text-gray-200">
          Page Not Found
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <Link
          href="/"
          className="mt-6 inline-block rounded bg-primary px-6 py-3 text-sm font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-white hover:text-black hover:shadow-lg focus:outline-none focus:ring-0"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
