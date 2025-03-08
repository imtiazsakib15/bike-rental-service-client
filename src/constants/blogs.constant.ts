import { TBlog } from "@/types";
import safetyTips from "@/assets/images/safety-tips.jpg";
import scenicRoutes from "@/assets/images/scenic-routes.jpg";
import maintenanceGuide from "@/assets/images/maintenance-guide.jpg";

export const BLOGS: TBlog[] = [
  {
    id: 1,
    title: "5 Essential Safety Tips for Motorcycle Rentals",
    image: safetyTips,
    description:
      "Discover crucial safety measures every rider should know before renting a motorcycle. Learn about proper gear, pre-ride checks, and local traffic regulations to ensure a safe and enjoyable riding experience.",
    slug: "safety-tips",
  },
  {
    id: 2,
    title: "Top 10 Scenic Routes for Your Next Bike Adventure",
    image: scenicRoutes,
    description:
      "Explore breathtaking motorcycle routes perfect for rental bikes. From coastal highways to mountain passes, we've curated the most picturesque journeys for every type of rider.",
    slug: "scenic-routes",
  },
  {
    id: 3,
    title: "Maintaining Rental Bikes: A Guide for Riders",
    image: maintenanceGuide,
    description:
      "Learn how to properly care for your rented motorcycle. Our expert tips on basic maintenance will help you ensure optimal performance throughout your rental period.",
    slug: "maintenance-guide",
  },
];
