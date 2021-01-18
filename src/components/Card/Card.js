import React from 'react';
import styled from 'styled-components';

const Post = styled.div`
    width: 240px;
    height: 350px;
    margin: 5px;
    padding: 5px;
    background-color: #02315a9c;;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const Inner = styled.div`
    margin-top: 5px;
    color: white;
`;

function Card({ card, user }) {
    return (
        user && 
        <Post>
            <Inner><b>Title:</b> {card.title} </Inner>
            <Inner><b>Body:</b> {card.body.slice(0, 300).concat('...')} </Inner>
            <Inner><b>Author:</b> {user.name} </Inner>
            <Inner><b>Username:</b> {user.username} </Inner>
        </Post>
    );
}

export default Card;