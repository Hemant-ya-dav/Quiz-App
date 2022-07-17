import { IconButton } from "@mui/material";
import React from "react";
import "./SmallProfile.css";
import CloseIcon from "@mui/icons-material/Close";
import {
  selectUser,
  SET_USERLOGOUT,
  SMALL_LOGIN,
  SMALL_PROFILE,
} from "../../features/detailSlice";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";

function SmallProfile() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className="smallProfile">
      {user === null ? (
        <div
          className="smallprofile_container1"
          onMouseLeave={() => dispatch(SMALL_PROFILE(false))}
        >
          <div className="small_head1">
            <Button
              className="firstsign_in"
              onClick={() => dispatch(SMALL_LOGIN(true))}
            >
              LOGIN IN
            </Button>
          </div>
        </div>
      ) : (
        <div className="smallprofile_container">
          <div className="small_head">
            <div className="user_info">
              <span style={{ fontWeight: "600", fontSize: "14px" }}>
                {user?.displayName}
              </span>
              <span>{user?.email}</span>
            </div>
            <IconButton
              className="small_closeprofile"
              onClick={() => dispatch(SMALL_PROFILE(false))}
            >
              <CloseIcon />
            </IconButton>
          </div>
          <div className="smallprofile_third" style={{ marginTop: "5px" }}>
            <Button onClick={() => dispatch(SET_USERLOGOUT())}>Log Out</Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default SmallProfile;