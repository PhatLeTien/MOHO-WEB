import React, { useState } from 'react';
import Footer from './Component/FooterComponent/Footer';
import Header from './Component/HeaderComponent/Header';
import Banner from './Component/BannerComponent/Banner';
import Slider from './Component/SliderComponent/Slider';
import Card from './Component/CardComponent/Card';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SalesPolicy from './Component/PolicyComponent/SalesPolicy';
import DeliveryPolicy from './Component/PolicyComponent/DeliveryPolicy';
import ReturnPolicy from './Component/PolicyComponent/ReturnPolicy';
import WarrantyPolicy from './Component/PolicyComponent/WarrantyPolicy';
import MOHOmie from './Component/PolicyComponent/MOHOmie';
import Login from './Component/LoginComponent/Login';
import Register from './Component/RegisterComponent/Register';
import AboutUs from './routes/AboutUs';
import Showroom from './routes/Showroom';
import SalesPartnerPolicy from './Component/PolicyComponent/SalesPartnerPolicy';
import Sales from './Component/MoreProductComponent/SalesComponent/Sales';
import Kitchen from './Component/MoreProductComponent/KitchenComponent/Kitchen';
import CardDetail from './Component/CardDetailComponent/CardDetail';
import Decor from './Component/MoreProductComponent/DecorationsComponent/Decor';
import Workroom from './Component/MoreProductComponent/WorkroomComponent/Workroom';
import KitchenDetail from './Component/CardDetailComponent/KitchenDetail';
import SalesDetail from './Component/CardDetailComponent/SalesDetail';
import WorkroomDetail from './Component/CardDetailComponent/WorkroomDetail';

import { Admin, Resource } from "react-admin";
import { UserList } from "./routes/Admin/users";
import { PostList, PostEdit, PostCreate } from "./routes/Admin/posts";

// import PostIcon from "@mui/icons-material/Book";
import InventoryIcon from '@mui/icons-material/Inventory';
// import UserIcon from "@mui/icons-material/Group";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

import Dashboard from "./routes/Admin/Dashboard";
import authProvider from "./routes/Admin/authProvider";

