"use client";

import { useState } from "react";

const products = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Banana" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Onion" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Cabbage" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Carrot" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Pumpkin" },
];

function FilterableProductTable({ product }) {
  const [filterText, setFilterText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);

  return (
    <div>
      <SearchBar
        filterText={filterText}
        isStockOnly={inStockOnly}
        onFilterTextChange={setFilterText}
        onInStockOnlyChange={setInStockOnly}
      />
      <ProductTable 
      products = {products}
      filterText={filterText} 
      isStockOnly={inStockOnly} />
    </div>
  );
}

function ProductCategoryRow ({props }) {

    return (
<div>hh</div>
    );
}

function ProductRow ({props }) {

    return (
<div>hh</div>
    );
}


function ProductTable ({props }) {

    return (
        <div>
<ProductCategoryRow/>
<ProductCategoryRow/>
<ProductCategoryRow/>
      <ProductRow/>
        </div>
      
    );
}