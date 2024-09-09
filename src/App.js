import "./App.css";
import styled from "styled-components";
import { Header } from "./components/Header";
import { SimulatorForm } from "./components/SimulatorForm";

const App = () => {
  return (
    <div className="App">
      <Header />
      <ContentContainer>
        <SimulatorForm />
      </ContentContainer>
    </div>
  );
};

export default App;

const ContentContainer = styled.div`
  display: grid;
  align-items: center;
  margin-top: 100px;
  height: 100%;
`;
