import React from 'react';
import './SortingVisualiser.css';
import {getMergeSortAnimations} from '../SortingAlgorithms/SortingAlgorithms.js';
import { bubbleSort } from '../SortingAlgorithms/bubbleSort.js';

export default class SortingVisualiser extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        array: [],
      };
    }
  
    componentDidMount() {
      this.resetArray();
    }
  
    resetArray() {
      const array = [];
      for (let i = 0; i < 20; i++) {
        array.push(randomIntFromInterval(5, 20));
      }
      this.setState({array});
    }

    mergeSort() {
      const animations = getMergeSortAnimations(this.state.array);
      console.log(animations);
      for (let i = 0; i < animations.length; i++) {
        const arrayBars = document.getElementsByClassName('array-bar');
        const isColorChange = i % 3 !== 2;
        if (isColorChange) {
          const [barOneId, barTwoId] = animations[i];
          const barOneStyle = arrayBars[barOneId].style;
          const barTwoStyle = arrayBars[barTwoId].style;
          const color = i % 3 === 0 ? 'red' : 'blue';
          setTimeout(() => {
            barOneStyle.backgroundColor = color;
            barTwoStyle.backgroundColor = color;
          }, i * 500);
        } else {
          setTimeout(() => {
            const [barOneId, newHeight] = animations[i];
            const barOneStyle = arrayBars[barOneId].style;
            barOneStyle.height = `${newHeight}px`;
          }, i * 500);
        }
      }
    }

  bubbleSort(){
    // const bubbleSortArray = bubbleSort(this.state.array);
    // const botArray = this.state.array.slice().sort((a,b) => a - b)
    // console.log(sortingHelper(bubbleSortArray, botArray))
    const animations = bubbleSort(this.state.array);
    console.log(animations);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneId, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneId].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? 'red' : 'blue';
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * 400);
      } else {
        setTimeout(() => {
          // temp = arr[j];
          // arr[j] = arr[j + 1];
          // arr[j + 1] = temp;
          // const [barOneIdx, barTwoIdx] = animations[i];
          // const barOneStyle = arrayBars[barOneId].style;
          // const barTwoStyle = arrayBars[barTwoIdx].style;


          const [barOneHeight, barTwoHeight] = animations[i];
          // const barOneStyle = arrayBars[barOneId].style;
          // const barTwoStyle = arrayBars[barTwoIdx].style;

          const barOneStyle = arrayBars[barOneHeight].style;
          const barTwoStyle = arrayBars[barTwoHeight].style;
          barOneStyle.height = `${barOneHeight}px`;
          barTwoStyle.height = `${barTwoHeight}px`;

        }, i * 400);
      }
    }
  }


    render() {
      const {array} = this.state;
  
      return (
        <div className="array-container">
          {array.map((value, idx) => (
            <div
              className="array-bar"
              key={idx}
              style={{
                backgroundColor: 'turquoise',
                height: `${value}px`,
              }}></div>
          ))}
          <button onClick={() => this.resetArray()}>Generate New Array</button>
          <button onClick={() => this.mergeSort()}>Merge Sort</button>
          <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
        </div>
      );
    }
}

function randomIntFromInterval(min, max) {

    return Math.floor(Math.random() * (max - min + 1) + min);
}

function sortingHelper(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) {
    return false;
  }
  for (let i = 0;i<arrayOne.length;i++) {
    if (arrayOne[i] !== arrayTwo[i]){
      return false;
    }
  }
  return true;
}