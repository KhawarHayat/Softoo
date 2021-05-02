import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core'
const styles = {
    direction: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    btn: {
        height: "100px",
    },
    qty: {
        display:'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems:'center',
        height: "100px",
        width:'100px'
    }
}
class QtyButton extends PureComponent {
    state = { 
        count: 0
     }
     handleIncrement = () => {
         this.setState((prev) => ({
             count: prev.count + 1
         }))
         this.props.Add()
     }
     handleDecrement = () => {
         if(this.state.count >= 1){
            this.setState((prev) => ({
                count: prev.count - 1
            }))  
            this.props.Minus()   
         }
        
    }
    handleRemove = () => {
           this.setState((prev) => ({
               count: 0
           }))     
           this.props.Remove()
   }
    render() {
        let {classes} = this.props
        return (
            <div className={classes.direction}>
                <button className={classes.btn} onClick={this.handleDecrement}>
                    -
                </button>
                <div className={classes.qty}>
                    <h2>{this.state.count}</h2>
                    <button onClick={this.handleRemove}>
                    Remove
                </button>
                </div>
                <button className={classes.btn} onClick={this.handleIncrement}>
                    +
                </button>
            </div>
        );
    }
}
QtyButton.propTypes =  {
    Add: PropTypes.func,
    Minus: PropTypes.func,
    Remove: PropTypes.func,
  };
export default withStyles(styles)(QtyButton);