export const nodesData = [
    {
      name: "Home",
      type: "FOLDER",
      subNodes: [
        {
          name: "Documents",
          type: "FOLDER",
          subNodes: [
            { name: "document1.txt", type: "FILE", },
            { name: "document2.txt", type: "FILE" },
            {
              name: "Office Docs",
              type: "FOLDER",
              subNodes: [
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
          subNodes: [
            { name: "Action", type: "FOLDER" },
            { name: "Fictional", type: "FOLDER" },
          ],
        },
        {
          name: "Music",
          type: "FOLDER",
          subNodes: [
            {
              name: "1990s",
              type: "FOLDER",
              subNodes: [
                { name: "song1.mp3", type: "FILE" },
                { name: "song2.mp3", type: "FILE" },
              ],
            },
            {
              name: "2000s",
              type: "FOLDER",
              subNodes: [
                { name: "song1.mp3", type: "FILE" },
                { name: "song2.mp3", type: "FILE" },
              ],
            },
          ],
        },
      ],
    },
  ];