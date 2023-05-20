import React from "react";

const DollFinder = () => {
  return (
    <>
      <h1 className="bg-gray-300 mt-8 mb-4 pt-2 pb-3 px-4 text-center text-4xl font-bold text-white rounded-xl">
        Doll Finder
      </h1>
      <div className="flex items-center flex-row-reverse">
        <div className="text-neutral-content ps-10 bg-slate-500">
          <div className="max-w-md p-4">
            <h1 className="mb-5 lg:text-5xl font-bold">Advanced Doll Maker</h1>
            <p className="mb-10 lg:text-xl text-xs">
              Do you want a doll of your imagination? Which size? Any special
              hair color? Make the doll you are looking for with the exclusive
              Dolls And Dolls Advanced Doll Maker.
            </p>
            <button className="btn glass">Mak My Doll</button>
          </div>
        </div>
        <div className="flex justify-center">
          <img
            style={{ height: "90vh", width: "70vw" }}
            src="https://i.ibb.co/7KtD9qV/doll-finder.jpg"
            alt="image"
          />
        </div>
      </div>
    </>
  );
};

export default DollFinder;
