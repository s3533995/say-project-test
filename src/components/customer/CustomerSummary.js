import React, { Component }  from 'react'

class CustomerSummary extends Component {
    state = {
        phonenumberList:[]
    }

    handleChange = (e) => {
        let phonenumberList =[];
        console.log(e.target.checked);
        console.log(e.target.value);
        let index

        if(e.target.checked){
            phonenumberList.push(e.target.value)
            // this.setState({
            //     phonenumberList:
            //     [...this.state.phonenumberList, 
            //         {'phonenumber':e.target.value, 'isChecked':e.target.checked}]
            // })
        }else{
            index = phonenumberList.indexOf(e.target.value)
            phonenumberList.splice(index, 1)
            // phonenumberList.filter(res =>{
            //      return res !== e.target.value;
            // })
        }
        console.log(phonenumberList);
        // console.log(this.state);
        // this.setState({
        //     ...this.state,
        //     phonenumberList:phonenumberList
        // })
        
        // let phonenumberList = e.target.checked 
        // ? 
        // this.state.phonenumberList.push(e.target.value)
        // // [...this.state.phonenumberList,e.target.value]
        // :
        // this.state.phonenumberList.filter(number =>{
        //     return number !== e.target.value
        // })

        this.setState(prevState => ({

            phonenumberList:[...prevState.phonenumberList, phonenumberList]
        })
        )
    }

    render(){
        // console.log(this.props);
        console.log(this.state);
        if(this.props.customer.location === this.props.search){
         return (
             <div>
                 <li>
                    <input 
                    type="checkbox" 
                    name="phonenumber"
                    value={this.props.customer.phonenumber} 
                    onChange={this.handleChange} 
                    />
                    {this.props.customer.fullname} {this.props.customer.location}
                </li>
                
             </div>
         )
        
     }else{
         return null
     }
    }
}
// const CustomerSummary = ({customer,search}) => {
//     // console.log(customer.location);
//     // console.log(search);
//     if(customer.location === search){
//         return (
//             <div>
//                 <li><input type="checkbox" value={customer.phonenumber} onChange={this.handleChange} />{customer.fullname} {customer.location}</li>
                
//             </div>
//         )
        
//     }else{
//         return null
//     }

// }

export default CustomerSummary