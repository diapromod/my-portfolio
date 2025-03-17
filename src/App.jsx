import { useState } from "react";
import CaseStudy from "./components/CaseStudy";

function App() {
  const projects = [
    { id: "auth-ui", image: "./auth-ui.png", title: "Streamlined User Authentication & Checkout UI" },
    { id: "eco-flask", image: "./eco-flask.png", title: "Dai - Eco-Friendly Hydration Flask Web UI and Branding" },
    { id: "decode-sports", image: "./decode-sports.png", title: "Branding and UI/Graphic Design for Decode Sports" },
    { id: "coffee-menu", image: "./coffee-menu.png", title: "Dai Coffee - Landing and Menu Page" },
    { id: "schoolwiki", image: "./schoolwiki.png", title: "SchoolWiki Redesign" },
    { id: "airpods", image: "./airpods.png", title: "Apple AirPods Landing Page" },
  ];

  const [selectedProject, setSelectedProject] = useState(projects[0].title);
  const handleSmoothScroll = (e, id) => {
    e.preventDefault(); // Prevent default anchor behavior
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
  
  return (
    <div className="bg-[#1e1e1e] text-[#E8E8E2] min-h-screen">
      {/* Header Section */}
      <header className="text-center flex flex-col h-screen justify-center items-center relative">
        <h1 className="font-bayon text-9xl">DIA PROMOD</h1>
        <p className="text-4xl">UI/UX Designer</p>
        {/* Horizontal Line Positioned Above Bottom */}
        <div className="absolute bottom-10 left-0 w-full border-t border-[#E8E8E2]"></div>
      </header>

      {/* About Section */}
      <section className="bg-[#E8E8E2] text-[#1e1e1e] min-h-screen flex items-center justify-center px-5 md:px-10 relative">
        <div className="max-w-5xl flex flex-col md:grid md:grid-cols-2 gap-10 items-center">
          {/* Profile Image */}
          <img
            src="./photo.png"
            alt="Profile"
            className="w-full max-w-xs md:max-w-sm rounded-lg object-cover mb-4"
          />

          {/* Text Content */}
          <div className="text-center md:text-left">
            <h2 className="font-bayon text-6xl md:text-8xl font-bold">HELLO!</h2>
            <p className="text-[#1e1e1e] font-jost text-lg py-5">
              I’m Dia Promod, a third-year Computer Science and Engineering student at the College of Engineering Trivandrum. By day, I’m buried in algorithms, but by night, I’m all about designing slick and intuitive interfaces. I’ve been part of various college clubs’ design teams, where I’ve refined my skills in making things not only look great but also work seamlessly.
              <br />
              <br />
              While my degree has me tackling code, I’ve recently started learning web development with HTML, CSS, and JavaScript. Of course, if things get tricky, I’ve got AI as my trusty sidekick to help bring my designs to life. Because, let’s be honest, who wouldn’t want a little AI magic to turn creative ideas into working code?
            </p>
          </div>
        </div>

        {/* Horizontal Line at Bottom of About Section */}
        <div className="absolute bottom-10 left-0 w-full border-t border-[#1e1e1e]"></div>
      </section>


      {/* Education Section */}
      <section className="bg-[#E8E8E2] font-jost h-screen text-[#1e1e1e] pb-20 px-10 relative">
        <div className="max-w-6xl h-full mx-auto grid grid-cols-3 gap-10 items-center">
          
          {/* Left Column - Education Details */}
          <div className="col-span-2 py-5">
            <h2 className="font-bayon text-8xl font-bold">MY EDUCATION</h2>
            <p className="font-bold text-xl mt-6">Bachelor of Technology in Computer Science and Engineering</p>
            <p className="text-lg">
              College of Engineering Trivandrum <br />
              Expected Graduation: 2026
            </p>
            <p className="text-xl font-bold mt-6">Design Skills Development:</p>
            <p className="text-lg">
              Get Started with Figma - Coursera: Completed foundational training<br />
              in Figma, gaining essential skills in UI/UX design.
            </p>
            <p className="text-lg mt-3">
              Self-taught in advanced design principles and tools, constantly<br />
              exploring and learning to navigate the world of design<br />
              independently.
            </p>
            <p className="text-xl font-bold mt-6">Activities and Societies:</p>
            <p className="text-lg">
              Active member of multiple college clubs' design teams, leading and<br />
              contributing to various design projects.
            </p>
          </div>

          {/* Right Column - Social Media */}
          <div className="col-span-1 flex flex-col gap-6 justify-center items-start justify-self-end">
            {/* Social Media Links */}
            <div className="flex items-center gap-3">
              <div className="bg-black text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold">Be</div>
              <span className="text-lg">/diapromod</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-black text-white rounded-full w-10 h-10 flex items-center justify-center text-lg">
                <img src="./insta.png" alt="Instagram" className="w-10 h-10" />
              </div>
              <span className="text-lg">/duix_dai</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-black text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold">in</div>
              <span className="text-lg">/dia-promod</span>
            </div>
          </div>
        </div>

        {/* Horizontal Line at Bottom */}
        <div className="absolute bottom-10 left-0 w-full border-t border-[#1e1e1e]"></div>
      </section>


      {/* Skills Section */}
      <section className="bg-[#E8E8E2] font-jost h-screen text-[#1e1e1e] pb-20 px-10 relative">
      <div className="max-w-6xl h-full mx-auto grid grid-cols-3 gap-10 items-center">
          
          {/* Left Column - Skills List */}
          <div className="col-span-2">
            <h1 className="font-bayon text-8xl font-bold pb-2">MY SKILLS</h1>
            <div className="grid grid-cols-2 gap-x-10 mt-6 text-lg">
              <ul className="space-y-5 text-xl">
                <li>• Wireframing and Prototyping</li>
                <li>• UX Research</li>
                <li>• UI Design</li>
                <li>• Graphic Design</li>
                <li>• Branding</li>
              </ul>
              <ul className="space-y-5 text-xl">
                <li>• Web Development</li>
                <li>• Moodboards</li>
                <li>• Creativity</li>
                <li>• Attention to Detail</li>
                <li>• Fast Learning</li>
              </ul>
            </div>
          </div>

          {/* Right Column - Software & Languages */}
          <div className="col-span-1 flex flex-col gap-10 justify-center">
            
            {/* Software Skills */}
            <div>
              <h3 className="font-bold  font-bayon text-4xl pb-5">SOFTWARE SKILLS</h3>
              <div className="flex items-center gap-4 mt-3">
                <img src="./software.png" alt="Software" />
              </div>
            </div>

            {/* Languages */}
            <div>
              <h3 className="font-bold font-bayon text-4xl pb-2">LANGUAGES</h3>
              <p className="text-xl mt-2 leading-8">
                <strong>Native:</strong> Malayalam <br />
                <strong>Other:</strong> English <br />
                <strong>Programming Languages:</strong> C, Java, HTML, CSS, Javascript, PostgreSQL<br />
                <strong>Frameworks:</strong> React, Tailwind

              </p>
            </div>
            
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="bg-[#1e1e1e] text-[#E8E8E2] py-20 px-10">
      <div className="max-w-6xl mx-auto">
      <h2 className="font-bayon text-8xl font-bold pb-5">MY PROJECTS</h2>
      <div className="absolute left-0 w-screen border-t border-[#E8E8E2]"></div>

        <div className="grid grid-cols-3 gap-6 py-20 font-jost font-semibold ">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative group cursor-pointer"
              onMouseEnter={() => setSelectedProject(project.title)}
              onClick={(e) => handleSmoothScroll(e, project.id)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto  group-hover:scale-105 transition duration-300"
              />
              <p className="text-center mt-3 text-[#E8E8E2] text-sm py-2">{project.title}</p>
            </div>
          ))}
        </div>
      </div>
      </section>

      {/* Case Study Section */}
      <section>
      <div id="auth-ui">
        <CaseStudy
          title="Streamlined User Authentication & Checkout UI"
          bgColor="bg-[#E8E8E2]"
          lineColor="border-[#1e1e1e]"
          headingColor="text-[#1e1e1e]"
          bodyColor="text-[#333333]"
          overview="Designed efficient and intuitive interfaces for user authentication (login, signup) and payment/checkout processes, focusing on enhancing user experience and reducing friction."
          tools="Figma"
          designProcess={[
            "Approach: Simplified the user journey by creating clean, user-friendly interfaces for essential functions.",
            "Design Focus: Ensured clarity and ease of use, reducing complexity and improving overall usability.",
          ]}
          visuals="Screenshots or mockups of the login, signup, payment, and checkout UI designs."
          outcome="Delivered interfaces that enhance user experience by making essential processes seamless and straightforward."
          image="./login-ui.png"
        />
      </div>
      <div id="eco-flask">
        <CaseStudy
          title="Dai-Eco-Friendly Hydration Flask Web UI and Branding"
          bgColor="bg-[#1e1e1e]"
          lineColor="border-[#E8E8E2]"
          headingColor="text-[#E8E8E2]"
          bodyColor="text-[#E8E8E2]"
          overview="Created the web UI and branding for Dai, a conceptual eco-friendly hydration flask brand, emphasizing sustainability and modern design."
          tools="Figma"
          designProcess={[
            "Research: Investigated eco-friendly design trends and competitor analysis to ensure alignment with sustainability values.",
            "Wireframing: Developed wireframes to map out the website’s structure and user flow.",
            "Final Design: Created the logo, color palette, and key website screens with a clean, green-centric aesthetic.",
                    
          ]}
          visuals="Showcase of web UI, branding assets (logo, color palette), and key screens."
          outcome="Delivered interfaces that enhance user experience by making essential processes seamless and straightforward."
          image="./dai-ui.png"
        />
      </div>
      <div id="decode-sports">
        <CaseStudy
          title="Branding and UI/Graphic Design for Decode Sports"
          bgColor="bg-[#1e1e1e]"
          lineColor="border-[#E8E8E2]"
          headingColor="text-[#E8E8E2]"
          bodyColor="text-[#E8E8E2]"
          overview="Worked on creating branding, UI design, and graphic design assets for Decode Sports, focusing on elevating their marketing and visual presence."
          tools="Figma, Canva"
          designProcess={[
            "Branding: Developed a cohesive brand identity, including logo design and color schemes, to enhance Decode Sports' market presence.",
            "UI Design: Created user-friendly interfaces for their digital platforms, ensuring an engaging and intuitive user experience.",
            "Graphic Design: Designed marketing materials, including banners and promotional graphics, to effectively communicate the brand’s message and attract attention.",
            ]}
          visuals="Showcase of branding elements, UI designs, and marketing graphics."
          outcome="Enhanced Decode Sports' visual identity and marketing effectiveness through a cohesive and engaging design approach."
          image="./decode-ui.png"
        />
      </div>
      <div id="coffee-menu">
        <CaseStudy
          title=" Dai Coffee - Landing and Menu Page-Eco-Friendly Hydration Flask Web UI and Branding"
          bgColor="bg-[#E8E8E2]"
          lineColor="border-[#1e1e1e]"
          headingColor="text-[#1e1e1e]"
          bodyColor="text-[#333333]"
          overview="Designed a landing page and menu for Dai Coffee, a fictional coffee shop, with a focus on creating an engaging and user-friendly experience."
          tools="Figma"
          designProcess={[
            "Concept Development: Crafted a design that captures the essence of a modern coffee shop, with an emphasis on visual appeal and functionality.",
            "Design Approach: Developed a user-friendly landing page and menu that effectively showcases coffee offerings and promotions, integrating intuitive navigation and a clean, visually appealing layout.",

          ]}
          visuals="Mockups of the landing page and menu page, illustrating key design elements and user interactions."
          outcome="Delivered interfaces that enhance user experience by making essential processes seamless and straightforward."
          image="./coffee-ui.png"
        />
      </div>
      <div id="schoolwiki">
        <CaseStudy
          title=" SchoolWiki Redesign "
          bgColor="bg-[#1e1e1e]"
          lineColor="border-[#E8E8E2]"
          headingColor="text-[#E8E8E2]"
          bodyColor="text-[#E8E8E2]"
          overview="WRedesigned the SchoolWiki website as part of a 24-hour designathon, focusing on modernizing its UI/UX to enhance usability and visual appeal."
          tools="Figma, Canva"
          designProcess={[
            "Challenge: Modernized an outdated design to improve user experience.",
            "Approach: Created a user-friendly interface, improved navigation, and ensured responsiveness.",
            "Design Decisions: Implemented a contemporary design that contributed to winning first place.",
          ]}
          visuals="Showcase of branding elements, UI designs, and marketing graphics."
          outcome="Awarded first prize for improved usability and modern design."
          image="./schoolwiki-ui.png"
        />
      </div>
      <div id="airpods">
        <CaseStudy
          title="Apple AirPods Landing Page"
          bgColor="bg-[#E8E8E2]"
          lineColor="border-[#1e1e1e]"
          headingColor="text-[#1e1e1e]"
          bodyColor="text-[#333333]"
          overview="Designed a sleek and modern landing page for Apple AirPods, focusing on minimalist design and capturing Apple’s brand essence."
          tools="Figma"
          designProcess={[
            "Applied a minimalist design strategy to reflect Apple’s premium outlook."
          ]}
          visuals="UI of the landing page, illustrating key design elements and user interactions."
          outcome="Designed a minimal landing page reflect Apple’s premium design."          
          image="./airpods-ui.png"
        />
      </div>
      </section>

      {/* Thank You */}
      <section className="bg-[#1e1e1e] text-[#E8E8E2] h-screen flex items-center justify-center px-10 relative">
        <div className="max-w-5xl grid grid-cols-2 gap-10 items-center">
          <h1 className="font-bayon text-8xl">Thank You!</h1>
          <div>
            <p className="font-jost text-lg py-5">
            In a nutshell, my design journey has been a mix of caffeinated creativity and eco-friendly aspirations—minus the actual coffee spills and recycling of pixels. Whether it's designing a streamlined checkout flow or creating a virtual coffee shop that looks so good you might want to take a sip, I've tackled it all with a blend of enthusiasm and a touch of humor. If you're looking for someone who can turn ideas into pixels and have a few laughs along the way, let's connect, because even my designs come with a side of good vibes!            </p>
          </div>
        </div>
        {/* Horizontal Line at Bottom of About Section */}
        <div className="absolute bottom-10 left-0 w-full border-t border-[#E8E8E2]"></div>
      </section>


      {/* Footer */}
      <footer className="text-center text-gray-400 py-5">
        © 2025 Dia Promod
      </footer>
    </div>
  );
}

export default App;
