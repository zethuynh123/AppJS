import './App.css'; 
import Todolist from './Components/Todolist.js'
import { buildQueries, render } from '@testing-library/react';
import { Component, useState } from 'react';
import { v4 } from  "uuid";
import Button from '@atlaskit/button';

function App() {
  const [DanhSach, setDanhSach] =useState([]);
  const [textInput1, setTextInput1] =useState([]);
  const [textInput2, setTextInput2] =useState([]);
  const [textInput3, setTextInput3] =useState([]);
  const [textInput4, setTextInput4] =useState([]);
  const [textInput5, setTextInput5] =useState([]);
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
    setDanhSach([...DanhSach,{id: v4(), name: textInput1, isCompleted: false}]);
  }
  const onAddBtnClick2 = (e) => {
    //thêm textinput vào danh sach//
    setDanhSach([...DanhSach,{id: v4(), name: textInput2, isCompleted: false}]);
  }
  const onAddBtnClick3 = (e) => {
    //thêm textinput vào danh sach//
    setDanhSach([...DanhSach,{id: v4(), name: textInput3, isCompleted: false}]);
  }
  const onAddBtnClick4 = (e) => {
    //thêm textinput vào danh sach//
    setDanhSach([...DanhSach,{id: v4(), name: textInput4, isCompleted: false}]);
  }
  const onAddBtnClick5 = (e) => {
    //thêm textinput vào danh sach//
    setDanhSach([...DanhSach,{id: v4(), name: textInput5, isCompleted: false}]);
  }
  return (
    <body>     
    <div class=" Header">
          <h1>DUY APP</h1>
    </div>  
    <div class="Body">
      <div class="DanhSach">
        <table id="customers" class="Table">
            <tr>
                <th>Tên Người Nợ</th>
                <th>Số Tiền Nợ</th>
                <th>Ngày Nợ</th>
                <th>Ngày Trả</th>
                <th>Phần Trăm Lãi</th>
                <th>Nợ Phải Trả Hiện Tại</th>
            </tr>
            <tr>
                <td>Duy</td>
                <td>1k</td>
                <td>24/4/2021</td>
                <td>25/4/2021</td>
                <td>4%</td>
                <td>2k</td>
            </tr>
        </table>
      </div>
      <div class="form__group field">
        <div class="form__label1"> Thêm Tên Người Nợ</div>
        <div>
        <input type="input" class="form__field" placeholder="Name" name="name" id='name5' 
        value={textInput1}
        onChange={onTextInPutChange1} 
         required />
        <label for="name" class="form__label" id="lable">Tên Người Nợ</label>
        </div>
        <div>
        <input type="input" class="form__field2" placeholder="Name" name="name" id='name4' 
        value={textInput2}
        onChange={onTextInPutChange2} 
        required />
        <label for="name" class="form__label2" id="lable2">Số Tiền Nợ</label>
        </div>
        <div>
        <input type="input" class="form__field3" placeholder="Name" name="name" id='name3' 
        value={textInput3}
        onChange={onTextInPutChange3} 
        required />
        <label for="name" class="form__label3" id="lable3">Lãi Suất</label>
        </div>
        <div>
        <input type="input" class="form__field4" placeholder="Name" name="name" id='name2' 
        value={textInput4}
        onChange={onTextInPutChange4} 
        required />
        <label for="name" class="form__label4" id="lable4">Ngày Nợ</label>
        </div>
        <input type="input" class="form__field5" placeholder="Name" name="name" id='name1' 
        value={textInput5}
        onChange={onTextInPutChange5} 
        required />
        <label for="name" class="form__label5" id="lable5">Ngày Trả</label> 
      </div>
      <Button isDisabled={!textInput1}  appearance='primary' class="btn123 b123" onClick={onAddBtnClick1, onAddBtnClick2,onAddBtnClick3,onAddBtnClick4,onAddBtnClick5}
      >Thêm Danh Sách</Button>
    </div>
</body>  
  );
}
export default App;
