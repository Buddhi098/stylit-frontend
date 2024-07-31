import givenchy from "../../../assets/images/stores/givenchy.png"
import ebony from "../../../assets/images/stores/ebony.png"
import bearappeal from "../../../assets/images/stores/bearappeal.png"


// headCells.js
export const headCellsPendingRequests = [
  { id: 'shopName', numeric: true, disablePadding: true, label: 'Shop Name' },
  { id: 'shopEmail', numeric: true, disablePadding: false, label: 'Email' },
  { id: 'shopContactNumber', numeric: true, disablePadding: false, label: 'Contact Number' },
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
      shopName: "Imogene Griffin",
      shopEmail: "year3group22@gmail.com",
      shopContactNumber: "896",
      password: "123456",
      confirmPassword: "123456",
      shopLocation: {
        addressLine1: "949 West First Parkway",
        addressLine2: "Qui rerum blanditiis",
        city: "Ea illum rem sequi",
        province: "Modi mollit voluptat",
        postalCode: "1234",
        latitude: "6.9388614",
        longitude: "79.8542005"
      },
      shopBusinessData: {
        businessRegNo: "758",
        businessRegDate: "1986-06-12",
        businessType: "Deleniti consequuntu",
        businessEmail: "cokygaje@mailinator.com",
        businessDocument: "data:application/pdf;base64,JV"
      },
      shopInformation: {
        shopDescription: "Ea sed maxime ex ut",
        categories: [
          {
            title: "Outerwear"
          }
        ],
        facebookLink: "Autem dolor nemo adi",
        instagramLink: "Consectetur suscipi",
        logo: "data:image/png;base64,iVBORw0KGgoAAAANSU"
      }
    },
    {
      id: 2,
      shopName: "Colombo Electronics",
      shopEmail: "colomboelectronics@gmail.com",
      shopContactNumber: "0779876543",
      password: "electronics123",
      confirmPassword: "electronics123",
      shopLocation: {
        addressLine1: "789 Galle Road",
        addressLine2: "Colombo 04",
        city: "Colombo",
        province: "Western",
        postalCode: "00400",
        latitude: "6.927079",
        longitude: "79.861244"
      },
      shopBusinessData: {
        businessRegNo: "345678",
        businessRegDate: "2015-08-20",
        businessType: "Electronics",
        businessEmail: "colomboelectronics.business@gmail.com",
        businessDocument: "data:application/pdf;base64,JV"
      },
      shopInformation: {
        shopDescription: "Leading electronics store in Colombo",
        categories: [
          {
            title: "Electronics"
          }
        ],
        facebookLink: "https://facebook.com/colomboelectronics",
        instagramLink: "https://instagram.com/colomboelectronics",
        logo: "data:image/png;base64,iVBORw0KGgoAAAANSU"
      }
    },
    {
      id: 3,
      shopName: "Kandy Crafts",
      shopEmail: "kandycrafts@gmail.com",
      shopContactNumber: "0771234567",
      password: "crafts123",
      confirmPassword: "crafts123",
      shopLocation: {
        addressLine1: "456 Temple Road",
        addressLine2: "Kandy",
        city: "Kandy",
        province: "Central",
        postalCode: "20000",
        latitude: "7.290572",
        longitude: "80.633726"
      },
      shopBusinessData: {
        businessRegNo: "789012",
        businessRegDate: "2010-05-15",
        businessType: "Handicrafts",
        businessEmail: "kandycrafts.business@gmail.com",
        businessDocument: "data:application/pdf;base64,JV"
      },
      shopInformation: {
        shopDescription: "Authentic Sri Lankan handicrafts",
        categories: [
          {
            title: "Handicrafts"
          }
        ],
        facebookLink: "https://facebook.com/kandycrafts",
        instagramLink: "https://instagram.com/kandycrafts",
        logo: "data:image/png;base64,iVBORw0KGgoAAAANSU"
      }
    },
    {
      id: 4,
      shopName: "Galle Souvenirs",
      shopEmail: "gallesouvenirs@gmail.com",
      shopContactNumber: "0776543210",
      password: "souvenirs123",
      confirmPassword: "souvenirs123",
      shopLocation: {
        addressLine1: "123 Lighthouse Street",
        addressLine2: "Galle Fort",
        city: "Galle",
        province: "Southern",
        postalCode: "80000",
        latitude: "6.0328",
        longitude: "80.217",
      },
      shopBusinessData: {
        businessRegNo: "567890",
        businessRegDate: "2012-11-30",
        businessType: "Souvenirs",
        businessEmail: "gallesouvenirs.business@gmail.com",
        businessDocument: "data:application/pdf;base64,JV"
      },
      shopInformation: {
        shopDescription: "Unique souvenirs from Galle",
        categories: [
          {
            title: "Souvenirs"
          }
        ],
        facebookLink: "https://facebook.com/gallesouvenirs",
        instagramLink: "https://instagram.com/gallesouvenirs",
        logo: "data:image/png;base64,iVBORw0KGgoAAAANSU"
      }
    },
    {
      id: 5,
      shopName: "Jaffna Spices",
      shopEmail: "jaffnaspices@gmail.com",
      shopContactNumber: "0771122334",
      password: "spices123",
      confirmPassword: "spices123",
      shopLocation: {
        addressLine1: "789 Market Road",
        addressLine2: "Jaffna",
        city: "Jaffna",
        province: "Northern",
        postalCode: "40000",
        latitude: "9.6615",
        longitude: "80.0255"
      },
      shopBusinessData: {
        businessRegNo: "234567",
        businessRegDate: "2018-03-25",
        businessType: "Spices",
        businessEmail: "jaffnaspices.business@gmail.com",
        businessDocument: "data:application/pdf;base64,JV"
      },
      shopInformation: {
        shopDescription: "Authentic Jaffna spices",
        categories: [
          {
            title: "Spices"
          }
        ],
        facebookLink: "https://facebook.com/jaffnaspices",
        instagramLink: "https://instagram.com/jaffnaspices",
        logo: "data:image/png;base64,iVBORw0KGgoAAAANSU"
      }
    },
    {
      id: 6,
      shopName: "Negombo Seafood",
      shopEmail: "negomboseafood@gmail.com",
      shopContactNumber: "0779988776",
      password: "seafood123",
      confirmPassword: "seafood123",
      shopLocation: {
        addressLine1: "456 Beach Road",
        addressLine2: "Negombo",
        city: "Negombo",
        province: "Western",
        postalCode: "11500",
        latitude: "7.2083",
        longitude: "79.8358"
      },
      shopBusinessData: {
        businessRegNo: "678901",
        businessRegDate: "2016-07-10",
        businessType: "Seafood",
        businessEmail: "negomboseafood.business@gmail.com",
        businessDocument: "data:application/pdf;base64,JV"
      },
      shopInformation: {
        shopDescription: "Fresh seafood from Negombo",
        categories: [
          {
            title: "Seafood"
          }
        ],
        facebookLink: "https://facebook.com/negomboseafood",
        instagramLink: "https://instagram.com/negomboseafood",
        logo: "data:image/png;base64,iVBORw0KGgoAAAANSU"
      }
    },
    {
      id: 7,
      shopName: "Matara Textiles",
      shopEmail: "mataratextiles@gmail.com",
      shopContactNumber: "0773344556",
      password: "textiles123",
      confirmPassword: "textiles123",
      shopLocation: {
        addressLine1: "123 Textile Street",
        addressLine2: "Matara",
        city: "Matara",
        province: "Southern",
        postalCode: "81000",
        latitude: "5.9485",
        longitude: "80.5353"
      },
      shopBusinessData: {
        businessRegNo: "345678",
        businessRegDate: "2014-09-05",
        businessType: "Textiles",
        businessEmail: "mataratextiles.business@gmail.com",
        businessDocument: "data:application/pdf;base64,JV"
      },
      shopInformation: {
        shopDescription: "Quality textiles from Matara",
        categories: [
          {
            title: "Textiles"
          }
        ],
        facebookLink: "https://facebook.com/mataratextiles",
        instagramLink: "https://instagram.com/mataratextiles",
        logo: "data:image/png;base64,iVBORw0KGgoAAAANSU"
      }
    },
    {
      id: 8,
      shopName: "Anuradhapura Antiques",
      shopEmail: "anuradhapuraantiques@gmail.com",
      shopContactNumber: "0775566778",
      password: "antiques123",
      confirmPassword: "antiques123",
      shopLocation: {
        addressLine1: "456 Ancient Road",
        addressLine2: "Anuradhapura",
        city: "Anuradhapura",
        province: "North Central",
        postalCode: "50000",
        latitude: "8.3114",
        longitude: "80.4037"
      },
      shopBusinessData: {
        businessRegNo: "789012",
        businessRegDate: "2013-12-15",
        businessType: "Antiques",
        businessEmail: "anuradhapuraantiques.business@gmail.com",
        businessDocument: "data:application/pdf;base64,JV"
      },
      shopInformation: {
        shopDescription: "Historical antiques from Anuradhapura",
        categories: [
          {
            title: "Antiques"
          }
        ],
        facebookLink: "https://facebook.com/anuradhapuraantiques",
        instagramLink: "https://instagram.com/anuradhapuraantiques",
        logo: "data:image/png;base64,iVBORw0KGgoAAAANSU"
      }
    },
    {
      id: 9,
      shopName: "Trincomalee Treasures",
      shopEmail: "trincomaleetreasures@gmail.com",
      shopContactNumber: "0776677889",
      password: "treasures123",
      confirmPassword: "treasures123",
      shopLocation: {
        addressLine1: "789 Beach Road",
        addressLine2: "Trincomalee",
        city: "Trincomalee",
        province: "Eastern",
        postalCode: "31000",
        latitude: "8.5874",
        longitude: "81.2152"
      },
      shopBusinessData: {
        businessRegNo: "890123",
        businessRegDate: "2017-04-20",
        businessType: "Jewelry",
        businessEmail: "trincomaleetreasures.business@gmail.com",
        businessDocument: "data:application/pdf;base64,JV"
      },
      shopInformation: {
        shopDescription: "Exquisite jewelry from Trincomalee",
        categories: [
          {
            title: "Jewelry"
          }
        ],
        facebookLink: "https://facebook.com/trincomaleetreasures",
        instagramLink: "https://instagram.com/trincomaleetreasures",
        logo: "data:image/png;base64,iVBORw0KGgoAAAANSU"
      }
    },
    {
      id: 10,
      shopName: "Kandy Crafts",
    shopEmail: "kandycrafts@gmail.com",
    shopContactNumber: "0771234567",
    password: "crafts123",
    confirmPassword: "crafts123",
    shopLocation: {
      addressLine1: "456 Temple Road",
      addressLine2: "Kandy",
      city: "Kandy",
      province: "Central",
      postalCode: "20000",
      latitude: "7.290572",
      longitude: "80.633726"
    },
    shopBusinessData: {
      businessRegNo: "789012",
      businessRegDate: "2010-05-15",
      businessType: "Handicrafts",
      businessEmail: "kandycrafts.business@gmail.com",
      businessDocument: "data:application/pdf;base64,JV"
    },
    shopInformation: {
      shopDescription: "Authentic Sri Lankan handicrafts",
      categories: [
        {
          title: "Handicrafts"
        }
      ],
      facebookLink: "https://facebook.com/kandycrafts",
      instagramLink: "https://instagram.com/kandycrafts",
      logo: "data:image/png;base64,iVBORw0KGgoAAAANSU"
    }
  },
    
  ];

   // rejectedDeliveries.js
  export const rejectedDeliveries = [
    {
      id: 1,
      shopName: "Colombo Couture",
      shopEmail: "colombocouture@gmail.com",
      shopContactNumber: "0771112233",
      password: "couture123",
      confirmPassword: "couture123",
      shopLocation: {
        addressLine1: "123 Galle Road",
        addressLine2: "Colombo 03",
        city: "Colombo",
        province: "Western",
        postalCode: "00300",
        latitude: "6.927079",
        longitude: "79.861244"
      },
      shopBusinessData: {
        businessRegNo: "123456",
        businessRegDate: "2012-01-10",
        businessType: "Clothing",
        businessEmail: "colombocouture.business@gmail.com",
        businessDocument: "data:application/pdf;base64,JV"
      },
      shopInformation: {
        shopDescription: "High-end fashion boutique in Colombo",
        categories: [
          {
            title: "Clothing"
          }
        ],
        facebookLink: "https://facebook.com/colombocouture",
        instagramLink: "https://instagram.com/colombocouture",
        logo: "data:image/png;base64,iVBORw0KGgoAAAANSU"
      }
    },
    {
      id: 2,
      shopName: "Kandy Kouture",
      shopEmail: "kandykouture@gmail.com",
      shopContactNumber: "0772223344",
      password: "kouture123",
      confirmPassword: "kouture123",
      shopLocation: {
        addressLine1: "456 Temple Road",
        addressLine2: "Kandy",
        city: "Kandy",
        province: "Central",
        postalCode: "20000",
        latitude: "7.290572",
        longitude: "80.633726"
      },
      shopBusinessData: {
        businessRegNo: "789012",
        businessRegDate: "2010-05-15",
        businessType: "Clothing",
        businessEmail: "kandykouture.business@gmail.com",
        businessDocument: "data:application/pdf;base64,JV"
      },
      shopInformation: {
        shopDescription: "Authentic Sri Lankan clothing in Kandy",
        categories: [
          {
            title: "Clothing"
          }
        ],
        facebookLink: "https://facebook.com/kandykouture",
        instagramLink: "https://instagram.com/kandykouture",
        logo: "data:image/png;base64,iVBORw0KGgoAAAANSU"
      }
    },
    {
      id: 3,
      shopName: "Galle Garments",
      shopEmail: "gallegarments@gmail.com",
      shopContactNumber: "0773334455",
      password: "garments123",
      confirmPassword: "garments123",
      shopLocation: {
        addressLine1: "789 Lighthouse Street",
        addressLine2: "Galle Fort",
        city: "Galle",
        province: "Southern",
        postalCode: "80000",
        latitude: "6.0328",
        longitude: "80.217",
      },
      shopBusinessData: {
        businessRegNo: "345678",
        businessRegDate: "2015-08-20",
        businessType: "Clothing",
        businessEmail: "gallegarments.business@gmail.com",
        businessDocument: "data:application/pdf;base64,JV"
      },
      shopInformation: {
        shopDescription: "Traditional and modern clothing in Galle",
        categories: [
          {
            title: "Clothing"
          }
        ],
        facebookLink: "https://facebook.com/gallegarments",
        instagramLink: "https://instagram.com/gallegarments",
        logo: "data:image/png;base64,iVBORw0KGgoAAAANSU"
      }
    },
    {
      id: 4,
      shopName: "Jaffna Jumpsuits",
      shopEmail: "jaffnajumpsuits@gmail.com",
      shopContactNumber: "0774445566",
      password: "jumpsuits123",
      confirmPassword: "jumpsuits123",
      shopLocation: {
        addressLine1: "101 Main Street",
        addressLine2: "Jaffna",
        city: "Jaffna",
        province: "Northern",
        postalCode: "40000",
        latitude: "9.6615",
        longitude: "80.0255"
      },
      shopBusinessData: {
        businessRegNo: "901234",
        businessRegDate: "2018-03-25",
        businessType: "Clothing",
        businessEmail: "jaffnajumpsuits.business@gmail.com",
        businessDocument: "data:application/pdf;base64,JV"
      },
      shopInformation: {
        shopDescription: "Trendy jumpsuits and more in Jaffna",
        categories: [
          {
            title: "Clothing"
          }
        ],
        facebookLink: "https://facebook.com/jaffnajumpsuits",
        instagramLink: "https://instagram.com/jaffnajumpsuits",
        logo: "data:image/png;base64,iVBORw0KGgoAAAANSU"
      }
    },
    {
      id: 5,
      shopName: "Negombo Niche",
      shopEmail: "negomboniche@gmail.com",
      shopContactNumber: "0775556677",
      password: "niche123",
      confirmPassword: "niche123",
      shopLocation: {
        addressLine1: "202 Beach Road",
        addressLine2: "Negombo",
        city: "Negombo",
        province: "Western",
        postalCode: "11500",
        latitude: "7.2083",
        longitude: "79.8358"
      },
      shopBusinessData: {
        businessRegNo: "567890",
        businessRegDate: "2016-11-05",
        businessType: "Clothing",
        businessEmail: "negomboniche.business@gmail.com",
        businessDocument: "data:application/pdf;base64,JV"
      },
      shopInformation: {
        shopDescription: "Exclusive beachwear and more in Negombo",
        categories: [
          {
            title: "Clothing"
          }
        ],
        facebookLink: "https://facebook.com/negomboniche",
        instagramLink: "https://instagram.com/negomboniche",
        logo: "data:image/png;base64,iVBORw0KGgoAAAANSU"
      }
    },
    {
      id: 6,
      shopName: "Matara Moda",
      shopEmail: "mataramoda@gmail.com",
      shopContactNumber: "0776667788",
      password: "moda123",
      confirmPassword: "moda123",
      shopLocation: {
        addressLine1: "303 Main Street",
        addressLine2: "Matara",
        city: "Matara",
        province: "Southern",
        postalCode: "81000",
        latitude: "5.9485",
        longitude: "80.5353"
      },
      shopBusinessData: {
        businessRegNo: "678901",
        businessRegDate: "2017-07-15",
        businessType: "Clothing",
        businessEmail: "mataramoda.business@gmail.com",
        businessDocument: "data:application/pdf;base64,JV"
      },
      shopInformation: {
        shopDescription: "Fashionable clothing for all in Matara",
        categories: [
          {
            title: "Clothing"
          }
        ],
        facebookLink: "https://facebook.com/mataramoda",
        instagramLink: "https://instagram.com/mataramoda",
        logo: "data:image/png;base64,iVBORw0KGgoAAAANSU"
      }
    }
  ];
    