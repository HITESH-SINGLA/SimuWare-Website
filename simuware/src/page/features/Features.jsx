import React from 'react';
import './features.css';

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">Documentation for SimuWare Software</h1>
    </div>
    <div className="gpt3__features-container">
      {/* Introduction */}
      <div className='doc'> 
        <h2>Introduction</h2>
        <div>
          <h3>Purpose</h3>
          <div>
            The purpose of our software (SimuWare) is to provide a virtual platform that enables users to assemble physical and electrical components in a 3D game-like environment and to simulate their interactions. SimuWare aims to provide an educational and prototyping tool for simulation enthusiasts, students, educators, and researchers.
          </div>
        </div>
        <div>
          <h3>Scope</h3>
          <div>
            <h4>Goals</h4>
            <ul>
              <li>SimuWare will feature a user-friendly interface for selecting, placing, and connecting components within a virtual environment.</li>
              <li>Users will also be able to simulate the behavior of assembled components.</li>
            </ul>
          </div>
          <div>
            <h4>Benefits</h4>
            <ul>
              <li>Users will be able to simulate their prototypes without having to build them in real life.</li>
              <li>They will easily get to know the flaws in their circuits and will be able to correct those before building a real-life prototype.</li>
            </ul>
          </div>
        </div>
        <div>
          <h3>Definitions and Abbreviations</h3>
          
        </div>
      </div>
      
      {/* Overall Description */}
      <div className='doc'>
        <h2>Overall Description</h2>
        <div>
          <h3>Product Perspective</h3>
          <div>This product aims to provide a rapid-prototyping environment for circuits and micro-controller based simulations. This will enable users to test their prototypes within our software without building them in real life. As a result, they will not have to do many hit-and-tries and waste their precious costly components.</div>
        </div>
        <div>
          <h3>User Interfaces</h3>
          <div>SimuWare is a desktop application (for Windows).</div>
        </div>
        <div>
          <h3>Software Interfaces</h3>
          <ul>
            <li>Unreal Engine</li>
            <li>Unity</li>
            <li>C++</li>
            <li>Arduino APIs</li>
          </ul>
        </div>
        {/* Add other subheadings similarly */}
      </div>
      
      {/* Specific Requirements */}
      <div className='doc'>
        <h2>Specific Requirements</h2>
        <div>
          <h3>User shall be able to ADD, CONNECT AND MOVE OBJECTS in the virtual environment</h3>
          <ul>
            <li>User should be able to select components from an inventory and place them within the 3D environment.</li>
            <li>Components should be able to snap/attach to each other.</li>
            <li>Object manipulation should include resizability and rotatability</li>
            <li>Components should be categorized into mechanical and electrical (sensors, actuators, etc) for easy searchin</li>
          </ul>

        </div>
        <div>
          <h3>User shall be able to EXECUTE ARDUINO CODE on a specific ARDUINO OBJECT</h3>
          <ul>
            <li>There should be a specific arduino object.</li>
            <li> It should have the ability to run a code on itself.</li>
            
          </ul>
        </div>
        <div>
          <h3>User shall be able to use an ARDUINO OBJECT to INTERACT with OTHER OBJECTS</h3>
          <ul>
            <li>Arduino object should be able to connect to other objects.</li>
            <li>  Its code should be able to manipulate other objects.</li>
            
          </ul>
        </div>
        <div>
          <h3>User shall be able to do PHYSICS-SIMULATION on the OBJECT</h3>
          <ul>
            <li> The software shall be able to simulate objects in real time.</li>
          </ul>
        </div>
        
      </div>
              {/* Add other requirements similarly */}
      <div className='doc'>
        <h2>Software Design Document</h2>
        <h3 style={{ color: '#7a6055' }}>INTRODUCTION</h3>
        <h3>Purpose</h3>
        <div>
          The purpose of SimuWare is to provide a virtual platform that allows users to build physical prototypes in a 3D game-like environment and simulate their interactions. SimuWare intends to provide an instructional and prototyping tool for simulation enthusiasts, students, educators, and researchers.
        </div>
        <h3>Scope</h3>
        <h4>Goals</h4>
        <ul>
          <li>SimuWare will feature a user-friendly interface for selecting, placing, and connecting components within a virtual environment. Users will also be able to simulate the behavior of assembled components using Arduino.</li>
        </ul>
        <h4>Benefits</h4>
        <ul>
          <li>Facilitate simulation of prototypes without the need for physical assembly.</li>
          <li>Assist in discovering and correcting logical problems before developing real-world prototypes.</li>
        </ul>
        <h3>Overview</h3>
        <div>
          SimuWare offers a rapid-prototyping environment for circuits and microcontroller-based simulations. Users can test their prototypes within the software, eliminating the need for physical assembly and reducing resource waste.
        </div>
        <div>
          <h4>User Interfaces</h4>
          <div>SimuWare is a desktop application designed for Windows operating systems.</div>
        </div>
        <div>
          <h4>Software Interfaces</h4>
          <ul>
            <li>Unreal Engine: Used for rendering the 3D virtual environment.</li>
            <li>C++: Programming language for backend development.</li>
          </ul>
        </div>
        <div>
          <h4>Product Functions</h4>
          <h5>3D Environment</h5>
          <ul>
            <li>Provides a 3D virtual environment using Unreal Engine.</li>
            <li>Users navigate the environment using game-like controls.</li>
          </ul>
          <h5>Part Assembly System</h5>
          <ul>
            <li>Users select from an inventory of Arduino components and basic shapes.</li>
            <li>They can place selected components within the 3D environment.</li>
            <li>Components snap to each other when placed adjacent to each other.</li>
          </ul>
          <h5>Physics Simulation</h5>
          <ul>
            <li>Incorporates physics simulation of Unreal Engine to simulate interactions between assembled components.</li>
            <li>Components interact realistically with each other and the environment (e.g., gravity, collisions).</li>
          </ul>
          <h5>User Interface</h5>
          <ul>
            <li>SimuWare provides a user-friendly interface for selecting, placing, and manipulating components.</li>
            <li>The interface allows users to access tools for assembly, simulation, and visualization.</li>
          </ul>
        </div>
        <div>
          <h5>User Characteristics</h5>
          <div>SimuWare caters to Arduino enthusiasts, students, and educators. Users can range from beginners to advanced users with knowledge of Arduino and basic circuit design.</div>
        </div>
        <div>
          <h4>Constraints</h4>
          <div>Performance may vary on different hardware configurations based on factors like the presence of a graphics card and available RAM.</div>
        </div>
        <div>
          <h4>Assumptions and Dependencies</h4>
          <ul>
            <li>The platform assumes basic ideal-physics assumptions, and results may differ to some extent from real-world simulations.</li>
            <li>Users should have basic knowledge of Arduino and familiarity with basic physical principles.</li>
          </ul>
        </div>
        <h3>Reference Material</h3>
        <ul>
          <li><a href="https://www.unrealengine.com/en-US/uses/architecture">Unreal Engine</a>: 3D game development platform used for creating the virtual environment.</li>
          <li><a href="https://github.com/arduino">Arduino GitHub Repository</a>: Source for Arduino APIs and Libraries.</li>
        </ul>
        <h3>Definitions and Acronyms</h3>
        <ul>
          <li>SAD: Software Architecture Document</li>
          <li>API: Application Programming Interface</li>
          <li>IDE: Integrated Development Environment</li>
          <li>UE: Unreal Engine</li>
        </ul>
      

        <h3 style={{ color: '#7a6055' }}>SYSTEM OVERVIEW</h3>
      <div>SimuWare is a simulation program based on the Unreal Engine framework that offers users an immersive experience while replicating physical and electrical components in a virtual world. The system enables users to interact with a variety of objects, including cubes, spheres, and other entities, as well as monitor their behavior under various conditions such as gravity, collisions, and external forces and torques. SimuWares architecture is made up of three core modules: Simulation, UserInterface, and ControlSystem, which are responsible for simulating objects, managing user interactions, and regulating simulation settings, respectively. SimuWare uses the Unreal Engine and C++ programming to provide realistic simulations and other functionalities, making it a versatile tool for education, training, and entertainment.</div>

      <h3 style={{ color: '#7a6055' }}>SYSTEM ARCHITECTURE</h3>

      <h3>Architectural Design</h3>
      <div>SimuWares architectural design follows a modular program structure, with diverse roles divided into subsystems. Each subsystem contains particular functionality, which promotes code clarity, maintainability, and ease of development. The linkages between these subsystems allow the system to function completely. Heres an overview of the main subsystems and their functions:</div>
      <ul>
  <li>
    <b>Simulation Module:</b>
    <ul>
      <li>Responsible for simulating physical and electrical components within the virtual environment.</li>
      <li>Manages simulation processes, including collision detection and physics simulation.</li>
      <li>Provides interfaces for interacting with simulated objects and controlling their behavior.</li>
      <li>Collaborates with the UserInterface and ControlSystem modules to receive input and update simulation states.</li>
    </ul>
  </li>
  <li>
    <b>UserInterface Module:</b>
    <ul>
      <li>Manages user interface elements, including menus, HUDs, and interactive widgets.</li>
      <li>Facilitates user interaction with the application, providing intuitive controls and feedback.</li>
      <li>Communicates user inputs to other subsystems, such as the Simulation and ControlSystem modules.</li>
      <li>Collaborates with the Simulation module to display simulation results and provide user feedback.</li>
    </ul>
  </li>
  <li>
    <b>ControlSystem Module:</b>
    <ul>
      <li>Implements control algorithms, feedback systems, and control logic for interacting with simulated objects.</li>
      <li>Receives input from the UserInterface module and translates it into commands for controlling objects.</li>
      <li>Monitors simulation states and adjusts control parameters dynamically based on user input or environmental conditions.</li>
      <li>Collaborates with the Simulation module to apply control inputs and observe their effects on simulated objects.</li>
    </ul>
  </li>
