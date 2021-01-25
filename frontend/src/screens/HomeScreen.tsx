import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import Product from "../components/Product";
import products from "../products";
import { ProductType } from "../types";

interface Props {}

const HomeScreen = (props: Props) => {
  const [products, setProducts] = useState([]);

  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product: ProductType) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
