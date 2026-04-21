const ProjectCard = (props) => {
  return (
    <>
      {/* FIRST IMAGE */}
      <div className="group relative w-full lg:w-1/2 aspect-[4/3] hover:rounded-4xl lg:h-full overflow-hidden transition-all duration-300 cursor-pointer">
        <img
          className="w-full h-full object-cover"
          src={props.image1}
          alt="basket"
        />

        <div className="opacity-0 group-hover:opacity-100 transition-all duration-200 absolute top-0 left-0 h-full w-full flex items-center justify-center bg-black/26">
          <h2 className="pb-1 px-5 leading-10 p-3 uppercase text-[7vh] text-white font-[font2] border-2 border-white rounded-full">
            view project
          </h2>
        </div>
      </div>

      {/* SECOND IMAGE */}
      <div className="group relative w-full lg:w-1/2 aspect-[4/3] hover:rounded-4xl lg:h-full overflow-hidden transition-all duration-300 cursor-pointer">
        <img
          className="w-full h-full object-cover"
          src={props.image2}
          alt="bikerman"
        />

        <div className="opacity-0 group-hover:opacity-100 transition-all duration-200 absolute top-0 left-0 h-full w-full flex items-center justify-center bg-black/26">
          <h2 className="pb-1 px-5 leading-10 p-3 uppercase text-[7vh] text-white font-[font2] border-2 border-white rounded-full">
            view project
          </h2>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
