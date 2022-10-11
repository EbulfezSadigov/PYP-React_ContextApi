import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router';

function ProductDetailPage() {
  const [detail, setdetail] = useState({});

  let { ID } = useParams();


  useEffect(() => {
    axios.get('https://northwind.vercel.app/api/products/' + ID)
      .then(res => {
        setdetail(res.data);
      })
  }, [])


  return (
    <table className='table table-striped-columns table-dark'>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Price</th>
          <th>Stock</th>
          <th>Company Name</th>
          <th>Contact Title</th>
          <th>Add</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{detail.id}</td>
          <td>{detail.name}</td>
          <td>{detail.unitsInStock}</td>
          <td>{detail.unitPrice}</td>
          <td>{detail.supplier?.companyName}</td>
          <td>{detail.supplier?.contactTitle}</td>
        </tr>

      </tbody>
    </table>
  )
}

export default ProductDetailPage