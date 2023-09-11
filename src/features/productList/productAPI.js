export function fetchAllProducts() {
  return new Promise(async (resolve) => {
    //TODO: we will not hard-code server url here//
    const response = await fetch("http://localhost:8080/products");
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchProductsByFilters(filter, sort, pagination) {
  // filter = {"category":["smartphone","laptops"]}
  //sort = {_sort:"price",_order:"desc"}

  // TODO : on server we will support multi values
  let queryString = "";
  for (let key in filter) {
    const categoryValues = filter[key];
    if (categoryValues.length > 0) {
      const lastCategoryValue = categoryValues[categoryValues.length - 1];
      queryString += `${key}=${lastCategoryValue}&`;
    }
  }

  for (let key in sort) {
    queryString += `${key}=${sort[key]}&`;
  }

  for (let key in pagination) {
    queryString += `${key}=${pagination[key]}&`;
  }

  // let queryString = "";
  // for (let key in filter) {
  //   queryString += `${key}=${filter[key]}&`;
  // }

  return new Promise(async (resolve) => {
    //TODO: we will not hard-code server URL here
    const response = await fetch(
      "http://localhost:8080/products?" + queryString
    );
    const data = await response.json();
    const totalItems = await response.headers.get("X-Total-Count"); // PROVIDED BY JSON-SERVER
    resolve({ data: { products: data, totalItems: +totalItems } });
    // resolve({ data });
  });
}

export function fetchCategories() {
  return new Promise(async (resolve) => {
    //TODO: we will not hard-code server url here//
    const response = await fetch("http://localhost:8080/categories");
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchBrands() {
  return new Promise(async (resolve) => {
    //TODO: we will not hard-code server url here//
    const response = await fetch("http://localhost:8080/brands");
    const data = await response.json();
    resolve({ data });
  });
}

// export async function fetchAllProducts() {
//   try {
//     const response = await fetch("http://localhost:8080/products");

//     if (!response.ok) {
//       // Handle non-2xx HTTP response status codes here, e.g., throw an error.
//       throw new Error(
//         `HTTP Error: ${response.status} - ${response.statusText}`
//       );
//     }

//     const data = await response.json();
//     return { data };
//   } catch (error) {
//     // Handle network errors or other exceptions here.
//     console.error("Error fetching products:", error);
//     throw error; // Propagate the error further if needed.
//   }
// }

// export function fetchAllProducts() {
//   return new Promise(async (resolve) => {
//     //TODO: we will not hard-code server url here//
//     const response = await fetch("http://localhost:8080/products");
//     const data = await response.json();
//     resolve({ data });
//   });
// }

// A mock function to mimic making an async request for data
// export function fetchCount(amount = 1) {
//   return new Promise(async (resolve) => {
//     const response = await fetch("http://localhost:8080");
//     const data = await response.json();
//     resolve({ data });
//   });
// }
