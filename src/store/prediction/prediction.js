import axios from 'axios'
let url = 'http://127.0.0.1:5000'

const state = {
    predictions: ''
}

const getters = {
    getPrediction: (state) => {
        return state.snippets
    }
}

const actions = {
    getPred(){
        axios.get('${url}' + '/Prediction',)
        .then((response) =>{
            commit('SET_PREDICTIONS',response.data)
            console.log(response.data)
        })
        .catch((error) =>{
            alert(error)
        }
        )
    }
}

export default {
    state,
    getters,
    actions,
}
