import PropTypes from "prop-types";
// import Icon from "@mui/material/Icon";
import MKBox from "components/MKBox";
import MKAvatar from "components/MKAvatar";
import MKTypography from "components/MKTypography";

function DefaultReviewCard({ color, image, name, review }) {
  return (
    <MKBox
      variant={color === "transparent" ? "contained" : "gradient"}
      bgColor={color}
      borderRadius="xl"
      shadow={color === "transparent" ? "none" : "md"}
      p={3}
      height="100%" // Set a fixed height for each card
    >
      {image && (
        <MKAvatar
          src={image}
          alt={name}
          variant="rounded"
          size="lg"
          shadow="md"
          sx={{ mt: -5, mb: 1 }}
        />
      )}
      <MKBox lineHeight={1}>
        <MKTypography
          display="block"
          variant={image ? "button" : "h6"}
          fontWeight="bold"
          color={color === "transparent" || color === "light" ? "dark" : "white"}
          mb={0.5}
        >
          {name}
        </MKTypography>
      </MKBox>
      <MKTypography
        variant="body2"
        color={color === "transparent" || color === "light" ? "text" : "white"}
        my={4}
      >
        &quot;{review}&quot;
      </MKTypography>
    </MKBox>
  );
}

DefaultReviewCard.defaultProps = {
  color: "transparent",
  image: "",
};

DefaultReviewCard.propTypes = {
  color: PropTypes.oneOf([
    "transparent",
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "dark",
    "light",
  ]),
  image: PropTypes.string,
  name: PropTypes.string.isRequired,
  review: PropTypes.string.isRequired,
};

export default DefaultReviewCard;
