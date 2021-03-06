import { ReactComponent as UserSvg } from '../assets/user-regular.svg';

export default function About () {

  return (
    <>
      <div className="fixed top-[20%] left-[50%] w-[400px] h-fit border-2 border-purple-200 
      rounded-2xl shadow-md -ml-[200px] p-4 text-lg flex flex-col gap-2 dark:text-white sm:w-[380px] sm:-ml-[190px] sm:top-[14%]">
        <section className="flex">
          <UserSvg className="h-24 w-24 dark:fill-white" />
          <div className="flex flex-col px-8">
            <span className="text-xl font-semibold">Brandon Niu</span>
            <span className="italic">Software Developer</span>
            <span>Ottawa, Ontario, Canada</span>
            <span className="font-medium text-neutral-400"><a href="mailto:niubrandon@gmail.com"><u>niubrandon@gmail.com</u></a></span>
          </div>
        </section>

        <section className="flex flex-col grow">
          <h2 className="font-semibold">Experience:</h2>
          <p className="text-base font-medium">PiiComm Inc. <span className="text-xs italic">Software Developer</span>  <span className="text-xs">Dec 2021 - Present</span></p>
          <p className="text-sm sm:text-xs"> - Developing a mobile asset manager platform and contributing to the majority of the frontend development</p>
          <p className="text-base font-medium mt-2">Multimatic Inc. <span className="text-xs italic">Quality Engineer</span>  <span className="text-xs">Jun 2016 - Aug 2021</span></p>
          <p className="text-sm sm:text-xs"> - Launched and maintained the Ford GT supercar project </p>
        </section>

        <section className="flex flex-col">
          <h2 className="font-semibold">Tech Stacks:</h2>
          <ul className="text-sm sm:text-xs">
            <li>- Proficient in Javascript, TypeScript, and modern web frameworks: React and Vue</li>
            <li>- Proficient in responsive web design building tools such as Tailwind, Flexbox and CSS-grid</li>
            <li>- Experience with building microservices using Node.js, Express.js, Ruby on Rails, Go and C# and PostgreSQL</li>
            <li></li>
          </ul>      
        </section>

        <div className="flex justify-center h-12">
          <a 
            href="https://www.linkedin.com/in/niubrandon/"
            className="text-purple-900 hover:text-lg border-2 bg-purple-400 rounded-lg shadow hover:shadow-xl p-2">
            LinkedIn Profile
          </a>
        </div>
      </div>
    </>
  );
}