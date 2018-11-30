import Color from 'color'
import PropTypes from 'prop-types'
import React from 'react'

import { Box } from './Box'
import { H1 } from './H1'

export const Clock = ({ color, time }) => (
  <Box color={Color(color).isDark() ? '#eee' : '#111'}>
    <H1>{time}</H1>
    <h2>{color}</h2>
  </Box>
)

Clock.propTypes = {
  color: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
}
