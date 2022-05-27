import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddProduct from "./pages/addProduct/AddProduct";
import ProductDetails  from "./pages/productDetail/ProductDetails";
import ProductList from "./pages/productList/ProductList";
import CategoryList from "./pages/categoryList/CategoryList";
import CategoryDetails from "./pages/categoryDetails/CategoryDetails";
import AddCategory from "./pages/addCategory/AddCategory";
import EditCategory from "./pages/editCategory/EditCategory";
import EditProduct from "./pages/editProduct/EditProduct";

import RolesList from "./pages/roles/RolesList";
import EditRoles from "./pages/roles/EditRoles";
import AddRoles from "./pages/roles/AddRoles";

import CustomersList from "./pages/customers/CustomersList"
import EditCustomers from "./pages/customers/EditCustomers"

import OrdersList from "./pages/order/OrdersList"
import EditOrders from "./pages/order/EditOrders"



function App() {
  return (
    <div>
      <Topbar />
      <div className="container">
        <Router>
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/products/:productId">
          <ProductDetails />
          </Route>
          <Route path="/products">
          <ProductList />
          </Route>
          <Route path="/editproduct/:productId">
            <EditProduct />
          </Route>
          <Route path="/addproduct">
            <AddProduct />

          </Route>
          <Route path="/categories/:catId">
          <CategoryDetails />
          </Route>
          <Route path="/categories">
          <CategoryList />
          </Route>
          <Route path="/addcategories">
            <AddCategory />
          </Route>
          <Route path="/editcategories/:catId">
            <EditCategory />
          </Route>
          
          <Route path="/roles">
            <RolesList />
          </Route>
          <Route path="/addRoles">
            <AddRoles />
          </Route>
          <Route path="/editRoles/:roleId">
            <EditRoles />
          </Route>

          {/* <Route path="/customers/:customerId">
          <CustomersDetails />
          </Route> */}
          
          <Route path="/editcustomers/:customerId">
            <EditCustomers />
          </Route>
          <Route path="/customers">
            <CustomersList />
          </Route>

          <Route path="/orders/:ordetailId">
          <CategoryDetails />
          </Route>
          <Route path="/orders">
          <OrdersList />
          </Route>
          {/* <Route path="/addcategories">
            <AddCategory />
          </Route> */}
          <Route path="/editorders/:orderId">
            <EditOrders />
          </Route>
        </Switch>
        </Router>
      </div>

    </div>
      
    
  );
}

export default App;
