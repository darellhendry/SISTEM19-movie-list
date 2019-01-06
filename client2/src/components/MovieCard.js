import React from 'react'
import { Grow, Grid, Typography, CardContent, CardMedia, Card, CardActionArea, CardActions, Fab, Icon,Popper, Fade, Divider } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import {URL_IMG} from '../const'

const styles = theme => ({
  card: {
    maxWidth: 225,
  },
  poster: {
    height: 300,
  },
  popperCard: {
    maxWidth: 200
  },
  belowDescription: {
    margin: theme.spacing.unit * 2,
  }
})

class MovieCard extends React.Component {

  state = {
    anchorEl: null,
    open: false,
  }

  handleClick = event => {
    const { currentTarget } = event;
    this.setState(state => ({
      anchorEl: currentTarget,
      open: !state.open,
    }))
  }

  handleMouseOut = () => {
    this.setState({open: false})
  }

  render() {
    const { classes } = this.props
    const { poster_path, title, overview } = this.props.movie

    return (
      <Grow in>
        <Card className={classes.card} >
          <CardActionArea name="darell" onMouseOut={this.handleMouseOut} onClick={this.handleClick}>
            <CardMedia
              className={classes.poster}
              image={`${URL_IMG}${poster_path}`}
              />
          </CardActionArea>
          <Grid container direction='row' justify='center' alignItems='center' spacing={8}>
            <Grid item xs={6}>
              <CardContent>
                <Typography variant='h6' align='left' gutterBottom>{title}</Typography>
              </CardContent>
            </Grid>
            <Grid item>
              <CardActions>
                <Fab size='medium' color="primary" aria-label="Add">
                  <Icon>add</Icon>
                </Fab>
              </CardActions>
            </Grid>
          </Grid>
          <Popper
            open={this.state.open}
            anchorEl={this.state.anchorEl}
            transition
            placement="right"
            modifiers={{
              flip: {
                enabled: true,
              },
              preventOverflow: {
                enabled: true,
                boundariesElement: 'scrollParent',
              }}}
          >
            {({ TransitionProps }) => (
            <Fade {...TransitionProps} timeout={350}>
              <Card className={classes.popperCard}>
                <CardContent>
                  <Typography variant='subtitle1'>Description</Typography>
                  <Divider variant='middle' className={classes.belowDescription}/>
                  <Typography variant='caption'>{overview}</Typography>
                </CardContent>
              </Card>
            </Fade>
          )}
          </Popper>
        </Card>
      </Grow>
    )
  }
}

export default withStyles(styles)(MovieCard)
