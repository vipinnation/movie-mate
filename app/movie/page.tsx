import React from "react";
import { FaStar, FaThumbsDown, FaThumbsUp } from "react-icons/fa";

type Props = {};

const MoviePage = (props: Props) => {
  return (
    <div className="w-4/5 mx-auto">
      <div className="">
        <img
          className="h-[35rem] w-full shadow-2xl my-4 rounded-md relative"
          src="https://images.unsplash.com/photo-1501432377862-3d0432b87a14?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <div className="absolute bottom-20 px-12 shadow-xl">
          <h1 className="font-bold text-4xl w-3/4 text-white ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, ullam!
          </h1>
          <p className="text-md font-semibold">
            <span className="mx-2">2009</span>
            <span className="mx-2">2h 33m</span>
            <span className="mx-2">PG</span>
            <span className="mx-2">4K</span>
            <span className="mx-2">UHD</span>
          </p>
          <p className="my-4">
            <button className="px-4 py-1 rounded-md bg-indigo-600 mr-4  shadow-lg shadow-cyan-500/50">
              Resume
            </button>
            <button className="px-4 py-1 rounded-md bg-gray-600 ml-4">
              Restart
            </button>
          </p>
        </div>
      </div>

      <div className="my-4">
        <h3 className="text-xl font-semibold my-2">Overview</h3>
        <p className="text-md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          rem eius eum minima sapiente quae porro expedita totam architecto
          dignissimos, voluptas maxime fugit dicta error delectus! Recusandae
          enim dolores et officiis sit. Blanditiis dolores laudantium id
          doloribus! Molestias, minima atque!
        </p>
      </div>

      <div className="text-sm">
        <p className="flex items-center justify-between my-2">
          <span className="font-medium text-gray-400">Ratings</span>
          <span>IMDB 7.6/10</span>
        </p>
        <p className="flex items-center justify-between my-2">
          <span className="font-medium text-gray-400">Release Date</span>
          <span>Jul 15/ 2009</span>
        </p>
        <p className="flex items-center justify-between my-2">
          <span className="font-medium text-gray-400">Genre</span>
          <span>Action, Adventure, Thriller</span>
        </p>
      </div>

      <div className="my-4">
        <h3 className="text-xl font-semibold my-2">Synopsis</h3>
        <p className="text-md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          rem eius eum minima sapiente quae porro expedita totam architecto
          dignissimos, voluptas maxime fugit dicta error delectus! Recusandae
          enim dolores et officiis sit. Blanditiis dolores laudantium id
          doloribus! Molestias, minima atque!
        </p>
        <p className="my-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis
          culpa ex nesciunt exercitationem vel cupiditate modi, fugiat
          consectetur! Voluptatibus ad illum, quibusdam nemo reprehenderit ex
          sunt! Temporibus reiciendis blanditiis suscipit nesciunt sint aliquid
          incidunt?
        </p>
      </div>

      <div className="my-4">
        <h3 className="text-xl font-semibold my-2">Cast & Crew</h3>
        <div className="grid grid-cols-5 gap-4">
          {[...new Array(7)].map((item) => (
            <div>
              <img
                className="h-[12rem] w-[10rem] rounded-md shadow-xl"
                src="https://images.unsplash.com/photo-1501432377862-3d0432b87a14?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
              <p className="text-[0.91rem] font-medium mt-1">
                <span>Chacter Name</span>
                <span className="block leading-none">Actore name</span>
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="my-7">
        <h3 className="text-xl font-semibold my-2">Review</h3>
        <div>
          {[...new Array(4)].map((item) => (
            <div className="mb-6">
              <div>
                <p className=" leading-none">Movie Buff</p>
                <p className="text-xs leading-none font-semibold italic mx-1">
                  jul 15, 2023
                </p>
              </div>
              <p className="flex items-center my-2">
                {[...new Array(5)].map((item) => (
                  <FaStar />
                ))}
              </p>
              <p className="flex items-center">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit
                minus assumenda similique natus sint ipsa voluptate quos
                repellat. Architecto iusto deserunt explicabo quas?
              </p>
              <p className="flex items-center mx-1 ">
                <span className="flex items-center">
                  2 <FaThumbsUp className="mx-3" />
                </span>
                <span>
                  {" "}
                  <FaThumbsDown className="mx-8" />
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="my-7">
        <h3 className="text-xl font-semibold my-2">Related</h3>
        <div className="grid grid-cols-5">
          {[...new Array(5)].map((item) => (
            <div className="">
              <img
                className="h-[15rem] w-[12rem] shadow-xl rounded-md"
                src="https://images.unsplash.com/photo-1501432377862-3d0432b87a14?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
              <p className="mt-1">Moview Name</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoviePage;
