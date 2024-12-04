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
    const response = await WebApi.get(`public/user/getAllConnectableAndConnectedCouriers/${localStorage.getItem("id")}`);
    console.log("response", response.data);
    const courierData = response.data.map((courier) => {
      return {
        courier_id: courier.courierId,
        request_id: courier.requestId,
        name: courier.courierName,
        branches: courier.branches.join(",") || "",
        status: courier.status
      };
    });
    console.log("courierData", courierData);
    return courierData;
  } catch (error) {
    console.error("Error fetching courier data:", error);
    return [];
  }
};

export const fetchConnectRequest = async () => {
  try {
    const response = await WebApi.get(`public/user/getAllPendingReceiveRequestToShop/${localStorage.getItem("id")}`);
    console.log("response", response.data);

    const requestData = response.data.map((request) => {
      const time = timeAgo(request.date);
      return {
        id: request.requestId,
        name: request.courierName,
        time: time
      };
    });

    console.log("requestData", requestData);
    return requestData;
  } catch (error) {
    console.error("Error fetching courier data:", error);
    return [];
  }
};

export const changeRequestStatus = async (requestId, status) => {
  try {
    const data = {
      "requestId": requestId,
      "status": status
    }
    const response = await WebApi.put(`public/user/updateRequestStatus`, data);
    console.log("response_for_status", response.data);
    return response.data;
  } catch (error) {
    console.error("Error updating request status:", error);
    return [];
  }
}

export const createRequest = async (courierId) => {
  try {
    const data = {
      "senderId": localStorage.getItem("id"),
      "senderRole":"shop",
      "receiverId": courierId,
      "receiverRole":"courier"
    }
    console.log(data)
    const response = await WebApi.post(`public/user/createRequest`, data);
    console.log("response_for_create_request", response.data);
    return response.data;
  } catch (error) {
    console.error("Error creating request:", error);
    return [];
  }
}

function timeAgo(date) {
  const now = new Date();
  const then = new Date(date);
  const diffInSeconds = Math.floor((now - then) / 1000);

  if (diffInSeconds < 60) {
    return `${diffInSeconds}s`; // seconds
  } else if (diffInSeconds < 3600) {
    const minutes = Math.floor(diffInSeconds / 60);
    return `${minutes}m`; // minutes
  } else if (diffInSeconds < 86400) {
    const hours = Math.floor(diffInSeconds / 3600);
    return `${hours}h`; // hours
  } else if (diffInSeconds < 2592000) {
    const days = Math.floor(diffInSeconds / 86400);
    return `${days}d`; // days
  } else {
    const months = Math.floor(diffInSeconds / 2592000);
    return `${months}m`; // months
  }
}

// export const followRequests = [
//   {
//     id: 1,
//     name: "Loomis Express",
//     // profilePic: nolimit,
//     time: "3h"
//   },
//   {
//     id: 2,
//     name: "ParcelHero",
//     // profilePic: coolplanet,
//     time: "10h"
//   },
//   {
//     id: 3,
//     name: "Tuffnells",
//     // profilePic: hameedia,
//     time: "4h"
//   },
//   {
//     id: 4,
//     name: "CollectPlus",
//     // profilePic: street82,
//     time: "3h"
//   },
//   {
//     id: 5,
//     name: "Parcel2Go",
//     // profilePic: bearappeal,
//     time: "2h"
//   },
// ];
