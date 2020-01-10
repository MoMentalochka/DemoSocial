import Nav from './Nav';
import { connect } from 'react-redux';

let mapStateToProps = (state) =>{
  return{
  id : state.Auth.id
  }
}

export default connect (mapStateToProps,{})(Nav)

