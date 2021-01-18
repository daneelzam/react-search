import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import CardList from './components/CardList/CardList';

const Container = styled.div`
  margin: 0 auto;
  max-width: 60%;
`;

const BackgroundCont = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-image: url(https://naked-science.ru/wp-content/uploads/2019/01/field_image_2018-07-13-1345451.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -1000;
`;

function App(props) {
  const [cardList, setCardList] = useState([]);
  const [userList, setUserList] = useState([]);

  useEffect(()=>{
    const posts = axios.get('https://jsonplaceholder.typicode.com/posts')
    const users = axios.get('https://jsonplaceholder.typicode.com/users')
    Promise.all([posts, users]).then( values => {
      const posts = values[0].data
      const users = values[1].data
      setUserList(users);
      setCardList(posts);
    })
  },[])
  return (
    <>
    <BackgroundCont></BackgroundCont>
    <Container>
      <CardList cardList={cardList} userList={userList}/>
    </Container>
    </>
  );
}

export default App;