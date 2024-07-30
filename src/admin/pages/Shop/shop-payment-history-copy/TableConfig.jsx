import givenchy from "../../../assets/images/stores/givenchy.png"
import ebony from "../../../assets/images/stores/ebony.png"
import bearappeal from "../../../assets/images/stores/bearappeal.png"


// headCells.js
export const headCellsAllShops = [
  { id: 'paymentId', numeric: true, disablePadding: true, label: 'Payment ID' },
  { id: 'shopName', numeric: true, disablePadding: true, label: 'Shop Name' },
  { id: 'shopEmail', numeric: true, disablePadding: false, label: 'Email' },
  { id: 'shopContactNumber', numeric: true, disablePadding: false, label: 'Contact Number' },
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
        paymentId: 'P001',
        shopName: 'NOLIMIT',
        shopEmail: 'contact@nolimit.lk',
        shopContactNumber: '0112345678',
        amount: 15000,
        paymentDate: '2023-10-01',
        accountNo: '1234567890',
        branchName: 'Colombo',
        status: 'Completed',
      },
      {
        paymentId: 'P002',
        shopName: 'Fashion Bug',
        shopEmail: 'info@fashionbug.lk',
        shopContactNumber: '0118765432',
        amount: 20000,
        paymentDate: '2023-10-05',
        accountNo: '0987654321',
        branchName: 'Kandy',
        status: 'Pending',
      },
      {
        paymentId: 'P003',
        shopName: 'Diliganz',
        shopEmail: 'support@diliganz.lk',
        shopContactNumber: '0111234567',
        amount: 18000,
        paymentDate: '2023-10-10',
        accountNo: '1122334455',
        branchName: 'Galle',
        status: 'Completed',
      },
      {
        paymentId: 'P004',
        shopName: 'Hameedia',
        shopEmail: 'sales@hameedia.lk',
        shopContactNumber: '0119876543',
        amount: 22000,
        paymentDate: '2023-10-15',
        accountNo: '2233445566',
        branchName: 'Negombo',
        status: 'Failed',
      },
      {
        paymentId: 'P005',
        shopName: 'Kelly Felder',
        shopEmail: 'contact@kellyfelder.lk',
        shopContactNumber: '0117654321',
        amount: 25000,
        paymentDate: '2023-10-20',
        accountNo: '3344556677',
        branchName: 'Matara',
        status: 'Completed',
      },
    ];