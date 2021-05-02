import React, { PureComponent } from 'react'
import Filter from './Filter';
import ItemCard from './ItemCard';
class Mian extends PureComponent {
    constructor(props) {
        super(props);
        this.state = { 
            filter: '',
            loading:true,
            data : [],
            order: [],
            total: 0
         };
    }
    componentDidMount () {
        fetch('https://my-json-server.typicode.com/benirvingplt/products/products')
        .then(response => response.json())
        .then(data => {
            this.setState({
                data,
                loading: false
            })
        })
        
    }

    handleFilter = (value) => {
      this.setState({
          filter: value
      })
      
    }
    handleAdd = (id,price) => {
       this.setState({
           order: [...this.state.order, { id, price }]
       }, () => {
        this.total()
       })
       
    }

    handleMinus = (id) => {
        let array = this.state.order
        let array1 = array.map((item) => {
            return item.id
        })
        let index = array1.indexOf(id);
        if (index !== -1) {
          array.splice(index, 1);
        }
        this.setState({
            order: [...array]
        },() => {
            this.total()
        })
        
    }
    handleRemove = (id) => {
     let array = this.state.order
     let ans = array.filter((item) => {
         return item.id !== id
     })
     this.setState({
        order: [...ans]
    }, () => {
        this.total()
    })
    
    }
    total = () => {
        if(this.state.order !== []){
            let total = this.state.order.map((item) => {
                return item.price
            }).reduce((total, num) => {
                return total + num
               }, 0)
            this.setState({
                total: total
            })
        }
      
    }
    render() {

        if(this.state.loading){
           return (<></>) 
        }
        else{
            let data = this.state.data
            let cards = ''
            if(this.state.filter !== ''){
                data = data.filter((item) => {
                  return item.colour === this.state.filter
                })
                cards = data.map((item) => {
                    return <ItemCard key={item.id} src={item.img} name={item.name} price={item.price} Add={() => this.handleAdd(item.id, item.price)} Minus={() => this.handleMinus(item.id)} Remove={() => this.handleRemove(item.id)}/>
                })
            }
            else{
                cards = data.map((item) => {
                    return <ItemCard key={item.id} src={item.img} name={item.name} price={item.price} Add={() => this.handleAdd(item.id, item.price)} Minus={() => this.handleMinus(item.id)} Remove={() => this.handleRemove(item.id)}/>
                })
            }
            return (
                <div>
                <Filter filterValue={this.handleFilter} chip={this.state.filter}/>
                {cards}
                <center><h1>Total: ${this.state.total}</h1></center>
                </div>
            );
        }
        
    }
}

export default Mian;