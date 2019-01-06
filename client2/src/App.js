import React, { Component } from 'react';
import './App.css';
import {API_KEY, URL_SEARCH} from './const'
import Header from './components/Header'
import SearchForm from './components/SearchForm'
import MovieContainer from './components/MovieContainer'
import Grid from '@material-ui/core/Grid'
import CircularProgress from '@material-ui/core/CircularProgress'


class App extends Component {
  state = {
    query: '',
    data:[],
    loading: false
  }

  componentDidMount() {
    this.getData()
  }

  getData() {
    this.setState({loading: true})
    fetch(URL_SEARCH + API_KEY + '&query=' + this.state.query)
      .then(response => response.json())
      .then(data => {
        this.setState({data: data.results, loading: false})
      })
  }

  getQuery = value => {
    this.setState({query: value})
  }

  beginSearch = () => {
    if (this.state.query.length > 2) {
      this.getData()
    }
  }

  render() {
    return (
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Header title='Movie Tracker'/>

        </Grid>
        <Grid item xs={12}>
          <SearchForm getQuery={this.getQuery} beginSearch={this.beginSearch}/>
        </Grid>
        <Grid item xs={12}>
          {
            this.state.loading ?
            <Grid item style={{textAlign: 'center'}}>
              <CircularProgress size={100} color="secondary" />
            </Grid>
              :
            <MovieContainer data={this.state.data}/>
          }
        </Grid>
      </Grid>
    )
  }
}

export default App;
