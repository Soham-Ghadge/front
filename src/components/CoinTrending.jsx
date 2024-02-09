import { Link } from 'react-router-dom'; // Import Link from React Router

const CoinTrending = ({coin}) => {
    console.log(coin);
    return (
        <Link to={`/coin/${coin.id}`}> {/* Open Link component */}
            <div className="font-light mb-2 p-2 border-gray-500 border-2 rounded hover:bg-gray-900">
                <div className="flex items-center gap-1">
                    <span className="font-semibold">{coin.score + 1}.</span>
                    <img className="w-6" src={coin.small} alt={coin.name} />
                    <p>{coin.name}</p>
                    <small className="text-xs">({coin.symbol})</small>
                </div>
            </div>
        </Link> 
    );
}

export default CoinTrending;
