import React, { useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import sendOfflinePostRequestsToServer from "../../utils/OfflineRequests";
import ActionButton from "../Common/ActionButton/ActionButton";

import CommonIcon from "../Common/CommonIcon";
import AddModal from "../Modals/AddModal";

const ActionBar = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    // Update network status
    const handleStatusChange = () => {
      setIsOnline(navigator.onLine);
      sendOfflinePostRequestsToServer();
    };

    // Listen to the online status
    window.addEventListener("online", handleStatusChange);

    // Listen to the offline status
    window.addEventListener("offline", handleStatusChange);

    // Specify how to clean up after this effect for performance improvment
    return () => {
      window.removeEventListener("online", handleStatusChange);
      window.removeEventListener("offline", handleStatusChange);
    };
  }, [isOnline]);

  return (
    <div
      style={{
        position: "fixed",
        display: "flex",
        flexWrap: "wrap",
        top: "70px",
        background: "white",
        width: "100%",
        padding: "0.5rem 0",
      }}
    >
      <ActionButton
        label="Add New"
        action={() => {
          setModalOpen(true);
        }}
      >
        <CommonIcon
          icon={{
            icon: <AiOutlinePlus style={{ marginLeft: "5px" }} />,
          }}
        />
      </ActionButton>
      <ActionButton label={isOnline ? "Online" : "Offline/Refresh"} />
      <AddModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </div>
  );
};

export default ActionBar;