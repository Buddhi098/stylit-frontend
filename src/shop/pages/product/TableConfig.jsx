import image1 from '../../assets/images/products/tshirt.jpg'
import image2 from '../../assets/images/products/denim.jpg'
import image3 from '../../assets/images/products/Shoes.jpg'
import image4 from '../../assets/images/products/scarf.jpg'
import image5 from '../../assets/images/products/leather jacket.jpg'
import image6 from '../../assets/images/products/Casual Shirt.jpg'
import image7 from '../../assets/images/products/Rings.jpg'
import image8 from '../../assets/images/products/shirt.jpg'
import image9 from '../../assets/images/products/yoga pants.jpg'
import image10 from '../../assets/images/products/backpack.jpg'
import image11 from '../../assets/images/products/sunglasses.jpg'
import image12 from '../../assets/images/products/perfume.jpg'


// headCells.js
export const headCells = [
  {
    id: "id", // this id should be same as the key of the object in tableData.js
    numeric: false,
    disablePadding: true,
    label: "PRODUCT INFO",
  },
  {
    id: "imageURL", 
    numeric: false,
    disablePadding: true, 
  },
  {
    id: "brand",
    numeric: true,
    disablePadding: false,
    label: "BRAND",
  },
  {
    id: "category",
    numeric: false,
    disablePadding: false,
    label: "Category",
  },
  {
    id: "subCategory",
    numeric: true,
    disablePadding: false,
    label: "SUBCATEGORY",
  },
  {
    id: "gender",
    numeric: false,
    disablePadding: false,
     label: "Gender",
  },
  {
    id: "price",
    numeric: true,
    disablePadding: false,
    label: "PRICE (Rs.)",
  },
  // {
  //   id: "payment",
  //   numeric: false,
  //   disablePadding: false,
  //   label: "PAYMENT",
  // },
  {
    id: "actions",
    numeric: false,
    disablePadding: false,
    label: "ACTIONS",
  },
];

// these are filter box options
export const filterOptions = [
  {
    id:'category', // this id should be same as the id in headCells.js
    label: "Category",
    options: [
      "tops",
      "bottoms",
      "dresses",
      "outerwear",
      "suits",
      "footwear",
      "bags",
      "accessories",
      "lingerie",
      "underwear"
    ],
  },
  {
    id:'color',
    label: "Color",
    options: [],
  },
  {
    id:'gender',
    label: "Gender",
    options: ["men", "women"],
  },
  // {
  //   id:'payment',
  //   label: "Payment",
  //   options: ["Paid", "Unpaid"],
  // },
  
];


// tableData.js
export const tableData = [

];

  