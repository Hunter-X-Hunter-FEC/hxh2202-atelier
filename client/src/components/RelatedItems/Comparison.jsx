import React from 'react';
import {ImCheckmark} from 'react-icons/im';
import {Container} from './styles/Comparison.styled.js';

function Comparison({current, compare}) {
  console.log('current', current);
  console.log('compare', compare);
  const featureArray = current.features.map(obj=>{return {...obj, 'isLeft' :true}}).concat(compare.features.map(obj=>{return {...obj, 'isRight' :true}}));


  console.log('deatureArray', featureArray)
  return (
  <Container>
    <table>
      <tr>
        <th>{current.name}</th>
        <th>Features</th>
        <th>{compare.name}</th>
      </tr>
      <tr>
        {featureArray.map((obj)=>{
          if (obj.isLeft) {
            return (
              <tr>
                <td><ImCheckmark/></td>
                <td>{obj.feature} : {obj.value}</td>
                <td></td>
              </tr>)
            } else if (obj.isRight) {
              return (
                <tr>
                  <td></td>
                  <td>{obj.feature} : {obj.value} </td>
                  <td><ImCheckmark/></td>
                </tr>)
            } else {
              return (
                <tr>
                  <td><ImCheckmark/></td>
                  <td>{obj.feature} : {obj.value}</td>
                  <td><ImCheckmark/></td>
                </tr>)
            }
        })}
      </tr>
    </table>
  </Container>)


}

export default Comparison;

