import React from "react";
import PropTypes from "prop-types";
import "./chatRoom.scss";
import Header from "../../../../commonComponents/NavBar/Header";
import Chat from "../Chat/Chat";
import ChatMembers from "../ChatMembers/ChatMembers";
import { Spinner } from "../../../../commonComponents/Spinner/Spinner";

const ChatRoom = ({
  chatInfo,
  currentUser,
  userList,
  onHandleUserInvite,
  sendMessage,
  chatRoomMessages,
  onHandleLogout
}) => {
  const {
    _id,
    chatName,
    creatorName,
    creatorId,
    participants,
    messages,
    isLoading
  } = chatInfo;

  const { avatar } = currentUser;

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <Header chatName={chatName} onHandleLogout={onHandleLogout} />

          <div className="chat-container">
            <div className="members-area">
              <ChatMembers
                members={participants}
                creatorId={creatorId}
                creatorAvatar={avatar}
                userList={userList}
                currentUserId={currentUser._id}
                chatId={_id}
                onHandleUserInvite={onHandleUserInvite}
              />
            </div>
            <div className="chat-area">
              <Chat
                messages={chatRoomMessages}
                sendMessage={sendMessage}
                currentUserId={currentUser._id}
              />
            </div>
            <div className="smth-area"></div>
          </div>
        </>
      )}
    </>
  );
};

ChatRoom.propTypes = {
  onHandleUserInvite: PropTypes.func
};

ChatRoom.defaultProps = {
  chatInfo: {}
};

export default ChatRoom;
