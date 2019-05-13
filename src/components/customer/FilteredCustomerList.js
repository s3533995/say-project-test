import React from 'react'
import CustomerSummary from './CustomerSummary';


const FilteredCustomerList = ({customers, search}) => {
    // console.log(search);
    return (
        <div className="customer-list">
            <ul>
                { customers && customers.map( customer => {
                    return (
                        <CustomerSummary customer={customer} key={customer.id} search={search}/>
                    )
                }

                )}
            </ul>
        </div>
    )
}

export default FilteredCustomerList