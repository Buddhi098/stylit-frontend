import givenchy from "../../../assets/images/stores/givenchy.png"
import ebony from "../../../assets/images/stores/ebony.png"
import bearappeal from "../../../assets/images/stores/bearappeal.png"
import WebApi from "../../../api/WebApi";




export const headCellsAllShops = [
  { id: 'courierName', numeric: true, disablePadding: true, label: 'Courier Name' },
  { id: 'courierEmail', numeric: true, disablePadding: false, label: 'Email' },
  { id: 'courierContactNumber', numeric: true, disablePadding: false, label: 'Contact Number' },
  { id: 'businessType', numeric: true, disablePadding: false, label: 'Business Type' },
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