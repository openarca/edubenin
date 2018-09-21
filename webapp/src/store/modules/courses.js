import { CourseApi } from '@/common/api'


// initial state
export const state = {
    all: []
}

// getters
export const getters = {}

// actions
export const actions = {
    getAllCourses (context) {
        return CourseApi.get()
        .then(function (response){
            context.commit('setCourses', response.data)
      })
    }
}

// mutations
export const mutations = {
    setCourses (state, courses) {
      state.all = courses
  }
}


export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}