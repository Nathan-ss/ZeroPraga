import "./index.css";

const Home = () => {
  return (
    <main className="w-full">
      <section className="juice3 bg-gray-100 bg-opacity-90 ">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row">
          <div className="juice relative lg:w-2/3 rounded-xl bg-secondary-lite bg-cover p-8 md:p-16">
            <p className="max-w-sm text-secondary text-3xl md:text-4xl font-semibold">Active Summer With Juice Milk 300ml</p>
            <p className="max-w-xs pr-10 text-secondary font-semibold mt-8">New arrivals with naturre fruits, juice milks, essential for summer</p>
            <button className="mt-20 bg-white font-semibold px-8 py-2 rounded">Shop Now</button>
            <div className="absolute bottom-8 right-8 md:bottom-5 md:right-5 flex">
              <a className="h-6 w-6 flex items-center justify-center rounded-md bg-white">
                <svg
                  className="h-3 text-gray-700 svg-inline--fa fa-chevron-left fa-w-8 fa-3x"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="far"
                  data-icon="chevron-left"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 512"
                >
                  <path
                    fill="currentColor"
                    d="M231.293 473.899l19.799-19.799c4.686-4.686 4.686-12.284 0-16.971L70.393 256 251.092 74.87c4.686-4.686 4.686-12.284 0-16.971L231.293 38.1c-4.686-4.686-12.284-4.686-16.971 0L4.908 247.515c-4.686 4.686-4.686 12.284 0 16.971L214.322 473.9c4.687 4.686 12.285 4.686 16.971-.001z"
                  ></path>
                </svg>
              </a>
              <a className="ml-1.5 h-6 w-6 flex items-center justify-center rounded-md bg-emerald-500">
                <svg
                  className="h-3 text-gray-700 svg-inline--fa fa-chevron-right fa-w-8 fa-3x"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="far"
                  data-icon="chevron-right"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 512"
                >
                  <path
                    fill="currentColor"
                    d="M24.707 38.101L4.908 57.899c-4.686 4.686-4.686 12.284 0 16.971L185.607 256 4.908 437.13c-4.686 4.686-4.686 12.284 0 16.971L24.707 473.9c4.686 4.686 12.284 4.686 16.971 0l209.414-209.414c4.686-4.686 4.686-12.284 0-16.971L41.678 38.101c-4.687-4.687-12.285-4.687-16.971 0z"
                  ></path>
                </svg>
              </a>
            </div>
          </div>

          <div className="juice2 mt-6 lg:mt-0 lg:ml-6 lg:w-1/3 rounded-xl bg-primary-lite bg-cover p-8 md:p-16">
            <div className="max-w-sm">
              <p className="text-3xl md:text-4xl font-semibold uppercase">20% sale off</p>
              <p className="mt-8 font-semibold">
                Syncthetic seeds
                <br />
                2.0 OZ
              </p>
              <button className="mt-20 bg-white font-semibold px-8 py-2 rounded">Shop Now</button>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto pt-12 bg-white">
        <div className="relative flex items-end font-bold">
          <h2 className="text-2xl">Browse by Category</h2>
          <a className="ml-10 flex items-center text-gray-400">
            <span className="text-sm">All Categories</span>
            <svg
              className="ml-3 h-3.5 svg-inline--fa fa-chevron-right fa-w-8 fa-9x"
              aria-hidden="true"
              focusable="false"
              data-prefix="far"
              data-icon="chevron-right"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 512"
            >
              <path
                fill="currentColor"
                d="M24.707 38.101L4.908 57.899c-4.686 4.686-4.686 12.284 0 16.971L185.607 256 4.908 437.13c-4.686 4.686-4.686 12.284 0 16.971L24.707 473.9c4.686 4.686 12.284 4.686 16.971 0l209.414-209.414c4.686-4.686 4.686-12.284 0-16.971L41.678 38.101c-4.687-4.687-12.285-4.687-16.971 0z"
              ></path>
            </svg>
          </a>
          <div className="ml-auto flex">
            <a className="h-6 w-6 flex items-center justify-center rounded-md bg-gray-100">
              <svg
                className="h-3 text-gray-700 svg-inline--fa fa-chevron-left fa-w-8 fa-3x"
                aria-hidden="true"
                focusable="false"
                data-prefix="far"
                data-icon="chevron-left"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 512"
              >
                <path
                  fill="currentColor"
                  d="M231.293 473.899l19.799-19.799c4.686-4.686 4.686-12.284 0-16.971L70.393 256 251.092 74.87c4.686-4.686 4.686-12.284 0-16.971L231.293 38.1c-4.686-4.686-12.284-4.686-16.971 0L4.908 247.515c-4.686 4.686-4.686 12.284 0 16.971L214.322 473.9c4.687 4.686 12.285 4.686 16.971-.001z"
                ></path>
              </svg>
            </a>
            <a className="ml-1.5 h-6 w-6 flex items-center justify-center rounded-md bg-emerald-500 svg-inline--fa fa-chevron-right fa-w-8 fa-3x">
              <svg className="h-3 text-gray-700" aria-hidden="true" focusable="false" data-prefix="far" data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                <path
                  fill="currentColor"
                  d="M24.707 38.101L4.908 57.899c-4.686 4.686-4.686 12.284 0 16.971L185.607 256 4.908 437.13c-4.686 4.686-4.686 12.284 0 16.971L24.707 473.9c4.686 4.686 12.284 4.686 16.971 0l209.414-209.414c4.686-4.686 4.686-12.284 0-16.971L41.678 38.101c-4.687-4.687-12.285-4.687-16.971 0z"
                ></path>
              </svg>
            </a>
          </div>
        </div>

        <div className="mt-10">
          <ul className="-m-3.5 flex">
            <li className="m-3.5 h-52 w-40 bg-gray-100 rounded-xl flex flex-col items-center justify-center text-center duration-300 hover:bg-white hover:shadow-2xl">
              <img className="max-h-20" src="https://i.ibb.co/Smq7sZK/2021-11-07-13h26-50.png" alt="" />
              <span className="font-semibold">Fruits & Vegetables</span>
            </li>
            <li className="m-3.5 h-52 w-40 bg-gray-100 rounded-xl flex flex-col items-center justify-center text-center duration-300 hover:bg-white hover:shadow-2xl">
              <img className="max-h-20" src="https://i.ibb.co/PwYJkQs/2021-11-07-13h39-41.png" alt="" />
              <span className="font-semibold">Breads & Sweets</span>
            </li>
            <li className="m-3.5 h-52 w-40 bg-gray-100 rounded-xl flex flex-col items-center justify-center text-center duration-300 hover:bg-white hover:shadow-2xl">
              <img className="max-h-20" src="https://i.ibb.co/Hx3vbFx/2021-11-07-13h39-52.png" alt="" />
              <span className="font-semibold">Frozen Seafoods</span>
            </li>
            <li className="m-3.5 h-52 w-40 bg-gray-100 rounded-xl flex flex-col items-center justify-center text-center duration-300 hover:bg-white hover:shadow-2xl">
              <img className="max-h-20" src="https://i.ibb.co/4PCjhsS/2021-11-07-13h40-02.png" alt="" />
              <span className="font-semibold">Raw Meats</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="container mx-auto pt-12">
        <div className="relative flex items-end font-bold">
          <h2 className="text-2xl">Featured Brands</h2>
          <a className="ml-10 flex items-center text-gray-400">
            <span className="text-sm">All Offers</span>
            <svg
              className="ml-3 h-3.5 svg-inline--fa fa-chevron-right fa-w-8 fa-9x"
              aria-hidden="true"
              focusable="false"
              data-prefix="far"
              data-icon="chevron-right"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 512"
            >
              <path
                fill="currentColor"
                d="M24.707 38.101L4.908 57.899c-4.686 4.686-4.686 12.284 0 16.971L185.607 256 4.908 437.13c-4.686 4.686-4.686 12.284 0 16.971L24.707 473.9c4.686 4.686 12.284 4.686 16.971 0l209.414-209.414c4.686-4.686 4.686-12.284 0-16.971L41.678 38.101c-4.687-4.687-12.285-4.687-16.971 0z"
              ></path>
            </svg>
          </a>
          <div className="ml-auto flex">
            <a className="h-6 w-6 flex items-center justify-center rounded-md bg-gray-100">
              <svg
                className="h-3 text-gray-700 svg-inline--fa fa-chevron-left fa-w-8 fa-3x"
                aria-hidden="true"
                focusable="false"
                data-prefix="far"
                data-icon="chevron-left"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 512"
              >
                <path
                  fill="currentColor"
                  d="M231.293 473.899l19.799-19.799c4.686-4.686 4.686-12.284 0-16.971L70.393 256 251.092 74.87c4.686-4.686 4.686-12.284 0-16.971L231.293 38.1c-4.686-4.686-12.284-4.686-16.971 0L4.908 247.515c-4.686 4.686-4.686 12.284 0 16.971L214.322 473.9c4.687 4.686 12.285 4.686 16.971-.001z"
                ></path>
              </svg>
            </a>
            <a className="ml-1.5 h-6 w-6 flex items-center justify-center rounded-md bg-gray-100 ">
              <svg
                className="h-3 text-gray-700 svg-inline--fa fa-chevron-right fa-w-8 fa-3x"
                aria-hidden="true"
                focusable="false"
                data-prefix="far"
                data-icon="chevron-right"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 512"
              >
                <path
                  fill="currentColor"
                  d="M24.707 38.101L4.908 57.899c-4.686 4.686-4.686 12.284 0 16.971L185.607 256 4.908 437.13c-4.686 4.686-4.686 12.284 0 16.971L24.707 473.9c4.686 4.686 12.284 4.686 16.971 0l209.414-209.414c4.686-4.686 4.686-12.284 0-16.971L41.678 38.101c-4.687-4.687-12.285-4.687-16.971 0z"
                ></path>
              </svg>
            </a>
          </div>
        </div>

        <div className="mt-10">
          <ul className="-m-3.5 flex">
            <li className="product m-3.5 h-48 w-1/4 bg-cover rounded-xl"></li>
            <li className="product2 m-3.5 h-48 w-1/4 bg-cover rounded-xl"></li>
            <li className="product4 m-3.5 h-48 w-1/4 bg-cover rounded-xl"></li>
            <li className="product3 m-3.5 h-48 w-1/4 bg-cover rounded-xl"></li>
          </ul>
        </div>
      </section>

      <footer className="mt-16 h-48">
        <div className="container mx-auto py-5">
          <a>
            &copy; 2021 <span className="font-bold">Farmat</span> All Rights Reserved
          </a>
        </div>
      </footer>
    </main>
  );
};
export default Home;
