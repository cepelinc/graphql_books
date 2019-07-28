import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Header from '../Header'

const MainContainer = ({children}) => {
  return (
      <Fragment>
          <Header />
          {children}
      </Fragment>
  )
}

MainContainer.propTypes = {
    chidren: PropTypes.node,
}
export default MainContainer;
