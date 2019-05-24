import { connect } from 'react-redux'
import Column from './Column'

const mapStateToProps = (state, ownProps) => ({
  column: state.columns.byId[ownProps.columnId],
})

export default connect(mapStateToProps)(Column)
