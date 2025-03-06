import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="h-screen w-full bg-black bg-opacity-50 flex justify-center items-center">
      <section
        id="home"
        className="h-screen max-w-[1600px] bg-black text-white bg-opacity-50 flex flex-row items-center justify-center px-10 gap-x-35"
      >
        {/* Text Section */}
        <div className="w-1/2 flex flex-col justify-center space-y-4 text-left">
          <strong className="text-2xl">Hi There, I am</strong>
          <h2 className="text-4xl font-bold">John Carlo M. Lagunsing</h2>
          <p className="italic">Web Developer | Editor | Business Analyst</p>
          <p className="max-w-lg text-white text-2lg">
            A full-stack developer and skilled editor, I am eager for success in the IT industry.
            I am excited to contribute my expertise to dynamic projects and look forward to
            advancing my career in this evolving field.
          </p>
          <div className="flex  gap-0">
          <a href="https://www.facebook.com/c.lagunsing" rel="noopener noreferrer">
  <div className="group p-2 rounded-full transition duration-300 ease-in-out">
    <svg
      className="w-10 h-10 transition duration-300"
      fill="currentColor"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-143 145 512 512"
      xmlSpace="preserve"
    >
      <rect 
        className="fill-black group-hover:fill-blue-500 transition duration-300"
        x="-143" y="145" width="512" height="512" rx="256" ry="256"
      />
      <g id="SVGRepo_iconCarrier">
        <g>
          <path className="transition duration-300" d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M272.8,560.7 
            c-20.8,20.8-44.9,37.1-71.8,48.4c-27.8,11.8-57.4,17.7-88,17.7c-30.5,0-60.1-6-88-17.7c-26.9-11.4-51.1-27.7-71.8-48.4 
            c-20.8-20.8-37.1-44.9-48.4-71.8C-107,461.1-113,431.5-113,401s6-60.1,17.7-88c11.4-26.9,27.7-51.1,48.4-71.8 
            c20.9-20.8,45-37.1,71.9-48.5C52.9,181,82.5,175,113,175s60.1,6,88,17.7c26.9,11.4,51.1,27.7,71.8,48.4 
            c20.8,20.8,37.1,44.9,48.4,71.8c11.8,27.8,17.7,57.4,17.7,88c0,30.5-6,60.1-17.7,88C309.8,515.8,293.5,540,272.8,560.7z"
          ></path>
          <path className="transition duration-300" d="M146.8,313.7c10.3,0,21.3,3.2,21.3,3.2l6.6-39.2c0,0-14-4.8-47.4-4.8c-20.5,0-32.4,7.8-41.1,19.3 
            c-8.2,10.9-8.5,28.4-8.5,39.7v25.7H51.2v38.3h26.5v133h49.6v-133h39.3l2.9-38.3h-42.2v-29.9C127.3,317.4,136.5,313.7,146.8,313.7z"
          ></path>
        </g>
      </g>
    </svg>
  </div>
  </a>
  <a href={`mailto:jc6690304@gmail.com?subject=Hello&body=${encodeURIComponent('I am interested in your work')}`}>
  <div className="group p-2 rounded-full transition duration-300 ease-in-out">
    <svg
      className="w-10 h-10 transition duration-300"
      fill="currentColor"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-143 145 512 512"
      xmlSpace="preserve"
    >

      <defs>
  <linearGradient id="instaGradient" x1="0%" y1="100%" x2="100%" y2="0%">
    <stop offset="0%" stopColor="#feda75" />  {/* Yellow (Bottom Left) */}
    <stop offset="25%" stopColor="#fa7e1e" /> {/* Orange */}
    <stop offset="50%" stopColor="#d62976" /> {/* Pink */}
    <stop offset="75%" stopColor="#962fbf" /> {/* Purple */}
    <stop offset="100%" stopColor="#4f5bd5" /> {/* Blue (Top Right) */}
  </linearGradient>
