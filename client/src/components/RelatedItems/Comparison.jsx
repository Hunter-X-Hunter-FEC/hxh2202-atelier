import React from 'react';
import {ImCheckmark} from 'react-icons/im';
import {Container, Table, Header, HeaderData, DataWrapper, Data2, Data1, Data3} from './styles/Comparison.styled.js';

function Comparison({current, compare}) {
  const featureArray = current.features.map(obj=>{return {...obj, 'isLeft' :true}}).concat(compare.features.map(obj=>{return {...obj, 'isRight' :true}}));



  return (
  <Container>
      <Table>
        <Header>
          <HeaderData>{current.name}</HeaderData>
          <HeaderData>Features</HeaderData>
          <HeaderData>{compare.name}</HeaderData>
        </Header>
        <DataWrapper>
          {featureArray.map((obj)=>{
            if (obj.isLeft && !obj.isRight) {
              return (
                <tr>
                  <Data1><ImCheckmark size={20}/></Data1>
                  <Data2>{obj.feature} : {obj.value}</Data2>
                  <Data3></Data3>
                </tr>)
              } else if (obj.isRight && !obj.isLeft) {
                return (
                  <tr>
                    <Data1></Data1>
                    <Data2>{obj.feature} : {obj.value} </Data2>
                    <Data3><ImCheckmark size={20}/></Data3>
                  </tr>)
              } else {
                return (
                  <DataWrapper>
                    <Data1><ImCheckmark size={20}/></Data1>
                    <Data2>{obj.feature} : {obj.value}</Data2>
                    <Data3><ImCheckmark size={20}/></Data3>
                  </DataWrapper>)
              }
          })}
        </DataWrapper>
      </Table>
  </Container>)


}

export default Comparison;

