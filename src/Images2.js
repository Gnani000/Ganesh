import React, { useState } from "react";
import { Card, CardMedia, Grid, Dialog, DialogContent } from "@mui/material";
import { styled } from "@mui/system";

const ImageCard = styled(Card)(({ theme }) => ({
  position: "relative",
  cursor: "pointer",
  transition: "transform 0.2s",

  "&:hover": {
    transform: "scale(1.05)",
  },

  [theme.breakpoints.down("sm")]: {
    maxWidth: "49%",
    flexBasis: "49%",
  },

  [theme.breakpoints.down("md")]: {
    maxWidth: "49%",
    flexBasis: "49%",
  },

  [theme.breakpoints.down("xs")]: {
    maxWidth: "100%",
    flexBasis: "100%",
  },
}));

const Media = styled(CardMedia)({
  height: 0,
  paddingTop: "75%",
  cursor: "pointer",
});

const TextOverlay = styled("div")({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "rgba(0, 0, 0, 0.2)",
  opacity: 0,
  transition: "opacity 0.2s",
  "&:hover": {
    opacity: 1,
  },
});

const ImageGallery = ({ images }) => {
  const [expandedText, setExpandedText] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleTextClick = (text, url) => {
    setExpandedText(text === expandedText ? null : text);
    setOpenDialog(true);
    setSelectedImage(url);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedImage(null);
  };

  return (
    <Grid container spacing={2}>
      {images.map((image, index) => (
        <Grid item key={index} xs={12} sm={6} md={4}>
          <ImageCard
            key={index}
            onClick={() => handleTextClick(image.text, image.url)}
          >
            <Media image={image.url} alt={image.text} />
            {expandedText === image.text && (
              <TextOverlay>{image.description}</TextOverlay>
            )}
          </ImageCard>
        </Grid>
      ))}

      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogContent sx={{ padding: 0, overflow: "hidden" }}>
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Enlarged View"
              style={{ width: "100%", height: "auto" }}
            />
          )}
        </DialogContent>
      </Dialog>
    </Grid>
  );
};

export default ImageGallery;
