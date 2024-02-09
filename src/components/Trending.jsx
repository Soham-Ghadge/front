import { useState } from 'react';
import useAxios from '../hooks/useAxios';
import CoinTrending from './CoinTrending';
import Skeleton from './Skeleton';

const Trending = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const { response, loading } = useAxios('search/trending');

  const coinsPerPage = 5;
  const totalPages = Math.ceil(response?.coins.length / coinsPerPage);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages - 1));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  if (loading) {
    return (
      <div className="wrapper-container mt-8">
        {[...Array(5)].map((_, index) => (
          <Skeleton key={index} className="h-8 w-full mt-2" />
        ))}
      </div>
    );
  }

  console.log(response);

  const startIndex = currentPage * coinsPerPage;
  const endIndex = (currentPage + 1) * coinsPerPage;

  return (
    <div className="mt-2 text-white ">
      <h1 className="text-6xl mb-2 text-white">Trending</h1>
      <div className=" text-2xl ">
      {response &&
        response.coins.slice(startIndex, endIndex).map((coin) => (
          <CoinTrending key={coin.item.coin_id} coin={coin.item} />
        ))}
        </div>
      <div className="mt-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2 text-3xl"
          onClick={handlePrevPage}
          disabled={currentPage === 0}
        >
          Previous
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-3xl"
          onClick={handleNextPage}
          disabled={currentPage === totalPages - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Trending;
