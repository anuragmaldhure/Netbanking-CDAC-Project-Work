//import  from 'bootstrap'

const ViewAccountBalance5 = () =>{

  const viewMore = async () => {
    
  }

  const withdrawMoney = async () => {
    
  }

    return(
        <div>
            <div className='container'>
              <h2>Net Balance : ₹ 230000</h2>
            </div>
            <div className='container'>
              <h3>Primary Savings Account 
              xxxxxxxxxxx7914</h3>
            <h1>Last 7 transactions</h1>
            <table className='table table-striped' border={1}>
              <thead>
                <tr>
                  <th>Date & Time</th>
                  <th>Transaction ID</th>
                  <th>Transaction Log</th>
                  <th>Credit Amount (+)</th>
                  <th>Debit Amount (-)</th>
                  <th>Account Balance</th>
                </tr>
              </thead>
              <tbody>
                  <tr>
                    <td>
                      06/02/2024 18:00:00
                    </td>
                    <td>
                      xGno$78BB
                    </td>
                    <td>
                      
                    </td>
                    <td>
                      230000
                    </td>
                    <td>
                      
                    </td>
                    <td>
                      230000
                    </td>
                  </tr>
              </tbody>
            </table>

            </div>
            <br/>
            <button onClick={viewMore} className='btn btn-success'>
              View More
            </button>

            <br/>
            <hr/>
            <button onClick={withdrawMoney} className='btn btn-success'>
              Withdraw Money
            </button>
            
        </div>  
    )
}

export default ViewAccountBalance5;