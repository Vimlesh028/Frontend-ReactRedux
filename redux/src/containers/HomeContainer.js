import Home from '../components/Home'
import { addToCart } from '../services/actions/action'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
    cartData: state
})

const mapDispatchToProps = dispatch => ({
    addToCartHandler: data => dispatch(addToCart(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(Home);