import React from 'react'

const Arrays = () => {

    const array1 = [1, 2, 3, 4, 5, 6, 7, 8];
    let totalValues = 0;

    function BasicLoopArray(){
        for (let i = 0; i < array1.length; i++){
            console.log(`array value: ${array1[i]}`);
        }
    }

    function CounterBasicLoopArray(){
        for (let i = 0; i < array1.length; i++){
            totalValues += array1[i];
        }
        console.log(`total values: ${totalValues}`);
        totalValues = 0;
    }

    function CounterExtLoopArray(){
        const total = array1.reduce((counter, i) => counter + i);
        console.log(`total values: ${total}`);

        const mapValue = array1.map(v => v *10);
        
        mapValue.forEach((x, i) => console.log(`mapped value: ${x}`));

    }

    return (
        <div>
            <button onClick={CounterExtLoopArray}>YYY</button>
        </div>
    )
}

export default Arrays
