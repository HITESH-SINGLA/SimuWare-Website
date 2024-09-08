import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import RotatingCard from "examples/Cards/RotatingCard";
import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import bgFront from "assets/images/rotating-card-bg-front.jpeg";
import bgBack from "assets/images/rotating-card-bg-back.jpeg";

export function Information() {
  return (
    <MKBox component="section" py={6} my={6}>
      <Container>
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image={bgFront}
                icon="touch_app"
                title={<h1>SimuWare</h1>}
                description="The purpose of SimuWare is to provide a virtual platform that allows users to build physical prototypes in a 3D game-like environment and simulate their interactions. SimuWare intends to provide an instructional and prototyping tool for simulation enthusiasts, students, educators, and researchers. 
"/>
              <RotatingCardBack
                image={bgBack}
                title="Discover More about simuware"
                description=""
                action={{
                  type: "internal",
                  route: "/sections/page-sections/page-headers",
                  label: "start with header",
                }} />
            </RotatingCard>
          </Grid>
          <Grid item xs={12} lg={7} sx={{ ml: "auto" }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="content_copy"
                  title="Full Documentation"
                  description="This will contains all the documentation for the software."
                  action={{
                    type: "internal",
                    route: "/sections/document",
                    label: "documentation",
                  }} />
              </Grid>
              {/* <Grid item xs={12} md={6}>
              <DefaultInfoCard
                icon="flip_to_front"
                title="MUI Ready"
                description="The world's most popular react components library for building user interfaces."
              />
            </Grid> */}
            </Grid>
            <Grid container spacing={3} sx={{ mt: { xs: 0, md: 6 } }}>
              {/* <Grid item xs={12} md={6}>
              <DefaultInfoCard
                icon="price_change"
                title="Save Time & Money"
                description="Creating your design from scratch with dedicated designers can be very expensive. Start with our Design System."
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <DefaultInfoCard
                icon="devices"
                title="Fully Responsive"
                description="Regardless of the screen size, the website content will naturally fit the given resolution."
              />
            </Grid> */}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}
