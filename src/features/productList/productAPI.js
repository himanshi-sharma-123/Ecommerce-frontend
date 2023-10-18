// export function fetchAllProducts() {
//   return new Promise(async (resolve) => {
//     //TODO: we will not hard-code server url here//
//     const response = await fetch("/products");
//     const data = await response.json();
//     resolve({ data });
//   });
// }

export function fetchProductById(id) {
  return new Promise(async (resolve) => {
    const response = await fetch("/products/" + id);
    const data = await response.json();
    resolve({ data });
  });
}

export function createProduct(product) {
  return new Promise(async (resolve) => {
    const response = await fetch("/products/", {
      method: "POST",
      body: JSON.stringify(product),
      headers: { "content-type": "application/json" },
    });
    const data = await response.json();
    resolve({ data });
  });
}

export function updateProduct(update) {
  return new Promise(async (resolve) => {
    const response = await fetch("/products/" + update.id, {
      method: "PATCH",
      body: JSON.stringify(update),
      headers: { "content-type": "application/json" },
    });
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchProductsByFilters(filter, sort, pagination, admin) {
  // filter = {"category":["smartphone","laptops"]}
  //sort = {_sort:"price",_order:"desc"}

  let queryString = "";
  for (let key in filter) {
    const categoryValues = filter[key];
    if (categoryValues.length > 0) {
      queryString += `${key}=${categoryValues}&`;
    }
  }

  for (let key in sort) {
    queryString += `${key}=${sort[key]}&`;
  }

  for (let key in pagination) {
    queryString += `${key}=${pagination[key]}&`;
  }

  if (admin) {
    queryString += `admin=true`;
  }

  // let queryString = "";
  // for (let key in filter) {
  //   queryString += `${key}=${filter[key]}&`;
  // }

  return new Promise(async (resolve) => {
    const response = await fetch("/products?" + queryString);
    const data = await response.json();
    const totalItems = await response.headers.get("X-Total-Count"); // PROVIDED BY JSON-SERVER
    resolve({ data: { products: data, totalItems: +totalItems } });
    // resolve({ data });
  });
}

export function fetchCategories() {
  return new Promise(async (resolve) => {
    const response = await fetch("/categories");
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchBrands() {
  return new Promise(async (resolve) => {
    const response = await fetch("/brands");
    const data = await response.json();
    resolve({ data });
  });
}

// export async function fetchAllProducts() {
//   try {
//     const response = await fetch("/products");

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
//     const response = await fetch("/products");
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
