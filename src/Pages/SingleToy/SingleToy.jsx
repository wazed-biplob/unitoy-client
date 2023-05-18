import { useLoaderData } from "react-router-dom";

const SingleToy = () => {
  const singleToyData = useLoaderData();
  console.log(singleToyData);
  return (
    <div>
      <div className="card w-96 glass">
        <figure>
          <img
            src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="car!"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title"></h2>
          <p>How to park your car at your garage?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Learn now!</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleToy;
