import React, { useState, useCallback } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useSelector, useDispatch } from "react-redux";
import { createChatRoomRequest } from "../../actions/userDashBoardActions";

const CreateChatRoomModal = () => {
  const [open, setOpen] = useState(false);
  const { userName, _id } = useSelector(
    state => state.userDashBoard.userProfile
  );

  const dispatch = useDispatch();

  const [chatCreationForm, changeField] = useState({
    chatName: "",
    creatorName: userName,
    creatorId: _id
  });

  const handleClose = useCallback(() => {
    setOpen(false);
    changeField({ ...chatCreationForm, chatName: "" });
  }, []);

  const handleClickOpen = useCallback(() => {
    setOpen(true);
  }, []);

  const handleSubmit = () => {
    dispatch(createChatRoomRequest(chatCreationForm));
    setOpen(false);
  };

  return (
    <div>
      {/*<Button*/}
      {/*  variant="outlined"*/}
      {/*  color="primary"*/}
      {/*  onClick={handleClickOpen}*/}
      {/*  style={{ height: 185 }}*/}
      {/*  // onClick={() => setOpen(true)}*/}
      {/*>*/}
      {/*  Create Chat Room!*/}
      {/*</Button>*/}
      <button
        className="test-button"
        color="primary"
        style={{ height: 185 }}
        onClick={handleClickOpen}
      >
        Create Chat Room!
      </button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        fullWidth={100}
      >
        <DialogTitle id="form-dialog-title">Chat Room Creation</DialogTitle>
        <DialogContent>
          <DialogContentText>Create your own Chat Room!</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="outlined-basic"
            variant="outlined"
            label="Chat Name"
            type="text"
            fullWidth
            value={chatCreationForm.chatName}
            onChange={event =>
              changeField({ ...chatCreationForm, chatName: event.target.value })
            }
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => handleSubmit()}
            color="primary"
            disabled={chatCreationForm.chatName.trim() === ""}
          >
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default React.memo(CreateChatRoomModal);
