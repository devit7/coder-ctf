import HomeHeader from "@/components/HomeHeader";
import RulesSection from "@/components/RulesSection";
//import TeamSection from "@/components/TeamSection";
import UserSaid from "@/components/UserSaid";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <>
      <div className="p-10 max-w-6xl mx-auto space-y-20 mb-20">
        {/* header */}          
        <HomeHeader />

        {/* Rules Section */}
        <RulesSection />

        {/* User Said */}
        <UserSaid />

        {/* Team Section */}
        {/* <TeamSection /> */}
      </div>

      {/* Footer Section */}
      <Footer />
    </>
  );
};

export default Home;
