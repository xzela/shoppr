import 'bootstrap/dist/css/bootstrap.css'
import '../styles/global.css'
import PropTypes from 'prop-types'


function Shoppr({ Component, pageProps }) {
  return <Component { ...pageProps } />
}

Shoppr.propTypes = {
  pageProps: PropTypes.any.isRequired
}

export default Shoppr
