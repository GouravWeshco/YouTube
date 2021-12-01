import React, { Component } from "react";
import _ from "lodash";
import YTSearch from "youtube-api-search";
import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail";
import {connect} from "react-redux"
import { onVideoSelect,viewVideos } from "./redux";

const API_KEY = "AIzaSyCnMMBKL2K6A30J51wiC76kPS31bVNkzqs";

class App extends Component {


  /**
   * Lifecycle method that is being called just after the component did mount
   */
  componentDidMount() {
    this.videoSearch("liverpool");
  }

 
  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term }, (videos) => {
      console.log("videos", videos[0]);
      this.props.dispatch(onVideoSelect(videos[0]))
      this.props.dispatch(viewVideos(videos))
     
    });
  }

  /**
   * Lifecycle method that is responsible to make the component visible to the browser
   */
  render() {
    const videoSearch = _.debounce((term) => {
      this.videoSearch(term);
    }, 300);
    return (
      <div>
        <SearchBar  onSearchTermChange={videoSearch}/>
        <VideoDetail  />
        <VideoList
         onVideoSelect={this.props.selectedVideo}
         videos={this.props.videos}
         />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { term : state.term,videos:state.videos,selectedVideo:state.selectedVideo}
}
export default connect(mapStateToProps)(App)

