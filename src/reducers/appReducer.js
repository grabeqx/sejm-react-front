import ACTIONS from '../constants/actions';

const appReducer = (state = {
    searchQuery: '',
    envoyList: [],
    alphabet: [],
    currentEnvoy: {},
    currentEnvoyId: 0,
    nextEnvoyId: 0,
    prevEnvoyId: 0,
    structure: [],
    alphabetOrder: 'asc',
    bestForAnimals: [],
    worstForAnimals: [],
    location: '',
    nearestEnvoy: [],
    locationFinish: false,
    getEnvoyFinish: false,
    openedMobileMenu: false,
    countries: [],
    answers: {},
    answerMessage: '',
    senatorList: [],
    mepsList: []
}, action) => {
    switch(action.type) {
        case ACTIONS.UPDATE_SEARCH_QUERY: 
            return {
                ...state,
                searchQuery: action.payload.query
            }
        case ACTIONS.GET_ENVOY_LIST:
        case ACTIONS.GET_ENVOY_LIST_BY_POINTS:
            return {
                ...state,
                alphabetOrder: action.payload.order
            }
        case ACTIONS.GET_ENVOY_LIST_SUCCESS:
        case ACTIONS.GET_ENVOY_LIST_BY_PARTY_SUCCESS:
        case ACTIONS.GET_ENVOY_LIST_BY_POINTS_SUCCESS:
        case ACTIONS.GET_ENVOY_LIST_POSITIVE_SUCCESS:
        case ACTIONS.GET_QUERY_LIST_SUCCESS:
            return {
                ...state,
                envoyList: action.payload.list.envoyList,
                alphabet: action.payload.list.alphabet
            }
        case ACTIONS.GET_SENATOR_LIST_SUCCESS:
            return {
                ...state,
                senatorList: action.payload.list.envoyList,
                alphabet: action.payload.list.alphabet
            }
        case ACTIONS.GET_MEPS_LIST_SUCCESS:
            return {
                ...state,
                mepsList: action.payload.list.envoyList,
                alphabet: action.payload.list.alphabet
            }
        case ACTIONS.GET_ENVOY_LIST_BY_PARTY:
        case ACTIONS.GET_ENVOY_LIST_BY_POINTS:
        case ACTIONS.GET_ENVOY_LIST_POSITIVE: 
        case ACTIONS.GET_QUERY_LIST_SUCCESS:
            return {
                ...state,
                alphabetOrder: 'asc'
            }
        case ACTIONS.GET_ENVOY:
            return {
                ...state,
                currentEnvoyId: action.payload.id
            }
        case ACTIONS.GET_ENVOY_SUCCESS:
            return {
                ...state,
                currentEnvoy: action.payload.envoy.length === 3 ? action.payload.envoy[1] : action.payload.envoy[0].id < state.currentEnvoyId ? action.payload.envoy[1] : action.payload.envoy[0],
                prevEnvoyId: action.payload.envoy.length === 3 ? action.payload.envoy[0].id : action.payload.envoy[0].id < state.currentEnvoyId ? action.payload.envoy[0].id : 0,
                nextEnvoyId: action.payload.envoy.length === 3 ? action.payload.envoy[2].id : state.currentEnvoyId < action.payload.envoy[1].id ? action.payload.envoy[1].id : 0
            }
        case ACTIONS.GET_STRUCTURE_SUCCESS:
            return {
                ...state,
                structure: action.payload.structure
            }
        case ACTIONS.GET_BEST_FOR_ANIMALS_SUCCESS:
            return {
                ...state,
                bestForAnimals: action.payload.list
            }
        case ACTIONS.GET_WORST_FOR_ANIMALS_SUCCESS:
            return {
                ...state,
                worstForAnimals: action.payload.list
            }
        case ACTIONS.GET_LOCATION_SUCCESS: 
            return {
                ...state,
                location: action.payload.location,
                locationFinish: true
            }
        case ACTIONS.GET_ENVOY_LIST_BY_POS_SUCCESS:
            return {
                ...state,
                nearestEnvoy: action.payload.list,
                getEnvoyFinish: true
            }
        case ACTIONS.TOGGLE_MENU:
            return {
                ...state,
                openedMobileMenu: !state.openedMobileMenu
            }
        case ACTIONS.GET_COUNTRIES_SUCCESS:
            return {
                ...state,
                countries: action.payload.countries
            }
        case ACTIONS.SET_ANSWER:
            return {
                ...state,
                answers: {
                    ...state.answers,
                    [action.payload.answer.id]: action.payload.answer
                }
            }
        case ACTIONS.SEND_ANSWERS_SUCCESS: 
            return {
                ...state,
                answerMessage: action.payload.message
            }
        default:
            return state;
    }
}


export default appReducer;