import React, {Component} from 'react'
import { Grid, Typography } from '@material-ui/core'
import MovieCard from './MovieCard'


class MovieContainer extends Component {


  // prevent unnecessary rendering
  shouldComponentUpdate(nextProps) {
    if (this.props.data === nextProps.data) {
      return false
    }
    return true
  }



  render() {
    const {data} = this.props
    return (
        <div style={{maxWidth: 960, margin: '0 auto'}}>
          <Grid container  alignItems='center' justify='space-evenly' spacing={40}>
            {
              data !== undefined && data.map( obj =>
                obj.poster_path !== null && (
                  <Grid key={obj.id} item>
                    <MovieCard movie={obj} />
                  </Grid>
                )
              )
            }

            {
              data === undefined && (
                <Grid item>
                  <Typography align='center' variant='display2'>Please, type your favorite movie</Typography>
                </Grid>
              )
            }


          </Grid>
        </div>
    )
  }
}

export default (MovieContainer)
