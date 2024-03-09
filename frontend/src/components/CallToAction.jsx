import { Button } from "flowbite-react";

export default function CallToAction() {
  return (
    <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-between items-center rounded-tl-3xl rounded-br-3xl text-center">
      <div className="justify-center flex flex-col">
        <h2 className="text-2xl">Want to see my more Projects?</h2>
        <p className="text-gray-500 my-2">Checkout My GitHub Repository</p>
        <Button
          gradientDuoTone="purpleToPink"
          className="rounded-tl-xl rounded-bl-none rounded-tr-none"
        >
          <a
            href="https://github.com/erpankajk4"
            target="_blank"
            rel="noopener noreferrer"
          >
            Click to See
          </a>
        </Button>
      </div>
      <div className="flex justify-center items-center p-4 sm:p-0">
        <img
          className="max-h-72 sm:rounded-br-2xl"
          src="https://user-images.githubusercontent.com/74038190/235224431-e8c8c12e-6826-47f1-89fb-2ddad83b3abf.gif"
        />
      </div>
    </div>
  );
}
