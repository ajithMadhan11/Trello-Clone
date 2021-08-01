import React, { useState } from "react";
import Icon from "@material-ui/core/Icon";
import Card from "@material-ui/core/Card";
import TextareaAutosize from "react-textarea-autosize";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { addList, addCard } from "../action";

const TrelloActionButton = (props) => {
  const { list } = props;

  const ButtonText = list ? "Add another List" : "Add another Card";
  const ButtonOpacity = list ? 1 : 0.5;
  const ButtonTextColor = list ? "white" : "inherit";
  const ButtontextBackground = list ? "rgba(0,0,0,0.15)" : "inherit";

  const [formOpen, setformOpen] = useState(false);
  const [addText, setaddText] = useState("");

  const renderForm = () => {
    const { list } = props;
    const placeholder = list ? "Enter List Title..." : "Enter Card Title";
    const buttontitle = list ? "Add List" : "Add Card ";

    const handleTextChange = (e) => {
      setaddText(e.target.value);
    };

    const handleAddList = () => {
      const { dispatch } = props;
      if (addText) {
        dispatch(addList(addText));
      }
      setaddText("");

      return;
    };

    const handleAddCard = () => {
      const { dispatch, listID } = props;

      if (addText) {
        dispatch(addCard(listID, addText));
      }
      setaddText("");

      return;
    };
    return (
      <div>
        <Card
          style={{
            overflow: "visible",
            minHeight: 80,
            minWidth: "272",
            padding: "6px 8px 2px",
          }}
        >
          <TextareaAutosize
            placeholder={placeholder}
            autoFocus
            onBlur={() => setformOpen(!formOpen)}
            value={addText}
            onChange={handleTextChange}
            style={{
              resize: "none",
              width: "100%",
              outline: "none",
              border: "none",
            }}
          />
        </Card>
        <div style={styles.formButtonGroup}>
          <Button
            varient="contained"
            onMouseDown={list ? handleAddList : handleAddCard}
            style={{
              color: "white",
              backgroundColor: "#5aac44",
            }}
          >
            {buttontitle}
          </Button>
          <Icon
            style={{
              marginLeft: 8,
              cursor: "pointer",
            }}
          >
            close
          </Icon>
        </div>
      </div>
    );
  };

  const renderButton = () => (
    <div
      style={{
        ...styles.openForButtonGroup,
        opacity: ButtonOpacity,
        color: ButtonTextColor,
        backgroundColor: ButtontextBackground,
      }}
      onClick={() => setformOpen(!formOpen)}
    >
      <Icon>add</Icon>
      <p>{ButtonText}</p>
    </div>
  );

  return formOpen ? renderForm() : renderButton();
};

const styles = {
  openForButtonGroup: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    borderRadius: 3,
    height: 36,
    width: 272,
    paddingLeft: 10,
  },
  formButtonGroup: {
    marginTop: 8,
    display: "flex",
    alignItems: "center",
  },
};

export default connect()(TrelloActionButton);
