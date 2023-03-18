export const SearchRestaurant = (searchText, restaurants) => {
  const ResultRest = restaurants.filter((x) => {
    return x?.data?.name.toLowerCase()?.includes(searchText.toLowerCase());
  });
  // console.log(ResultRest)
  return ResultRest;
};
