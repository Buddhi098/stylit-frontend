import givenchy from "../../../assets/images/stores/givenchy.png"
import ebony from "../../../assets/images/stores/ebony.png"
import bearappeal from "../../../assets/images/stores/bearappeal.png"


// headCells.js
export const headCellsAllShops = [
  { id: 'paymentId', numeric: true, disablePadding: true, label: 'Payment ID' },
  { id: 'courierName', numeric: true, disablePadding: true, label: 'Courier Name' },
  { id: 'courierEmail', numeric: true, disablePadding: false, label: 'Email' },
  { id: 'courierContactNumber', numeric: true, disablePadding: false, label: 'Contact Number' },
  { id: 'amount', numeric: true, disablePadding: false, label: 'Amount' },
  { id: 'paymentDate', numeric: true, disablePadding: false, label: 'Payment Date' },
  { id: 'accountNo', numeric: true, disablePadding: true, label: 'Bank Account', },
  { id: 'branchName', numeric: true, disablePadding: true, label: 'Bank Branch', },
  { id: 'status',numeric: true, disablePadding: true, label: 'Status',disableSort: true, },
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
  export const shopData = [
      {
        paymentId: 1,
        courierName: "DHL Express",
        courierEmail: "dhl@example.com",
        courierContactNumber: "+94 11 2345678",
        amount: 15000,
        paymentDate: "2023-10-01",
        accountNo: "1234567890",
        branchName: "Colombo Fort",
        status: "Completed",
      },
      {
        paymentId: 2,
        courierName: "FedEx",
        courierEmail: "fedex@example.com",
        courierContactNumber: "+94 11 8765432",
        amount: 20000,
        paymentDate: "2023-10-05",
        accountNo: "0987654321",
        branchName: "Kandy",
        status: "Pending",
      },
      {
        paymentId: 3,
        courierName: "Aramex",
        courierEmail: "aramex@example.com",
        courierContactNumber: "+94 11 1122334",
        amount: 17500,
        paymentDate: "2023-10-10",
        accountNo: "1122334455",
        branchName: "Galle",
        status: "Completed",
      },
      {
        paymentId: 4,
        courierName: "UPS",
        courierEmail: "ups@example.com",
        courierContactNumber: "+94 11 4433221",
        amount: 22000,
        paymentDate: "2023-10-15",
        accountNo: "5566778899",
        branchName: "Jaffna",
        status: "Failed",
      },
      {
        paymentId: 5,
        courierName: "TNT",
        courierEmail: "tnt@example.com",
        courierContactNumber: "+94 11 9988776",
        amount: 13000,
        paymentDate: "2023-10-20",
        accountNo: "6677889900",
        branchName: "Matara",
        status: "Completed",
      },
      {
        paymentId: 6,
        courierName: "Blue Dart",
        courierEmail: "bluedart@example.com",
        courierContactNumber: "+94 11 5566778",
        amount: 18000,
        paymentDate: "2023-10-25",
        accountNo: "7788990011",
        branchName: "Negombo",
        status: "Pending",
      },
      {
        paymentId: 7,
        courierName: "LankaPost",
        courierEmail: "lankapost@example.com",
        courierContactNumber: "+94 11 3344556",
        amount: 14000,
        paymentDate: "2023-10-30",
        accountNo: "8899001122",
        branchName: "Kurunegala",
        status: "Completed",
      },
      {
        paymentId: 8,
        courierName: "CityLink",
        courierEmail: "citylink@example.com",
        courierContactNumber: "+94 11 2233445",
        amount: 16000,
        paymentDate: "2023-11-01",
        accountNo: "9900112233",
        branchName: "Ratnapura",
        status: "Failed",
      },
      {
        paymentId: 9,
        courierName: "SpeedPost",
        courierEmail: "speedpost@example.com",
        courierContactNumber: "+94 11 1122446",
        amount: 19000,
        paymentDate: "2023-11-05",
        accountNo: "0011223344",
        branchName: "Badulla",
        status: "Completed",
      },
      {
        paymentId: 10,
        courierName: "ExpressBee",
        courierEmail: "expressbee@example.com",
        courierContactNumber: "+94 11 6677889",
        amount: 21000,
        paymentDate: "2023-11-10",
        accountNo: "2233445566",
        branchName: "Anuradhapura",
        status: "Pending",
      },
    ];