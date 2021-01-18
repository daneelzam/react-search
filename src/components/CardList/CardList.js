import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';

import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const PostList = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const SearchInput = styled.input`
    width: 200px;
    height: 30px;
    margin-bottom: 20px;
    margin-top: 20px;

`;

function CardList({cardList, userList}) {
    const [filteredList, setFilteredList] = useState();
    useEffect(()=>  setFilteredList(cardList), [cardList]);    
    const filterPosts = (event) => {
        const searchWord = event.target.value;
        const searchResult = cardList.filter((card) => card.body.includes(searchWord))
        setFilteredList(searchResult);
    }
    return (
        <Container>
            <SearchInput type='text' onChange={filterPosts} name='searchInput'/>
            <label for='searchInput'>Поиск по телу постов</label>
            <PostList>
             {filteredList && filteredList.map((card)=><Card key={card.id} card={card} user={userList.filter((user)=> user.id === card.userId)[0]} />)}
            </PostList>
        </Container>
    );
}

export default CardList;