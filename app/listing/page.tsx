import React from "react";

type Props = {};

const ListingPage = (props: Props) => {
  return (
    <div className="w-4/5 mx-auto py-8">
      <div className="">
        <h2 className="text-2xl font-semibold">New Movies</h2>
        <p className="text-xs text-gray-600 leading-none">
          The latest and greatest movies
        </p>
      </div>

      <div className="mx-8">
        {[...new Array(5)].map((item) => (
          <div className="flex  w-full justify-between">
            <div className="py-2 mx-8">
              <p className="text-xs text-gray-600 font-semibold leading-none">
                Now Available
              </p>
              <p className="text-lg font-semibold py-1">Batman</p>
              <p className="text-xs text-gray-600 font-semibold leading-none">
                2h 56m| 2022 | PG-13
              </p>

              <button className="px-4 py-2 bg-indigo-800 my-8 rounded-md">
                Watch Now
              </button>
            </div>
            <img
              className="w-1/3 h-40 rounded-md shadow-xl"
              src="https://images.unsplash.com/photo-1501432377862-3d0432b87a14?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <button className="px-6 py-1 bg-indigo-600 rounded-md text-center inline-block">
          Load more...
        </button>
      </div>
    </div>
  );
};

export default ListingPage;
