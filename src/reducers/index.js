import { combineReducers } from 'redux'
import promoCodeRuducer from './promoCodeReducer'

export default combineReducers({
    promoCode: promoCodeRuducer
})