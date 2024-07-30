import givenchy from "../../assets/images/stores/givenchy.png"
import ebony from "../../assets/images/stores/ebony.png"
import bearappeal from "../../assets/images/stores/bearappeal.png"


// headCells.js
export const headCellsAllRequests = [
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
      label: "Approx. Delivery Date",
    },
    {
      id: "amount",
      numeric: true,
      disablePadding: false,
      label: "Total Amount (Rs.)",
    },
    {
      id: "actions",
      numeric: false,
      disablePadding: false,
      label: "Actions",
      disableSort: true,
    },
  ];

  export const headCellsRejectedDeliveries = [
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
      label: "Approx. Delivery Date",
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
      label: "Delivery Date",
      options: ["Before End of This Month","Before End of This Year"],
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
      deliveryDate: "2024-07-23",
      amount: 15000,
      weight: 1500,
      orderedDate: "2024-07-11",
      address:"No.113/Peradeniya Road,Kandy",
      customerName: "Nimal",
      customerEmail: "nimal@mail.com",
      customerPhone:"077-2880123",
      storeImage: givenchy,
      description:"Internet"

    },
    {
      "id": 2,
      "orderId": 132465499,
      "storeName": "Givenchy",
      "deliveryDate": "2024-07-24",
      "amount": 18000,
      "weight": 1600,
      "orderedDate": "2024-07-12",
      "address": "No.45/Queen Street, Colombo",
      "customerName": "Ayesha",
      "customerEmail": "ayesha@mail.com",
      "customerPhone": "077-1234567",
      storeImage: givenchy
  },
  {
      "id": 3,
      "orderId": 132465500,
      "storeName": "Ebony",
      "deliveryDate": "2024-07-25",
      "amount": 12000,
      "weight": 1400,
      "orderedDate": "2024-07-10",
      "address": "No.77/Lake View, Kandy",
      "customerName": "Raj",
      "customerEmail": "raj@mail.com",
      "customerPhone": "077-7654321",
      storeImage: ebony
  },
  {
      "id": 4,
      "orderId": 132465501,
      "storeName": "Bear Appeal",
      "deliveryDate": "2024-07-22",
      "amount": 9000,
      "weight": 1200,
      "orderedDate": "2024-07-11",
      "address": "No.18/Beach Road, Galle",
      "customerName": "Maya",
      "customerEmail": "maya@mail.com",
      "customerPhone": "077-5432189",
      storeImage: bearappeal
  },
  {
      "id": 5,
      "orderId": 132465502,
      "storeName": "Givenchy",
      "deliveryDate": "2024-07-30",
      "amount": 15000,
      "weight": 1500,
      "orderedDate": "2024-07-15",
      "address": "No.34/Market Lane, Jaffna",
      "customerName": "Kumar",
      "customerEmail": "kumar@mail.com",
      "customerPhone": "077-9876543",
      storeImage: givenchy
  },
  {
      "id": 6,
      "orderId": 132465503,
      "storeName": "Ebony",
      "deliveryDate": "2024-07-29",
      "amount": 17000,
      "weight": 1550,
      "orderedDate": "2024-07-14",
      "address": "No.99/Temple Road, Negombo",
      "customerName": "Sita",
      "customerEmail": "sita@mail.com",
      "customerPhone": "077-3216549",
      storeImage: ebony
  },
  {
      "id": 7,
      "orderId": 132465504,
      "storeName": "Bear Appeal",
      "deliveryDate": "2024-07-26",
      "amount": 8000,
      "weight": 1100,
      "orderedDate": "2024-07-15",
      "address": "No.52/Hill Street, Nuwara Eliya",
      "customerName": "Anil",
      "customerEmail": "anil@mail.com",
      "customerPhone": "077-2345678",
      storeImage: bearappeal
  },
  {
      "id": 8,
      "orderId": 132465505,
      "storeName": "Givenchy",
      "deliveryDate": "2024-08-01",
      "amount": 20000,
      "weight": 1800,
      "orderedDate": "2024-07-17",
      "address": "No.5/Station Road, Matara",
      "customerName": "Dilani",
      "customerEmail": "dilani@mail.com",
      "customerPhone": "077-6543210",
      storeImage: givenchy
  },
  {
      "id": 9,
      "orderId": 132465506,
      "storeName": "Ebony",
      "deliveryDate": "2024-08-02",
      "amount": 13000,
      "weight": 450,
      "orderedDate": "2024-07-18",
      "address": "No.27/School Lane, Batticaloa",
      "customerName": "Harsha",
      "customerEmail": "harsha@mail.com",
      "customerPhone": "077-4321987",
      storeImage: ebony
  },
  {
      "id": 10,
      "orderId": 132465507,
      "storeName": "Bear Appeal",
      "deliveryDate": "2024-07-28",
      "amount": 9500,
      "weight": 650,
      "orderedDate": "2024-07-19",
      "address": "No.89/Church Street, Kegalle",
      "customerName": "Priya",
      "customerEmail": "priya@mail.com",
      "customerPhone": "077-6789101",
      storeImage: bearappeal
  },
  {
      "id": 11,
      "orderId": 132465508,
      "storeName": "Givenchy",
      "deliveryDate": "2024-08-03",
      "amount": 25000,
      "weight": 2000,
      "orderedDate": "2024-07-20",
      "address": "No.14/Forest Road, Badulla",
      "customerName": "Ravi",
      "customerEmail": "ravi@mail.com",
      "customerPhone": "077-9876543",
      storeImage: givenchy
  },
  {
      "id": 12,
      "orderId": 132465509,
      "storeName": "Ebony",
      "deliveryDate": "2024-08-04",
      "amount": 11000,
      "weight": 1350,
      "orderedDate": "2024-07-21",
      "address": "No.66/Crescent Road, Anuradhapura",
      "customerName": "Nisha",
      "customerEmail": "nisha@mail.com",
      "customerPhone": "077-2345679",
      storeImage: ebony
  },
  {
      "id": 13,
      "orderId": 132465510,
      "storeName": "Bear Appeal",
      "deliveryDate": "2024-08-05",
      "amount": 12000,
      "weight": 1400,
      "orderedDate": "2024-07-22",
      "address": "No.33/Old Road, Polonnaruwa",
      "customerName": "Kavya",
      "customerEmail": "kavya@mail.com",
      "customerPhone": "077-4567890",
      storeImage: bearappeal
  },
  {
      "id": 14,
      "orderId": 132465511,
      "storeName": "Givenchy",
      "deliveryDate": "2024-07-31",
      "amount": 15000,
      "weight": 500,
      "orderedDate": "2024-07-16",
      "address": "No.20/Greenfield Lane, Trincomalee",
      "customerName": "Arjun",
      "customerEmail": "arjun@mail.com",
      "customerPhone": "077-3456789",
      storeImage: givenchy
  },
  {
      "id": 15,
      "orderId": 132465512,
      "storeName": "Ebony",
      "deliveryDate": "2024-08-06",
      "amount": 12500,
      "weight": 1500,
      "orderedDate": "2024-07-23",
      "address": "No.11/Seaview Road, Colombo",
      "customerName": "Suresh",
      "customerEmail": "suresh@mail.com",
      "customerPhone": "077-8765432",
      storeImage: ebony
  },
  {
      "id": 16,
      "orderId": 132465513,
      "storeName": "Bear Appeal",
      "deliveryDate": "2024-08-07",
      "amount": 10500,
      "weight": 1100,
      "orderedDate": "2024-07-24",
      "address": "No.29/City Center, Galle",
      "customerName": "Vani",
      "customerEmail": "vani@mail.com",
      "customerPhone": "077-2346789",
      storeImage: bearappeal
  },
  {
      "id": 17,
      "orderId": 132465514,
      "storeName": "Givenchy",
      "deliveryDate": "2024-08-08",
      "amount": 20000,
      "weight": 2000,
      "orderedDate": "2024-07-25",
      "address": "No.13/Market Street, Kurunegala",
      "customerName": "Chandani",
      "customerEmail": "chandani@mail.com",
      "customerPhone": "077-3219876",
      storeImage: givenchy
  },
  {
      "id": 18,
      "orderId": 132465515,
      "storeName": "Ebony",
      "deliveryDate": "2024-08-09",
      "amount": 17000,
      "weight": 750,
      "orderedDate": "2024-07-26",
      "address": "No.42/Temple Road, Kandy",
      "customerName": "Vikram",
      "customerEmail": "vikram@mail.com",
      "customerPhone": "077-5678910",
      storeImage: ebony
  },
  {
      "id": 19,
      "orderId": 132465516,
      "storeName": "Bear Appeal",
      "deliveryDate": "2024-08-10",
      "amount": 9000,
      "weight": 200,
      "orderedDate": "2024-07-27",
      "address": "No.19/Sunset Boulevard, Jaffna",
      "customerName": "Priyantha",
      "customerEmail": "priyantha@mail.com",
      "customerPhone": "077-6781234",
      storeImage: bearappeal
  },
  {
      "id": 20,
      "orderId": 132465517,
      "storeName": "Givenchy",
      "deliveryDate": "2024-08-11",
      "amount": 21000,
      "weight": 950,
      "orderedDate": "2024-07-28",
      "address": "No.55/Colombo Road, Ratnapura",
      "customerName": "Keshan",
      "customerEmail": "keshan@mail.com",
      "customerPhone": "077-7890123",
      storeImage: givenchy
  },
  {
      "id": 21,
      "orderId": 132465518,
      "storeName": "Ebony",
      "deliveryDate": "2024-08-12",
      "amount": 14000,
      "weight": 450,
      "orderedDate": "2024-07-29",
      "address": "No.74/Sea View, Hikkaduwa",
      "customerName": "Sumaya",
      "customerEmail": "sumaya@mail.com",
      "customerPhone": "077-8901234",
      storeImage: ebony
  },
  {
      "id": 22,
      "orderId": 132465519,
      "storeName": "Bear Appeal",
      "deliveryDate": "2024-08-13",
      "amount": 9500,
      "weight": 1300,
      "orderedDate": "2024-07-30",
      "address": "No.10/Flower Road, Colombo",
      "customerName": "Nadya",
      "customerEmail": "nadya@mail.com",
      "customerPhone": "077-9012345",
      storeImage: bearappeal
  },
  {
      "id": 23,
      "orderId": 132465520,
      "storeName": "Givenchy",
      "deliveryDate": "2024-08-14",
      "amount": 26000,
      "weight": 200,
      "orderedDate": "2024-07-31",
      "address": "No.7/River Road, Colombo",
      "customerName": "Saman",
      "customerEmail": "saman@mail.com",
      "customerPhone": "077-4325678",
      storeImage: givenchy
  },
  {
      "id": 24,
      "orderId": 132465521,
      "storeName": "Ebony",
      "deliveryDate": "2024-08-15",
      "amount": 17500,
      "weight": 1500,
      "orderedDate": "2024-08-01",
      "address": "No.88/Port Road, Trincomalee",
      "customerName": "Devika",
      "customerEmail": "devika@mail.com",
      "customerPhone": "077-6540987",
      storeImage: ebony
  },
  {
      "id": 25,
      "orderId": 132465522,
      "storeName": "Bear Appeal",
      "deliveryDate": "2024-08-16",
      "amount": 8800,
      "weight": 1150,
      "orderedDate": "2024-08-02",
      "address": "No.16/Garden Lane, Nuwara Eliya",
      "customerName": "Kavitha",
      "customerEmail": "kavitha@mail.com",
      "customerPhone": "077-4321098",
      storeImage: bearappeal
  },
  {
      "id": 26,
      "orderId": 132465523,
      "storeName": "Givenchy",
      "deliveryDate": "2024-08-17",
      "amount": 30000,
      "weight": 2500,
      "orderedDate": "2024-08-03",
      "address": "No.90/Highway Road, Kandy",
      "customerName": "Aruni",
      "customerEmail": "aruni@mail.com",
      "customerPhone": "077-0123456",
      storeImage: givenchy
  }
    
  ];

   // rejectedDeliveries.js
  export const rejectedDeliveries = [
    {
      id: 1,
      orderId: 132463498,
      storeName: "Givenchy",
      deliveryDate: "2024-07-23",
      amount: 15000,
      weight: 1500,
      orderedDate: "2024-07-11",
      address:"No.113/Peradeniya Road,Kandy",
      customerName: "Nimal",
      customerEmail: "nimal@mail.com",
      customerPhone:"077-2880123",
      storeImage: givenchy,

    },
    {
      "id": 2,
      "orderId": 132464499,
      "storeName": "Givenchy",
      "deliveryDate": "2024-07-24",
      "amount": 18000,
      "weight": 1600,
      "orderedDate": "2024-07-12",
      "address": "No.45/Queen Street, Colombo",
      "customerName": "Ayesha",
      "customerEmail": "ayesha@mail.com",
      "customerPhone": "077-1234567",
      storeImage: givenchy
  },
  {
      "id": 3,
      "orderId": 132464500,
      "storeName": "Ebony",
      "deliveryDate": "2024-07-25",
      "amount": 12000,
      "weight": 1400,
      "orderedDate": "2024-07-10",
      "address": "No.77/Lake View, Kandy",
      "customerName": "Raj",
      "customerEmail": "raj@mail.com",
      "customerPhone": "077-7654321",
      storeImage: ebony
  },
  {
      "id": 4,
      "orderId": 132462501,
      "storeName": "Bear Appeal",
      "deliveryDate": "2024-07-22",
      "amount": 9000,
      "weight": 1200,
      "orderedDate": "2024-07-11",
      "address": "No.18/Beach Road, Galle",
      "customerName": "Maya",
      "customerEmail": "maya@mail.com",
      "customerPhone": "077-5432189",
      storeImage: bearappeal
  },
  {
      "id": 5,
      "orderId": 132464502,
      "storeName": "Givenchy",
      "deliveryDate": "2024-07-30",
      "amount": 15000,
      "weight": 1500,
      "orderedDate": "2024-07-15",
      "address": "No.34/Market Lane, Jaffna",
      "customerName": "Kumar",
      "customerEmail": "kumar@mail.com",
      "customerPhone": "077-9876543",
      storeImage: givenchy
  },
  ];
    