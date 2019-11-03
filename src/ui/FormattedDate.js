import t from 'prop-types'

const FormattedDate = ({ date }) => {
  const month = date.toLocaleString('en', { month: 'long' })
  const day = date.toLocaleString('en', { day: 'numeric' })
  const year = date.toLocaleString('en', { year: 'numeric' })
  return `${month} ${day}, ${year}`
}

FormattedDate.defaultProps = {
  date: new Date()
}

FormattedDate.propTypes = {
  date: t.instanceOf(Date).isRequired
}

export default FormattedDate
