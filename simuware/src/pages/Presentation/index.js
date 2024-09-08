// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent"; // Added import for CardContent

// SimuWare React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
// import MKSocialButton from "components/MKSocialButton";

// SimuWare React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
import FilledInfoCard from "examples/Cards/InfoCards/FilledInfoCard";

// Presentation page sections
import Counters from "pages/Presentation/sections/Counters";
import Information from "pages/Presentation/sections/Information";
import DesignBlocks from "pages/Presentation/sections/DesignBlocks";
import Pages from "pages/Presentation/sections/Pages";
import Testimonials from "pages/Presentation/sections/Testimonials";
import Download from "pages/Presentation/sections/Download";

// Presentation page components
import BuiltByDevelopers from "pages/Presentation/components/BuiltByDevelopers";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Images
import bgImage from "assets/images/bg-presentation.jpg";

function Presentation() {
  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          route: "https://drive.google.com/file/d/1Z2DLR3gsrQVBKtSM9b3qWozToEt9XNmG/view?usp=drivesdk",
          label: "free download",
          color: "info",
        }}
        sticky
      />
      <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid container item xs={12} lg={7} justifyContent="center" mx="auto">
            <MKTypography
              variant="h1"
              color="white"
              mt={-6}
              mb={1}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            ></MKTypography>
            <MKTypography
              variant="body1"
              color="white"
              textAlign="center"
              px={{ xs: 6, lg: 12 }}
              mt={1}
            >
              Welcome to SimuWare.
            </MKTypography>
          </Grid>
        </Container>
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
          minHeight: "100%", // Set a fixed height for the Card
        }}
      >
        <Counters />
        <Information />
        <DesignBlocks />
        <Pages />
        <Container sx={{ mt: 6 }}>
          <BuiltByDevelopers />
        </Container>
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={4}>
              <Card sx={{ height: "100%" }}>
                <CardContent>
                  <FilledInfoCard
                    // variant="gradient"
                    color="info"
                    icon="flag"
                    title="Introduction"
                    description="Purpose: The purpose of SimuWare is to provide a virtual platform that allows users to build physical prototypes in a 3D game-like environment and simulate their interactions."
                    action={{
                      type: "",
                      route:
                        "https://www.creative-tim.com/learning-lab/react/overview/material-kit/",
                      label: "",
                    }}
                  />
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} lg={4}>
              <Card sx={{ height: "100%" }}>
                <CardContent>
                  <FilledInfoCard
                    color="info"
                    icon="precision_manufacturing"
                    title="Overall Description"
                    description="Product Perspective: This product aims to provide a rapid-prototyping environment for circuits and micro-controller based simulations. This will enable users to test their prototypes within our software without building them in real life. As a result, they will not have to do many hit-and-tries and waste their precious costly components."
                    action={{
                      type: "",
                      route: "https://www.creative-tim.com/learning-lab/react/overview/datepicker/",
                      label: "Read more",
                    }}
                  />
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} lg={4}>
              <Card sx={{ height: "100%" }}>
                <CardContent>
                  <FilledInfoCard
                    color="info"
                    icon="apps"
                    title="Specific Requirements"
                    description="User shall be able to ADD, CONNECT AND MOVE OBJECTS in the virtual environment User should be able to select components from an inventory and place them within the 3D environment. Components should be able to snap/attach to each other. Object manipulation should include resizability and rotatability."
                    action={{
                      type: "",
                      route: "https://www.creative-tim.com/learning-lab/react/alerts/material-kit/",
                      label: "Read more",
                    }}
                  />
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} lg={4}>
              <Card sx={{ height: "100%" }}>
                <CardContent>
                  <FilledInfoCard
                    // variant="gradient"
                    color="info"
                    icon="flag"
                    title="Introduction"
                    description="Goals: SimuWare will feature a user-friendly interface for selecting, placing, and connecting components within a virtual environment. Users will also be able to simulate the behavior of assembled components."
                    action={{
                      type: "",
                      route:
                        "https://www.creative-tim.com/learning-lab/react/overview/material-kit/",
                      label: "Let's start",
                    }}
                  />
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} lg={4}>
              <Card sx={{ height: "100%" }}>
                <CardContent>
                  <FilledInfoCard
                    color="info"
                    icon="precision_manufacturing"
                    title="Product Functions"
                    description="3D Environment: SimuWare will provide a 3D virtual environment using Unreal Engine / Unity. Users will be able to navigate the environment using intuitive controls. Part Assembly System: Users shall be able to select from a library of Arduino components. Users shall be able to place selected components within the 3D environment."
                    action={{
                      type: "",
                      route: "https://www.creative-tim.com/learning-lab/react/overview/datepicker/",
                      label: "Read more",
                    }}
                  />
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} lg={4}>
              <Card sx={{ height: "100%" }}>
                <CardContent>
                  <FilledInfoCard
                    color="info"
                    icon="apps"
                    title="Specific Requirements"
                    description="User shall be able to EXECUTE ARDUINO CODE on a specific ARDUINO OBJECT. There should be a specific Arduino object. It should have the ability to run a code on itself."
                    action={{
                      type: "",
                      route: "https://www.creative-tim.com/learning-lab/react/alerts/material-kit/",
                      label: "Read more",
                    }}
                  />
                </CardContent>
              </Card>
            </Grid>
            {/* Add the sixth card here */}
            <Grid item xs={12} lg={4}>
              <Card sx={{ height: "100%" }}>
                <CardContent>
                  <FilledInfoCard
                    // variant="gradient"
                    color="info"
                    icon="flag"
                    title="Introduction"
                    description="Benefits:
                    Users will be able to simulate their prototypes without having to build them in real life.
                    They will easily get to know the flaws in their circuits and will be able to correct those before building a real-life prototype."
                    action={{
                      type: "",
                      route:
                        "https://www.creative-tim.com/learning-lab/react/overview/material-kit/",
                      label: "Let's start",
                    }}
                  />
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} lg={4}>
              <Card sx={{ height: "100%" }}>
                <CardContent>
                  <FilledInfoCard
                    // variant=""
                    color="info"
                    icon="flag"
                    title="Product Functions"
                    description="Physics Simulation
                    SimuWare will incorporate physics simulation to simulate interactions between assembled components.
                    Components shall interact realistically with each other and the environment (e.g., gravity, collisions).
                    User Interface
                    SimuWare shall provide a user-friendly interface for selecting, placing, and manipulating components.
                    The interface shall allow users to access tools for assembly, simulation, and data visualization."
                    action={{
                      type: "",
                      route:
                        "https://www.creative-tim.com/learning-lab/react/overview/material-kit/",
                      label: "Let's start",
                    }}
                  />
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} lg={4}>
              <Card sx={{ height: "100%" }}>
                <CardContent>
                  <FilledInfoCard
                    // variant=""
                    color="info"
                    icon="flag"
                    title="Specific Requirements"
                    description="User shall be able to use an ARDUINO OBJECT to INTERACT with OTHER OBJECTS
                    Arduino object should be able to connect to other objects.
                    Its code should be able to manipulate other objects."
                    action={{
                      type: "",
                      route:
                        "https://www.creative-tim.com/learning-lab/react/overview/material-kit/",
                      label: "Let's start",
                    }}
                  />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
        <Testimonials />
        <Download />
        <MKBox pt={18} pb={6}>
          <Container>
            <Grid container spacing={3}>
              
              <Grid
                item
                xs={12}
                lg={5}
                my={{ xs: 5, lg: "auto" }}
                mr={{ xs: 0, lg: "auto" }}
                sx={{ textAlign: { xs: "center", lg: "right" } }}
              >
                {/* <MKSocialButton
                  component="a"
                  // href="https://twitter.com/intent/tweet?text=Check%20Material%20Design%20System%20made%20by%20%40CreativeTim%20%23webdesign%20%23designsystem%20%23mui5&amp;url=https%3A%2F%2Fwww.creative-tim.com%2Fproduct%2Fmaterial-kit-react"
                  target="_blank"
                  color="twitter"
                  sx={{ mr: 1 }}
                >
                  <i className="fab fa-twitter" />
                  &nbsp;Tweet
                </MKSocialButton> */}
                {/* <MKSocialButton
                  component="a"
                  // href="https://www.facebook.com/sharer/sharer.php?u=https://www.creative-tim.com/product/material-kit-react"
                  target="_blank"
                  color="facebook"
                  sx={{ mr: 1 }}
                >
                  <i className="fab fa-facebook" />
                  &nbsp;Share
                </MKSocialButton> */}
                {/* <MKSocialButton
                  component="a"
                  // href="https://www.pinterest.com/pin/create/button/?url=https://www.creative-tim.com/product/material-kit-react"
                  target="_blank"
                  color="pinterest"
                >
                  <i className="fab fa-pinterest" />
                  &nbsp;Pin it
                </MKSocialButton> */}
              </Grid>
            </Grid>
          </Container>
        </MKBox>
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Presentation;