</ul>


      <h3>Decomposition Description</h3>

      <h4>Functional Description:</h4>
      <h5>Simulation Module:</h5>
      <div>The Simulation Module is responsible for simulating physical components within the virtual environment. It receives inputs such as component properties and environmental conditions, processes them using physics algorithms, and produces outputs representing the behavior of the simulated components.</div>

      <h5>UserInterface Module:</h5>
      <div>The UserInterface Module handles interactions between the user and the system. It processes user inputs, displays relevant information to the user through menus, heads-up displays (HUDs), and interactive widgets, and provides feedback based on user actions.</div>

      <h5>ControlSystem Module:</h5>
      <div>The ControlSystem Module manages the control and interaction of simulated objects within the virtual environment. It interprets user inputs, translates them into commands for controlling simulated objects, and provides feedback to the user based on the simulation results.</div>

      <h4>Object-Oriented (OO) Description:</h4>

      <h5>Simulation Module:</h5>
      <div>The Simulation Module is organized around C++ classes that represent physical and electrical components, simulation processes, and interaction interfaces. These classes encapsulate simulated objects behavior and characteristics while also providing methods for simulating their interactions in the virtual world.</div>

      <h5>UserInterface Module:</h5>
      <div>The UserInterface Module consists of C++ classes that represent UI elements, input handlers, and feedback mechanisms. These classes encapsulate the functionality of user interface components such as menus, buttons, and HUD elements, and they include methods for processing user input and showing feedback.</div>

      <h5>ControlSystem Module:</h5>
      <div>The ControlSystem Module contains C++ classes that represent control algorithms, feedback mechanisms, and dynamic parameter adjustment. These classes encapsulate the logic for understanding user input, turning it into control commands for simulated objects, and presenting the user with simulation-based feedback.</div>

      <h3>Design Rationale</h3>
      <ul>
        <li><b>Compatibility with Unreal Engine Framework:</b> This architecture is compatible with the Unreal Engine framework. Unreal Engine supports 3D rendering, physics simulation, and user interaction. SimuWare models mechanical and physical systems. By utilizing the Unreal Engines design and all of its features, we were able to cut down on development time and effort.</li>
        <li><b>Modular Program Structure:</b> The architecture was designed to be modular, with each component providing distinct roles and interactions. This modular architecture has various benefits, such as code reuse, ease of maintenance, and scalability. By splitting down the system into smaller, more manageable components, we may iterate on certain modules without impacting the entire system, allowing for parallel development and improving overall code quality.</li>
        <li><b>High-Level Abstraction:</b> The architectural design prioritizes high-level abstractions of the systems operation, with a focus on logical component groupings and interactions. This abstraction allows designers and developers to understand the systems behavior without becoming bogged down in implementation specifics, resulting in design clarity and simplicity.</li>
        <li><b>Scalability and Performance:</b> The design was chosen with scalability and performance in mind, ensuring that the system can handle large-scale simulations and complex interactions. We wanted to provide a high-performance application capable of conducting simulations in real-time while maintaining quality and fidelity by leveraging Unreal Engines optimization capabilities and following best practices in software architecture.</li>
        <li><b>Trade-offs and Critical Issues:</b> During the decision-making process, we considered several designs, including other game engines like Unity and a totally procedural approach. However, these options were deemed less acceptable due to resource limitations, learning curves, and a lack of support for advanced features such as physics simulation and real-time rendering. While creating with Unreal Engine may have some constraints, such as platform dependencies, we believe the benefits outweigh the drawbacks in this case.</li>
      
      </ul>


      <h3>Architectural Representation</h3>

      <h4>Use-Case View</h4>
      <div>Simulating Physical Objects</div>
      <div>Simulating Cars</div>

      <h3  style={{ color: '#7a6055' }}>DATA DESIGN</h3>

      <h4>Data Description</h4>
      <div>SimuWares data design focuses on expressing physical components, simulation parameters, user options, and simulation outcomes. It has data structures for storing component attributes, user preferences, simulation configurations, and real-time simulation results.</div>

      <h4>Major data entities include:</h4>
      <ul>
        <li>Component Properties</li>
        <li>User Preferences</li>
        <li>Simulation Configurations</li>
        <li>Simulation Results</li>
      </ul>

      <h4>Data Dictionary</h4>
      <ul>
        <li>Component Properties</li>
        <li>User Preferences</li>
        <li>Simulation Configurations</li>
        <li>Simulation Results</li>
    </ul>


      <h3  style={{ color: '#7a6055' }}>COMPONENT DESIGN</h3>

      <h4>Simulation Module</h4>
      <h4>UserInterface Module</h4>
      <h4>ControlSystem Module</h4>

      
      <h3  style={{ color: '#7a6055' }}>REQUIREMENTS MATRIX</h3>

      <table>
        <thead>
          <tr>
            <th>Requirement ID</th>
            <th>Description</th>
            <th>Satisfied by Components/Data Structures</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>REQ-001</td>
            <td>Users should be able to create a new simulation.</td>
            <td>Simulation Creation Module</td>
          </tr>
          <tr>
            <td>REQ-002</td>
            <td>Users should be able to select simulation components.</td>
            <td>Component Selection UI, Component Inventory</td>
          </tr>
          <tr>
            <td>REQ-003</td>
            <td>Users should be able to assemble components.</td>
            <td>Component Assembly Module, 3D Object Models</td>
          </tr>
          <tr>
            <td>REQ-004</td>
            <td>Users should receive real-time feedback during simulation playback.</td>
            <td>Real-time Feedback UI, Simulation Output Data Structure</td>
          </tr>
          <tr>
            <td>REQ-005</td>
            <td>Users should be able to save and load simulation scenarios.</td>
            <td>Scenario Management Module</td>
          </tr>
          <tr>
            <td>REQ-006</td>
            <td>Users should be able to adjust simulation parameters.</td>
            <td>Simulation Parameter UI</td>
          </tr>
        </tbody>
      </table>

      </div>

    </div>
  </div>
);

export default Features;
