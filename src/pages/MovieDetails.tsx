const fetchData = async () => {
  try {
    const results = await axios.get(reviews, { params: { movieid: 2006 } });
    const allResults = await results.data;
    console.log(allResults);
  } catch (error) {
    console.log("Error fetching data", error);
  }
};

useEffect(() => {
  fetchData();
});
