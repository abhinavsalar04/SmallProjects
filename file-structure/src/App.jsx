import { ChevronRightIcon, FolderIcon } from "@heroicons/react/24/solid";
import { DocumentIcon } from "@heroicons/react/16/solid";
import { useState } from "react";

const folders = [
  {
    name: "Home",
    type: "FOLDER",
    subFolders: [
      {
        name: "Documents",
        type: "FOLDER",
        subFolders: [
          { name: "document1.txt", type: "FILE", },
          { name: "document2.txt", type: "FILE" },
          {
            name: "Office Docs",
            type: "FOLDER",
            subFolders: [
              { name: "file1.txt", type: "FILE" },
              { name: "file2.txt", type: "FILE" },
            ],
          },
          { name: "temporary.txt", type: "FILE" },
        ],
      },
      {
        name: "Movies",
        type: "FOLDER",
        subFolders: [
          { name: "Action", type: "FOLDER" },
          { name: "Fictional", type: "FOLDER" },
        ],
      },
      {
        name: "Music",
        type: "FOLDER",
        subFolders: [
          {
            name: "1990s",
            type: "FOLDER",
            subFolders: [
              { name: "song1.mp3", type: "FILE" },
              { name: "song2.mp3", type: "FILE" },
            ],
          },
          {
            name: "2000s",
            type: "FOLDER",
            subFolders: [
              { name: "song1.mp3", type: "FILE" },
              { name: "song2.mp3", type: "FILE" },
            ],
          },
        ],
      },
    ],
  },
];

function App() {
  return (
    <div className="m-10">
      <ul className="pl-6">
        {folders?.map((folder) => (
          <Folder key={folder.name} folder={folder} />
        ))}
      </ul>
    </div>
  );
}

export default App;

function Folder({ folder }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <li className={`my-1 pl-6`} key={folder}>
      <span
        onClick={() => {
          if (folder?.type === "FOLDER" && folder.subFolders?.length > 0)
            setIsOpen(!isOpen);
        }}
        className="flex items-center gap-0.5 text"
      >
        {folder.type === "FOLDER" ? (
          <>
            {folder?.subFolders?.length > 0 && <ChevronRightIcon
              className={`size-4 text-gray-500 ${
                isOpen
                  ? "rotate-90 transition duration-200"
                  : "transition duration-200"
              }`}
            />}
            <FolderIcon className="cursor-pointer size-9 text-sky-500" />
          </>
        ) : (
          <DocumentIcon className="size-9 text-gray-700" />
        )}
        <span className="text-xl font-semibold">{folder.name}</span>
      </span>
      {isOpen &&
        folder?.type === "FOLDER" &&
        folder?.subFolders?.length > 0 &&
        folder?.subFolders?.map((subFolder) => (
          <ul key={subFolder.name} className="pl-6">
            <Folder folder={subFolder} />
          </ul>
        ))}
    </li>
  );
}
