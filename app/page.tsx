export default function Home() {
  return (
    <div>
      <div className="w-full flex justify-center py-3 rounded-md">
        <img
          className="h-[35rem] rounded-lg w-[80%] shadow-2xl relative"
          src="https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2059&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <div className="absolute bottom-24 ml-[10rem]">
          <h2 className="text-3xl font-bold py-3">Batman Begins</h2>
          <p className="text-wrap w-4/5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex
            accusamus dolore sunt animi officiis! Laudantium saepe nam mollitia
            reiciendis harum culpa unde? Nobis.
          </p>
          <div className="mt-8">
            <button className="px-3 py-2 bg-blue-600 font-medium rounded-md mr-2">
              Watch Trailer
            </button>
            <button className="px-3 py-2 bg-gray-600 font-medium rounded-md mr-2">
              Add to watchlist
            </button>
          </div>
        </div>
      </div>

      <div className="w-4/5 mx-auto my-10">
        <h2 className="font-semibold text-xl">Trending</h2>
        <div className="grid grid-cols-5 gap-4 my-4">
          {[...new Array(5)].map((item) => (
            <div className="mx-2">
              <img
                className="h-[9rem] w-[15rem] rounded-lg shadow-2xl"
                src="https://images.unsplash.com/photo-1501432377862-3d0432b87a14?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
              <h2 className="text-md font-medium">Wondar Women 1984</h2>
              <p className="text-xs leading-none text-gray-600 font-semibold">
                Action/Adventure
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="w-4/5 mx-auto my-10">
        <h2 className="font-semibold text-xl">For you</h2>
        <div className="grid grid-cols-5 gap-4 my-4">
          {[...new Array(5)].map((item) => (
            <div className="mx-2">
              <img
                className="h-[9rem] w-[15rem] rounded-lg"
                src="https://images.unsplash.com/photo-1501432377862-3d0432b87a14?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
              <h2 className="text-md font-medium">Wondar Women 1984</h2>
              <p className="text-xs leading-none text-gray-600 font-semibold">
                Action/Adventure
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="w-4/5 mx-auto my-10">
        <h2>Top Picks</h2>

        {[...new Array(5)].map((item) => (
          <div className="flex py-3 w-full">
            <img
              className="w-full h-[20rem] rounded-lg shadow-xl"
              src="https://images.unsplash.com/photo-1501432377862-3d0432b87a14?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <div className="px-2 flex items-start py-2 justify-between w-full">
              <div>
                <h3 className="text-xl font-medium">Lorem ipsum, dolor sit</h3>
                <p className="text-gray-300 text-xs">Lorem, ipsum dolor.</p>
              </div>
              <button className="bg-blue-600 rounded-md text-white px-4 py-2 inline-block">
                Watch Trailer
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
