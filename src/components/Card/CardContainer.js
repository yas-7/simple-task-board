import { connect } from 'react-redux'
import Card from './Card'

const mapStateToProps = (state, ownProps) => ({
  card: state.cards.byId[ownProps.cardId],
})

export default connect(mapStateToProps)(Card)
