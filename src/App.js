import './App.css'; 
import TodoList from './Components/TodoList'
import { buildQueries, getElementError, render } from '@testing-library/react';
import { Component, useEffect, useState } from 'react';
import { v4 } from  "uuid";
import Button from '@atlaskit/button';
import React, { useCallback } from "react";
import DeleteIcon from "@atlaskit/icon"; 

const STORAGE_KEY = 'STR';

function App() {

  const [DanhSach, setDanhSach] =useState([]);
  const [textInput1, setTextInput1] =useState([]);
  const [textInput2, setTextInput2] =useState([]);
  const [textInput3, setTextInput3] =useState([]);
  const [textInput4, setTextInput4] =useState([]);
  const [textInput5, setTextInput5] =useState([]);
  
  useEffect(() =>{
    const strapp = localStorage.getItem(STORAGE_KEY);
    if(strapp){
      setDanhSach(JSON.parse(strapp));
    }
  },[]);

  useEffect(() =>{
    localStorage.setItem(STORAGE_KEY,JSON.stringify(DanhSach));
  },[DanhSach]);

  // onTextINPutChane//
  const onTextInPutChange1 =(e)=>{
    setTextInput1(e.target.value);
  }
  const onTextInPutChange2 =(e)=>{
    setTextInput2(e.target.value);
  }
  const onTextInPutChange3 =(e)=>{
    setTextInput3(e.target.value);
  }
  const onTextInPutChange4 =(e)=>{
    setTextInput4(e.target.value);
  }
  const onTextInPutChange5 =(e)=>{
    setTextInput5(e.target.value);
  }
  //Hàm onAddBtnClick//
  const onAddBtnClick1 = (e) => {
    //thêm textinput vào danh sach//
    setDanhSach([
      {
        id: v4(), 
        textInput1:textInput1,
        textInput2:textInput2,
        textInput3:textInput3,
        textInput4:textInput4,
        textInput5:textInput5,
        isCompleted: false
      },
      ...DanhSach]);
        setTextInput1("");
        setTextInput2("");
        setTextInput3("");
        setTextInput4("");
        setTextInput5("");
    };  
  const onCheckBtnClick = useCallback((id) => {
        setDanhSach((pre) =>
          pre.map((DanhSach) =>
            DanhSach.id === id ? { ...DanhSach, isCompleted: true } : DanhSach
          )
        );
      }, []); 
         
      function Date1(a,b){
        console.log(a,b)
        a= new Date(document.getElementById('name1').value);// ngày trả
        b= new Date(document.getElementById('name2').value);//ngày nợ
        let diff= new Date(a.getTime() - b.getTime());
        return ((diff.getUTCFullYear() - 1970) * 12 * 30 + (diff.getUTCMonth()) * 30 + (diff.getUTCDate() - 1)).toFixed(2);      
     }

    const removeDS = id => {
    const removeArr = [...DanhSach].filter(function(ds){
      return "";
    });
    setDanhSach(removeArr);
  };
      
  return (
    <body>     
    <div class=" Header">
          <h1>DUY APP</h1>
    </div>  
    <div class="Body">
      <div class="DanhSach">
        <table id="customers" class="Table">
        <thead>
          <tr>
            <th className="text-center1">STT</th>
            <th className="text-center2">Tên</th>
            <th className="text-center3">Số nợ</th>
            <th className="text-center4">Ngày nợ</th>
            <th className="text-center5">Ngày trả</th>
            <th className="text-center6">Lãi suất</th>
            <th className="text-center7">Số nợ phải trả</th>
            <th className="text-center7">Số ngày nợ</th>
          </tr>
        </thead>
        <tbody>
          {DanhSach.map((e, index) => {
            return (
              <tr className={e.isCompleted ? "check-icon" : ""} key={index}>
                <td>{index + 1}</td>
                <td className="text-left"> {e.textInput1} </td>
                <td> {e.textInput2} Vnđ</td>
                <td>{e.textInput4}</td>
                <td>{e.textInput5}</td>
                <td>{e.textInput3}%</td>

                <td>
                  {parseInt(e.textInput2) +
                    (parseInt(e.textInput2) * Date1(e.textInput5,e.textInput4) * (parseInt(e.textInput3))/100)} Vnđ
                                                                 
                </td>
                <td>
                  <Button appearance= 'primary' onClick={removeDS}>Xóa</Button>
                </td>
              </tr>
            );
          })}
        </tbody>
        </table>
      </div>
      <div class="form__group field">
        <div class="form__label1"> Thêm Tên Người Nợ</div>
        <div>
        <input type="text" class="form__field" placeholder="Name" id='name5' 
        value={textInput1}
        onChange={onTextInPutChange1} 
         required />
        <label for="name" class="form__label" id="lable">Tên Người Nợ</label>
        </div>
        <div>
        <input type="number" step="500"class="form__field2" placeholder="Name" id='name4' 
        value={textInput2}
        onChange={onTextInPutChange2} 
        required />
        <label for="name" class="form__label2" id="lable2">Số Tiền Nợ</label>
        </div>
        <div>
        <input type="number" class="form__field3" placeholder="Name" id='name3' 
        value={textInput3}
        onChange={onTextInPutChange3} 
        required />
        <label for="name" class="form__label3" id="lable3">Lãi Suất</label>
        </div>
        <div>
        <input type="date" class="form__field4" placeholder="Name" id='name2' 
        value={textInput4}
        onChange={onTextInPutChange4} 
        required />
        <label for="name" class="form__label4" id="lable4">Ngày Nợ</label>
        </div>
        <input type="date" class="form__field5" placeholder="Name" id='name1' 
        value={textInput5}
        onChange={onTextInPutChange5} 
        required />
        <label for="name" class="form__label5" id="lable5">Ngày Trả</label> 
      </div>
      <Button isDisabled={!textInput5} appearance='primary' class="btn123 b123" id='btn' onClick={onAddBtnClick1} 
      iconAfter={<DeleteIcon primaryColor= '#4fff4f'/>}
      >Thêm Danh Sách</Button>
      </div>
    </body>  
  );

        }
export default App;