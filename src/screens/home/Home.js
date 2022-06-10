import React, { Component } from "react";
import Header from "../../common/header/Header";
import "./Home.css";
import SingleLineImageList from './movieLists';
import moviesData from '../../common/moviesData';
import TitlebarImageList from './imageList';

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {data: moviesData};
    }

  render() {
    return (
      <div>
        <Header />
        <span className='umheading'>Upcoming Movies</span>
        <SingleLineImageList moviesData={this.state.data}/>
                <div className='flex-container'>
                    <div className='homeImages'>
                        <TitlebarImageList moviesData={this.state.data} />
                    </div>
                    <div className='movieFilter'>
                        
                    </div>
                </div>
      </div>
    );
  }
}
export default Home;
