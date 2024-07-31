import givenchy from "../../../assets/images/stores/givenchy.png"
import ebony from "../../../assets/images/stores/ebony.png"
import bearappeal from "../../../assets/images/stores/bearappeal.png"


// headCells.js
export const headCellsAllShops = [
  { id: 'shopName', numeric: true, disablePadding: true, label: 'Shop Name' },
  { id: 'shopEmail', numeric: true, disablePadding: false, label: 'Email' },
  { id: 'shopContactNumber', numeric: true, disablePadding: false, label: 'Contact Number' },
  { id: 'businessType', numeric: true, disablePadding: false, label: 'Business Type' },
  { id: 'shopLocation', numeric: false, disablePadding: true, label: 'Location',disableSort: true, },
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
      id: 1,
      shopName: "Colombo Couture",
      shopEmail: "colombocouture@gmail.com",
      shopContactNumber: "0771112233",
      password: "couture123",
      confirmPassword: "couture123",
      shopLocation: {
        addressLine1: "123 Galle Road",
        addressLine2: "Colombo 3",
        city: "Colombo",
        province: "Western",
        postalCode: "00300",
        latitude: "6.927079",
        longitude: "79.861244"
      },
      shopBusinessData: {
        businessRegNo: "123456",
        businessRegDate: "2015-06-20",
        businessType: "Private Limited",
        businessEmail: "business@colombocouture.lk",
        businessDocument: "data:application/pdf;base64,JV"
      },
      shopInformation: {
        shopDescription: "High-end fashion boutique in Colombo",
        categories: [
          { title: "Women's Wear" },
          { title: "Men's Wear" }
        ],
        facebookLink: "https://facebook.com/colombocouture",
        instagramLink: "https://instagram.com/colombocouture",
        logo: "data:image/png;base64,iVBORw0KGgoAAAANSU"
      },
      shopBankDetails: {
        accountNo: "1234567890",
        bankName: "HSBC",
        branchName: "Colombo Fort"
      }
    },
    {
      id: 2,
      shopName: "Kandy Kouture",
      shopEmail: "kandykouture@gmail.com",
      shopContactNumber: "0772233444",
      password: "kouture123",
      confirmPassword: "kouture123",
      shopLocation: {
        addressLine1: "45 Temple Street",
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
        businessType: "Private Limited",
        businessEmail: "business@kandykouture.lk",
        businessDocument: "data:application/pdf;base64,JV"
      },
      shopInformation: {
        shopDescription: "Traditional and modern clothing from Kandy",
        categories: [
          { title: "Traditional Wear" },
          { title: "Casual Wear" }
        ],
        facebookLink: "https://facebook.com/kandykouture",
        instagramLink: "https://instagram.com/kandykouture",
        logo: "data:image/png;base64,iVBORw0KGgoAAAANSU"
      },
      shopBankDetails: {
        accountNo: "2233445566",
        bankName: "Commercial Bank",
        branchName: "Kandy Main"
      }
    },
    {
      id: 3,
      shopName: "Galle Garments",
      shopEmail: "gallegarments@gmail.com",
      shopContactNumber: "0773344556",
      password: "garments123",
      confirmPassword: "garments123",
      shopLocation: {
        addressLine1: "12 Lighthouse Street",
        addressLine2: "Galle Fort",
        city: "Galle",
        province: "Southern",
        postalCode: "80000",
        latitude: "6.032871",
        longitude: "80.217036"
      },
      shopBusinessData: {
        businessRegNo: "345678",
        businessRegDate: "2012-03-10",
        businessType: "Private Limited",
        businessEmail: "business@gallegarments.lk",
        businessDocument: "data:application/pdf;base64,JV"
      },
      shopInformation: {
        shopDescription: "Exclusive garments from the heart of Galle",
        categories: [
          { title: "Beach Wear" },
          { title: "Kids' Wear" }
        ],
        facebookLink: "https://facebook.com/gallegarments",
        instagramLink: "https://instagram.com/gallegarments",
        logo: "data:image/png;base64,iVBORw0KGgoAAAANSU"
      },
      shopBankDetails: {
        accountNo: "3344556677",
        bankName: "Sampath Bank",
        branchName: "Galle Fort"
      }
    },
    {
      id: 4,
      shopName: "Jaffna Jute",
      shopEmail: "jaffnajute@gmail.com",
      shopContactNumber: "0774455667",
      password: "jute123",
      confirmPassword: "jute123",
      shopLocation: {
        addressLine1: "67 Temple Road",
        addressLine2: "Jaffna",
        city: "Jaffna",
        province: "Northern",
        postalCode: "40000",
        latitude: "9.661496",
        longitude: "80.025497"
      },
      shopBusinessData: {
        businessRegNo: "456789",
        businessRegDate: "2011-07-22",
        businessType: "Private Limited",
        businessEmail: "business@jaffnajute.lk",
        businessDocument: "data:application/pdf;base64,JV"
      },
      shopInformation: {
        shopDescription: "Handcrafted jute products from Jaffna",
        categories: [
          { title: "Accessories" },
          { title: "Bags" }
        ],
        facebookLink: "https://facebook.com/jaffnajute",
        instagramLink: "https://instagram.com/jaffnajute",
        logo: "data:image/png;base64,iVBORw0KGgoAAAANSU"
      },
      shopBankDetails: {
        accountNo: "4455667788",
        bankName: "People's Bank",
        branchName: "Jaffna Main"
      }
    },
    {
      id: 5,
      shopName: "Negombo Niche",
      shopEmail: "negomboniche@gmail.com",
      shopContactNumber: "0775566778",
      password: "niche123",
      confirmPassword: "niche123",
      shopLocation: {
        addressLine1: "89 Sea Street",
        addressLine2: "Negombo",
        city: "Negombo",
        province: "Western",
        postalCode: "11500",
        latitude: "7.200850",
        longitude: "79.873679"
      },
      shopBusinessData: {
        businessRegNo: "567890",
        businessRegDate: "2014-08-19",
        businessType: "Private Limited",
        businessEmail: "business@negomboniche.lk",
        businessDocument: "data:application/pdf;base64,JV"
      },
      shopInformation: {
        shopDescription: "Unique clothing designs from Negombo",
        categories: [
          { title: "Resort Wear" },
          { title: "Formal Wear" }
        ],
        facebookLink: "https://facebook.com/negomboniche",
        instagramLink: "https://instagram.com/negomboniche",
        logo: "data:image/png;base64,iVBORw0KGgoAAAANSU"
      },
      shopBankDetails: {
        accountNo: "5566778899",
        bankName: "Bank of Ceylon",
        branchName: "Negombo"
      }
    },
    {
      id: 6,
      shopName: "Matara Modes",
      shopEmail: "mataramodes@gmail.com",
      shopContactNumber: "0776677889",
      password: "modes123",
      confirmPassword: "modes123",
      shopLocation: {
        addressLine1: "34 Beach Road",
        addressLine2: "Matara",
        city: "Matara",
        province: "Southern",
        postalCode: "81000",
        latitude: "5.948351",
        longitude: "80.535246"
      },
      shopBusinessData: {
        businessRegNo: "678901",
        businessRegDate: "2016-09-13",
        businessType: "Private Limited",
        businessEmail: "business@mataramodes.lk",
        businessDocument: "data:application/pdf;base64,JV"
      },
      shopInformation: {
        shopDescription: "Fashionable attire from Matara",
        categories: [
          { title: "Casual Wear" },
          { title: "Ethnic Wear" }
        ],
        facebookLink: "https://facebook.com/mataramodes",
        instagramLink: "https://instagram.com/mataramodes",
        logo: "data:image/png;base64,iVBORw0KGgoAAAANSU"
      },
      shopBankDetails: {
        accountNo: "6677889900",
        bankName: "HNB",
        branchName: "Matara"
      }
    },
    {
      id: 7,
      shopName: "Trinco Trends",
      shopEmail: "trincotrends@gmail.com",
      shopContactNumber: "0777788990",
      password: "trends123",
      confirmPassword: "trends123",
      shopLocation: {
        addressLine1: "22 Main Street",
        addressLine2: "Trincomalee",
        city: "Trincomalee",
        province: "Eastern",
        postalCode: "31000",
        latitude: "8.587360",
        longitude: "81.215158"
      },
      shopBusinessData: {
        businessRegNo: "789012",
        businessRegDate: "2013-04-25",
        businessType: "Private Limited",
        businessEmail: "business@trincotrends.lk",
        businessDocument: "data:application/pdf;base64,JV"
      },
      shopInformation: {
        shopDescription: "Trendy and stylish clothing from Trincomalee",
        categories: [
          { title: "Beach Wear" },
          { title: "Active Wear" }
        ],
        facebookLink: "https://facebook.com/trincotrends",
        instagramLink: "https://instagram.com/trincotrends",
        logo: "data:image/png;base64,iVBORw0KGgoAAAANSU"
      },
      shopBankDetails: {
        accountNo: "7788990011",
        bankName: "NDB",
        branchName: "Trincomalee"
      }
    },
    {
      id: 8,
      shopName: "Batticaloa Boutique",
      shopEmail: "batticaloaboutique@gmail.com",
      shopContactNumber: "0778899001",
      password: "boutique123",
      confirmPassword: "boutique123",
      shopLocation: {
        addressLine1: "56 Lake Road",
        addressLine2: "Batticaloa",
        city: "Batticaloa",
        province: "Eastern",
        postalCode: "30000",
        latitude: "7.712235",
        longitude: "81.692516"
      },
      shopBusinessData: {
        businessRegNo: "890123",
        businessRegDate: "2017-11-29",
        businessType: "Private Limited",
        businessEmail: "business@batticaloaboutique.lk",
        businessDocument: "data:application/pdf;base64,JV"
      },
      shopInformation: {
        shopDescription: "Elegant boutique clothing from Batticaloa",
        categories: [
          { title: "Evening Wear" },
          { title: "Party Wear" }
        ],
        facebookLink: "https://facebook.com/batticaloaboutique",
        instagramLink: "https://instagram.com/batticaloaboutique",
        logo: "data:image/png;base64,iVBORw0KGgoAAAANSU"
      },
      shopBankDetails: {
        accountNo: "8899001122",
        bankName: "DFCC Bank",
        branchName: "Batticaloa"
      }
    },
    {
      id: 9,
      shopName: "Ratnapura Rags",
      shopEmail: "ratnapurarags@gmail.com",
      shopContactNumber: "0779900112",
      password: "rags123",
      confirmPassword: "rags123",
      shopLocation: {
        addressLine1: "98 Gem Street",
        addressLine2: "Ratnapura",
        city: "Ratnapura",
        province: "Sabaragamuwa",
        postalCode: "70000",
        latitude: "6.682780",
        longitude: "80.399935"
      },
      shopBusinessData: {
        businessRegNo: "901234",
        businessRegDate: "2018-02-14",
        businessType: "Private Limited",
        businessEmail: "business@ratnapurarags.lk",
        businessDocument: "data:application/pdf;base64,JV"
      },
      shopInformation: {
        shopDescription: "Rugged and stylish clothing from Ratnapura",
        categories: [
          { title: "Outdoor Wear" },
          { title: "Work Wear" }
        ],
        facebookLink: "https://facebook.com/ratnapurarags",
        instagramLink: "https://instagram.com/ratnapurarags",
        logo: "data:image/png;base64,iVBORw0KGgoAAAANSU"
      },
      shopBankDetails: {
        accountNo: "9900112233",
        bankName: "Union Bank",
        branchName: "Ratnapura"
      }
    },
    {
      id: 10,
      shopName: "Anuradhapura Attire",
      shopEmail: "anuradhapuraattire@gmail.com",
      shopContactNumber: "0771011123",
      password: "attire123",
      confirmPassword: "attire123",
      shopLocation: {
        addressLine1: "77 Sacred City",
        addressLine2: "Anuradhapura",
        city: "Anuradhapura",
        province: "North Central",
        postalCode: "50000",
        latitude: "8.311400",
        longitude: "80.403651"
      },
      shopBusinessData: {
        businessRegNo: "123456",
        businessRegDate: "2015-05-25",
        businessType: "Private Limited",
        businessEmail: "business@anuradhapuraattire.lk",
        businessDocument: "data:application/pdf;base64,JV"
      },
      shopInformation: {
        shopDescription: "Traditional attire from the ancient city of Anuradhapura",
        categories: [
          { title: "Traditional Wear" },
          { title: "Cultural Wear" }
        ],
        facebookLink: "https://facebook.com/anuradhapuraattire",
        instagramLink: "https://instagram.com/anuradhapuraattire",
        logo: "data:image/png;base64,iVBORw0KGgoAAAANSU"
      },
      shopBankDetails: {
        accountNo: "1011122334",
        bankName: "Pan Asia Bank",
        branchName: "Anuradhapura"
      }
    },
    {
      id: 11,
      shopName: "Kurunegala Kloset",
      shopEmail: "kurunegalakloset@gmail.com",
      shopContactNumber: "0772022234",
      password: "kloset123",
      confirmPassword: "kloset123",
      shopLocation: {
        addressLine1: "34 Railway Avenue",
        addressLine2: "Kurunegala",
        city: "Kurunegala",
        province: "North Western",
        postalCode: "60000",
        latitude: "7.486302",
        longitude: "80.360896"
      },
      shopBusinessData: {
        businessRegNo: "234567",
        businessRegDate: "2016-10-18",
        businessType: "Private Limited",
        businessEmail: "business@kurunegalakloset.lk",
        businessDocument: "data:application/pdf;base64,JV"
      },
      shopInformation: {
        shopDescription: "Stylish and affordable clothing from Kurunegala",
        categories: [
          { title: "Casual Wear" },
          { title: "Formal Wear" }
        ],
        facebookLink: "https://facebook.com/kurunegalakloset",
        instagramLink: "https://instagram.com/kurunegalakloset",
        logo: "data:image/png;base64,iVBORw0KGgoAAAANSU"
      },
      shopBankDetails: {
        accountNo: "2022233445",
        bankName: "Seylan Bank",
        branchName: "Kurunegala"
      }
    },
    {
      id: 12,
      shopName: "Nuwara Eliya Nook",
      shopEmail: "nuwaraeliyanook@gmail.com",
      shopContactNumber: "0773033345",
      password: "nook123",
      confirmPassword: "nook123",
      shopLocation: {
        addressLine1: "56 Hill Street",
        addressLine2: "Nuwara Eliya",
        city: "Nuwara Eliya",
        province: "Central",
        postalCode: "22200",
        latitude: "6.949727",
        longitude: "80.789276"
      },
      shopBusinessData: {
        businessRegNo: "345678",
        businessRegDate: "2017-01-15",
        businessType: "Private Limited",
        businessEmail: "business@nuwaraeliyanook.lk",
        businessDocument: "data:application/pdf;base64,JV"
      },
      shopInformation: {
        shopDescription: "Cozy and fashionable clothing from Nuwara Eliya",
        categories: [
          { title: "Winter Wear" },
          { title: "Casual Wear" }
        ],
        facebookLink: "https://facebook.com/nuwaraeliyanook",
        instagramLink: "https://instagram.com/nuwaraeliyanook",
        logo: "data:image/png;base64,iVBORw0KGgoAAAANSU"
      },
      shopBankDetails: {
        accountNo: "3033344556",
        bankName: "Nations Trust Bank",
        branchName: "Nuwara Eliya"
      }
    }
  ];
    

