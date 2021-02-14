import React from 'react';
import Cards from './Cards';
import data from './data';
import './index.css'

function App() {
    return (
        <>
        <h1 className='heading'>Top 10 Courses for Software Engineering 2021</h1>
        <div className='main'>
            <Cards
                imgscr={data[0].imgscr}                
                category={data[0].category}
                name={data[0].name}
                link = {data[0].link}
            />
            <Cards
                imgscr={data[1].imgscr}
                category={data[1].category}
                name={data[1].name}
                link = {data[1].link}
            />
            <Cards
                imgscr={data[2].imgscr}
                category={data[2].category}
                name={data[2].name}
                link = {data[2].link}
            />
            <Cards
                imgscr={data[3].imgscr}
                category={data[3].category}
                name={data[3].name}
                link = {data[3].link}
            />
            <Cards
                imgscr={data[4].imgscr}
                category={data[4].category}
                name={data[4].name}
                link = {data[4].link}
            />
            <Cards
               imgscr={data[5].imgscr}
               category={data[5].category}
               name={data[5].name}
               link = {data[5].link}
            />
            </div>
        </>
    );
}

export default App;