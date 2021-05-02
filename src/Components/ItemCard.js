import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import {Paper, Typography, withStyles} from '@material-ui/core'
import QtyButton from './QtyButton';

const styles = {
    paper: {
        margin: '1% 10%',
        display: 'flex',
        flexDirection: 'row',

    },
    info: {
        margin: '2% 2%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end'
    },
    img: {
        height: '300px',
        width: '200px'
    },
    name: {
        width: '300px'
    },
    price: {
        margin: '0% 15% 0% 0%'
    }
}
class ItemCard extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        let {classes} = this.props
        return (
                <Paper elevation={5} className = {classes.paper}>
                <img alt='media' src={this.props.src} className={classes.img}/>
                <div className={classes.info}>
                <Typography className={classes.name} variant='h5' gutterBottom>{this.props.name}</Typography>
                <Typography className={classes.price} variant='h6'>${this.props.price}</Typography>
                </div>
                <div>
                <QtyButton Add = {() => this.props.Add()} Minus = { () => this.props.Minus() } Remove = { () => this.props.Remove() }/>
               </div>
                </Paper>
            
        );
    }
}

QtyButton.propTypes =  {
    name: PropTypes.string,
    price: PropTypes.number,
    Add: PropTypes.func,
    Minus: PropTypes.func,
    Remove: PropTypes.func,
  };

export default withStyles(styles)(ItemCard);