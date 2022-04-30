import React from "react";

export default function ArticlePage() {
  const fetchedImgSrc =
    "https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max";
  return (
    <>
      <div className="container">
        <div
          className="bg-fixed rounded-t-lg h-64"
          style={{
            backgroundImage:
              "url(" +
              "https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max" +
              ")",
          }}
        >
          <div className="items-center py-8 lg:px-32 md:px-16 sm:px-8">
            <div className="group pb-5">
              <img
                className="shrink-0 h-12 w-12 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="dp"
              />
              <div className="ltr:ml-3 rtl:mr-3">
                <p className="text-sm font-medium text-slate-300 group-hover:text-white">
                  Priyanshu Dixit
                </p>
                <p className="text-sm font-medium text-white-500 group-hover:text-slate-300">
                  4th year CSE Student
                </p>
              </div>
            </div>
            <div class=" font-bold text-3xl text-black tracking-tight">
              My trip to the summit
            </div>
            <div class="mt-1 font-medium text-sm text-white-500">
              November 16, 2021 · 4 min read
            </div>
          </div>
        </div>
        <div className="bg-black rounded-b-sm py-8">
          <div className="container lg:px-32 md:px-16 py-8">
            <p
              className="first-line:uppercase first-line:tracking-widest
                    first-letter:text-7xl first-letter:font-bold first-letter:text-white text-white
                    first-letter:mr-3 first-letter:float-left leading-loose
                    "
            >
              Well, let me tell you something, funny boy. Y'know that little
              stamp, the one that says "New York Public Library"? Well that may
              not mean anything to you, but that means a lot to me. One whole
              hell of a lot.
            </p>
            <p class="mt-4 leading-7 text-white">
              Maybe we can live without libraries, people like you and me.
              Maybe. Sure, we're too old to change the world, but what about
              that kid, sitting down, opening a book, right now, in a branch at
              the local library and finding drawings of pee-pees and wee-wees on
              the Cat in the Hat and the Five Chinese Brothers? Doesn't HE
              deserve better?
            </p>
            <p class="mt-4 leading-7 text-slate-500">
              What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book. It has survived not only five centuries, but
              also the leap into electronic typesetting, remaining essentially
              unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently
              with desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum. Why do we use it? It is a long
              established fact that a reader will be distracted by the readable
              content of a page when looking at its layout. The point of using
              Lorem Ipsum is that it has a more-or-less normal distribution of
              letters, as opposed to using 'Content here, content here', making
              it look like readable English. Many desktop publishing packages
              and web page editors now use Lorem Ipsum as their default model
              text, and a search for 'lorem ipsum' will uncover many web sites
              still in their infancy. Various versions have evolved over the
              years, sometimes by accident, sometimes on purpose (injected
              humour and the like). Where does it come from? Contrary to popular
              belief, Lorem Ipsum is not simply random text. It has roots in a
              piece of classical Latin literature from 45 BC, making it over
              2000 years old. Richard McClintock, a Latin professor at
              Hampden-Sydney College in Virginia, looked up one of the more
              obscure Latin words, consectetur, from a Lorem Ipsum passage, and
              going through the cites of the word in classical literature,
              discovered the undoubtable source. Lorem Ipsum comes from sections
              1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The
              Extremes of Good and Evil) by Cicero, written in 45 BC. This book
              is a treatise on the theory of ethics, very popular during the
              Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
              amet..", comes from a line in section 1.10.32. The standard chunk
              of Lorem Ipsum used since the 1500s is reproduced below for those
              interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum
              et Malorum" by Cicero are also reproduced in their exact original
              form, accompanied by English versions from the 1914 translation by
              H. Rackham.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
