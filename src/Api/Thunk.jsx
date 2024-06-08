import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//Product's page
export const product = createAsyncThunk("product", async () => {
    const data = await axios.get("http://localhost:3000/products");
    return data;
});

//product details page
export const productid = createAsyncThunk("productid", async (userid) => {
    const data = await axios.get(`http://localhost:3000/products/${userid}`);
    return data;
});

//Product Add
export const AddProduct = createAsyncThunk("AddProduct", async ({ Category, URL, productname, description, Price }) => {
    await axios.post("http://localhost:3000/products", { Category, URL, productname, description, Price })
        .then(res => alert("Product Added Successfully"))
})

// Delete product
export const deleteproduct = createAsyncThunk("deleteproduct", async (id) => {
    await axios.delete(`http://localhost:3000/products/${id}`)
        .then(res => {
            alert("Product deleted")
            window.location.reload();
        })
})

//Registration form
export const Regiform = createAsyncThunk("Regiform", async ({name, email, Number, DOB, password, block, cart,}) => {
    await axios.post("http://localhost:3000/user", { name, email, Number, DOB, password, block, cart, })
        .then(res => alert("Registered Successfully"))
})

//Login
export const Loginuser =createAsyncThunk("Login",async()=>{
    const data = await axios.get("http://localhost:3000/user");
    return data;
})

//product edit

export const proedit =createAsyncThunk("proedit",async({userid, Category, URL, productname, description, Price })=>{
    await axios.patch(`http://localhost:3000/products/${userid}`, { Category, URL, productname, description, Price })
    .then(res => alert("Edit Successfully"))
})

