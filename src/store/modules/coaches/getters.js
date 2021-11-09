export default{
    allCoaches(state){
      return  state.coaches
    },
    coachesCount(state){
        return state.coaches.length>0
    }
}