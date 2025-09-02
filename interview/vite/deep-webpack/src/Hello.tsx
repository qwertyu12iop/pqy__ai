import React from 'react';
import avatar from './images/avatar.webp';
import book from './images/book.webp';
import {
    add
}from './math';
const Hello = () => {
    return (
        <>
            来咯！
            <img src={avatar} alt="" />
            <img src={book} alt="" />
            {add(1, 2)}
        </>
    )
}

export default Hello;