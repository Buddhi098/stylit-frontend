import givenchy from "../../../assets/images/stores/givenchy.png"
import ebony from "../../../assets/images/stores/ebony.png"
import bearappeal from "../../../assets/images/stores/bearappeal.png"


// headCells.js
export const headCellsShopPaymentReq = [
  { id: 'paymentId', numeric: true, disablePadding: false, label: 'Payment ID' },
  { id: 'shopName', numeric: true, disablePadding: false, label: 'Shop Name' },
  { id: 'email', numeric: true, disablePadding: false, label: 'Shop Email' },
  { id: 'contactNumber', numeric: true, disablePadding: false, label: 'Contact No.' },
  { id: 'requestedAmount', numeric: true, disablePadding: false, label: 'Requested (Rs.)' },
  { id: 'withdrawableAmount', numeric: true, disablePadding: false, label: 'Withdrawable (Rs.)' },
  { id: 'requestedDate', numeric: true, disablePadding: false, label: 'Required Date' },
  { id: 'actions', numeric: false, disablePadding: false, label: 'Actions', disableSort: true },
];
  
  // these are filter box options
  export const filterOptions = [
    {
      id:'requestedAmount', // this id should be same as the id in headCells.js
      label: "Requested Amount (Rs.)",
      options: ["Requested > Withdrawable","Requested <= Withdrawable"],
    },
    {
      id:'requestedDate',
      label: "Requested Date",
      options: ["Before Today","Today or after Today"],
    },
    // {
    //   id:'amount',
    //   label: "Amount",
    //   options: ["Below 5000","Below 10000","Below 15000"],
    // },
    // {
    //   id:'weight',
    //   label: "Weight",
    //   options: ["Below 500g","Below 1000g","Below 2000g"],
    // },
  ];
  
  
  // tableData.js
  export const shopPaymentReqData = [
    {
      paymentId: 1,
      shopName: "Givenchy",
      email: "givenchy@gmail.com",
      contactNumber: "0771234567",
      requestedAmount: 5000,
      withdrawableAmount: 83000,
      status: "Pending",
      requestedDate: "2024-10-01",
      reason: "Need to purchase new stock"
    },
    {
      paymentId: 2,
      shopName: "Gucci",
      email: "gucci@gmail.com",
      contactNumber: "0772345678",
      requestedAmount: 7000,
      withdrawableAmount: 4000,
      status: "Approved",
      requestedDate: "2021-10-02",
      reason: "Expansion of store"
    },
    {
      paymentId: 3,
      shopName: "Prada",
      email: "prada@gmail.com",
      contactNumber: "0773456789",
      requestedAmount: 6000,
      withdrawableAmount: 3500,
      status: "Rejected",
      requestedDate: "2021-10-03",
      reason: "Marketing campaign"
    },
    {
      paymentId: 4,
      shopName: "Versace",
      email: "versace@gmail.com",
      contactNumber: "0774567890",
      requestedAmount: 8000,
      withdrawableAmount: 55000,
      status: "Pending",
      requestedDate: "2021-10-04",
      reason: "New product launch"
    },
    {
      paymentId: 5,
      shopName: "Armani",
      email: "armani@gmail.com",
      contactNumber: "0775678901",
      requestedAmount: 9000,
      withdrawableAmount: 6000,
      status: "Approved",
      requestedDate: "2024-10-05",
      reason: "Store renovation"
    },
    {
      paymentId: 6,
      shopName: "Dolce & Gabbana",
      email: "dolcegabbana@gmail.com",
      contactNumber: "0776789012",
      requestedAmount: 7500,
      withdrawableAmount: 4500,
      status: "Rejected",
      requestedDate: "2021-10-06",
      reason: "Inventory restocking"
    },
    {
      paymentId: 7,
      shopName: "Louis Vuitton",
      email: "louisvuitton@gmail.com",
      contactNumber: "0777890123",
      requestedAmount: 8500,
      withdrawableAmount: 5500,
      status: "Pending",
      requestedDate: "2021-10-07",
      reason: "Seasonal sale preparation"
    },
    {
      paymentId: 8,
      shopName: "Chanel",
      email: "chanel@gmail.com",
      contactNumber: "0778901234",
      requestedAmount: 9500,
      withdrawableAmount: 16500,
      status: "Approved",
      requestedDate: "2021-10-08",
      reason: "New collection launch"
    },
    {
      paymentId: 9,
      shopName: "Hermes",
      email: "hermes@gmail.com",
      contactNumber: "0779012345",
      requestedAmount: 10000,
      withdrawableAmount: 7000,
      status: "Rejected",
      requestedDate: "2021-10-09",
      reason: "Store expansion"
    },
    {
      paymentId: 10,
      shopName: "Burberry",
      email: "burberry@gmail.com",
      contactNumber: "0770123456",
      requestedAmount: 5500,
      withdrawableAmount: 3500,
      status: "Pending",
      requestedDate: "2021-10-10",
      reason: "Marketing and advertising"
    },
    {
      paymentId: 11,
      shopName: "Fendi",
      email: "fendi@gmail.com",
      contactNumber: "0771234567",
      requestedAmount: 6500,
      withdrawableAmount: 4000,
      status: "Approved",
      requestedDate: "2021-10-11",
      reason: "New store opening"
    },
    {
      paymentId: 12,
      shopName: "Balenciaga",
      email: "balenciaga@gmail.com",
      contactNumber: "0772345678",
      requestedAmount: 7000,
      withdrawableAmount: 4500,
      status: "Rejected",
      requestedDate: "2021-10-12",
      reason: "Product development"
    },
    {
      paymentId: 13,
      shopName: "Yves Saint Laurent",
      email: "ysl@gmail.com",
      contactNumber: "0773456789",
      requestedAmount: 8000,
      withdrawableAmount: 5000,
      status: "Pending",
      requestedDate: "2021-10-13",
      reason: "Store maintenance"
    }
  ];
    