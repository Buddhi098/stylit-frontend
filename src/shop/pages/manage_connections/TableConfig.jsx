// import givenchy from "../../assets/images/stores/givenchy.png"
// import ebony from "../../assets/images/stores/ebony.png"
// import bearappeal from "../../assets/images/stores/bearappeal.png"
// import nolimit from "../../assets/images/stores/nolimit.png"
// import carnage from "../../assets/images/stores/carnage.png"
// import hameedia from "../../assets/images/stores/hameedia.png"
// import coolplanet from "../../assets/images/stores/coolplanet.png"
// import tshirtrepublic from "../../assets/images/stores/tshirtrepublic.jpeg"
// import street82 from "../../assets/images/stores/street82.png"
// import fashionbug from "../../assets/images/stores/fashionbug.png"
// import moose from "../../assets/images/stores/moose.png"
// import thilakawardhana from "../../assets/images/stores/thilakawardhana.png"

import WebApi from "../../api/WebApi";


export const fetchData = async () => {
  try {
    const response = await WebApi("/public/user/getAllcourier");
    console.log("response", response.data);
    const courierData = response.data?.courier.map((courier) => {
      return {
        id: courier.id,
        name: courier.courierName,
        branches: courier.courierBusinessData?.availableLocations.join(",") || "",
      };
    });
    console.log("courierData", courierData);
    return courierData; 
  } catch (error) {
    console.error("Error fetching courier data:", error);
    return [];
  }
};

export const followRequests = [
  { 
    id: 1, 
    name: "Loomis Express", 
    // profilePic: nolimit, 
    time: "3h" 
  },
  { 
    id: 2, 
    name: "ParcelHero", 
    // profilePic: coolplanet, 
    time: "10h" 
  },
  { 
    id: 3, 
    name: "Tuffnells", 
    // profilePic: hameedia, 
    time: "4h" 
  },
  { 
    id: 4, 
    name: "CollectPlus", 
    // profilePic: street82, 
    time: "3h" 
  },
  { 
    id: 5, 
    name: "Parcel2Go", 
    // profilePic: bearappeal, 
    time: "2h" 
  },
];
