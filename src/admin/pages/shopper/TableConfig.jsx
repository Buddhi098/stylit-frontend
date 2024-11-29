import WebApi from "../../api/WebApi";

// headCells.js
export const headCells = [
  {
    id: "id", // this id should be same as the key of the object in tableData.js
    numeric: false,
    disablePadding: true,
    label: "Shopper ID",
  },
  {
    id: "email",
    numeric: true,
    disablePadding: false,
    label: "Email",
  },
  {
    id: "address",
    numeric: true,
    disablePadding: false,
    label: "Address",
  },
  {
    id: "stylePreference",
    numeric: true,
    disablePadding: false,
    label: "Style Preference",
  }]


// these are filter box options
export const filterOptions = [
  /*{
    id:'category', // this id should be same as the id in headCells.js
    label: "Category",
    options: ["Electronics", "Clothing"],
  },
  {
    id:'color',
    label: "Color",
    options: ["Green", "Yello"],
  },*/
  {
    id: 'status',
    label: "Status",
    options: ["Active", "Disabled"],
  },/*
    {
      id:'payment',
      label: "Payment",
      options: ["Paid", "Unpaid"],
    },*/
];


export const fetchShopperData = async () => {
  try {
    const response = await WebApi.get('/admin/user/getAllShopper');
    return response.data.shoppers;
  } catch (error) {
    console.log(error);
  }
}