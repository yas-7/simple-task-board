import { connect } from 'react-redux'
import Board from './Board'
import { moveCard } from '../../actions'

const onDragEnd = (result, dispatch) => {
  const { destination, source, draggableId } = result
  if (!destination) {
    return
  }
  if (
    destination.droppableId === source.droppableId &&
    destination.index === source.index
  ) {
    return
  }
  dispatch(moveCard(source, destination, draggableId))
}

const mapStateToProps = state => ({
  columnsId: state.columns.allIds,
})

const mapDispatchToProps = dispatch => ({
  onDragEnd: result => onDragEnd(result, dispatch),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board)
