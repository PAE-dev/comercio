import React from "react";
import { useState, useEffect } from "react";
import Layout from "../../Components/Layout";
import Card from "../../Components/Card";
import ProductDetail from "../../Components/ProductDetail";

function Home() {
  const [items, setItems] = useState(null);

  //es un hoock que se usa para manejor efectos como llamar API
  useEffect(() => {
    //esto es un get que pide los datos a la API
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((response) => response.json())
      .then((data) => setItems(data));
    //
  }, []);

  /*
  useEffect(() => {}, [])	Solo cuando el componente se monta (una vez).
  useEffect(() => {}, [x])	Cada vez que x cambia.
  useEffect(() => {})	En cada render (NO recomendado).
  useEffect(() => { return () => {} }, [])	Cleanup cuando el componente se desmonta.
*/

  return (
    <Layout>
      Home
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {items?.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
      <ProductDetail/>
    </Layout>
  );
}

export default Home;
