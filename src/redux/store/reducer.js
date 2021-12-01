import {VIDEOS,SELECTED_VIDEO,SEARCH_VIDEO}  from "../type"
const initialState = {
    term:"",
    videos: [],
    selectedVideo: null,
}
const reducer = (state = initialState, action) => {
    console.log(state)
    let term = state.term
    let videos = state.videos
    let selectedVideo= state.selectedVideo
    switch (action.type) {
        case SEARCH_VIDEO:
            return {  term : action.payload.term,selectedVideo:selectedVideo,videos:videos };
        case SELECTED_VIDEO:
             return {  term : term,selectedVideo:action.payload.selectedVideo,videos:videos }; 
        case VIDEOS:
             return {  term : term,selectedVideo:selectedVideo,videos:action.payload.videos }; 
        default:
            return state
    }
    return state

}
export default reducer;