# File Structure
- This project is demonstration of we can create nested folders and files to any level.
- Setup 
 - Download or fork the repo
 - hit command -> npm install
 - hit command npm run dev
 - Server will be running on port 5000 

 # Concept
  - Data contains a strcuture like 
   - [{name: 'File', type: 'FOLDER' | 'FILE', subFolders: [...]}]
  - Rendered folders and files, if folder then again call the same component else just render a file
