import styled from "styled-components";
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <AppContainer>
      <Container>
        <Heading>let's burn ❤️‍🔥</Heading>
        <AddTodoForm />
        <TodoList />
      </Container>
    </AppContainer>
  );
};

export default App;

const AppContainer = styled.div`
  background-color: rgba(255, 255, 255, 0);
`;

const Container = styled.div`
  max-width: 600px;
  margin: 2rem auto;
  padding: 1.5rem;
  background-color: rgba(255, 255, 255, 0.9);
  box-shadow: 0px 0px 10px 2px rgba(255, 0, 0, 0.5);
  position: relative;
  border-radius: 0.5rem;
  z-index: 2;
`;

const Heading = styled.h1`
  font-size: 70px;
  margin: 10px;
  text-align: center;
`;
