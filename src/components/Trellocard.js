import React from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";
import Icon from "@material-ui/core/Icon";
import { connect } from "react-redux";
import { delCard } from "../action";

const CardConatainer = styled.div`
  margin-bottom: 4px;
  overflow: auto;
`;
const CardAlign = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Trellocard = (props) => {
  const { text, id, index, listId } = props;
  const deleteCard = () => {
    const { dispatch } = props;
    dispatch(delCard(listId, id));
    return;
  };

  return (
    <Draggable draggableId={String(id)} index={index}>
      {(provided) => (
        <CardConatainer
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Card style={styles.cardContainer}>
            <CardContent>
              <CardAlign>
                <Typography gutterBottom>{text}</Typography>
                <Icon
                  color="secondary"
                  fontSize="small"
                  onMouseDown={deleteCard}
                >
                  delete
                </Icon>
              </CardAlign>
            </CardContent>
          </Card>
        </CardConatainer>
      )}
    </Draggable>
  );
};
const styles = {
  cardContainer: {
    marginBottom: 8,
  },
};
export default connect()(Trellocard);
