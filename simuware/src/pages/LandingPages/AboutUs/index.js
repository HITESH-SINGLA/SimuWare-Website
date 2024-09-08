/*
=========================================================
* SimuWare React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 SimuWare (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
// import Divider from "@mui/material/Divider";
import footerRoutes from "footer.routes";
import DefaultFooter from "examples/Footers/DefaultFooter";

// SimuWare React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// // SimuWare React examples
import DefaultReviewCard from "examples/Cards/ReviewCards/DefaultReviewCard";

function Information() {
  return (
    <div>
      <MKBox component="section" py={12}>
        {
          <Container>
            <Grid
              container
              item
              xs={12}
              lg={6}
              justifyContent="center"
              sx={{ mx: "auto", textAlign: "center" }}
            >
              <MKTypography variant="h2">FAQ Section for Simuware</MKTypography>
              <MKTypography variant="body1" color="text" mb={2}>
                Here are the most frequently asked questions related to SimuWare:
              </MKTypography>
            </Grid>
            <Grid container spacing={3} sx={{ mt: 8 }}>
              <Grid item xs={12} md={6} lg={4}>
                <DefaultReviewCard
                  color="light"
                  name="What is SimuWare?"
                  // date="1 day ago"
                  review="SimuWare is a 3D simulation environment integrated with Arduino, designed to facilitate the assembly and simulation of physical and electrical components within a virtual space. It serves as an educational and prototyping tool for simulation enthusiasts, students, educators, and researchers.
"
                  // rating={5}
                />
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <DefaultReviewCard
                  // color="warning"
                  name="What are the key quality attributes focused on in the architecture design of SimuWare?"
                  date="1 week ago"
                  review="The architecture of SimuWare prioritizes four key quality attributes: usability, availability, maintainability, and testability. These attributes were chosen based on their importance in ensuring a robust and user-friendly experience for our users.
"
                  rating={5}
                />
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <DefaultReviewCard
                  color="dark"
                  name="What are the main functionalities of SimuWare?"
                  date="3 weeks ago"
                  review="SimuWare provides users with a user-friendly interface for selecting, placing, and connecting components within a 3D virtual environment. Users can simulate the behavior of assembled components, aiding in prototyping and identifying flaws in circuits before physical assembly.
"
                  rating={5}
                />
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <DefaultReviewCard
                  color="dark"
                  name="How do I navigate within SimuWare?"
                  date="1 week ago"
                  review="
To move within the 3D environment, use the WASD keys. Press Q to ascend and E to descend, allowing you to fly within the virtual space.
"
                  rating={5}
                />
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <DefaultReviewCard
                  color="light"
                  name="How do I generate and manipulate objects?"
                  date="3 weeks ago"
                  review="SimuWare offers a variety of objects such as cubes, spheres, cones, etc. Generate objects using predefined options and pick them up to place them in the desired location within the virtual environment.
"
                  rating={5}
                />
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <DefaultReviewCard
                  // color="info"
                  name="How do I craft objects in SimuWare?"
                  date="1 week ago"
                  review="Crafting in SimuWare utilizes a snapping mechanism. Pick up one object and place it next to another. They will snap together if compatible, allowing you to create more complex structures.
"
                  rating={5}
                />
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <DefaultReviewCard
                  // color="light"
                  name="What are the different modes in SimuWare?"
                  date="3 weeks ago"
                  review="SimuWare offers two primary modes: Build Mode and Simulation Mode. In Build Mode, manipulate objects, craft structures, and prepare your simulation setup. In Simulation Mode, run simulations, observing the behavior of assembled components and structures.
"
                  rating={5}
                />
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <DefaultReviewCard
                  color="dark"
                  name="How does SimuWare integrate with Arduino?"
                  date="3 weeks ago"
                  review="SimuWare includes Arduino integration for advanced simulations. Components such as LEDs, motors, and potentiometers are available in version 1. Users can interact with Arduino components using the integrated development environment (IDE) UI.
"
                  rating={5}
                />
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <DefaultReviewCard
                  color="light"
                  name="How do I interact with LEDs, motors, and potentiometers in SimuWare?"
                  date="3 weeks ago"
                  review="- For LEDs: Set the pins for LEDs, controlling their behavior within the simulation.
- For Motors: Incorporate motors into simulations, observing their actions and interactions with other components.
- For Potentiometers: Adjust the value using a slider interface, providing dynamic control over simulated parameters.
"
                  rating={5}
                />
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <DefaultReviewCard
                  color="light"
                  name="Can I save and load code within SimuWare?"
                  date="3 weeks ago"
                  review="Within the Arduino IDE UI, users can write and save code for their Arduino components. This feature enables users to develop custom functionalities for their simulations and experiments.
"
                  rating={5}
                />
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <DefaultReviewCard
                  // color="light"
                  name="What can I expect in future updates of SimuWare?"
                  date="3 weeks ago"
                  review="While version 1 includes LEDs, motors, and potentiometers, SimuWare will continue to expand its library of components in future updates. Keep an eye out for new additions to enhance your simulation experience.

Explore and experiment with the various features and functionalities of SimuWare to fully leverage its capabilities for educational and prototyping purposes. Have fun simulating and crafting within the virtual environment!"
                  rating={5}
                />
              </Grid>
            </Grid>
          </Container>
        }
      </MKBox>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </div>
  );
}

export default Information;
