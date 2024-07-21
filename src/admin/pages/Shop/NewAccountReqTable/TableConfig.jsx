// headCells.js
export const headCells = [
  {
    id: "name", // this id should be same as the key of the object in tableData.js
    numeric: false,
    disablePadding: true,
    label: "Shop Name",
  },
  {
    id: "email",
    numeric: true,
    disablePadding: false,
    label: "Email",
  },
  {
    id: "phone",
    numeric: true,
    disablePadding: false,
    label: "Phone",
  },
  {
    id: "location",
    numeric: true,
    disablePadding: false,
    label: "Store Location",
  },
  {
    id: "owner",
    numeric: true,
    disablePadding: false,
    label: "Business Owner",
  },
  {
    id: "regNo",
    numeric: false,
    disablePadding: false,
    label: "Business Reg No",
  },
  // {
  //   id: "color",
  //   numeric: false,
  //   disablePadding: false,
  //   label: "Color",
  // },
  // {
  //   id: "status",
  //   numeric: false,
  //   disablePadding: false,
  //   label: "Status",
  // },
  // {
  //   id: "payment",
  //   numeric: false,
  //   disablePadding: false,
  //   label: "Payment",
  // },
  {
    id: "actions",
    numeric: false,
    disablePadding: false,
    label: "Actions",
  },
];


// these are filter box options
export const filterOptions = [
  // {
  //   id:'category', // this id should be same as the id in headCells.js
  //   label: "Category",
  //   options: ["Electronics", "Clothing"],
  // },
  // {
  //   id:'color',
  //   label: "Color",
  //   options: ["Green", "Yello"],
  // },
  // {
  //   id:'status',
  //   label: "Status",
  //   options: ["Active", "Disable"],
  // },
  // {
  //   id:'payment',
  //   label: "Payment",
  //   options: ["Paid", "Unpaid"],
  // },
];


// tableData.js
export const tableData = [
  {
    id: 1,
    name: "Lanka Fashion Line",
    email: "lanka.fashion@example.com",
    phone: "+94123456789",
    location: "Colombo",
    owner: "P.E.D.Tharindu",
    regNo: "0015689",
  },
  {
    id: 2,
    name: "Ceylon Trends",
    email: "ceylon.trends@example.com",
    phone: "+94987654321",
    location: "Kandy",
    owner: "K.G.L.Perera",
    regNo: "0025689",
  },
  {
    id: 3,
    name: "Serendib Styles",
    email: "serendib.styles@example.com",
    phone: "+94112233445",
    location: "Galle",
    owner: "S.M.Rajapaksa",
    regNo: "0035689",
  },
  {
    id: 4,
    name: "Island Chic",
    email: "island.chic@example.com",
    phone: "+94988776655",
    location: "Matara",
    owner: "V.K.Jayawardena",
    regNo: "0045689",
  },
  {
    id: 5,
    name: "Tropical Elegance",
    email: "tropical.elegance@example.com",
    phone: "+941133344455",
    location: "Jaffna",
    owner: "R.T.Liyanage",
    regNo: "0055689",
  },
  {
    id: 6,
    name: "Heritage Vogue",
    email: "heritage.vogue@example.com",
    phone: "+949966778899",
    location: "Anuradhapura",
    owner: "N.U.Gamage",
    regNo: "0065689",
  },
  {
    id: 7,
    name: "Urban Island",
    email: "urban.island@example.com",
    phone: "+941144556677",
    location: "Trincomalee",
    owner: "D.S.Wijesinghe",
    regNo: "0075689",
  },
  {
    id: 8,
    name: "Lanka Luxe",
    email: "lanka.luxe@example.com",
    phone: "+949977889900",
    location: "Badulla",
    owner: "H.K.Mendis",
    regNo: "0085689",
  },
  {
    id: 9,
    name: "Saffron Styles",
    email: "saffron.styles@example.com",
    phone: "+941155667788",
    location: "Ratnapura",
    owner: "G.P.Fernando",
    regNo: "0095689",
  },
  {
    id: 10,
    name: "Isle Attire",
    email: "isle.attire@example.com",
    phone: "+949988990011",
    location: "Kurunegala",
    owner: "M.B.Ranatunga",
    regNo: "0105689",
  }
];
  