import { Header } from "../components/Header";
import { Group } from "../components/Group";
import { OverlapGroupWrapper } from "../components/OverlapGroupWrapper";
import { OverlapWrapper } from "../components/OverlapWrapper";
import { Section } from "../components/Section";
import { FooterWrapper } from "../components/FooterWrapper";

const Home = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <OverlapGroupWrapper />
      </div>
      <div>
        <OverlapWrapper />
      </div>
      <div>
        <Group />
      </div>
      <div>
        <Section />
      </div>
      <div>
        <FooterWrapper />
      </div>
    </div>
  );
};

export default Home;