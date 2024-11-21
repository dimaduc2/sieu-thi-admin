import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { Table, Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

import axios from 'axios';



function App() {
  var diaChiServer = process.env.REACT_APP_DIACHI_SERVER
  const [danhSachSanPham, sua_danhSachSanPham] = useState([]);
  const hienSanPham = (sdfg) => {
    axios.get('http://'+diaChiServer+'/SanPham?DanhSachSanPham='+sdfg)
    .then(res => {
      sua_danhSachSanPham(res.data)
      console.log(res.data)
    })
    .catch((error) => {
       console.log(error);
     });
  }


  return (
    <div className="App">
      <header className="App-header">
      
      <Navbar bg='dark' variant='dark' expand="lg" fixed="top">
        <Navbar.Brand>Siêu Thị Admin</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          
        </Navbar.Collapse>
      </Navbar>

      <Button onClick={() => hienSanPham('Sản phẩm')}>Danh Sách Sản Phẩm</Button>

      {danhSachSanPham.length===0
        ?null
        :
        <Table>
          <thead>
            <tr>
              <th>Loại</th>
              <th>Tên</th>
              <th>Giá tiền</th>
              <th>Số lượng trong kho</th>
            </tr>
          </thead>
          <tbody>
            {danhSachSanPham.map((moiSanPham, index)=>
              <tr>
                <td>{moiSanPham.Loai}</td>
                <td>{moiSanPham.Ten}</td>
                <td>{moiSanPham.GiaTien} đồng</td>
                <td>{moiSanPham.SoLuongTrongKho}</td>
              </tr>
            )}
          </tbody>
        </Table>
      }

      </header>
    </div>
  );
}

export default App;
