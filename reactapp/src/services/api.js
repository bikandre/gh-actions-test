// src/services/api.js

const API_URL = "http://app-ingress-check2-1833914581.us-east-1.elb.amazonaws.com/api/data";  // Internal service URL in Kubernetes

export const fetchData = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