</defs>

      <rect 
        className="fill-black group-hover:fill-[url(#instaGradient)] transition duration-300"
        x="-143" y="145" width="512" height="512" rx="256" ry="256"
      />
      <g id="SVGRepo_iconCarrier">
        <g>
          <path className="transition duration-300" d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M272.8,560.7 
            c-20.8,20.8-44.9,37.1-71.8,48.4c-27.8,11.8-57.4,17.7-88,17.7c-30.5,0-60.1-6-88-17.7c-26.9-11.4-51.1-27.7-71.8-48.4 
            c-20.8-20.8-37.1-44.9-48.4-71.8C-107,461.1-113,431.5-113,401s6-60.1,17.7-88c11.4-26.9,27.7-51.1,48.4-71.8 
            c20.9-20.8,45-37.1,71.9-48.5C52.9,181,82.5,175,113,175s60.1,6,88,17.7c26.9,11.4,51.1,27.7,71.8,48.4 
            c20.8,20.8,37.1,44.9,48.4,71.8c11.8,27.8,17.7,57.4,17.7,88c0,30.5-6,60.1-17.7,88C309.8,515.8,293.5,540,272.8,560.7z"
          ></path>
          <path className="transition duration-300" d="M191.6,273h-157c-27.3,0-49.5,22.2-49.5,49.5v52.3v104.8c0,27.3,22.2,49.5,49.5,49.5h157c27.3,0,49.5-22.2,49.5-49.5V374.7 v-52.3C241,295.2,218.8,273,191.6,273z M205.8,302.5h5.7v5.6v37.8l-43.3,0.1l-0.1-43.4L205.8,302.5z M76.5,374.7 c8.2-11.3,21.5-18.8,36.5-18.8s28.3,7.4,36.5,18.8c5.4,7.4,8.5,16.5,8.5,26.3c0,24.8-20.2,45.1-45.1,45.1C88,446.1,68,425.8,68,401 C68,391.2,71.2,382.1,76.5,374.7z M216.1,479.5c0,13.5-11,24.5-24.5,24.5h-157c-13.5,0-24.5-11-24.5-24.5V374.7h38.2 c-3.3,8.1-5.2,17-5.2,26.3c0,38.6,31.4,70,70,70c38.6,0,70-31.4,70-70c0-9.3-1.9-18.2-5.2-26.3h38.2V479.5z"
          ></path>
        </g>
      </g>
    </svg>
  </div>
  </a>
  <a href="">
  <div className="relative p-2 rounded-full transition duration-300 ease-in-out group">
  <svg
    className="w-10 h-10 transition duration-300"
    fill="currentColor"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="-143 145 512 512"
    xmlSpace="preserve"
  >
    <rect 
      className="fill-black group-hover:fill-red-400 transition duration-300"
      x="-143" y="145" width="512" height="512" rx="256" ry="256"
    />
    <g id="SVGRepo_iconCarrier">
      <g>
        <path className="transition duration-300" d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M272.8,560.7 
          c-20.8,20.8-44.9,37.1-71.8,48.4c-27.8,11.8-57.4,17.7-88,17.7c-30.5,0-60.1-6-88-17.7c-26.9-11.4-51.1-27.7-71.8-48.4 
          c-20.8-20.8-37.1-44.9-48.4-71.8C-107,461.1-113,431.5-113,401s6-60.1,17.7-88c11.4-26.9,27.7-51.1,48.4-71.8 
          c20.9-20.8,45-37.1,71.9-48.5C52.9,181,82.5,175,113,175s60.1,6,88,17.7c26.9,11.4,51.1,27.7,71.8,48.4 
          c20.8,20.8,37.1,44.9,48.4,71.8c11.8,27.8,17.7,57.4,17.7,88c0,30.5-6,60.1-17.7,88C309.8,515.8,293.5,540,272.8,560.7z"
        ></path>
      </g>
    </g>
  </svg>

  {/* Email Icon (Lucide, FontAwesome, or any SVG) */}
  <div className="absolute inset-0 flex items-center justify-center">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="white"
      className="w-5 h-5 text-white group-hover:text-blue-300 transition duration-300"
      viewBox="0 0 24 24"
    >
      <path d="M20 4H4C2.89 4 2 4.89 2 6V18C2 19.11 2.89 20 4 20H20C21.11 20 22 19.11 22 18V6C22 4.89 21.11 4 20 4M20 8L12 13L4 8V6L12 11L20 6V8Z" />
    </svg>
  </div>
