import React from "react";
import Trellocard from "./Trellocard";
import TrelloActionButton from "./TrelloActionButton";
import { Droppable } from "react-beautiful-dnd";
import Icon from "@material-ui/core/Icon";
import styled from "styled-components";
import { connect } from "react-redux";
import { delList } from "../action";

const TitleConatiner = styled.div`
  display: flex;
  justify-content: space-between;
`;
const TrelloList = (props) => {
  const { title, cards, listID } = props;

  const deleteList = () => {
    const { dispatch } = props;
    dispatch(delList(listID));
  };

  return (
    <Droppable droppableId={String(listID)}>
      {(provided) => (
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
          style={styles.container}
        >
          <TitleConatiner>
            <h4 style={{ marginBottom: "20px", marginTop: "10px" }}>
              {" "}
              {title}
            </h4>
            <Icon color="secondary" fontSize="small" onMouseDown={deleteList}>
              cancel
            </Icon>
          </TitleConatiner>
          {cards.map((card, index) => (
            <Trellocard
              listId={listID}
              index={index}
              id={card.id}
              key={card.id}
              text={card.text}
            />
          ))}
          {provided.placeholder}
          <TrelloActionButton listID={listID} />
        </div>
      )}
    </Droppable>
  );
};

const styles = {
  container: {
    backgroundColor: "#ececec",
    borderRadius: 3,
    width: 300,
    padding: 8,
    marginRight: 8,
    height: "100%",
  },
};

export default connect()(TrelloList);
