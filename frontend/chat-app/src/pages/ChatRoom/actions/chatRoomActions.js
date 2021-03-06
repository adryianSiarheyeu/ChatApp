import { createAction } from "redux-actions";

export const getChatRoomInformationStart = createAction(
  "GET_CHAT_ROOM_INFORMATION_START"
);
export const getChatRoomInformationSuccess = createAction(
  "GET_CHAT_ROOM_INFORMATION_SUCCESS"
);
export const getChatRoomInformationFail = createAction(
  "GET_CHAT_ROOM_INFORMATION_FAIL"
);

export const getAvailableUsersStart = createAction("GET_AVAILABLE_USERS_START");
export const getAvailableUsersSuccess = createAction(
  "GET_AVAILABLE_USERS_SUCCESS"
);
export const getAvailableUsersFail = createAction("GET_AVAILABLE_USERS_FAIL");

export const inviteUserRequest = createAction("INVITE_USER_REQUEST");
export const inviteUserSuccess = createAction("INVITE_USER_SUCCESS");
export const inviteUserFail = createAction("INVITE_USER_FAIL");
