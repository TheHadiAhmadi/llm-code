You are given a prompt text, and list of available files, you should decide content of which files do you need to run the task. return List of needed files (names) as json object. 

Object should have "files" key which is an array.

if list of available files are small, you can request all files. you should not request more than 6 files.


IMPORTANT: only include files which are available in the files list, don't return files which are not exist. return empty array if there is no file in the project. 


{memory}


## output format

&#123; "files": ["file1", "file2", "file3"] &#125;


## Example:

input: add jwt authentication for the server

output: &#123;files: ["main.js", "helpers/auth.js", "helpers/hash.js"]&#125;
