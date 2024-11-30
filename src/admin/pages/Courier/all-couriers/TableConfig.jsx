import givenchy from "../../../assets/images/stores/givenchy.png"
import ebony from "../../../assets/images/stores/ebony.png"
import bearappeal from "../../../assets/images/stores/bearappeal.png"
import WebApi from "../../../api/WebApi";




export const headCellsAllShops = [
  { id: 'courierName', numeric: true, disablePadding: true, label: 'Courier Name' },
  { id: 'courierEmail', numeric: true, disablePadding: false, label: 'Email' },
  { id: 'courierContactNumber', numeric: true, disablePadding: false, label: 'Contact Number' },
  { id: 'businessType', numeric: true, disablePadding: false, label: 'Business Type' },
<<<<<<< HEAD
<<<<<<< HEAD
=======
  { id: 'courierLocation', numeric: false, disablePadding: true, label: 'Location',disableSort: true, },
  { id: 'accountNo', numeric: true, disablePadding: true, label: 'Bank Account', },
  { id: 'branchName', numeric: true, disablePadding: true, label: 'Bank Branch', },
  { id: 'status', numeric: false, disablePadding: true, label: 'status',disableSort: true, }
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
        courierName: "Dinesh Senanayake",
        courierEmail: "dinesh.senanayake@example.com",
        courierContactNumber: "0761234567",
        courierLocation: {
          addressLine1: "3 Victoria Park",
          addressLine2: "Trincomalee",
          city: "Trincomalee",
          province: "Eastern",
          postalCode: "31000",
          latitude: "8.571135",
          longitude: "81.233550"
        },
        courierBusinessData: {
          businessRegNo: "33221",
          businessRegDate: "2009-07-09",
          businessType: "Private Limited",
          businessEmail: "dinesh.business@example.com",
          businessDocument: "file.reg33221.pdf"
        },
        courierBankDetails: {
          accountNo: "1234567890",
          bankName: "HSBC",
          branchName: "Colombo Fort"
        }
      },
      {
        courierName: "Nimal Perera",
        courierEmail: "nimal.perera@example.com",
        courierContactNumber: "0772345678",
        courierLocation: {
          addressLine1: "45 Galle Road",
          addressLine2: "Colombo 3",
          city: "Colombo",
          province: "Western",
          postalCode: "00300",
          latitude: "6.927079",
          longitude: "79.861244"
        },
        courierBusinessData: {
          businessRegNo: "44556",
          businessRegDate: "2012-03-15",
          businessType: "Sole Proprietorship",
          businessEmail: "nimal.business@example.com",
          businessDocument: "file.reg44556.pdf"
        },
        courierBankDetails: {
          accountNo: "2345678901",
          bankName: "Commercial Bank",
          branchName: "Colombo Main"
        }
      },
      {
        courierName: "Kumari Silva",
        courierEmail: "kumari.silva@example.com",
        courierContactNumber: "0783456789",
        courierLocation: {
          addressLine1: "12 Lake Road",
          addressLine2: "Kandy",
          city: "Kandy",
          province: "Central",
          postalCode: "20000",
          latitude: "7.290572",
          longitude: "80.633726"
        },
        courierBusinessData: {
          businessRegNo: "55667",
          businessRegDate: "2015-08-20",
          businessType: "Partnership",
          businessEmail: "kumari.business@example.com",
          businessDocument: "file.reg55667.pdf"
        },
        courierBankDetails: {
          accountNo: "3456789012",
          bankName: "Sampath Bank",
          branchName: "Kandy Branch"
        }
      },
      {
        courierName: "Ruwan Fernando",
        courierEmail: "ruwan.fernando@example.com",
        courierContactNumber: "0794567890",
        courierLocation: {
          addressLine1: "78 Beach Road",
          addressLine2: "Galle",
          city: "Galle",
          province: "Southern",
          postalCode: "80000",
          latitude: "6.053519",
          longitude: "80.220978"
        },
        courierBusinessData: {
          businessRegNo: "66778",
          businessRegDate: "2018-11-05",
          businessType: "Private Limited",
          businessEmail: "ruwan.business@example.com",
          businessDocument: "file.reg66778.pdf"
        },
        courierBankDetails: {
          accountNo: "4567890123",
          bankName: "Hatton National Bank",
          branchName: "Galle Branch"
        }
      },
      {
        courierName: "Samanthi Jayawardena",
        courierEmail: "samanthi.jayawardena@example.com",
        courierContactNumber: "0705678901",
        courierLocation: {
          addressLine1: "23 Temple Road",
          addressLine2: "Anuradhapura",
          city: "Anuradhapura",
          province: "North Central",
          postalCode: "50000",
          latitude: "8.311400",
          longitude: "80.403651"
        },
        courierBusinessData: {
          businessRegNo: "77889",
          businessRegDate: "2020-02-10",
          businessType: "Sole Proprietorship",
          businessEmail: "samanthi.business@example.com",
          businessDocument: "file.reg77889.pdf"
        },
        courierBankDetails: {
          accountNo: "5678901234",
          bankName: "People's Bank",
          branchName: "Anuradhapura Branch"
        }
      },
      {
        courierName: "Tharindu Wickramasinghe",
        courierEmail: "tharindu.wickramasinghe@example.com",
        courierContactNumber: "0716789012",
        courierLocation: {
          addressLine1: "56 Hill Street",
          addressLine2: "Nuwara Eliya",
          city: "Nuwara Eliya",
          province: "Central",
          postalCode: "22200",
          latitude: "6.949727",
          longitude: "80.789145"
        },
        courierBusinessData: {
          businessRegNo: "88990",
          businessRegDate: "2017-06-25",
          businessType: "Partnership",
          businessEmail: "tharindu.business@example.com",
          businessDocument: "file.reg88990.pdf"
        },
        courierBankDetails: {
          accountNo: "6789012345",
          bankName: "Bank of Ceylon",
          branchName: "Nuwara Eliya Branch"
        }
      },
      {
        courierName: "Lakshmi Perera",
        courierEmail: "lakshmi.perera@example.com",
        courierContactNumber: "0727890123",
        courierLocation: {
          addressLine1: "89 Flower Road",
          addressLine2: "Matara",
          city: "Matara",
          province: "Southern",
          postalCode: "81000",
          latitude: "5.948513",
          longitude: "80.535276"
        },
        courierBusinessData: {
          businessRegNo: "99001",
          businessRegDate: "2019-09-30",
          businessType: "Private Limited",
          businessEmail: "lakshmi.business@example.com",
          businessDocument: "file.reg99001.pdf"
        },
        courierBankDetails: {
          accountNo: "7890123456",
          bankName: "National Savings Bank",
          branchName: "Matara Branch"
        }
      },
      {
        courierName: "Ajith Wijesinghe",
        courierEmail: "ajith.wijesinghe@example.com",
        courierContactNumber: "0738901234",
        courierLocation: {
          addressLine1: "34 Main Street",
          addressLine2: "Kurunegala",
          city: "Kurunegala",
          province: "North Western",
          postalCode: "60000",
          latitude: "7.486302",
          longitude: "80.364712"
        },
        courierBusinessData: {
          businessRegNo: "11012",
          businessRegDate: "2016-01-18",
          businessType: "Sole Proprietorship",
          businessEmail: "ajith.business@example.com",
          businessDocument: "file.reg11012.pdf"
        },
        courierBankDetails: {
          accountNo: "8901234567",
          bankName: "Seylan Bank",
          branchName: "Kurunegala Branch"
        }
      }
    ];
