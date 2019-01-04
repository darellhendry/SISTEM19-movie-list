import React from 'react'
import Typography from '@material-ui/core/Typography'
import PropTypes from 'prop-types'

function Header(props) {
  return (
    <Typography align='center' variant="display3">{props.title}</Typography>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}

export default Header
