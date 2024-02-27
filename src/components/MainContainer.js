import { useState, useEffect } from 'react'
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from './SearchBar'

const MainContainer = () => {
  const [stocks, setStocks] = useState([])
  const [portfolio, setPortfolio] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    // (() => { //these should be used when multiple things happen in useEffect
    fetch('http://localhost:3001/stocks')
      .then((res) => {
        if (!res.ok) { 
          throw new Error ('Have you started the server?') 
      }
        return res.json()
      })
      .then(data => setStocks(data))
      .catch(err => setError(err.message))
    // ()
  }, [])

  const handlePortfolio = (stockToWorkOn, num) => {
    if (num) {
      const inList = portfolio.find(stock => stock.id === stockToWorkOn.id)
      return inList ? null : setPortfolio(currentPortfolio => [...currentPortfolio, stockToWorkOn])
    } 
    else {
      setPortfolio(currentPortfolio => currentPortfolio.filter(stock => stock.id !== stockToWorkOn.id))
  }}
  
	return (
		<div>
      {error ? <p>{error}</p> : null}
			<SearchBar />
			<div className='row'>
				<div className='col-8'>
					<StockContainer stocks={stocks} handlePortfolio={handlePortfolio} />
				</div>
				<div className='col-4'>
					<PortfolioContainer portfolio={portfolio} handlePortfolio={handlePortfolio} />
				</div>
			</div>
		</div>
)}

export default MainContainer

// After the stocks are fetched, your job is to:
// x Render all the stocks onto the page. The styling of how a Stock should look like is already in the Stock component.
// x Allow a user to buy a stock by clicking on it and when it is bought, it should be added to MyPortfolio.
// x Allow a user to sell a stock in their Portfolio by clicking on the stock and it should be removed from their Portfolio.


// Allow a user to sort the list of stocks alphabetically by the ticker name as well as by ascending price.

// Allow a user to filter stocks based on the type of the stock.
