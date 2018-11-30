import PropTypes from 'prop-types'
import styled from 'styled-components'

const transition = 'color 250ms'

export const Box = styled.div`
  color: ${props => props.color};
  text-align: center;
  -webkit-transition: ${transition};
     -moz-transition: ${transition};
      -ms-transition: ${transition};
       -o-transition: ${transition};
          transition: ${transition};
`

Box.propTypes = {
  color: PropTypes.string.isRequired
}
