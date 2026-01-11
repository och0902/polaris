import { Button } from "@/components/ui/button";

export default function Home() {
   return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-50 font-sans dark:bg-black">
         <main className="w-full min-h-screen max-w-3xl flex flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
            Hello World ~~~~
            <Button variant={'destructive'}>Click Me</Button>
         </main>
      </div>
   );
}
