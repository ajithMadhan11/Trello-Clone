import { connect } from "react-redux";
import TrelloActionButton from "./TrelloActionButton";
import TrelloList from "./TrelloList";
import { DragDropContext } from "react-beautiful-dnd";
import { sort } from "../action";
import styled from "styled-components";
import "./App.css";
import Navbar from "./Navbar";

const ListContainer = styled.div`
  display: flex;
`;

function App(props) {
  const lists = props.lists;
  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;
    if (!destination) {
      return;
    }
    props.dispatch(
      sort(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        draggableId
      )
    );
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Navbar />
      <div className="mainCont">
        <div className="App">
          <ListContainer>
            {lists.map((list, index) => (
              <TrelloList
                listID={list.id}
                key={list.id}
                title={list.title}
                cards={list.cards}
                index={index}
              />
            ))}
            <TrelloActionButton list />
          </ListContainer>
        </div>
      </div>
    </DragDropContext>
  );
}

const mapStateToProps = (state) => ({
  lists: state.lists,
});

export default connect(mapStateToProps)(App);
