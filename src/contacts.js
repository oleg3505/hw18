import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import male from './public/male.jpg'
// import female from './public/female.png'
// import anonim from './public/anonim.png'


const contacts = [{
    firstName: "Барней",
    lastName: "Стинсовський",
    phone: "+380956319521",
    gender: "male"
}, {
    firstName: "Робін",
    lastName: "Щербатська",
    phone: "+380931460123",
    gender: "female"
}, {
    firstName: "Анонімний",
    lastName: "Анонімус",
    phone: "+380666666666"
}, {
    firstName: "Лілія",
    lastName: "Олдровна",
    phone: "+380504691254",
    gender: "female"
}, {
    firstName: "Маршен",
    lastName: "Еріксонян",
    phone: "+380739432123",
    gender: "male"
}, {
    firstName: "Теодор",
    lastName: "Мотсбес",
    phone: "+380956319521",
    gender: "male"
}];


class Contact extends React.Component {
    
    render(){
        return(
            <div className='contact'>
                <div> 
                {this.props.contact.gender ==="male" &&<img className="icon" src='male.jpg' alt="male"/>}
                {this.props.contact.gender ==="female" &&<img className="icon" src='female.png' alt="male"/>}
                {this.props.contact.gender ===undefined &&<img className="icon" src='anonim.png' alt="male"/>}
                </div>
                <div className='name'>
                    <div> {this.props.contact.firstName}  </div>
                    <div>{this.props.contact.lastName}</div>
                </div>
               
                <div className='number'>
                    {this.props.contact.phone}
                </div>


            </div>
        )
    }
}

class Contacts extends React.Component {
    state = { 
        contacts : contacts,
        search : "",
        male: 'male',
        female: "female",
        none: undefined
        
    }

    handleSearchChange = (event) => {
        this.setState({search: event.target.value}, () => {
            const searchResult = contacts.filter((obj) => {
                const contactFirstName = obj.firstName.toLowerCase().includes(this.state.search.toLowerCase());
                const contactLastName = obj.lastName.toLowerCase().includes(this.state.search.toLowerCase());
                const contactPhone = obj.phone.toLowerCase().includes(this.state.search.toLowerCase());
                if(contactFirstName || contactLastName || contactPhone) {
                    return true
                } else {
                    return false
                }
            })
            if(this.state.search.length < 1) {
                this.setState({contacts: contacts})
            } else {
                if(searchResult.length > 0) {
                    this.setState({contacts: searchResult})
                } else {
                    this.setState({contacts: []})
                }
            }
        })
    }

    render(){

        return(
            <div>
            <div className='app'>
                <div className='search'>
                <input className="input" type='text' value={this.state.search} onChange={this.handleSearchChange} placeholder="Пошук"/>
                </div>
                {this.state.contacts.map(contact => (
                    <Contact contact={contact} key={contact.firstName}/>
                ))}
            </div>
            </div>
        )
        
    }


}
export default Contacts;