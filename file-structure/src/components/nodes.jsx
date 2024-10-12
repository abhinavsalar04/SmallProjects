import { ChevronRightIcon, DocumentIcon, FolderIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

export function Nodes({ node }) {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <li className={`my-1 pl-6`} key={node.name}>
        <span
          onClick={() => {
            if (node?.type === "FOLDER" && node.subNodes?.length > 0)
              setIsOpen(!isOpen);
          }}
          className="flex items-center gap-0.5 text"
        >
          {node.type === "FOLDER" ? (
            <>
              {node?.subNodes?.length > 0 && <ChevronRightIcon
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
          <span className="text-xl font-semibold">{node.name}</span>
        </span>
        {isOpen &&
          node?.type === "FOLDER" &&
          node?.subNodes?.length > 0 &&
          node?.subNodes?.map((subnode) => (
            <ul key={subnode.name} className="pl-6">
              <Nodes node={subnode} />
            </ul>
          ))}
      </li>
    );
  }
  