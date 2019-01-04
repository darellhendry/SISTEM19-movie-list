import React, {Component} from 'react'
import {TextField, Button, Icon, Grid} from '@material-ui/core/'
import {withStyles} from '@material-ui/core/styles'

const styles = {
  wrapper: {
    margin: '0 auto',
    display:'flex',
    alignItems: 'center',
  }
}

class Search extends Component {

  handleChange = event => {
    event.preventDefault()
    this.props.getQuery(event.target.value)
  }

  handleClick = event => {
    this.props.beginSearch()
  }

  handleKeyPress = event => {
    if (event.key === 'Enter') {
      this.props.beginSearch()
    }
  }

  render() {
    return (
      <Grid container justify='center' alignItems='center' spacing={8}>
        <Grid item>
          <TextField
            label='Search'
            type='search'
            variant='outlined'
            margin='dense'
            color='primary'
            style={{marginRight:8}}
            onChange={this.handleChange}
            onKeyPress={this.handleKeyPress}
            />
        </Grid>
        <Grid item>
          <Button onClick={this.handleClick} variant='outlined' color='primary'><Icon>search</Icon></Button>
        </Grid>
      </Grid>
    )
  }
}



export default withStyles(styles)(Search)
