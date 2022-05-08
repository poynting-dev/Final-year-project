import React from "react";

export default function NoticePage() {
  return (
    <div className="container">
      <div class="mx-24 block shadow-md sm:rounded-lg">
        <fieldset class="p-3 border border-black">
          <legend>Notices</legend>
          Computer Science & Engineering
        </fieldset>
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="p-4">
                <div class="flex items-center">
                  <input
                    id="checkbox-all-search"
                    type="checkbox"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label for="checkbox-all-search" class="sr-only">
                    checkbox
                  </label>
                </div>
              </th>
              <th scope="col" class="px-6 py-3">
                Product name
              </th>
              <th scope="col" class="px-6 py-3">
                Category
              </th>
              <th scope="col" class="px-6 py-3">
                Published Date
              </th>
              <th scope="col" class="px-6 py-3">
                <span class="sr-only">Download</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="
                        text-black
                        bg-indigo-500
                        hover:text-white
                        transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-600 duration-300
                        text-black
                        bg-indigo-500
                        hover:text-white
                        transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-600 duration-300
                        cursor-pointer"
            >
              <td class="w-4 p-4">
                <div class="flex items-center">
                  <input
                    id="checkbox-table-search-1"
                    type="checkbox"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label for="checkbox-table-search-1" class="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <th
                scope="row"
                class="px-6 py-1 font-medium text-gray-900 dark:text-white whitespace-nowrap "
              >
                <a
                  href="#!"
                  aria-current="true"
                  class="44
                        block
                        px-6
                        py-2
                        
                        w-full
                        rounded-t-md
                        text-black
                    "
                >
                  <details
                    class="open:bg-white dark:open:bg-slate-900 open:ring-1 open:ring-black/5 dark:open:ring-white/10 open:shadow-lg p-6 rounded-lg"
                    close
                  >
                    <summary class="text-sm leading-6 open:text-black dark:text-white font-semibold select-none">
                      Why do they call it Ovaltine?
                    </summary>
                    <div class="mt-3 text-sm leading-6 text-slate-600 dark:text-white">
                      <p>
                        The mug is round. The jar is round. They should call it
                        Roundtine.
                      </p>
                    </div>
                  </details>
                </a>
              </th>
              <td class="px-6 py-4">
                <button
                  type="button"
                  class="text-black bg-white hover:bg-slate-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                  Normal
                </button>
              </td>
              <td class="px-6 py-4">$2999</td>
              <td class="px-6 py-4 text-right">
                <a href="#" class="font-medium text-white hover:underline">
                  Download
                </a>
              </td>
            </tr>
            <tr
              class="
                        text-black
                        bg-indigo-500
                        hover:text-white
                        transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-600 duration-300
                        text-black
                        bg-indigo-500
                        hover:text-white
                        transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-600 duration-300
                        cursor-pointer"
            >
              <td class="w-4 p-4">
                <div class="flex items-center">
                  <input
                    id="checkbox-table-search-1"
                    type="checkbox"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label for="checkbox-table-search-1" class="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <th
                scope="row"
                class="px-6 py-1 font-medium text-gray-900 dark:text-white whitespace-nowrap "
              >
                <a
                  href="#!"
                  aria-current="true"
                  class="44
                        block
                        px-6
                        py-2
                        
                        w-full
                        rounded-t-md
                        text-black
                    "
                >
                  <details
                    class="open:bg-white dark:open:bg-slate-900 open:ring-1 open:ring-black/5 dark:open:ring-white/10 open:shadow-lg p-6 rounded-lg"
                    close
                  >
                    <summary class="text-sm leading-6 open:text-black dark:text-white font-semibold select-none">
                      Why do they call it Ovaltine?
                    </summary>
                    <div class="mt-3 text-sm leading-6 text-slate-600 dark:text-white">
                      <p>
                        The mug is round. The jar is round. They should call it
                        Roundtine.
                      </p>
                    </div>
                  </details>
                </a>
              </th>
              <td class="px-6 py-4">
                <button
                  type="button"
                  class="focus:outline-none text-black bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900"
                >
                  Important
                </button>
              </td>
              <td class="px-6 py-4">$2999</td>
              <td class="px-6 py-4 text-right">
                <a href="#" class="font-medium text-white hover:underline">
                  Downlaod
                </a>
              </td>
            </tr>
            <tr
              class="
                        text-black
                        bg-indigo-500
                        hover:text-white
                        transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-600 duration-300
                        text-black
                        bg-indigo-500
                        hover:text-white
                        transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-600 duration-300
                        cursor-pointer"
            >
              <td class="w-4 p-4">
                <div class="flex items-center">
                  <input
                    id="checkbox-table-search-1"
                    type="checkbox"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label for="checkbox-table-search-1" class="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <th
                scope="row"
                class="px-6 py-1 font-medium text-gray-900 dark:text-white whitespace-nowrap "
              >
                <a
                  href="#!"
                  aria-current="true"
                  class="44
                        block
                        px-6
                        py-2
                        
                        w-full
                        rounded-t-md
                        text-black
                    "
                >
                  <details
                    class="open:bg-white dark:open:bg-slate-900 open:ring-1 open:ring-black/5 dark:open:ring-white/10 open:shadow-lg p-6 rounded-lg"
                    close
                  >
                    <summary class="text-sm leading-6 open:text-black dark:text-white font-semibold select-none">
                      Why do they call it Ovaltine?
                    </summary>
                    <div class="mt-3 text-sm leading-6 text-slate-600 dark:text-white">
                      <p>
                        The mug is round. The jar is round. They should call it
                        Roundtine.
                      </p>
                    </div>
                  </details>
                </a>
              </th>
              <td class="px-6 py-4">
                <button
                  type="button"
                  class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                >
                  Urgent
                </button>
              </td>
              <td class="px-6 py-4">$2999</td>
              <td class="px-6 py-4 text-right">
                <a href="#" class="font-medium text-white hover:underline">
                  Download
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
