// fetchTableData.js
import WebApi from "../../../api/WebApi";

export const fetchTableData = async (shopId) => {
  try {
    const response = await WebApi.get(`/shop/product/get_all_product_by_shop_id?id=${shopId}`);
    return response.data.data.products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};
