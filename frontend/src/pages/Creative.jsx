import React from "react";
import './Creative.css';
import Footer from 'C:/Users/PC/Desktop/Abhi/Cinegraphics-main/frontend/src/container/Footer/Footer.jsx';

const Creative = () => {
  const projects = [
    {
      id: 1,
      title: "Happy Dussera ",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      videoId: "z-0JP2jx8KE",

    },
    {
      id: 2,
      title: "Plan Animation",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum ",
      videoId: "o5KPpxjpGh4",


    },
    {
      id: 3,
      title: "Happy Vinayaka Chaviti",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum ",
      videoId: "vtugsLCusOo",


    },
    
  ];

  const ProjectItem = ({ project }) => (
    <div className="pro-base2 bg-white rounded-lg transition-transform duration-300 hover:scale-[1.02] mb-8">
      <div className="md:flex h-[400px]">
        <div className="md:w-2/3">
          <div className="ytembed w-full">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${project.videoId}`}
              title={project.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              frameborder="0"
              allowFullScreen
            />
          </div>
        </div>
        <div className="md:w-2/3 p-6">
          <h2 className="protitle font-cairo font-bold text-gray-800 mb-3">{project.title}</h2>
          <p className="pro-description text-gray-600 font-cairo">{project.description}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="pro-container min-h-screen  bg-gray-100 py-12">
      <div className="mx-auto pb-24 sm:px-16 md:px-24 lg:px-32 xl:px-[8.5rem] max-w-[1920px]">
        <h1 className="pro-heading font-semibold font-cairo text-gray-800">Creative Visualization</h1>
        <div className="space-y-8">
          {projects.map((project) => (
            <ProjectItem key={project.id} project={project} />
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Creative;

