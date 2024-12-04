import WebApi from "../../api/WebApi";
import givenchy from "../../assets/images/stores/givenchy.png"

export const fetchData = async () => {
  try {
    const response = await WebApi.get(`public/user/getAllConnectableAndConnectedShop/${localStorage.getItem("id")}`);
    console.log("response", response.data);
    const shopData = response.data.map((courier) => {
      return {
        shop_id: courier.shopId,
        request_id: courier.requestId,
        name: courier.shopName,
        branches:"",
        status: courier.status,
        profilePic: givenchy
      };
    });
    console.log("shopData", shopData);
    return shopData;
  } catch (error) {
    console.error("Error fetching shop data:", error);
    return [];
  }
};

export const fetchConnectRequest = async () => {
  try {
    const response = await WebApi.get(`public/user/getAllPendingReceiveRequestToCourier/${localStorage.getItem("id")}`);
    console.log("response_data", response.data);

    const requestData = response.data.map((request) => {
      const time = timeAgo(request.date);
      return {
        id: request.requestId, 
        name: request.courierName,
        profilePic: givenchy,
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

export const createRequest = async (shopId) => {
  try {
    const data = {
      "senderId": localStorage.getItem("id"),
      "senderRole":"courier",
      "receiverId": shopId,
      "receiverRole":"shop"
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