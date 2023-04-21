import axios from "axios";

import { getItem } from "../services/local/localStorage.service";

const defaultHeaders = {
  "Content-Type": "application/json",
  // "Origin": "localhost",
  // "X-Requested-With": "XMLHttpRequest",
};
export const ACCESS_TOKEN_KEY = "accessToken";

export const get = async ({ url, headers = {} }: any) => {
  const accessToken = getItem(ACCESS_TOKEN_KEY);
  const response = await axios.get(url, {
    headers: {
      ...defaultHeaders,
      ...headers,
      Authorization: accessToken ? `Bearer ${accessToken}` : undefined,
    },
  });
  return response.data;
};

export const post = async ({ data, url, headers = {} }: any) => {
  const accessToken = getItem(ACCESS_TOKEN_KEY);
  const response = await axios.post(url, data, {
    headers: {
      ...defaultHeaders,
      ...headers,
      Authorization: accessToken ? `Bearer ${accessToken}` : undefined,
    },
  });
  return response.data;
};

export const put = async ({ data, url, headers = {} }: any) => {
  const accessToken = getItem(ACCESS_TOKEN_KEY);
  const response = await axios.put(url, data, {
    headers: {
      // ...defaultHeaders,
      ...headers,
      // Authorization: accessToken ? `Bearer ${accessToken}` : undefined,
    },
  });
  return response.data;
};

export const patch = async ({ data, url, headers = {} }: any) => {
  const accessToken = getItem(ACCESS_TOKEN_KEY);
  const response = await axios.patch(url, data, {
    headers: {
      ...defaultHeaders,
      ...headers,
      Authorization: accessToken ? `Bearer ${accessToken}` : undefined,
    },
  });
  return response.data;
};

export const remove = async ({ url, headers = {} }: any) => {
  const accessToken = getItem(ACCESS_TOKEN_KEY);
  const response = await axios.delete(url, {
    headers: {
      ...defaultHeaders,
      ...headers,
      Authorization: accessToken ? `Bearer ${accessToken}` : undefined,
    },
  });
  return response.data;
};
