import { connect } from 'react-redux'
import Board from './Board'

const mapStateToProps = state => ({
  columnsId: state.columns.allIds,
})

export default connect(mapStateToProps)(Board)