import jsonServerProvider from "ra-data-json-server";
import Cart from './Component/CartComponent/Cart';
import DashboardPage from './routes/Admin2/DashboardPage';
import LoginPage from './routes/Admin2/LoginPage';

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");
function App() {
  const [showCard, setShowCard] = useState(true);
  const [showBanner, setShowBanner] = useState(true);
  const [showSlider, setShowSlider] = useState(true);
  const [showFooter, setShowFooter] = useState(true);
  const [showHeader, setShowHeader] = useState(true);

  const hardcodedUsername = 'admin';
  const hardcodedPassword = '123';

  const handleLogin = (username, password) => {
    if (username === hardcodedUsername && password === hardcodedPassword) {
      console.log('Đăng nhập thành công');
      return true; // Login success
    } else {
      console.log('Login failed');
      alert('Tài khoản mặc mật khẩu không đúng');
      return false; // Login failure
    }
  };

  return (
    <Router>
      <div className="App">
        {showHeader && <Header />}
        {showSlider && <Slider />}
        {showBanner && <Banner />}
        {showCard && <Card />}
        <Switch>
          <Route
            path="/login"
            render={() => {
              setShowBanner(false);
              setShowCard(false);
              setShowSlider(false);
              setShowHeader(false);
              setShowFooter(false);
              return <Login />;
            }}
          />

          <Route
            path="/register"
            render={() => {
              setShowBanner(false);
              setShowCard(false);
              setShowSlider(false);
              setShowHeader(false);
              setShowFooter(false);
              return <Register />;
            }}
          />

          <Route
            path="/sales-policy"
            render={() => {
              setShowBanner(false);
              setShowCard(false);
              setShowSlider(false);
              return <SalesPolicy />;
            }}
          />

          <Route
            path="/delivery-policy"
            render={() => {
              setShowBanner(false);
              setShowCard(false);
              setShowSlider(false);
              return <DeliveryPolicy />;
            }}
          />

          <Route
            path="/return-policy"
            render={() => {
              setShowBanner(false);
              setShowCard(false);
              setShowSlider(false);
              return <ReturnPolicy />;
            }}
          />

          <Route
            path="/warranty-policy"
            render={() => {
              setShowBanner(false);
              setShowCard(false);
              setShowSlider(false);
              return <WarrantyPolicy />;
            }}
          />

          <Route
            path="/MOHOmie"
            render={() => {
              setShowBanner(false);
              setShowCard(false);
              setShowSlider(false);
              return <MOHOmie />;
            }}
          />

          <Route
            path="/sales-partnet-policy"
            render={() => {
              setShowBanner(false);
              setShowCard(false);
              setShowSlider(false);
              return <SalesPartnerPolicy />;
            }}
          />

          <Route
            path="/about-us"
            render={() => {
              setShowBanner(false);
              setShowCard(false);
              setShowSlider(false);
              return <AboutUs />;
            }}
          />

          <Route
            path="/show-room"
            render={() => {
              setShowBanner(false);
              setShowCard(false);
              setShowSlider(false);
              return <Showroom />;
            }}
          />

          <Route
            path="/khuyen-mai"
            render={() => {
              setShowBanner(false);
              setShowCard(false);
              setShowSlider(false);
              return <Sales />;
            }}
          />

          <Route
            path="/tu-bep"
            render={() => {
              setShowBanner(false);
              setShowCard(false);
              setShowSlider(false);
              return <Kitchen />;
            }}
          />

          <Route
            path="/do-trang-tri"
            render={() => {
              setShowBanner(false);
              setShowCard(false);
              setShowSlider(false);
              return <Decor />;
            }}
          />

          <Route
            path="/phong-lam-viec"
            render={() => {
              setShowBanner(false);
              setShowCard(false);
              setShowSlider(false);
              return <Workroom />;
            }}
          />

          <Route exact path="/products">
            <Card />
          </Route>
          <Route
            path="/card-detail/:id"
            render={() => {
              setShowBanner(false);
              setShowCard(false);
              setShowSlider(false);
              return <CardDetail />;
            }}
          />

          <Route
            path="/kitchen-detail/:id"
            render={() => {
              setShowBanner(false);
              setShowCard(false);
              setShowSlider(false);
              return <KitchenDetail />;
            }}
          />

          <Route
            path="/sales-detail/:id"
            render={() => {
              setShowBanner(false);
              setShowCard(false);
              setShowSlider(false);
              return <SalesDetail />;
            }}
          />

          <Route
            path="/workroom-detail/:id"
            render={() => {
              setShowBanner(false);
              setShowCard(false);
              setShowSlider(false);
              return <WorkroomDetail />;
            }}
          />

          <Route
            path="/admin"
            render={() => {
              setShowBanner(false);
              setShowCard(false);
              setShowSlider(false);
              setShowFooter(false);
              setShowHeader(false);
              return (
                <Admin
                  dashboard={Dashboard}
                  authProvider={authProvider}
                  dataProvider={dataProvider}
                >
                  <Resource
                    name="posts"
                    options={{ label: 'Sản Phẩm' }}
                    list={PostList}
                    edit={PostEdit}
                    create={PostCreate}
                    icon={InventoryIcon}
                  />
                  <Resource name="users" options={{ label: 'Đơn Hàng' }} list={UserList} icon={ShoppingBagIcon} />
                </Admin>
              );
            }}
          />

          <Route
            path="/login-admin"
            render={() => {
              setShowBanner(false);
              setShowCard(false);
              setShowSlider(false);
              setShowFooter(false);
              setShowHeader(false);
              return <LoginPage onLogin={handleLogin} />;
            }}
          />
          <Route
            path="/admin-2"
            render={() => {
              setShowBanner(false);
              setShowCard(false);
              setShowSlider(false);
              setShowFooter(false);
              setShowHeader(false);
              return <DashboardPage />;
            }}
          />

          <Route
            path="/cart"
            render={() => {
              setShowBanner(false);
              setShowCard(false);
              setShowSlider(false);
              return <Cart />;
            }}
          />
          {/* Các Route khác */}
        </Switch>
        {showFooter && <Footer />}
      </div>
    </Router>
  );
}

export default App;
