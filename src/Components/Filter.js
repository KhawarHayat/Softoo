import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import {FormControl, InputLabel, Select, MenuItem, withStyles, Chip} from '@material-ui/core'

const useStyles = {
    filter: {
        margin: '2% 10%',
        dispaly: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

    },
    formControl: {
    // backgroundColor: 'black',
      minWidth: "200px",
    },
    chip: {
        margin: '1% 10%'
    }
  };
class Filter extends PureComponent {
    constructor(props) {
        super(props);
        this.state = { 
            
         };
    }
    handleChange = (e) => {
        this.props.filterValue(e.target.value)
    }
    render() {
        let {classes} = this.props
    
        return (
            <div className={classes.filter}>
             <FormControl variant="filled" className={classes.formControl}>
        <InputLabel id="filter-select-filled-label" className={classes.label}>Filter</InputLabel>
        <Select
          labelId="filter-select-filled-label"
          id="filter-select-filled"
          value={this.state.filter}
          onChange={this.handleChange}
        >
          <MenuItem value="" >
            <em>None</em>
          </MenuItem>
          <MenuItem value='Black'>Black</MenuItem>
          <MenuItem value='Stone'>Stone</MenuItem>
          <MenuItem value='Red'>Red</MenuItem>
        </Select>
      </FormControl>
      {this.props.chip ? <Chip className={classes.chip} size='small'  color="primary" label={this.props.chip} /> : ''}
      
            </div>
        );
    }
}

Filter.propTypes =  {
    chip: PropTypes.string,
    filterValue: PropTypes.func,
  };

export default withStyles(useStyles)(Filter);