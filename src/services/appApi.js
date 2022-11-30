import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const appApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: `/api/v1` }),
  endpoints: (builder) => ({
    loadingUser: builder.query({
      query: () => "/me",
    }),
    getProducts: builder.query({
      query: () => "/products",
    }),
    getSingleProduct: builder.query({
      query: (id) => `/product/${id}`,
    }),
    login: builder.mutation({
      query: (body) => ({
        url: "/login",
        method: "POST",
        body,
      }),
    }),
    createOrder: builder.mutation({
      query: (body) => ({
        url: "/order/new",
        method: "POST",
        body,
      }),
    }),
    getProductList: builder.query({
      query: ({ currentPage, keyword, price }) =>
        `/products?page=${currentPage}&keyword=${keyword}&price[gte]=${price[0]}&price[lte]=${price[1]}`,
    }),
    getProductCategory: builder.query({
      query: (category) => `/products?category=${category}`,
    }),
    getProductBycategory: builder.query({
      query: (category) => `/products?category=${category}`,
    }),
    slicePayment: builder.mutation({
      query: (body) => ({
        url: "/create-checkout-session",
        method: "POST",
        body,
      }),
    }),
    myOrders: builder.query({
      query: () => "/orders/me",
    }),
    getCategory: builder.mutation({
      query: ({ body }) => ({
        url: `/products?category=${body.cat}`,
        method: "POST",
      }),
    }),
    getAllUsers: builder.query({
      query: () => "/admin/users",
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `/admin/user/${id}`,
        method: "DELETE",
      }),
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/admin/product/${id}`,
        method: "DELETE",
      }),
    }),
    getAllProducts: builder.query({
      query: () => "/admin/products",
    }),
    getAllOrders: builder.query({
      query: () => "/admin/orders",
    }),
    register: builder.mutation({
      query: (body) => ({
        url: "/register",
        method: "POST",
        body,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: "/logout",
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetProductsQuery,
  useLoginMutation,
  useLoadingUserQuery,
  useGetSingleProductQuery,
  useCreateOrderMutation,
  useGetProductListQuery,
  useLazyGetProductCategoryQuery,
  useGetProductBycategoryQuery,
  useSlicePaymentMutation,
  useMyOrdersQuery,
  useGetCategoryMutation,
  useGetAllUsersQuery,
  useDeleteUserMutation,
  useDeleteProductMutation,
  useGetAllProductsQuery,
  useGetAllOrdersQuery,
  useRegisterMutation,
  useLogoutMutation,
} = appApi;
