import React from "react";
import { Modal, Box, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const CustomModal = ({ children, open, onClose }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "background.paper",
          borderRadius: "12px",
          boxShadow: 24,
          p: 3,
          maxWidth: "90vw",
          maxHeight: "90vh",
          display: "flex",
          flexDirection: "column",
          overflow: "auto",
          outline: "none",
        }}
      >
        {/* Close Button */}
        <IconButton
          onClick={onClose}
          sx={{
            position: "absolute",
            top: "8px",
            right: "8px",
            backgroundColor: "transparent",
            color: "gray",
            "&:hover": {
              color: "black",
            },
          }}
        >
          <CloseIcon />
        </IconButton>

        {/* Modal Content */}
        <Box id="modal-modal-description">{children}</Box>
      </Box>
    </Modal>
  );
};

export default CustomModal;
