import projects from "../../assets/data/portfolioData";

function Modal({ activeID, setShowModal }) {
  const project = projects.find((project) => project.id === activeID);

  return (
    <div
      onClick={(prev) => setShowModal(!prev)}
      className="w-full h-full fixed top-0 left-0 z-10 bg-headingColor bg-opacity-40"
    >
      <div className="max-w-[600px] absolute top-[50%] left-[50%] z-20 bg-white rounded-[8px] transform -translate-x-[50%] -translate-y-[50%] p-5">
        <div>
          <figure>
            <img
              className="rounded-[8px]"
              src={project.imgUrl}
              alt={project.title}
            />
          </figure>
        </div>

        <div>
          <h2 className="text-2xl text-headingColor font-[700] my-5">
            {project.title}
          </h2>
          <p className="text-15px leading-7 text-smallTextColor">
            {project.description}
          </p>

          <div className="mt-5 flex items-center gap-3 flex-wrap">
            <h4 className="text-headingColor text-[18px] text-[700]">
              Technologies
            </h4>

            {project.technologies.map((item, index) => (
              <span
                key={index}
                className="bg-gray-200 py-1 px-2 rounded-[5px] text-[14px]"
              >
                {item}
              </span>
            ))}
          </div>
          <a href={project.siteUrl} target="_blank">
            <button className="bg-primaryColor text-white py-2 px-4 my-8 rounded-[8px] font-[500] hover:bg-headingColor ease-in duration-300">
              Live Site
            </button>
          </a>
          <a href={project.giturl} target="_blank" className="ml-[20px]">
            <button className="bg-primaryColor text-white py-2 px-4 my-8 rounded-[8px] font-[500] hover:bg-headingColor ease-in duration-300">
              Git-hub Link
            </button>
          </a>
        </div>

        <button
          onClick={(prev) => setShowModal(!prev)}
          className="w-[1.8rem] h-[1.8rem] bg-white absolute top-[1.7rem] right-[1.7rem] text-[25px] flex items-center justify-center rounded-[3px] font-bold cursor-pointer"
        >
          X
        </button>
      </div>
    </div>
  );
}

export default Modal;
