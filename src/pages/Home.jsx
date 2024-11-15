import Footer from "../components/footer"; 
import Hederhome from "../components/Hederhome";
import Hederhome2 from "../components/Hederhome2";
import ExploreBali from "../components/Explorebali";
import NavbarAfter from "../components/NavbarAfterLog";
import RecommendationList from "../components/RecommendationList"; 
import Feedback from "../components/Feedback";

const Homepage = () => {
  const MostPopularrecommendations= [
    {
      id: 1,
      image: "/asset/image/2.png",
      title: "The Bali Swing",
      duration: "Duration 2 hours",
      price: "IDR 50.000",
      viewers: "584",
      rating: 3,
    },
    {
      id: 2,
      image: "/asset/image/3.png",
      title: "Tirta Empul",
      duration: "Duration 2 hours",
      price: "IDR 50.000",
      viewers: "584",
      rating: 4,
    },
    {
      id: 3,
      image: "/asset/image/4.png",
      title: "Pura Luhur Lempuyang",
      duration: "Duration 2 hours",
      price: "IDR 50.000",
      viewers: "584",
      rating: 5,
    },
    {
      id: 4,
      image: "/asset/image/5.png",
      title: "Pura Ulun Danu Bratan",
      duration: "Duration 2 hours",
      price: "IDR 50.000",
      viewers: "584",
      rating: 4,
    },
  ];
  const feedbackData = [
    {
      name: 'Emily Smith',
      profileImage: '/asset/image/yono.png',
      rating: 5,
      comment: 'Good trip. The team of ON TRIP tours and travel was very supportive and maintained prompt communication with us.',
    },
    {
      name: 'Lord Martin',
      profileImage: '/asset/image/joko.png', // Ganti dengan path gambar sebenarnya
      rating: 5,
      comment: 'Good trip. The team of ON TRIP tours and travel was very supportive and maintained prompt communication with us.',
    },
    {
      name: 'Dadang Mulyadi',
      profileImage: '/asset/image/joko.png', // Ganti dengan path gambar sebenarnya
      rating: 4,
      comment: 'Good trip. The team of ON TRIP tours and travel was very supportive and maintained prompt communication with us.',
    },
  ];
  
return (
    <div>
      <NavbarAfter />
      <Hederhome />
      <Hederhome2 />
      <ExploreBali />
      <RecommendationList title="Most Popular Destinations In Bali" recommendations={MostPopularrecommendations} />
      <Feedback feedbackData={feedbackData} />
      <Footer />
    </div>
  );
}

export default Homepage;