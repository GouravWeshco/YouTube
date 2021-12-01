import {VIDEOS,SELECTED_VIDEO,SEARCH_VIDEO} from "./type"
export const onVideoSelect = (selVid) => ({
    type: SELECTED_VIDEO,
    payload: { selectedVideo:selVid }
})
export const onSearchTermChange = (term)=>({
    type: SEARCH_VIDEO,
    payload: { term:term }
})

export const viewVideos = (video)=>({
    type: VIDEOS,
    payload: { videos:video }
})