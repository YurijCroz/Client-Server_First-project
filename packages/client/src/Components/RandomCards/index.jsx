
import React, {useState, useEffect} from 'react';
import RandomCard from './RandomCard';
import scss from './RandomCards.module.scss';
import { connect } from "react-redux";
import {getUsersAction, deleteUserAction} from "../../actions/actionCreators";


function RandomCards({usersData: {isFetching, error, users}, getUsers, deleteUser}) {
  const [count, setCount] = useState(0);
  const [isTestFetch, setIsTestFetch] = useState(false);

  const setPrev = () => {
    setCount(count => {
      const prev = count<=0 ? users.length-1 : count-1;
      return prev;
    })
  }
  const setNext = () => {
    setCount(count => {
      const next = count===users.length-1 ? 0 : count+1;
      return next;
    })
  }

  useEffect( () => {
    //if(!users.length<1){
      getUsers();
    //}
    console.log('result =', users)
  });

  return(
    <>
    {isFetching && 
      <section className={scss.container}>
        <h1 className={scss.container__loading}>Loading...</h1>
      </section>
    }
    {error &&
      <section className={scss.container}>
        <h1 className={scss.container__loading}>Error F***</h1>
      </section>
    }
    {!error && !isFetching && users.length>0 &&
      <section className={scss.container}>
        <button className={scss.container__btn} onClick={setPrev} >prev</button>
        <RandomCard users={users} count={count}/>
        <button className={scss.container__btn} onClick={setNext} >next</button>
      </section>
    }
    </>
  )
}

const mapStateToProps = ({usersData}) => ({
  usersData
});

const mapDispatchToProps = dispatch => ({
  getUsers: () => dispatch(getUsersAction()),
  deleteUser: (id) => dispatch(deleteUserAction(id))
}); 

export default connect(mapStateToProps, mapDispatchToProps)(RandomCards);