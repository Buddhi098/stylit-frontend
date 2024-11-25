import React, { useState } from "react";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    Typography,
    IconButton,
    Box,
} from "@mui/material";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import CloseIcon from "@mui/icons-material/Close";
import WebApi from "../../../api/WebApi";

const Popmodal = ({ id, status, button, triggerParentUpdate}) => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleConfirm = async () => {
        try {
            const data = {
                id: id,
                status: status,
            }
            const response = await WebApi.post("/admin/user/changeCourierStatus" , data);
            console.log(response.data);
        } catch (err) {
            console.error(err);
        }

        handleClose();
        window.location.reload();
        
    };

    return (
        <div >
            {/* Button to open dialog */}
            {button == "accept" ? <Button
                variant="contained"
                color="success"
                sx={{ margin: "3px" }}
                size="small"
                onClick={handleOpen}
            >
                Accept
            </Button> : <Button
                variant="contained"
                color="error"
                sx={{ margin: "3px" }}
                size="small"
                onClick={handleOpen}
            >
                Reject
            </Button>}

            {/* Warning Dialog */}
            <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
                {/* Header */}
                <DialogTitle>
                    <Typography variant="h6" component="div">
                        Confirm Status Change
                    </Typography>
                    <IconButton
                        aria-label="close"
                        onClick={handleClose}
                        sx={{
                            position: "absolute",
                            right: 8,
                            top: 8,
                            color: (theme) => theme.palette.grey[500],
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>

                {/* Warning Content */}
                <DialogContent dividers>
                    <Box display="flex" alignItems="center" gap={2}>
                        <WarningAmberIcon color="warning" sx={{ fontSize: 40 }} />
                        <Typography variant="body1" gutterBottom>
                            Are you sure you want to change the status of this user? This
                            action cannot be undone.
                        </Typography>
                    </Box>
                </DialogContent>

                {/* Actions */}
                <DialogActions>
                    <Button onClick={handleClose} color="secondary">
                        Cancel
                    </Button>
                    <Button
                        onClick={handleConfirm}
                        variant="contained"
                        color="warning"
                    >
                        Confirm
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default Popmodal;
