const baseURL =
  "https://cors-anywhere.herokuapp.com/https://live.devnimble.com/api/v1";

const urls = {
  contacts: {
    list: "/contacts",
    create: "/contact",
    details: (id: string | number) => `/contacts/${id}`,
    delete: (id: string | number) => `/contacts/${id}`,
  },
};

export { baseURL, urls };
