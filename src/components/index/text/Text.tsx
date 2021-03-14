import {useEffect} from 'react';
function Test()
{
    useEffect(() => {
        alert('hello')
    });
    // eseguito lato client
    // console.log('I am test component');
    return (
        <h1>test</h1>
    );
}

export default Test;