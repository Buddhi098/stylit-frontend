import givenchy from "../../assets/images/stores/givenchy.png"
import ebony from "../../assets/images/stores/ebony.png"
import bearappeal from "../../assets/images/stores/bearappeal.png"


// headCells.js
export const headCells = [
    {
      id: "orderId", // this id should be same as the key of the object in tableData.js
      numeric: true,
      disablePadding: true,
      label: "Order ID",
    },
    {
      id: "storeName",
      numeric: true,
      disablePadding: false,
      label: "Store Name",
    },
    {
      id: "weight",
      numeric: true,
      disablePadding: false,
      label: "Weight (G)",
    },
    {
      id: "deliveryDate",
      numeric: true,
      disablePadding: false,
      label: "Delivered Date",
    },
    {
      id: "amount",
      numeric: true,
      disablePadding: false,
      label: "Total Amount (Rs.)",
    },
    {
      id: "status",
      numeric: false,
      disablePadding: false,
      label: "Status",
      disableSort: true,
    },
  ];

  export const additionalFields = [
    {
      id: "orderedDate",
      numeric: true,
      disablePadding: false,
    },
    {
      id: "address",
      numeric: true,
      disablePadding: false,
    },
    {
      id: "customerName",
      numeric: true,
      disablePadding: false,
    },
    {
      id: "customerEmail",
      numeric: true,
      disablePadding: false,
    },
    {
      id: "customerPhone",
      numeric: true,
      disablePadding: false,
    },
    {
      id:"storeImage",
      numeric: true,
      disablePadding: false,
    },
    {
      id:"delay",
      numeric: true,
      disablePadding: false,
    },
  ];
  
  
  // these are filter box options
  export const filterOptions = [
    {
      id:'storeName', // this id should be same as the id in headCells.js
      label: "Store Name",
      options: ["Givenchy", "Ebony","Bear Appeal"],
    },
    {
      id:'deliveryDate',
      label: "Delivered Date",
      options: ["Within This Month","Within This Year"],
    },
    {
      id:'amount',
      label: "Amount",
      options: ["Below 5000","Below 10000","Below 15000"],
    },
    {
      id:'weight',
      label: "Weight",
      options: ["Below 500g","Below 1000g","Below 2000g"],
    },
  ];
  
  
  // tableData.js
  export const tableData = [
    {
      id: 1,
      orderId: 132465498,
      storeName: "Givenchy",
      deliveryDate: "2024-07-19", 
      amount: 15000,
      weight: 1500,
      orderedDate: "2024-07-11",
      address: "No.113/Peradeniya Road,Kandy",
      customerName: "Nimal",
      customerEmail: "nimal@mail.com",
      customerPhone: "077-2880123",
      storeImage: givenchy,
      delay:"On Time"
    },
    {
      id: 2,
      orderId: 132465499,
      storeName: "Givenchy",
      deliveryDate: "2024-06-18", 
      amount: 18000,
      weight: 1600,
      orderedDate: "2024-06-12",
      address: "No.45/Queen Street, Colombo",
      customerName: "Ayesha",
      customerEmail: "ayesha@mail.com",
      customerPhone: "077-1234567",
      storeImage: givenchy,
      delay:"Delayed by 3 days"
    },
    {
      id: 3,
      orderId: 132465500,
      storeName: "Ebony",
      deliveryDate: "2024-06-17", 
      amount: 12000,
      weight: 1400,
      orderedDate: "2024-06-10",
      address: "No.77/Lake View, Kandy",
      customerName: "Raj",
      customerEmail: "raj@mail.com",
      customerPhone: "077-7654321",
      storeImage: ebony,
      delay:"On Time"
    },
    {
      id: 4,
      orderId: 132465501,
      storeName: "Bear Appeal",
      deliveryDate: "2024-07-15", // Changed
      amount: 9000,
      weight: 1200,
      orderedDate: "2024-07-11",
      address: "No.18/Beach Road, Galle",
      customerName: "Maya",
      customerEmail: "maya@mail.com",
      customerPhone: "077-5432189",
      storeImage: bearappeal,
      delay:"Delayed by 4 days"
    },
    {
      id: 5,
      orderId: 132465502,
      storeName: "Givenchy",
      deliveryDate: "2024-06-14", 
      amount: 15000,
      weight: 1500,
      orderedDate: "2024-06-10",
      address: "No.34/Market Lane, Jaffna",
      customerName: "Kumar",
      customerEmail: "kumar@mail.com",
      customerPhone: "077-9876543",
      storeImage: givenchy,
      delay:"Delayed by 2 days"
    },
    {
      id: 6,
      orderId: 132465503,
      storeName: "Ebony",
      deliveryDate: "2024-05-23", 
      amount: 17000,
      weight: 1550,
      orderedDate: "2024-05-14",
      address: "No.99/Temple Road, Negombo",
      customerName: "Sita",
      customerEmail: "sita@mail.com",
      customerPhone: "077-3216549",
      storeImage: ebony,
      delay:"Delayed by 6 days"
    },
    {
      id: 7,
      orderId: 132465504,
      storeName: "Bear Appeal",
      deliveryDate: "2024-04-12", 
      amount: 8000,
      weight: 1100,
      orderedDate: "2024-04-07",
      address: "No.52/Hill Street, Nuwara Eliya",
      customerName: "Anil",
      customerEmail: "anil@mail.com",
      customerPhone: "077-2345678",
      storeImage: bearappeal,
      delay:"Delayed by 4 days"
    },
    {
      id: 8,
      orderId: 132465505,
      storeName: "Givenchy",
      deliveryDate: "2024-07-21", 
      amount: 20000,
      weight: 1800,
      orderedDate: "2024-07-17",
      address: "No.5/Station Road, Matara",
      customerName: "Dilani",
      customerEmail: "dilani@mail.com",
      customerPhone: "077-6543210",
      storeImage: givenchy,
      delay:"Delayed by 2 days"
    },
    {
      id: 9,
      orderId: 132465506,
      storeName: "Ebony",
      deliveryDate: "2024-04-20",
      amount: 13000,
      weight: 450,
      orderedDate: "2024-04-08",
      address: "No.27/School Lane, Batticaloa",
      customerName: "Harsha",
      customerEmail: "harsha@mail.com",
      customerPhone: "077-4321987",
      storeImage: ebony,
      delay:"On Time"
    },
    {
      id: 10,
      orderId: 132465507,
      storeName: "Bear Appeal",
      deliveryDate: "2024-06-29",
      amount: 9500,
      weight: 650,
      orderedDate: "2024-06-24",
      address: "No.89/Church Street, Kegalle",
      customerName: "Priya",
      customerEmail: "priya@mail.com",
      customerPhone: "077-6789101",
      storeImage: bearappeal,
      delay:"On Time"
    }
    
    
  ];