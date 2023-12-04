import { useState } from "react";
import data from "../../assets/data/portfolioData";
import Modal from "./Modal";

function Projects() {
  const [nextItems, setNextItems] = useState(3);
  const [projects, setProjects] = useState(data);
  const [showModal, setShowModal] = useState(false);
  const [activeID, setActiveID] = useState(null);

  const loadMoreHandler = () => {
    setNextItems((prev) => prev + 3);
  };

  const showModalHandler = (id) => {
    setShowModal(true);
    setActiveID(id);
  };

  return (
    <section id="Projects">
      <div className="container pt-[50px]">
        <div className="text-center">
          <p className="text-headingColor font-[800] text-[2.4rem] mb-5">
            My Projects
          </p>
        </div>

        <div className="flex items-center gap-4 flex-wrap mt-12">
          {projects.slice(0, nextItems)?.map((project, index) => (
            <div
              key={index}
              data-aos="fade-zoom-in"
              data-aos-delay="50"
              data-aos-duration="1000"
              className="group max-w-full sm:w-[48.5%] md:w-[31.8%] lg:w-[32.2%] relative z-[1]"
            >
              <figure>
                <img
                  src={project.imgUrl}
                  alt={project.title}
                  className="rounded-[8px]"
                />
              </figure>

              <div
                onClick={() => showModalHandler(project.id)}
                className="w-full h-full bg-primaryColor bg-opacity-40 absolute top-0 left-0 z-[5] hidden group-hover:block "
              >
                <div className="w-full h-full flex items-center justify-center">
                  <button className="text-white bg-headingColor hover:bg-primaryColor py-2 px-4 rounded-[8px] font-[800] ease-in duration-200">
                    See Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-6">
          {nextItems < projects.length && data.length > 3 && (
            <button
              onClick={loadMoreHandler}
              className="text-white bg-primaryColor hover:bg-smallTextColor py-2 px-4 rounded-[8px] font-[500] ease-in duration-200"
            >
              Load More
            </button>
          )}
        </div>
      </div>

      {showModal && <Modal setShowModal={setShowModal} activeID={activeID} />}
    </section>
  );
}

export default Projects;
