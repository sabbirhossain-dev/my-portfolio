import { projects } from "../../constans/projects";
import Card from "../Card";

const All = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects
          .filter((project) => project.featured)
          .map((project) => (
            <Card key={project.id} {...project} className="h-full" />
          ))}
      </div>
    </>
  );
};

export default All;
