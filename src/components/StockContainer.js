import Stock from './Stock'

const StockContainer = ({ stocks, handlePortfolio }) => {
	const renderStocks = stocks.map(stock => <Stock key={stock.id} {...stock} onClick={handlePortfolio} actionNumber={1} />
  )

	return (
		<div>
			<h2>Stocks</h2>
			{renderStocks}
		</div>
)}

export default StockContainer