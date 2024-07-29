import givenchy from "../../../assets/images/stores/givenchy.png"
import ebony from "../../../assets/images/stores/ebony.png"
import bearappeal from "../../../assets/images/stores/bearappeal.png"


// headCells.js
export const headCellsAcceptedPayments = [
  { id: 'paymentId', numeric: true, disablePadding: false, label: 'Payment ID' },
  { id: 'shopName', numeric: true, disablePadding: false, label: 'Shop Name' },
  { id: 'email', numeric: true, disablePadding: false, label: 'Shop Email' },
  { id: 'contactNumber', numeric: true, disablePadding: false, label: 'Contact No.' },
  { id: 'requestedAmount', numeric: true, disablePadding: false, label: 'Requested (Rs.)' },
  { id: 'withdrawableAmount', numeric: true, disablePadding: false, label: 'Withdrawable (Rs.)' },
  { id: 'requiredDate', numeric: true, disablePadding: false, label: 'Required Date' },
  { id: 'acceptDate', numeric: true, disablePadding: false, label: 'Accept Date' },
  {
    id: "status",
    numeric: false,
    disablePadding: false,
    label: "Status",
    disableSort: true,
  },
  ];

  export const headCellsRejectedPayments = [
    { id: 'paymentId', numeric: true, disablePadding: false, label: 'Payment ID' },
    { id: 'shopName', numeric: true, disablePadding: false, label: 'Shop Name' },
    { id: 'email', numeric: true, disablePadding: false, label: 'Shop Email' },
    { id: 'contactNumber', numeric: true, disablePadding: false, label: 'Contact No.' },
    { id: 'requestedAmount', numeric: true, disablePadding: false, label: 'Requested (Rs.)' },
    { id: 'withdrawableAmount', numeric: true, disablePadding: false, label: 'Withdrawable (Rs.)' },
    { id: 'requiredDate', numeric: true, disablePadding: false, label: 'Required Date' },
    { id: 'reason', numeric: true, disablePadding: false, label: 'Reason' },
    
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
    // {
    //   id:'requestedAmount', // this id should be same as the id in headCells.js
    //   label: "Requested Amount (Rs.)",
    //   options: ["Requested > Withdrawable","Requested <= Withdrawable"],
    // },
    // {
    //   id:'requestedDate',
    //   label: "Requested Date",
    //   options: ["Before Today","Today or after Today"],
    // },
  ];
  
  
  // tableData.js
  export const AcceptedPayments = [
    {
      paymentId: 18,
      shopName: "Colombo Clothing",
      email: "colombo.clothing@example.com",
      contactNumber: "0711234567",
      requestedAmount: 7500,
      withdrawableAmount: 12000,
      requiredDate: "2024-07-28",
      acceptDate: "2024-07-25",
    },
    {
      paymentId: 23,
      shopName: "Kandy Knitwear",
      email: "kandy.knitwear@example.com",
      contactNumber: "0721234567",
      requestedAmount: 5000,
      withdrawableAmount: 8000,
      requiredDate: "2024-07-18",
      acceptDate: "2024-07-15",
    },
    {
      paymentId: 31,
      shopName: "Galle Garments",
      email: "galle.garments@example.com",
      contactNumber: "0731234567",
      requestedAmount: 8500,
      withdrawableAmount: 14000,
      requiredDate: "2024-07-08",
      acceptDate: "2024-07-05",
    },
    {
      paymentId: 42,
      shopName: "Jaffna Jeans",
      email: "jaffna.jeans@example.com",
      contactNumber: "0741234567",
      requestedAmount: 6500,
      withdrawableAmount: 9000,
      requiredDate: "2024-07-23",
      acceptDate: "2024-07-20",
    },
    {
      paymentId: 53,
      shopName: "Matara Malls",
      email: "matara.malls@example.com",
      contactNumber: "0751234567",
      requestedAmount: 7000,
      withdrawableAmount: 9500,
      requiredDate: "2024-07-13",
      acceptDate: "2024-07-10",
    },
    {
      paymentId: 67,
      shopName: "Trinco Textiles",
      email: "trinco.textiles@example.com",
      contactNumber: "0761234567",
      requestedAmount: 9000,
      withdrawableAmount: 15000,
      requiredDate: "2024-07-31",
      acceptDate: "2024-07-30",
    },
    {
      paymentId: 78,
      shopName: "Batticaloa Boutique",
      email: "batticaloa.boutique@example.com",
      contactNumber: "0771234567",
      requestedAmount: 6000,
      withdrawableAmount: 8500,
      requiredDate: "2024-07-21",
      acceptDate: "2024-07-18",
    },
    {
      paymentId: 85,
      shopName: "Kurunegala Kreations",
      email: "kurunegala.kreations@example.com",
      contactNumber: "0781234567",
      requestedAmount: 8000,
      withdrawableAmount: 11000,
      requiredDate: "2024-07-11",
      acceptDate: "2024-07-08",
    },
    {
      paymentId: 96,
      shopName: "Negombo Nook",
      email: "negombo.nook@example.com",
      contactNumber: "0791234567",
      requestedAmount: 5500,
      withdrawableAmount: 7800,
      requiredDate: "2024-07-30",
      acceptDate: "2024-07-29",
    },
    {
      paymentId: 104,
      shopName: "Anuradhapura Attire",
      email: "anuradhapura.attire@example.com",
      contactNumber: "0701234567",
      requestedAmount: 7200,
      withdrawableAmount: 9600,
      requiredDate: "2024-07-17",
      acceptDate: "2024-07-15",
    },
    {
      paymentId: 119,
      shopName: "Ratnapura Retail",
      email: "ratnapura.retail@example.com",
      contactNumber: "0712345678",
      requestedAmount: 8800,
      withdrawableAmount: 13000,
      requiredDate: "2024-07-25",
      acceptDate: "2024-07-22",
    },
    {
      paymentId: 128,
      shopName: "Badulla Boutique",
      email: "badulla.boutique@example.com",
      contactNumber: "0723456789",
      requestedAmount: 9500,
      withdrawableAmount: 13500,
      requiredDate: "2024-07-15",
      acceptDate: "2024-07-12",
    },
    {
      paymentId: 137,
      shopName: "Polonnaruwa Prints",
      email: "polonnaruwa.prints@example.com",
      contactNumber: "0734567890",
      requestedAmount: 6800,
      withdrawableAmount: 9200,
      requiredDate: "2024-07-21",
      acceptDate: "2024-07-19",
    }
  ];
  

   // rejectedDeliveries.js
  export const RejectedPayments = [
    {
      paymentId: 34,
      shopName: "Kandy Knitwear",
      email: "kandy.knitwear@example.com",
      contactNumber: "0721234567",
      requestedAmount: 10000,
      withdrawableAmount: 8000,
      requiredDate: "2024-07-20",
      reason: "not sufficient withdrawal amount",
    },
    {
      paymentId: 45,
      shopName: "Galle Garments",
      email: "galle.garments@example.com",
      contactNumber: "0731234567",
      requestedAmount: 15000,
      withdrawableAmount: 10000,
      requiredDate: "2024-07-15",
      reason: "not sufficient withdrawal amount",
    },
    {
      paymentId: 56,
      shopName: "Jaffna Jeans",
      email: "jaffna.jeans@example.com",
      contactNumber: "0741234567",
      requestedAmount: 13000,
      withdrawableAmount: 9500,
      requiredDate: "2024-07-18",
      reason: "not sufficient withdrawal amount",
    },
    {
      paymentId: 67,
      shopName: "Matara Malls",
      email: "matara.malls@example.com",
      contactNumber: "0751234567",
      requestedAmount: 11000,
      withdrawableAmount: 7000,
      requiredDate: "2024-07-22",
      reason: "not sufficient withdrawal amount",
    },
    {
      paymentId: 78,
      shopName: "Trinco Textiles",
      email: "trinco.textiles@example.com",
      contactNumber: "0761234567",
      requestedAmount: 12000,
      withdrawableAmount: 8000,
      requiredDate: "2024-07-19",
      reason: "not sufficient withdrawal amount",
    },
    {
      paymentId: 89,
      shopName: "Batticaloa Boutique",
      email: "batticaloa.boutique@example.com",
      contactNumber: "0771234567",
      requestedAmount: 14000,
      withdrawableAmount: 9000,
      requiredDate: "2024-07-25",
      reason: "not sufficient withdrawal amount",
    },
    {
      paymentId: 90,
      shopName: "Kurunegala Kreations",
      email: "kurunegala.kreations@example.com",
      contactNumber: "0781234567",
      requestedAmount: 12500,
      withdrawableAmount: 9500,
      requiredDate: "2024-07-27",
      reason: "not sufficient withdrawal amount",
    }
  ];
  
    