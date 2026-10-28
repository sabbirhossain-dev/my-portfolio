import { projects } from "../../constans/projects";
import Card from "../Card";

const Development = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 ">
        {projects
          .filter((project) => project.categories.includes("development"))
          .map((project) => (
            <Card key={project.id} {...project} />
          ))}
      </div>
    </>
  );
};

export default Development;
