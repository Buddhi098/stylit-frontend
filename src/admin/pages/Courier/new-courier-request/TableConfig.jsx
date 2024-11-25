import givenchy from "../../../assets/images/stores/givenchy.png"
import ebony from "../../../assets/images/stores/ebony.png"
import bearappeal from "../../../assets/images/stores/bearappeal.png"
import WebApi from "../../../api/WebApi";


// headCells.js
export const headCellsPendingRequests = [
  { id: 'courierName', numeric: true, disablePadding: true, label: 'Courier Name' },
  { id: 'courierEmail', numeric: true, disablePadding: false, label: 'Email' },
  { id: 'courierContactNumber', numeric: true, disablePadding: false, label: 'Contact Number' },
  { id: 'businessType', numeric: true, disablePadding: false, label: 'Business Type' },
  { id: 'shopLocation', numeric: false, disablePadding: true, label: 'Location',disableSort: true, },
    {
      id: "actions",
      numeric: false,
      disablePadding: false,
      label: "Actions",
      disableSort: true,
    },
  ];

  export const headCellsRejectedDeliveries = [
    { id: 'shopName', numeric: true, disablePadding: true, label: 'Shop Name' },
  { id: 'shopEmail', numeric: true, disablePadding: false, label: 'Email' },
  { id: 'shopContactNumber', numeric: true, disablePadding: false, label: 'Contact Number' },
  { id: 'businessType', numeric: true, disablePadding: false, label: 'Business Type' },
  { id: 'shopLocation', numeric: false, disablePadding: true, label: 'Location',disableSort: true, },
    
    {
      id: "status",
      numeric: false,
      disablePadding: false,
      label: "Status",
      disableSort: true,
    },
  ];
  
  // these are filter box options
  export const filterOptions = [
   
  ];

  export const fetchTableData = async ({ mode }) => {
    try {
      const response = await WebApi.get(`/public/user/getAllcourier`); 
      console.log(response.data.courier)
      const data = mode === "pending" 
        ? response.data.courier.filter((courier) => courier.status === "pending") 
        : response.data.courier.filter((courier) => courier.status === "reject");
      
      console.log(data); 
      
      return data;
  
    } catch (error) {
      console.error("Error fetching table data:", error);
      throw error;
    }
  };


  
  
  // tableData.js
  export const tableData = [
      {
        courierName: "Kamal Perera",
        courierEmail: "kamal.perera@example.com",
        courierContactNumber: "0712345678",
        courierLocation: {
          addressLine1: "10 Galle Road",
          addressLine2: "Colpetty",
          city: "Colombo",
          province: "Western",
          postalCode: "00300",
          latitude: "6.927079",
          longitude: "79.861244"
        },
        courierBusinessData: {
          businessRegNo: "12345",
          businessRegDate: "2005-05-10",
          businessType: "Private Limited",
          businessEmail: "kamal.business@example.com",
          businessDocument: "file.reg12345.pdf"
        }
      },
      {
        courierName: "Nimal de Silva",
        courierEmail: "nimal.desilva@example.com",
        courierContactNumber: "0722345678",
        courierLocation: {
          addressLine1: "23 Kandy Road",
          addressLine2: "Peradeniya",
          city: "Kandy",
          province: "Central",
          postalCode: "20000",
          latitude: "7.290572",
          longitude: "80.633726"
        },
        courierBusinessData: {
          businessRegNo: "67890",
          businessRegDate: "2010-03-15",
          businessType: "Sole Proprietorship",
          businessEmail: "nimal.business@example.com",
          businessDocument: "file.reg67890.pdf"
        }
      },
      {
        courierName: "Sunil Fernando",
        courierEmail: "sunil.fernando@example.com",
        courierContactNumber: "0773456789",
        courierLocation: {
          addressLine1: "5 Lake Drive",
          addressLine2: "Kurunegala",
          city: "Kurunegala",
          province: "North Western",
          postalCode: "60000",
          latitude: "7.486302",
          longitude: "80.364727"
        },
        courierBusinessData: {
          businessRegNo: "11223",
          businessRegDate: "2015-08-20",
          businessType: "Partnership",
          businessEmail: "sunil.business@example.com",
          businessDocument: "file.reg11223.pdf"
        }
      },
      {
        courierName: "Tharanga Weerasinghe",
        courierEmail: "tharanga.weerasinghe@example.com",
        courierContactNumber: "0784567890",
        courierLocation: {
          addressLine1: "12 Temple Road",
          addressLine2: "Ratnapura",
          city: "Ratnapura",
          province: "Sabaragamuwa",
          postalCode: "70000",
          latitude: "6.682781",
          longitude: "80.399490"
        },
        courierBusinessData: {
          businessRegNo: "44556",
          businessRegDate: "2000-12-05",
          businessType: "Private Limited",
          businessEmail: "tharanga.business@example.com",
          businessDocument: "file.reg44556.pdf"
        }
      },
      {
        courierName: "Chandrika Peris",
        courierEmail: "chandrika.peris@example.com",
        courierContactNumber: "0705678901",
        courierLocation: {
          addressLine1: "7 Sea View Avenue",
          addressLine2: "Negombo",
          city: "Negombo",
          province: "Western",
          postalCode: "11500",
          latitude: "7.200839",
          longitude: "79.873675"
        },
        courierBusinessData: {
          businessRegNo: "77889",
          businessRegDate: "1995-11-10",
          businessType: "Cooperative",
          businessEmail: "chandrika.business@example.com",
          businessDocument: "file.reg77889.pdf"
        }
      },
      {
        courierName: "Samanthi Jayasinghe",
        courierEmail: "samanthi.jayasinghe@example.com",
        courierContactNumber: "0716789012",
        courierLocation: {
          addressLine1: "19 Flower Road",
          addressLine2: "Mount Lavinia",
          city: "Dehiwala-Mount Lavinia",
          province: "Western",
          postalCode: "10370",
          latitude: "6.830236",
          longitude: "79.864045"
        },
        courierBusinessData: {
          businessRegNo: "99001",
          businessRegDate: "2018-02-25",
          businessType: "Limited Liability",
          businessEmail: "samanthi.business@example.com",
          businessDocument: "file.reg99001.pdf"
        }
      },
      {
        courierName: "Ruwan Wickramasinghe",
        courierEmail: "ruwan.wickramasinghe@example.com",
        courierContactNumber: "0727890123",
        courierLocation: {
          addressLine1: "11 Main Street",
          addressLine2: "Galle Fort",
          city: "Galle",
          province: "Southern",
          postalCode: "80000",
          latitude: "6.033340",
          longitude: "80.216735"
        },
        courierBusinessData: {
          businessRegNo: "22434",
          businessRegDate: "1998-06-30",
          businessType: "Private Limited",
          businessEmail: "ruwan.business@example.com",
          businessDocument: "file.reg22434.pdf"
        }
      },
      {
        courierName: "Anusha Rajapaksha",
        courierEmail: "anusha.rajapaksha@example.com",
        courierContactNumber: "0738901234",
        courierLocation: {
          addressLine1: "8 Green Lane",
          addressLine2: "Jaffna Town",
          city: "Jaffna",
          province: "Northern",
          postalCode: "40000",
          latitude: "9.661497",
          longitude: "80.025503"
        },
        courierBusinessData: {
          businessRegNo: "55667",
          businessRegDate: "2003-04-14",
          businessType: "Sole Proprietorship",
          businessEmail: "anusha.business@example.com",
          businessDocument: "file.reg55667.pdf"
        }
      },
      {
        courierName: "Ravi Karunaratne",
        courierEmail: "ravi.karunaratne@example.com",
        courierContactNumber: "0749012345",
        courierLocation: {
          addressLine1: "25 Hill Side",
          addressLine2: "Badulla",
          city: "Badulla",
          province: "Uva",
          postalCode: "90000",
          latitude: "6.989712",
          longitude: "81.056097"
        },
        courierBusinessData: {
          businessRegNo: "88990",
          businessRegDate: "2012-09-23",
          businessType: "Partnership",
          businessEmail: "ravi.business@example.com",
          businessDocument: "file.reg88990.pdf"
        }
      },
      {
        courierName: "Shanika Fonseka",
        courierEmail: "shanika.fonseka@example.com",
        courierContactNumber: "0750123456",
        courierLocation: {
          addressLine1: "6 School Lane",
          addressLine2: "Nuwara Eliya",
          city: "Nuwara Eliya",
          province: "Central",
          postalCode: "22200",
          latitude: "6.949728",
          longitude: "80.789139"
        },
        courierBusinessData: {
          businessRegNo: "99112",
          businessRegDate: "2017-01-05",
          businessType: "Cooperative",
          businessEmail: "shanika.business@example.com",
          businessDocument: "file.reg99112.pdf"
        }
      },
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
        }
      },
      {
        courierName: "Ishara Weerakoon",
        courierEmail: "ishara.weerakoon@example.com",
        courierContactNumber: "0772345678",
        courierLocation: {
          addressLine1: "15 Queens Road",
          addressLine2: "Polonnaruwa",
          city: "Polonnaruwa",
          province: "North Central",
          postalCode: "51000",
          latitude: "7.940300",
          longitude: "81.018722"
        },
        courierBusinessData: {
          businessRegNo: "44577",
          businessRegDate: "2011-11-21",
          businessType: "Sole Proprietorship",
          businessEmail: "ishara.business@example.com",
          businessDocument: "file.reg44577.pdf"
        }
      }
    ];
    

   // rejectedDeliveries.js
  export const rejectedDeliveries = [
      {
        courierName: "Priyanka Jayawardena",
        courierEmail: "priyanka.jayawardena@example.com",
        courierContactNumber: "0783456789",
        courierLocation: {
          addressLine1: "34 Palm Grove",
          addressLine2: "Wattala",
          city: "Wattala",
          province: "Western",
          postalCode: "11300",
          latitude: "6.973776",
          longitude: "79.899744"
        },
        courierBusinessData: {
          businessRegNo: "55678",
          businessRegDate: "2002-03-12",
          businessType: "Private Limited",
          businessEmail: "priyanka.business@example.com",
          businessDocument: "file.reg55678.pdf"
        }
      },
      {
        courierName: "Gayantha Perera",
        courierEmail: "gayantha.perera@example.com",
        courierContactNumber: "0714567890",
        courierLocation: {
          addressLine1: "47 Station Road",
          addressLine2: "Matara",
          city: "Matara",
          province: "Southern",
          postalCode: "81000",
          latitude: "5.948514",
          longitude: "80.535328"
        },
        courierBusinessData: {
          businessRegNo: "66789",
          businessRegDate: "2004-05-18",
          businessType: "Partnership",
          businessEmail: "gayantha.business@example.com",
          businessDocument: "file.reg66789.pdf"
        }
      },
      {
        courierName: "Ayesha Gunasekara",
        courierEmail: "ayesha.gunasekara@example.com",
        courierContactNumber: "0725678901",
        courierLocation: {
          addressLine1: "5 Kings Street",
          addressLine2: "Batticaloa",
          city: "Batticaloa",
          province: "Eastern",
          postalCode: "30000",
          latitude: "7.729975",
          longitude: "81.707940"
        },
        courierBusinessData: {
          businessRegNo: "77890",
          businessRegDate: "2008-07-22",
          businessType: "Sole Proprietorship",
          businessEmail: "ayesha.business@example.com",
          businessDocument: "file.reg77890.pdf"
        }
      },
      {
        courierName: "Hirantha Wijesekera",
        courierEmail: "hirantha.wijesekera@example.com",
        courierContactNumber: "0736789012",
        courierLocation: {
          addressLine1: "29 River Road",
          addressLine2: "Ampara",
          city: "Ampara",
          province: "Eastern",
          postalCode: "32000",
          latitude: "7.290572",
          longitude: "81.674536"
        },
        courierBusinessData: {
          businessRegNo: "88901",
          businessRegDate: "2001-09-03",
          businessType: "Private Limited",
          businessEmail: "hirantha.business@example.com",
          businessDocument: "file.reg88901.pdf"
        }
      },
      {
        courierName: "Thilini Fonseka",
        courierEmail: "thilini.fonseka@example.com",
        courierContactNumber: "0747890123",
        courierLocation: {
          addressLine1: "17 Forest Drive",
          addressLine2: "Anuradhapura",
          city: "Anuradhapura",
          province: "North Central",
          postalCode: "50000",
          latitude: "8.312235",
          longitude: "80.413055"
        },
        courierBusinessData: {
          businessRegNo: "99012",
          businessRegDate: "2010-11-15",
          businessType: "Partnership",
          businessEmail: "thilini.business@example.com",
          businessDocument: "file.reg99012.pdf"
        }
      },
      {
        courierName: "Lakshitha Ratnayake",
        courierEmail: "lakshitha.ratnayake@example.com",
        courierContactNumber: "0758901234",
        courierLocation: {
          addressLine1: "33 Beach Road",
          addressLine2: "Chilaw",
          city: "Chilaw",
          province: "North Western",
          postalCode: "61000",
          latitude: "7.576529",
          longitude: "79.795751"
        },
        courierBusinessData: {
          businessRegNo: "11023",
          businessRegDate: "1999-01-21",
          businessType: "Sole Proprietorship",
          businessEmail: "lakshitha.business@example.com",
          businessDocument: "file.reg11023.pdf"
        }
      },
      {
        courierName: "Nadeeka Seneviratne",
        courierEmail: "nadeeka.seneviratne@example.com",
        courierContactNumber: "0769012345",
        courierLocation: {
          addressLine1: "41 Park Lane",
          addressLine2: "Hambantota",
          city: "Hambantota",
          province: "Southern",
          postalCode: "82000",
          latitude: "6.124993",
          longitude: "81.118539"
        },
        courierBusinessData: {
          businessRegNo: "22134",
          businessRegDate: "2013-06-11",
          businessType: "Private Limited",
          businessEmail: "nadeeka.business@example.com",
          businessDocument: "file.reg22134.pdf"
        }
      }
    ];
    