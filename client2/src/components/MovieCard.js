import React from 'react'
import { Grid, Typography, CardContent, CardMedia, Card, CardActionArea, CardActions, Fab, Icon } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import {URL_IMG} from '../const'
const styles = {
  card: {
    maxWidth: 225,
  },
  poster: {
    height: 300,
  },
}

function MovieCard(props) {
  const { classes } = props
  const { poster_path, title } = props.movie
  return (
    <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.poster}
            image={`${URL_IMG}${poster_path}`}
          />
        </CardActionArea>
        <Grid container direction='row' justify='center' alignItems='center' spacing={8}>
          <Grid item xs={8}>
            <CardContent>
              <Typography variant='subheading' align='left' gutterBottom>{title}</Typography>
            </CardContent>
          </Grid>
          <Grid item xs={4}>
            <CardActions>
              <Fab size='medium' color="primary" aria-label="Add">
                <Icon>add</Icon>
              </Fab>
            </CardActions>
          </Grid>
        </Grid>
    </Card>
  )
}

export default withStyles(styles)(MovieCard)
