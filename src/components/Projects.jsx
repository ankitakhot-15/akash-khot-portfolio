// import React from 'react';
// import { motion } from 'framer-motion';
// import { ExternalLink, Github } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { useToast } from '@/components/ui/use-toast';

// const Projects = () => {
//   const { toast } = useToast();

//   const projects = [
//     {
//       title: 'Kolhapur Fashion Jewelry',
//       description: 'Developed a stylish e-commerce website for Kolhapur Fashion Jewelry, offering a seamless shopping experience for traditional and modern jewelry.',
//       technologies: ['Flutter Web', 'E-commerce', 'Payment Gateway', 'Responsive Design'],
//       liveDemoUrl: 'https://kolhapur-fashion-jwellery-web-maom.vercel.app',
//       githubUrl: null 
//     },
//     {
//       title: 'Kolhapur Fashion Cloths',
//       description: 'Created an e-commerce platform for Kolhapur Fashion Cloths, featuring diverse clothing collections and an intuitive user interface for online shopping.',
//       technologies: ['Flutter Web', 'E-commerce', 'User Authentication', 'Product Catalog'],
//       liveDemoUrl: 'https://kolhapur-fashion-cloths-web.vercel.app',
//       githubUrl: null
//     }
//   ];

//   const handleLinkClick = (url, type) => {
//     if (url) {
//       window.open(url, '_blank');
//     } else {
//       toast({
//         title: "🚧 Feature Coming Soon",
//         description: `🚧 ${type} isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀`
//       });
//     }
//   };

//   return (
//     <section id="projects" className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
//       <div className="container mx-auto max-w-6xl">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-12 lg:mb-16"
//         >
//           <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6">
//             <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
//               Featured Projects
//             </span>
//           </h2>
//           <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full" />
//           <p className="text-base lg:text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
//             Showcasing my best work in mobile and web development
//           </p>
//         </motion.div>

//         <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
//           {projects.map((project, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//               whileHover={{ y: -10 }}
//               className="bg-card backdrop-blur-sm rounded-xl border border-border hover:border-blue-500 transition-all duration-300 shadow-lg hover:shadow-blue-500/20 overflow-hidden group flex flex-col h-full"
//             >
//               {/* Removed image section as requested */}

//               <div className="p-6 lg:p-8 flex flex-col flex-grow">
//                 <h3 className="text-xl lg:text-2xl font-bold text-card-foreground mb-3 group-hover:text-blue-400 transition-colors">
//                   {project.title}
//                 </h3>
//                 <p className="text-sm lg:text-base text-muted-foreground mb-4 leading-relaxed flex-grow">
//                   {project.description}
//                 </p>

//                 <div className="flex flex-wrap gap-2 mb-6">
//                   {project.technologies.map((tech, techIndex) => (
//                     <span
//                       key={techIndex}
//                       className="px-3 py-1 bg-blue-600/10 border border-blue-500/20 rounded-full text-xs lg:text-sm text-blue-500 font-medium"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>

//                 <div className="flex gap-3 mt-auto">
//                   <Button
//                     onClick={() => handleLinkClick(project.liveDemoUrl, 'Live Demo')}
//                     className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white transition-all duration-300"
//                   >
//                     <ExternalLink className="mr-2" size={16} />
//                     Live Demo
//                   </Button>
//                   {project.githubUrl && (
//                     <Button
//                       onClick={() => handleLinkClick(project.githubUrl, 'GitHub Code')}
//                       variant="secondary"
//                       className="flex-1 transition-all duration-300"
//                     >
//                       <Github className="mr-2" size={16} />
//                       Code
//                     </Button>
//                   )}
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const Projects = () => {
  const { toast } = useToast();

  const projects = [
    {
      title: "Chat Application",
      description:
        "A real-time chat application with secure authentication and instant messaging using Firebase services. Supports real-time updates and push notifications.",
      technologies: [
        "Flutter",
        "Dart",
        "Firebase Auth",
        "Firestore",
        "Cloud Functions",
      ],
      links: [],
      githubUrl: null,
    },
    {
      title: "Clinical Trac App",
      description:
        "A centralized clinical management app for schedules, documents, and collaboration. Integrated Firebase and REST APIs with Provider for efficient state management.",
      technologies: ["Flutter", "Dart", "Firebase", "REST API", "Provider"],
      links: [
        {
          label: "App Store",
          url: "https://apps.apple.com/us/app/clinical-trac-rt/id1421823165",
        },
      ],
      githubUrl: null,
    },
    {
      title: "Otto App",
      description:
        "An IoT-based application for real-time monitoring of worksite equipment using sensor data. Implemented Bloc for scalable state management.",
      technologies: ["Flutter", "Dart", "Bloc", "API Integration"],
      links: [
        {
          label: "Play Store",
          url: "https://play.google.com/store/apps/details?id=com.ottotechsystems.otto",
        },
      ],
      githubUrl: null,
    },
    {
      title: "Money Transfer App",
      description:
        "A secure digital wallet and money transfer application with real-time transaction tracking, smooth navigation, and WebView integrations.",
      technologies: [
        "Flutter",
        "Dart",
        "Bloc",
        "GetX",
        "REST API",
        "WebView",
      ],
      links: [
        {
          label: "Play Store – Teeparam",
          url: "https://play.google.com/store/apps/details?id=com.org.teeparam&hl=en",
        },
        {
          label: "Play Store – FinestPay",
          url: "https://play.google.com/store/search?q=finestpay&c=apps&hl=en",
        },
        {
          label: "Play Store – PayQuick",
          url: "https://play.google.com/store/apps/details?id=com.org.payquick&hl=en",
        },
        {
          label: "Play Store – Eghc App",
          url: "https://play.google.com/store/apps/details?id=com.app.eghczqwwknkvlouzpdcrfihlasbajenuymtvosqjbxgyf&hl=en",
        },
      ],
      githubUrl: null,
    },
  ];

  const handleLinkClick = (url) => {
    if (url) {
      window.open(url, "_blank");
    } else {
      toast({
        title: "🚧 Feature Coming Soon",
        description: "This link is not available yet.",
      });
    }
  };

  return (
    <section
      id="projects"
      className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-muted/30"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Real-world Flutter applications deployed on Play Store and App Store
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-card rounded-xl border hover:border-blue-500 transition-all shadow-lg flex flex-col"
            >
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-3 text-card-foreground">
                  {project.title}
                </h3>

                <p className="text-sm text-muted-foreground mb-4 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs bg-blue-600/10 border border-blue-500/20 rounded-full text-blue-500"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col gap-3">
                  {project.links.map((link, i) => (
                    <Button
                      key={i}
                      onClick={() => handleLinkClick(link.url)}
                      className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white"
                    >
                      <ExternalLink className="mr-2" size={16} />
                      {link.label}
                    </Button>
                  ))}

                  {project.githubUrl && (
                    <Button variant="secondary">
                      <Github className="mr-2" size={16} />
                      Source Code
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
