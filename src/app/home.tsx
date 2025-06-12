import { Header } from "../components/Header"; 
import { ResearchInitiatives } from "../components/OverlapGroupWrapper";
import { ResearchApproach } from "../components/OverlapWrapper";

const Home = () => {
  return (
    <div className="container mt-4">
      {/* Hero Section */}
      <div>
        <Header/>
      </div>
      <div>
        <ResearchInitiatives/>
      </div>
      <div>
        <ResearchApproach/>
      </div>
    </div>
  );
};

export default Home;