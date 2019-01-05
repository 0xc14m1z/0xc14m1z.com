import React from 'react'
import moment from 'moment'
import t from 'prop-types'

const FormattedDate = ({ date }) =>
  moment(date).format('YYYY-MM-DD')

FormattedDate.defaultProps = {
  date: new Date()
}

FormattedDate.propTypes = {
  date: t.instanceOf(Date).isRequired
}

export default React.memo(FormattedDate)
