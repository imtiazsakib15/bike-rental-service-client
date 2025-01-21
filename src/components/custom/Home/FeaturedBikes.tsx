import { useGetAllBikesQuery } from "@/redux/features/bike/bikeApi";

const FeaturedBikes = () => {
  const bikes = useGetAllBikesQuery(undefined)?.data?.data;
  console.log(bikes);
  return <div></div>;
};

export default FeaturedBikes;
