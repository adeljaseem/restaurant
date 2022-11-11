import { RESTAURANT_LIST_SUCCESS, RESTAURANT_LIST_FAIL } from '../constants/restaurantConstants'

export const restaurantListReducer = (state = { restaurant:[] }, action) => {
    switch (action.type) {
        case RESTAURANT_LIST_SUCCESS:
            return { restaurant: action.payload }
        case RESTAURANT_LIST_FAIL:
            return { restaurant: action.error }
        default:
            return state
    }
}