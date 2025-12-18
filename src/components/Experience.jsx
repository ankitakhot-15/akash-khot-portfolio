// import React from 'react';
// import { motion } from 'framer-motion';
// import { Briefcase, MapPin, Calendar } from 'lucide-react';
// import photo from "@/assets/photo.jpeg";

// const Experience = () => {
//   const responsibilities = ['Developed and maintained cross-platform mobile applications using Flutter', 'Implemented responsive web applications with Flutter Web framework', 'Integrated Firebase services for authentication, database, and cloud storage', 'Utilized Cloudinary for efficient image and media management', 'Collaborated with design team to create intuitive user interfaces', 'Participated in code reviews and maintained version control using GitHub', 'Debugged and optimized application performance across different devices', 'Implemented state management solutions using Provider and GetX patterns' // Changed Bloc to GetX
//   ];
//   return <section id="experience" className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
//       <div className="container mx-auto max-w-6xl">
//         <motion.div initial={{
//         opacity: 0,
//         y: 20
//       }} whileInView={{
//         opacity: 1,
//         y: 0
//       }} viewport={{
//         once: true
//       }} transition={{
//         duration: 0.6
//       }} className="text-center mb-12 lg:mb-16">
//           <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6">
//             <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
//               Experience
//             </span>
//           </h2>
//           <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full" />
//         </motion.div>

//         <motion.div initial={{
//         opacity: 0,
//         y: 20
//       }} whileInView={{
//         opacity: 1,
//         y: 0
//       }} viewport={{
//         once: true
//       }} transition={{
//         duration: 0.6
//       }} className="relative">
//           <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-cyan-500 hidden md:block" />
          
//           <div className="bg-slate-800/50 backdrop-blur-sm p-6 lg:p-8 rounded-xl border border-slate-700 hover:border-blue-500 transition-all duration-300 shadow-lg hover:shadow-blue-500/20 md:ml-auto md:w-[calc(50%-2rem)]">
//             <div className="flex items-start gap-4 mb-6">
//               <div className="bg-gradient-to-br from-blue-500 to-cyan-500 p-3 rounded-lg">
//                 <Briefcase className="w-6 h-6 text-white" />
//               </div>
//               <div className="flex-1">
//                 <h3 className="text-xl lg:text-2xl font-bold text-white mb-2">Flutter Developer</h3>
//                 <p className="text-lg lg:text-xl text-blue-400 font-semibold mb-3">Asecnsify Technology</p>
//                 <div className="flex flex-wrap gap-4 text-sm lg:text-base text-slate-400">
//                   <div className="flex items-center gap-2">
//                     <MapPin size={16} className="text-cyan-400" />
//                     <span>Kolhapur</span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <Calendar size={16} className="text-cyan-400" />
//                     <span>1 Year</span>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="space-y-3 lg:space-y-4">
//               <p className="text-base lg:text-lg text-slate-300 leading-relaxed">
//                 As a Flutter Developer at Asecnsify Technology, I've been instrumental in developing 
//                 and maintaining high-quality mobile and web applications. My role encompasses the 
//                 entire development lifecycle, from design to deployment.
//               </p>
              
//               <div>
//                 <h4 className="text-lg font-semibold text-white mb-3">Key Responsibilities:</h4>
//                 <ul className="space-y-2">
//                   {responsibilities.map((item, index) => <motion.li key={index} initial={{
//                   opacity: 0,
//                   x: -20
//                 }} whileInView={{
//                   opacity: 1,
//                   x: 0
//                 }} viewport={{
//                   once: true
//                 }} transition={{
//                   duration: 0.4,
//                   delay: index * 0.05
//                 }} className="flex items-start gap-3 text-sm lg:text-base text-slate-300">
//                       <span className="text-cyan-400 mt-1">▹</span>
//                       <span>{item}</span>
//                     </motion.li>)}
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </motion.div>

