"use client";

import { Inter } from "next/font/google";
import "../app/globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-teal-50 px-4">
          <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center border border-primary-100">
            <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-10 h-10 text-red-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-dark-500 mb-4">Something went wrong</h1>
            <p className="text-gray-600 mb-8">
              We apologize for the inconvenience. Our team has been notified and we&apos;re working to fix the issue.
            </p>
            <div className="flex flex-col gap-3">
              <button
                onClick={() => reset()}
                className="btn-primary w-full"
              >
                Try again
              </button>
              <a
                href="/"
                className="text-primary-600 hover:text-primary-700 font-medium transition-colors"
              >
                Return to home
              </a>
            </div>
            {process.env.NODE_ENV === "development" && (
              <div className="mt-8 p-4 bg-gray-50 rounded-lg text-left overflow-auto max-h-40">
                <p className="text-xs font-mono text-gray-500">{error.message}</p>
                {error.digest && (
                  <p className="text-xs font-mono text-gray-400 mt-2">Digest: {error.digest}</p>
                )}
              </div>
            )}
          </div>
        </div>
      </body>
    </html>
  );
}
