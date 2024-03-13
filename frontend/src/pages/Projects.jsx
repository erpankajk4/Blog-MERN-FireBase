import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
import CallToAction from "../components/CallToAction";
import { BsGithub } from "react-icons/bs";
export default function Projects() {
  return (
    <>
      <div className="min-h-screen w-full mx-auto flex justify-center items-center flex-col gap-6">
        <h1 className="text-3xl font-semibold">Projects</h1>
        <p className="text-md text-gray-500">
          Checkout my Github Repository if you want to see my more projects.
        </p>
        <Link to="https://github.com/erpankajk4">
          <Button outline gradientDuoTone="purpleToPink">
            <BsGithub className="mr-3 h-6 w-6" />
            GitHub
          </Button>
        </Link>
        <div className="p-3 bg-amber-100 dark:bg-slate-700 w-full">
          <div className="max-w-2xl mx-auto w-full">
            <CallToAction />
          </div>
        </div>
      </div>
    </>
  );
}
