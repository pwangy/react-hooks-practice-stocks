import Stock from './Stock'

function PortfolioContainer({ portfolio, handlePortfolio}) {
  const renderStocks = portfolio.map(stock => <Stock key={stock.id} {...stock} onClick={handlePortfolio} actionNumber={0} />)

	return (
		<div>
			<h2>My Portfolio</h2>
			{renderStocks}
		</div>
)}

export default PortfolioContainer
