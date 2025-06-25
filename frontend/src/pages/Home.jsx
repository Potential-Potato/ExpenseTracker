import React from "react";

export default function CloneAditi() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center debug bg-gray-100 px-4">
      <div className="max-w-2xl text-center debug1">
        {/* Header Section */}
        <header className="mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900">
            Hello! My name is Aditi Mohanty.
          </h1>
          <p className="mt-4 text-gray-700 text-lg">
            I’m a designer and developer based in New York, passionate about
            creating digital experiences that blend creativity and usability.
          </p>
          <div className="mt-6 space-x-4">
            <a
              href="#"
              className="inline-block px-6 py-2 border border-gray-900 text-gray-900 rounded hover:bg-gray-900 hover:text-white transition"
            >
              Resume
            </a>
            <a
              href="#"
              className="inline-block px-6 py-2 border border-gray-900 text-gray-900 rounded hover:bg-gray-900 hover:text-white transition"
            >
              GitHub
            </a>
            <a
              href="#"
              className="inline-block px-6 py-2 border border-gray-900 text-gray-900 rounded hover:bg-gray-900 hover:text-white transition"
            >
              Twitter
            </a>
          </div>
        </header>

        {/* Projects Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">
            Latest Projects
          </h2>

          <ul className="space-y-8 text-left">
            <li>
              <h3 className="text-xl font-semibold text-gray-800">
                Project One
              </h3>
              <p className="mt-1 text-gray-600">
                A sleek portfolio site built with React and Tailwind CSS.
              </p>
              <div className="mt-1 space-x-2 text-sm text-gray-500">
                <span>React</span>
                <span>Tailwind CSS</span>
              </div>
            </li>

            <li>
              <h3 className="text-xl font-semibold text-gray-800">
                Project Two
              </h3>
              <p className="mt-1 text-gray-600">
                A blogging platform with markdown support and SEO optimization.
              </p>
              <div className="mt-1 space-x-2 text-sm text-gray-500">
                <span>Next.js</span>
                <span>GraphQL</span>
              </div>
            </li>

            <li>
              <h3 className="text-xl font-semibold text-gray-800">
                Project Three
              </h3>
              <p className="mt-1 text-gray-600">
                An e-commerce site with smooth animations and payment
                integration.
              </p>
              <div className="mt-1 space-x-2 text-sm text-gray-500">
                <span>Node.js</span>
                <span>Stripe</span>
              </div>
            </li>
          </ul>
        </section>

        {/* Footer Section */}
        <footer className="text-center text-gray-600 text-sm">
          <p>
            Built with React and Tailwind CSS. &copy; {new Date().getFullYear()}{" "}
            Aditi Mohanty
          </p>
          <div className="mt-2 space-x-4">
            <a href="#" className="hover:underline">
              GitHub
            </a>
            <a href="#" className="hover:underline">
              Twitter
            </a>
            <a href="#" className="hover:underline">
              LinkedIn
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}
