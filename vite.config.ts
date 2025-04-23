import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";

import path, {dirname} from "path";
import {fileURLToPath} from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(), 
    tailwindcss()
  ],
  resolve: {
    alias:  {
      '@': path.resolve(__dirname, 'src')
    }
  }
});

//This '@' alias allows you to use '@' as a shortcut for the 'src' directory in your imports. For example, instead of writing import MyComponent from '../../components/MyComponent.vue', you can write import MyComponent from '@/components/MyComponent.vue'. This makes your imports cleaner and easier to read.

//The path.resolve(__dirname, 'src') function call constructs an absolute path to the 'src' directory based on the current directory of the script. This is important because it ensures that the alias works correctly regardless of where the script is executed.

//The directories, 'path' and 'url', are built-in Node.js modules and installed from '@types/node' that provide utilities for working with file and directory paths, and for handling URLs, respectively. The 'path' module is used to resolve the absolute path, while the 'url' module is used to convert the module's URL to a file path. This is necessary because Vite uses ES modules, which have different URL handling than CommonJS modules.

//The 'import.meta.url' is a special property in ES modules that contains the URL of the current module. This is useful for resolving paths relative to the current module, especially when using Vite, which supports ES modules natively.

//The 'fileURLToPath' function converts a file URL to a file path, which is then used to determine the directory of the current module. This is important for resolving the '@' alias correctly, as it ensures that the path is always relative to the current module's location.

//After setting up the alias, in the tsconfig.app.json file, add  the baseUrl and paths properties to the compilerOptions section. This tells TypeScript to recognize the '@' alias and resolve it to the 'src' directory. The baseUrl property is set to './', which means that all paths are relative to the root of the project. The paths property maps the '@/*' pattern to the 'src/*' directory, allowing TypeScript to resolve imports that use the '@' alias correctly.