</div>
</a>
 <div className="relative p-2 rounded-full transition duration-300 ease-in-out group">
  <svg
    className="w-10 h-10 transition duration-300"
    fill="currentColor"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="-143 145 512 512"
    xmlSpace="preserve"
  >
    <rect 
      className="fill-black group-hover:fill-blue-500 transition duration-300"
      x="-143" y="145" width="512" height="512" rx="256" ry="256"
    />
    <g id="SVGRepo_iconCarrier">
      <g>
        <path className="transition duration-300" d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M272.8,560.7 
          c-20.8,20.8-44.9,37.1-71.8,48.4c-27.8,11.8-57.4,17.7-88,17.7c-30.5,0-60.1-6-88-17.7c-26.9-11.4-51.1-27.7-71.8-48.4 
          c-20.8-20.8-37.1-44.9-48.4-71.8C-107,461.1-113,431.5-113,401s6-60.1,17.7-88c11.4-26.9,27.7-51.1,48.4-71.8 
          c20.9-20.8,45-37.1,71.9-48.5C52.9,181,82.5,175,113,175s60.1,6,88,17.7c26.9,11.4,51.1,27.7,71.8,48.4 
          c20.8,20.8,37.1,44.9,48.4,71.8c11.8,27.8,17.7,57.4,17.7,88c0,30.5-6,60.1-17.7,88C309.8,515.8,293.5,540,272.8,560.7z"
        ></path>
      </g>
    </g>
  </svg>

  {/* Email Icon (Lucide, FontAwesome, or any SVG) */}
  <div className="absolute inset-0 flex items-center justify-center">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="white"
      className="w-5 h-5 text-white group-hover:text-blue-300 transition duration-300"
      viewBox="0 0 24 24"
    >
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.49 6S0 4.88 0 3.5C0 2.12 1.11 1 2.49 1S4.98 2.12 4.98 3.5zM.2 8.18h4.55V23H.2V8.18zM8.31 8.18h4.36v2.03h.06c.61-1.16 2.09-2.39 4.3-2.39 4.6 0 5.44 3.03 5.44 6.97V23h-4.55v-6.92c0-1.65-.03-3.77-2.3-3.77-2.3 0-2.65 1.79-2.65 3.64V23H8.31V8.18z" />
    </svg>
  </div>
</div>
<div className="relative p-2 rounded-full transition duration-300 ease-in-out group">
  <svg
    className="w-10 h-10 transition duration-300"
    fill="currentColor"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="-143 145 512 512"
    xmlSpace="preserve"
  >
    <rect 
      className="fill-black group-hover:fill-white transition duration-300"
      x="-143" y="145" width="512" height="512" rx="256" ry="256"
    />
    <g id="SVGRepo_iconCarrier">
      <g>
        <path  className="transition duration-300" d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M272.8,560.7 
          c-20.8,20.8-44.9,37.1-71.8,48.4c-27.8,11.8-57.4,17.7-88,17.7c-30.5,0-60.1-6-88-17.7c-26.9-11.4-51.1-27.7-71.8-48.4 
          c-20.8-20.8-37.1-44.9-48.4-71.8C-107,461.1-113,431.5-113,401s6-60.1,17.7-88c11.4-26.9,27.7-51.1,48.4-71.8 
          c20.9-20.8,45-37.1,71.9-48.5C52.9,181,82.5,175,113,175s60.1,6,88,17.7c26.9,11.4,51.1,27.7,71.8,48.4 
          c20.8,20.8,37.1,44.9,48.4,71.8c11.8,27.8,17.7,57.4,17.7,88c0,30.5-6,60.1-17.7,88C309.8,515.8,293.5,540,272.8,560.7z"
        ></path>
      </g>
    </g>
  </svg>

  {/* Email Icon (Lucide, FontAwesome, or any SVG) */}
    <div className="absolute inset-0 flex items-center justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="white"
        className="w-7 h-7 text-black group-hover:text-blue-300 transition duration-300"
        viewBox="0 0 24 24"
        
      >
        <path  d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.083-.729.083-.729 1.205.085 1.84 1.24 1.84 1.24 1.07 1.835 2.805 1.305 3.49.998.108-.775.418-1.305.76-1.605-2.665-.3-5.467-1.335-5.467-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.52.105-3.165 0 0 1.005-.322 3.3 1.23a11.49 11.49 0 0 1 3-.405c1.02.005 2.04.138 3 .405 2.295-1.552 3.3-1.23 3.3-1.23.645 1.645.24 2.862.12 3.165.765.84 1.23 1.91 1.23 3.22 0 4.605-2.805 5.625-5.475 5.92.43.375.81 1.12.81 2.26 0 1.635-.015 2.955-.015 3.355 0 .315.21.69.825.57 4.765-1.58 8.2-6.075 8.2-11.38 0-6.627-5.37-12-12-12z" 
        className="group-hover:fill-black transition duration-300"/>
      </svg>
    </div>
  </div>
   
  </div>
        </div>

        {/* Image Section */}
        <div className="w-1/2 flex justify-center">
          <img
            src="https://landing-page-5zim.vercel.app/Photos/Dp.jpg"
            alt="Profile"
            className="rounded-full w-140 h-130 border-4 border-white shadow-lg"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