//         <motion.div initial={{
//         opacity: 0,
//         y: 20
//       }} whileInView={{
//         opacity: 1,
//         y: 0
//       }} viewport={{
//         once: true
//       }} transition={{
//         duration: 0.6,
//         delay: 0.2
//       }}
//        className="mt-8 lg:mt-12 text-center">
//         <img
//   className="w-full max-w-4xl mx-auto rounded-2xl shadow-2xl shadow-blue-500/20"
//   src={photo}
//   alt="Ankita Khot"
//  />
//           {/* <img className="w-full max-w-4xl mx-auto rounded-2xl shadow-2xl shadow-blue-500/20" alt="Team collaboration at Asecnsify Technology" src="https://horizons-cdn.hostinger.com/a8bf007a-ccf9-435f-80f6-cdc6db23863d/2d7ccf2c-3b54-4e7a-9c4a-f784446ea191-mzrq0.jpg" /> */}
//         </motion.div>
//       </div>
//     </section>;
// };
// export default Experience;

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar } from "lucide-react";
import photo from "@/assets/photo.jpeg";

const experiences = [
  {
    role: "Flutter Developer",
    company: "Calyx Solutions Pvt. Ltd",
    location: "Kolhapur",
    duration: "Oct 2024 – Present (1 Year)",
    responsibilities: [
      "Working on advanced Flutter-based mobile and web applications with RESTful API integration",
      "Implemented state management using GetX and Bloc for efficient data handling",
      "Integrated Firebase Authentication and Cloud Firestore for real-time database operations",
      "Collaborated with backend and design teams to ensure smooth delivery and quality assurance",
      "Managed app deployment processes and optimized applications for better performance",
    ],
  },
  {
    role: "Flutter Developer",
    company: "Web Cloud Infotech",
    location: "Kalyan-Dombivli, Mumbai",
    duration: "1.5 Years",
    responsibilities: [
      "Developed and maintained mobile applications using Flutter and React Native",
      "Integrated Google Authentication and RESTful APIs for secure app functionality",
      "Used Jira Software for task tracking and Bitbucket for version control",
      "Collaborated with cross-functional teams to enhance UI/UX and improve app efficiency",
    ],
  },
  {
    role: "Flutter Developer",
    company: "Walstar Technologies Pvt. Ltd",
    location: "Kolhapur",
    duration: "1 Year",
    responsibilities: [
      "Implemented Provider and Bloc for scalable and maintainable state management",
      "Integrated REST APIs with Node.js backend for real-time data updates",
      "Debugged production issues and supported CI/CD pipeline updates",
      "Worked closely with design and backend teams to deliver stable, bug-free applications",
    ],
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/50"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Professional Experience
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full" />
          <p className="text-slate-400 mt-4">
            Total Experience: <span className="text-cyan-400 font-semibold">3.5+ Years</span>
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-slate-800/50 backdrop-blur-sm p-6 lg:p-8 rounded-xl border border-slate-700 hover:border-blue-500 transition-all shadow-lg hover:shadow-blue-500/20"
            >
              <div className="flex items-start gap-4 mb-5">
                <div className="bg-gradient-to-br from-blue-500 to-cyan-500 p-3 rounded-lg">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>

                <div className="flex-1">
                  <h3 className="text-xl lg:text-2xl font-bold text-white">
                    {exp.role}
                  </h3>
                  <p className="text-blue-400 font-semibold text-lg">
                    {exp.company}
                  </p>

                  <div className="flex flex-wrap gap-4 mt-2 text-sm text-slate-400">
                    <div className="flex items-center gap-2">
                      <MapPin size={16} className="text-cyan-400" />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={16} className="text-cyan-400" />
                      <span>{exp.duration}</span>
                    </div>
                  </div>
                </div>
              </div>

              <ul className="space-y-2 mt-4">
                {exp.responsibilities.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="flex items-start gap-3 text-slate-300"
                  >
                    <span className="text-cyan-400 mt-1">▹</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Image */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-center"
        >
          <img
            src={photo}
            alt="Ankita Khot"
            className="w-full max-w-4xl mx-auto rounded-2xl shadow-2xl shadow-blue-500/20"
          />
        </motion.div> */}
      </div>
    </section>
  );
};

export default Experience;
