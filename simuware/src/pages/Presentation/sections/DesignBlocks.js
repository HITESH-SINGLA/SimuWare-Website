import { Link } from "react-router-dom";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import MKTypography from "components/MKTypography";
import data from "pages/Presentation/sections/data/designBlocksData";
import PropTypes from "prop-types";
import MKBox from "components/MKBox";

function DesignBlocks() {
  function TextCard({ name, textOverlay }) {
    return (
      <Card elevation={3} sx={{ height: "100%" }}>
        <CardContent>
          <MKTypography variant="body1" fontWeight="bold" mb={1}>
            {name}
          </MKTypography>
          <MKTypography variant="body2" color="text.secondary">
            {textOverlay}
          </MKTypography>
        </CardContent>
      </Card>
    );
  }

  TextCard.propTypes = {
    name: PropTypes.string.isRequired,
    textOverlay: PropTypes.string.isRequired,
  };

  const renderData = data.map(({ title, description, items }) => (
    <Grid container spacing={3} sx={{ mb: 10 }} key={title}>
      <Grid item xs={12} lg={3}>
        <MKTypography variant="h3" fontWeight="bold" mb={1}>
          {title}
        </MKTypography>
        <MKTypography variant="body2" fontWeight="regular" color="secondary" mb={1} pr={2}>
          {description}
        </MKTypography>
      </Grid>
      <Grid item xs={12} lg={9}>
        <Grid container spacing={3}>
          {items.map(({ name, route, textOverlay }) => (
            <Grid item xs={12} md={4} sx={{ mb: 2 }} key={name}>
              <Link to={route}>
                <TextCard name={name} textOverlay={textOverlay} />
              </Link>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  ));

  return (
    <MKBox component="section" my={6} py={6}>
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={6}
          flexDirection="column"
          alignItems="center"
          sx={{ textAlign: "center", my: 6, mx: "auto", px: 0.75 }}
        ></Grid>
      </Container>
      <Container sx={{ mt: 6 }}>{renderData}</Container>
      <Container>
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
          <Grid item xs={12} lg={7} sx={{ ml: "auto" }}>
            <Grid container spacing={3}></Grid>
            <Grid container spacing={3} sx={{ mt: { xs: 0, md: 6 } }}></Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default DesignBlocks;