=======
>>>>>>> a67d9afca2c4a92815a1ef162a2a713e69114643
  { id: 'shopLocation', numeric: false, disablePadding: true, label: 'Location', disableSort: true, },
  {
    id: "actions",
    numeric: false,
    disablePadding: false,
    label: "Actions",
    disableSort: true,
  },
];

// these are filter box options
export const filterOptions = [
  {
    id: 'storeName', // this id should be same as the id in headCells.js
    label: "Store Name",
    options: ["Givenchy", "Ebony", "Bear Appeal"],
  },
  {
    id: 'deliveryDate',
    label: "Delivery Date",
    options: ["Before End of This Month", "Before End of This Year"],
  },
  {
    id: 'amount',
    label: "Amount",
    options: ["Below 5000", "Below 10000", "Below 15000"],
  },
  {
    id: 'weight',
    label: "Weight",
    options: ["Below 500g", "Below 1000g", "Below 2000g"],
  },
];

export const fetchTableData = async () => {
  try {
    const response = await WebApi.get(`/public/user/getAllcourier`);

    const data = response.data.courier.filter((courier) => courier.status === "active" || courier.status === "disable");

    console.log(data);

    return data;

  } catch (error) {
    console.error("Error fetching table data:", error);
    throw error;
  }
};
<<<<<<< HEAD
=======
  { id: 'courierLocation', numeric: false, disablePadding: true, label: 'Location',disableSort: true, },
  { id: 'accountNo', numeric: true, disablePadding: true, label: 'Bank Account', },
  { id: 'branchName', numeric: true, disablePadding: true, label: 'Bank Branch', },
  { id: 'status', numeric: false, disablePadding: true, label: 'status',disableSort: true, }
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
        courierName: "Dinesh Senanayake",
        courierEmail: "dinesh.senanayake@example.com",
        courierContactNumber: "0761234567",
        courierLocation: {
          addressLine1: "3 Victoria Park",
          addressLine2: "Trincomalee",
          city: "Trincomalee",
          province: "Eastern",
          postalCode: "31000",
          latitude: "8.571135",
          longitude: "81.233550"
        },
        courierBusinessData: {
          businessRegNo: "33221",
          businessRegDate: "2009-07-09",
          businessType: "Private Limited",
          businessEmail: "dinesh.business@example.com",
          businessDocument: "file.reg33221.pdf"
        },
        courierBankDetails: {
          accountNo: "1234567890",
          bankName: "HSBC",
          branchName: "Colombo Fort"
        }
      },
      {
        courierName: "Nimal Perera",
        courierEmail: "nimal.perera@example.com",
        courierContactNumber: "0772345678",
        courierLocation: {
          addressLine1: "45 Galle Road",
          addressLine2: "Colombo 3",
          city: "Colombo",
          province: "Western",
          postalCode: "00300",
          latitude: "6.927079",
          longitude: "79.861244"
        },
        courierBusinessData: {
          businessRegNo: "44556",
          businessRegDate: "2012-03-15",
          businessType: "Sole Proprietorship",
          businessEmail: "nimal.business@example.com",
          businessDocument: "file.reg44556.pdf"
        },
        courierBankDetails: {
          accountNo: "2345678901",
          bankName: "Commercial Bank",
          branchName: "Colombo Main"
        }
      },
      {
        courierName: "Kumari Silva",
        courierEmail: "kumari.silva@example.com",
        courierContactNumber: "0783456789",
        courierLocation: {
          addressLine1: "12 Lake Road",
          addressLine2: "Kandy",
          city: "Kandy",
          province: "Central",
          postalCode: "20000",
          latitude: "7.290572",
          longitude: "80.633726"
        },
        courierBusinessData: {
          businessRegNo: "55667",
          businessRegDate: "2015-08-20",
          businessType: "Partnership",
          businessEmail: "kumari.business@example.com",
          businessDocument: "file.reg55667.pdf"
        },
        courierBankDetails: {
          accountNo: "3456789012",
          bankName: "Sampath Bank",
          branchName: "Kandy Branch"
        }
      },
      {
        courierName: "Ruwan Fernando",
        courierEmail: "ruwan.fernando@example.com",
        courierContactNumber: "0794567890",
        courierLocation: {
          addressLine1: "78 Beach Road",
          addressLine2: "Galle",
          city: "Galle",
          province: "Southern",
          postalCode: "80000",
          latitude: "6.053519",
          longitude: "80.220978"
        },
        courierBusinessData: {
          businessRegNo: "66778",
          businessRegDate: "2018-11-05",
          businessType: "Private Limited",
          businessEmail: "ruwan.business@example.com",
          businessDocument: "file.reg66778.pdf"
        },
        courierBankDetails: {
          accountNo: "4567890123",
          bankName: "Hatton National Bank",
          branchName: "Galle Branch"
        }
      },
      {
        courierName: "Samanthi Jayawardena",
        courierEmail: "samanthi.jayawardena@example.com",
        courierContactNumber: "0705678901",
        courierLocation: {
          addressLine1: "23 Temple Road",
          addressLine2: "Anuradhapura",
          city: "Anuradhapura",
          province: "North Central",
          postalCode: "50000",
          latitude: "8.311400",
          longitude: "80.403651"
        },
        courierBusinessData: {
          businessRegNo: "77889",
          businessRegDate: "2020-02-10",
          businessType: "Sole Proprietorship",
          businessEmail: "samanthi.business@example.com",
          businessDocument: "file.reg77889.pdf"
        },
        courierBankDetails: {
          accountNo: "5678901234",
          bankName: "People's Bank",
          branchName: "Anuradhapura Branch"
        }
      },
      {
        courierName: "Tharindu Wickramasinghe",
        courierEmail: "tharindu.wickramasinghe@example.com",
        courierContactNumber: "0716789012",
        courierLocation: {
          addressLine1: "56 Hill Street",
          addressLine2: "Nuwara Eliya",
          city: "Nuwara Eliya",
          province: "Central",
          postalCode: "22200",
          latitude: "6.949727",
          longitude: "80.789145"
        },
        courierBusinessData: {
          businessRegNo: "88990",
          businessRegDate: "2017-06-25",
          businessType: "Partnership",
          businessEmail: "tharindu.business@example.com",
          businessDocument: "file.reg88990.pdf"
        },
        courierBankDetails: {
          accountNo: "6789012345",
          bankName: "Bank of Ceylon",
          branchName: "Nuwara Eliya Branch"
        }
      },
      {
        courierName: "Lakshmi Perera",
        courierEmail: "lakshmi.perera@example.com",
        courierContactNumber: "0727890123",
        courierLocation: {
          addressLine1: "89 Flower Road",
          addressLine2: "Matara",
          city: "Matara",
          province: "Southern",
          postalCode: "81000",
          latitude: "5.948513",
          longitude: "80.535276"
        },
        courierBusinessData: {
          businessRegNo: "99001",
          businessRegDate: "2019-09-30",
          businessType: "Private Limited",
          businessEmail: "lakshmi.business@example.com",
          businessDocument: "file.reg99001.pdf"
        },
        courierBankDetails: {
          accountNo: "7890123456",
          bankName: "National Savings Bank",
          branchName: "Matara Branch"
        }
      },
      {
        courierName: "Ajith Wijesinghe",
        courierEmail: "ajith.wijesinghe@example.com",
        courierContactNumber: "0738901234",
        courierLocation: {
          addressLine1: "34 Main Street",
          addressLine2: "Kurunegala",
          city: "Kurunegala",
          province: "North Western",
          postalCode: "60000",
          latitude: "7.486302",
          longitude: "80.364712"
        },
        courierBusinessData: {
          businessRegNo: "11012",
          businessRegDate: "2016-01-18",
          businessType: "Sole Proprietorship",
          businessEmail: "ajith.business@example.com",
          businessDocument: "file.reg11012.pdf"
        },
        courierBankDetails: {
          accountNo: "8901234567",
          bankName: "Seylan Bank",
          branchName: "Kurunegala Branch"
        }
      }
    ];
>>>>>>> ae799b2 (all couriers updated.)
=======
>>>>>>> 579d610f1e78f1ae13624f4cb01451b71439b772
>>>>>>> a67d9afca2c4a92815a1ef162a2a713e69114643
