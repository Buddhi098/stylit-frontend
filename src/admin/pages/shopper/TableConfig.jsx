// headCells.js
export const headCells = [
    {
      id: "name", // this id should be same as the key of the object in tableData.js
      numeric: false,
      disablePadding: true,
      label: "Shopper Name",
    },
    {
      id: "id",
      numeric: true,
      disablePadding: false,
      label: "ID",
    },
    {
      id: "mobile",
      numeric: true,
      disablePadding: false,
      label: "Mobile Number",
    },
    {
      id: "email",
      numeric: true,
      disablePadding: false,
      label: "Email",
    },
    {
      id: "status",
      numeric: true,
      disablePadding: false,
      label: "Status",
    },/*
    {
      id: "change",
      numeric: false,
      disablePadding: false,
      label: "Change",
    },
    {
      id: "chat",
      numeric: false,
      disablePadding: false,
      label: "Chat",
    },
    {
      id: "status",
      numeric: false,
      disablePadding: false,
      label: "Status",
    },
    {
      id: "payment",
      numeric: false,
      disablePadding: false,
      label: "Payment",
    },
    {
      id: "actions",
      numeric: false,
      disablePadding: false,
      label: "Actions",
    },*/
  ];
  
  
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
      id:'status',
      label: "Status",
      options: ["Active", "Disabled"],
    },/*
    {
      id:'payment',
      label: "Payment",
      options: ["Paid", "Unpaid"],
    },*/
  ];
  
  
  // tableData.js
  export const tableData = [
      {
        name: "Emma Grace",
        id: 101,
        mobile: "0770679679",
        email: "emma@gmail.com",
        status: "Active",
        /*protein: 4.3,
        category: "Clothing",
        color: "Green",
        status: "Active",
        payment: "Paid",*/
      },
      {
        name: "Alexander Smith",
        id: 102,
        mobile: "0770679398",
        email: "alexander@gmail.com",
        status: "Active",
        /*protein: 4.3,
        category: "Clothing",
        color: "Green",
        status: "Active",
        payment: "Paid",*/
      },
      {
        name: "Olivia Rose",
        id: 103,
        mobile: "0770679908",
        email: "olivia@gmail.com",
        status: "Disabled",
        /*protein: 4.3,
        category: "Clothing",
        color: "Green",
        status: "Active",
        payment: "Paid",*/
      },
      {
        name: "Noah James",
        id: 104,
        mobile: "0770679571",
        email: "noah@gmail.com",
        status: "Active",
        /*protein: 4.3,
        category: "Clothing",
        color: "Green",
        status: "Active",
        payment: "Paid",*/
      },
      {
        name: "Marie Brown",
        id: 105,
        mobile: "0770679429",
        email: "marie@gmail.com",
        status: "Active",
        /*protein: 4.3,
        category: "Clothing",
        color: "Green",
        status: "Active",
        payment: "Paid",*/
      },
      {
        name: "Elizabeth Davis",
        id: 106,
        mobile: "0770679663",
        email: "elizabeth@gmail.com",
        status: "Disabled",
        /*protein: 4.3,
        category: "Clothing",
        color: "Green",
        status: "Active",
        payment: "Paid",*/
      },
      /*{
        id: 7,
        name: "Ice cream sandwich",
        calories: 237,
        fat: 9.0,
        carbs: 37,
        protein: 4.3,
        category: "Clothing",
        color: "Yellow",
        status: "Active",
        payment: "Unpaid",
      },
      {
        id: 8,
        name: "Jelly Bean",
        calories: 375,
        fat: 0.0,
        carbs: 94,
        protein: 0.0,
        category: "Electronics",
        color: "Yellow",
        status: "Disabled",
        payment: "Paid",
      },
      {
        id: 9,
        name: "KitKat",
        calories: 518,
        fat: 26.0,
        carbs: 65,
        protein: 7.0,
        category: "Clothing",
        color: "Green",
        status: "Active",
        payment: "Unpaid",
      },
      {
        id: 10,
        name: "Lollipop",
        calories: 392,
        fat: 0.2,
        carbs: 98,
        protein: 0.0,
        category: "Electronics",
        color: "Yellow",
        status: "Disabled",
        payment: "Paid",
      },
      {
        id: 11,
        name: "Marshmallow",
        calories: 318,
        fat: 0,
        carbs: 81,
        protein: 2.0,
        category: "Clothing",
        color: "Green",
        status: "Active",
        payment: "Unpaid",
      },
      {
        id: 12,
        name: "Nougat",
        calories: 360,
        fat: 19.0,
        carbs: 9,
        protein: 37.0,
        category: "Electronics",
        color: "Green",
        status: "Disabled",
        payment: "Paid",
      },
      {
        id: 13,
        name: "Oreo",
        calories: 437,
        fat: 18.0,
        carbs: 63,
        protein: 4.0,
        category: "Clothing",
        color: "Yellow",
        status: "Active",
        payment: "Unpaid",
      },*/
    ];
    