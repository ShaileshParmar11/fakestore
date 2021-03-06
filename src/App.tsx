import React, { useState } from "react";

import {
  Container,
  CssBaseline,
  Grid,
  LinearProgress,
  Typography,
} from "@material-ui/core";
import Header from "./component/Header";

//styles
import "./App.css";

import CoverPost from "./component/CoverPost";
import MediaCard from "./component/CardComponent";
import Footer from "./component/Footer";

export type CardItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
};

export type ShoppingCart = {
  id: number;
  itemQty: number;
  itemName: string;
  image: string;
  price: number;
};

export type AppData = {
  loading: boolean;
  data: CardItemType[] | [];
  error: boolean;
};

function App() {
  const [sideDrawer, setSideDrawer] = useState(false);
  const [cart, setCart] = useState([] as ShoppingCart[]);
  const [appState, setAppState] = useState({
    loading: false,
    data: [],
    error: false,
  } as AppData);

  React.useEffect(() => {
    setAppState({ loading: true, data: [], error: false });
    const apiUrl = "https://fakestoreapi.com/products";
    fetch(apiUrl)
      .then((res) => res.json())
      .then(async (shopingData) =>
        setAppState({ loading: false, data: shopingData, error: false })
      )
      .catch(() => {
        setAppState({ loading: false, data: [], error: true });
      });
  }, [setAppState]);

  const cartIncluds = (id: number) => {
    return cart.find((item) => id === item.id);
  };

  const addOrRemoveQty = (
    item: ShoppingCart,
    id: number,
    action: "add" | "remove"
  ) => {
    if (item.id === id) {
      if (action === "add") {
        item.itemQty += 1;
      } else if (action === "remove") {
        item.itemQty -= 1;
      }
    }
    return item;
  };

  const increaseQty = (id: number) => {
    setCart(cart.map((item) => addOrRemoveQty(item, id, "add")));
  };

  const decreaseQty = (id: number, qty: number, removeProduct: boolean) => {
    if (qty === 1 || removeProduct) {
      setCart(cart.filter((item) => item.id !== id));
    } else {
      setCart(cart.map((item) => addOrRemoveQty(item, id, "remove")));
    }
  };

  const addToCart = (cartItem: CardItemType) => {
    const { id, title, image, price } = cartItem;
    if (cartIncluds(id)) {
      setCart(cart.map((item) => addOrRemoveQty(item, id, "add")));
    } else {
      setCart([...cart, { id, itemQty: 1, itemName: title, image, price }]);
    }
  };

  const handleDrawer = (open: boolean) => {
    setSideDrawer(open);
  };

  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg" data-testid="mainContainer">
        <Header
          cart={cart}
          sideDrawer={sideDrawer}
          handleDrawer={handleDrawer}
          increaseQty={increaseQty}
          decreaseQty={decreaseQty}
        />

        <main>
          <CoverPost />
          {appState.loading && <LinearProgress data-testid="loading" />}
          <Container maxWidth="lg" className="data_container">
            {appState.error && (
              <Typography
                variant="h5"
                align="center"
                color="textSecondary"
                data-testid="errorScreen"
              >
                There is a problem loading data. Please try again
              </Typography>
            )}
            <Grid container spacing={4}>
              {appState.data.map((item: CardItemType) => (
                <Grid key={item.id} item xs={12} sm={6} md={4}>
                  <MediaCard item={item} addToCart={addToCart} />
                </Grid>
              ))}
            </Grid>
          </Container>
        </main>
        <Footer />
      </Container>
    </>
  );
}

export default App;
