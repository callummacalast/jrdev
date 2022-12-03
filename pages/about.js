import React from 'react';

const about = () => {
  return (
    <>
      <section className="bg-gray-800 text-gray-100">
        <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl text-gray-50">
              About me<span className="text-violet-400">.</span>
            </h2>
          </div>
          <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h3 className="text-2xl font-bold tracking-tight sm:text-3xl text-gray-50">
                Callum Macalast at a glance
              </h3>
              <p className="mt-3 text-lg text-gray-400">
                Website development has always been a passion of mine from, from
                a young age anything and everything tech got me thinking -{' '}
                <span className="italic"> 'How does that work?'</span>.
              </p>
              <div className="mt-12 space-y-12">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md bg-violet-400 text-gray-900">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-7 h-7"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium leading-6 text-gray-50">
                      4+ Years of web development
                    </h4>
                    <p className="mt-2 text-gray-400">
                      I have been building and creating websites for the past 4+
                      years, ranging from various different tech
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md bg-violet-400 text-gray-900">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-7 h-7"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium leading-6 text-gray-50">
                      A keen surfer and skateboarder
                    </h4>
                    <p className="mt-2 text-gray-400">
                      Skateboarding and surfing is a way for me to escape the
                      life of tech and catch some downtime wherever possible!
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md bg-violet-400 text-gray-900">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-7 h-7"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium leading-6 text-gray-50">
                      Travelling
                    </h4>
                    <p className="mt-2 text-gray-400">
                      <span className="italic">
                        'The action or activity of going from one place to
                        another, typically over a distance of some length.' -
                        Google
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div aria-hidden="true" className="mt-10 lg:mt-0">
              <img
                src="/img/me_cal.jpg"
                alt=""
                height="700"
                className="mx-auto rounded-lg shadow-lg bg-gray-500 object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      {/* <section className="bg-gray-800 text-gray-100">
        <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
          <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
            How it works
          </h2>
          <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">
                You get in touch with details of what you're after
              </summary>
              <div className="px-4 pb-4">
                <p>
                  I will then spend some time reviewing what has been sent over,
                  realistically the more you provide the more time it will take
                  me to get back to you, however, the more I will understand
                  what you're after.
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">
                I will provide you with a quote for the project
              </summary>
              <div className="px-4 pb-4">
                <p>
                  You will then spend some time reviewing said quote, i'd
                  imagine, the bigger the quote the longer it will take you to
                  get back in touch.
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">
                If both parties are happy
              </summary>
              <div className="px-4 pb-4 space-y-2">
                <p>
                  We get down to business and you can expect nothing more than a
                  delightful website, easy to use and doing exactly what we
                  agreed on. That's, in a nutshell, 'How it works'!
                </p>
              </div>
            </details>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default about;
