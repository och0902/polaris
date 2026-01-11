'use client';

import { useQuery, useMutation} from "convex/react";
import { api } from "../../convex/_generated/api";

import { Button } from "@/components/ui/button";

export default function Home() {

   const projects = useQuery(api.projects.get);
   const createProject = useMutation(api.projects.create);
   
   return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-50 font-sans dark:bg-black">
         <main className="w-full min-h-screen max-w-3xl flex flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
            Hello World ~~~~
            <Button onClick={() => createProject({
               name: "New Project"
            })}>Add new</Button>
            {projects?.map((project) => (
               <div key={project._id}>
                  <p>{project.name}</p>
                  <p>Owner Id: {project.ownerId}</p>                
               </div>
            ))}
         </main>
      </div>
   );
};