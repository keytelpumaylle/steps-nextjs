import {Navbar} from "@/components/navbar/Navbar";



export default function GeneralLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <>
      <Navbar/>
      <div className="flex flex-col items-center p-8">
        <h1>Root Layout General</h1>
        { children }
      </div>
    </>
  );
}