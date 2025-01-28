"use client";
import React from 'react';
import '../services/style.css';

export default function Service() {
 
  
  return (
    <div className="dark:bg-clip-bg  dark:bg-transparent dark:bg-logo-gradient dark:text-white body-font">
    
        <>
        <div className="">
        <section
  id="features"
  className="relative block px-6 py-10 md:py-20 md:px-10 border-t border-b border-neutral-900 bg-neutral-900/30"
>
  <section className="w-full mx-auto py-10 dark:text-white">
    <div className="xl:w-[80%] sm:w-[85%] xs:w-[90%] mx-auto flex flex-col md:flex-row gap-4 justify-center items-center mt-4">
      <div className="lg:w-[50%] w-full">
        <img
          className="w-full h-auto lg:rounded-t-lg sm:rounded-sm xs:rounded-sm"
          src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxM3x8d2Vic2l0ZXxlbnwwfDB8fHwxNzIwMjI4OTA3fDA&ixlib=rb-4.0.3&q=80&w=1080"
          alt="billboard image"
        />
      </div>
      <div className="lg:w-[50%] w-full bg-gray-100 dark:bg-gray-900 dark:text-gray-400 p-4 rounded-md">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">
          Welcome to DevOpsFarm
        </h2>
        <p className="text-md mt-4">
          a leading technology training and consultancy firm specializing in
          cutting-edge solutions across various industries. Our focus areas
          include DevOps, AI, MLOps, MERN, and MEAN stack development, along
          with modern web design practices. At DevOpsFarm, we are committed to
          equipping individuals and businesses with the skills and knowledge
          needed to excel in the ever-evolving tech landscape.
        </p>
      </div>
    </div>

    <div className="xl:w-[80%] sm:w-[85%] xs:w-[90%] mx-auto flex flex-col md:flex-row gap-4 justify-center items-center mt-6">
      <div className="w-full block md:hidden">
        <img
          className="w-full h-auto rounded-md"
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw3fHxNZW50b3J8ZW58MHwwfHx8MTcyMDIyNzU1Nnww&ixlib=rb-4.0.3&q=80&w=1080"
          alt="billboard image"
        />
      </div>

      <div className="lg:w-[50%] w-full bg-gray-100 dark:bg-gray-900 dark:text-gray-400 p-4 rounded-md">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">
          Our internship program is designed to provide hands-on experience,
        </h2>
        <p className="text-md mt-4">
          enabling aspiring professionals to work on real-world projects using
          the latest technologies. Interns at DevOpsFarm have the opportunity to
          learn from industry experts, collaborate on innovative solutions, and
          gain invaluable insights into the dynamic fields of DevOps, AI, MLOps,
          and full-stack development.
        </p>
      </div>

      <div className="w-full hidden md:block lg:w-[50%]">
        <img
          className="w-full h-auto rounded-md"
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw3fHxNZW50b3J8ZW58MHwwfHx8MTcyMDIyNzU1Nnww&ixlib=rb-4.0.3&q=80&w=1080"
          alt="billboard image"
        />
      </div>
    </div>
  </section>


          {/* Hero Section */}
         

    <div className="relative mx-auto  z-10  gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-3">
     

    <section id="features" className="container mx-auto px-4 space-y-6  py-8 md:py-12 lg:py-20">

<div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">

    <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">Available Internship Programs</h2>

    <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
    Each of these internship programs provides a unique opportunity to gain hands-on experience, work on impactful projects, and develop skills that are highly sought after in the tech industry.
    </p>

</div>

<div className="mx-auto grid justify-center  gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">

    <div
        className="relative overflow-hidden rounded-lg border bg-black select-none hover:shadow hover:shadow-teal-200 p-2">
        <div className="flex  flex-col justify-between rounded-md p-6">
            {/* <svg viewBox="0 0 24 24" className="h-12 w-12 fill-current">
                <path
                    d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z">
                </path>
            </svg> */}
            <div className="space-y-2">
                <h3 className="font-bold">DevOps Internship</h3>
                <p className="text-sm text-gray-500 leading-relaxed mt-4 mb-6">
  <strong className="text-gray-400">Description:</strong>The DevOps internship focuses on automating software development, continuous integration/continuous deployment (CI/CD) pipelines, and infrastructure as code.
  <br />
  <strong className="text-gray-400">Skills Learned:</strong> Linux, Git, Docker, Kubernetes, Jenkins, CI/CD, AWS, monitoring tools like Prometheus and Grafana.
  <br />
  <strong className="text-gray-400">Tools Used:</strong> Jenkins, Docker, Kubernetes, Terraform, Ansible, AWS, GitHub.
  <br />
  <strong className="text-gray-400">Projects:</strong> Interns will work on building CI/CD pipelines, container orchestration with Kubernetes, and automating cloud infrastructure.
</p>

            </div>
        </div>
    </div>

    <div
        className="relative overflow-hidden rounded-lg border bg-black select-none hover:shadow hover:shadow-teal-200 p-2">
        <div className="flex  flex-col justify-between rounded-md p-6">
            {/* <svg viewBox="0 0 24 24" className="h-12 w-12 fill-current">
                <path
                    d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38a2.167 2.167 0 0 0-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44a23.476 23.476 0 0 0-3.107-.534A23.892 23.892 0 0 0 12.769 4.7c1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442a22.73 22.73 0 0 0-3.113.538 15.02 15.02 0 0 1-.254-1.42c-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87a25.64 25.64 0 0 1-4.412.005 26.64 26.64 0 0 1-1.183-1.86c-.372-.64-.71-1.29-1.018-1.946a25.17 25.17 0 0 1 1.013-1.954c.38-.66.773-1.286 1.18-1.868A25.245 25.245 0 0 1 12 8.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933a25.952 25.952 0 0 0-1.345-2.32zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493a23.966 23.966 0 0 0-1.1-2.98c.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98a23.142 23.142 0 0 0-1.086 2.964c-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39a25.819 25.819 0 0 0 1.341-2.338zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143a22.005 22.005 0 0 1-2.006-.386c.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295a1.185 1.185 0 0 1-.553-.132c-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z">
                </path>
            </svg> */}
            <div className="space-y-2">
                <h3 className="font-bold">AI Internship</h3>
                <p className="text-sm text-gray-500 leading-relaxed mt-4 mb-6">
  <strong className="text-gray-400">Description:</strong> This program delves into artificial intelligence, focusing on machine learning models, natural language processing, and deep learning.
  <br />
  <strong className="text-gray-400">Skills Learned:</strong> Python, machine learning algorithms, data preprocessing, TensorFlow, PyTorch, data visualization.
  <br />
  <strong className="text-gray-400">Tools Used:</strong>  Jupyter Notebook, TensorFlow, PyTorch, scikit-learn, Pandas, Matplotlib.
  <br />
  <strong className="text-gray-400">Projects:</strong>Interns will build machine learning models, develop AI-powered applications, and work on real-world datasets.
</p>

            </div>
        </div>
    </div>

    <div
        className="relative overflow-hidden rounded-lg border bg-black select-none hover:shadow hover:shadow-teal-200 p-2">
        <div className="flex  flex-col justify-between rounded-md p-6">
            {/* <svg viewBox="0 0 24 24" className="h-12 w-12 fill-current">
                <path
                    d="M0 12C0 5.373 5.373 0 12 0c4.873 0 9.067 2.904 10.947 7.077l-15.87 15.87a11.981 11.981 0 0 1-1.935-1.099L14.99 12H12l-8.485 8.485A11.962 11.962 0 0 1 0 12Zm12.004 12L24 12.004C23.998 18.628 18.628 23.998 12.004 24Z">
                </path>
            </svg> */}
            <div className="space-y-2">
                <h3 className="font-bold">MLOps Internship</h3>
                <p className="text-sm text-gray-500 leading-relaxed mt-4 mb-6">
  <strong className="text-gray-400">Description:</strong> The MLOps internship combines machine learning with DevOps principles, emphasizing model deployment, monitoring, and scaling.
  <br />
  <strong className="text-gray-400">Skills Learned:</strong> Model deployment, version control, containerization, CI/CD for ML models, data pipelines.
  <br />
  <strong className="text-gray-400">Tools Used:</strong> MLflow, Docker, Kubernetes, Jenkins, Apache Airflow.
  <br />
  <strong className="text-gray-400">Projects:</strong> Interns will deploy ML models in production, automate workflows, and manage model lifecycle using MLOps tools.
</p>

            </div>
        </div>
    </div>

    <div
        className="relative overflow-hidden rounded-lg border bg-black select-none hover:shadow hover:shadow-teal-200 p-2">
        <div className="flex  flex-col justify-between rounded-md p-6">
            {/* <svg viewBox="0 0 24 24" className="h-12 w-12 fill-current">
                <path
                    d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z">
                </path>
            </svg> */}
            <div className="space-y-2">
                <h3 className="font-bold">MERN Stack Internship</h3>
                <p className="text-sm text-gray-500 leading-relaxed mt-4 mb-6">
  <strong className="text-gray-400">Description:</strong> This program focuses on full-stack development using MongoDB, Express, React, and Node.js, providing skills to build dynamic web applications.
  <br />
  <strong className="text-gray-400">Skills Learned:</strong>  JavaScript, React.js, Node.js, RESTful APIs, database management, front-end and back-end development.
  <br />
  <strong className="text-gray-400">Tools Used:</strong> Visual Studio Code, Git, MongoDB, Express, React, Node.js, Postman.
  <br />
  <strong className="text-gray-400">Projects:</strong>Interns will develop complete web applications, working on both the front-end and back-end, and will learn to integrate APIs.
</p>

            </div>
        </div>
    </div>

    <div
        className="relative overflow-hidden rounded-lg border bg-black select-none hover:shadow hover:shadow-teal-200 p-2">
        <div className="flex  flex-col justify-between rounded-md p-6">
            {/* <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"
                className="h-12 w-12 fill-current">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg> */}
            <div className="space-y-2">
                <h3 className="font-bold">MEAN Stack Internship</h3>
                <p className="text-sm text-gray-500 leading-relaxed mt-4 mb-6">
  <strong className="text-gray-400">Description:</strong> The MEAN stack internship offers insights into building
  robust web applications using MongoDB, Express, Angular, and Node.js.
  <br />
  <strong className="text-gray-400">Skills Learned:</strong> Angular, JavaScript, full-stack development, API integration,
  database operations.
  <br />
  <strong className="text-gray-400">Tools Used:</strong> Angular CLI, Node.js, MongoDB, Git, Postman.
  <br />
  <strong className="text-gray-400">Projects:</strong> Interns will create end-to-end applications, manage databases,
  and implement dynamic user interfaces with Angular.
</p>

            </div>
        </div>
    </div>

    <div
        className="relative overflow-hidden rounded-lg border bg-black select-none hover:shadow hover:shadow-teal-200 p-2">
        <div className="flex  flex-col justify-between rounded-md p-6">
            {/* <svg viewBox="0 0 24 24" className="h-12 w-12 fill-current">
                <path
                    d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.594-7.305h.003z">
                </path>
            </svg> */}
            <div className="space-y-2">
                <h3 className="font-bold">Web Design Internship</h3>
                <p className="text-sm text-gray-500 leading-relaxed mt-4 mb-6">
  <strong className="text-gray-400">Description:</strong> This internship is tailored for aspiring web designers, focusing on creating visually appealing and user-friendly websites.
  <br />
  <strong className="text-gray-400">Skills Learned:</strong> HTML, CSS, JavaScript, responsive design, UI/UX principles, Tailwind CSS, Bootstrap.
  <br />
  <strong className="text-gray-400">Tools Used:</strong> Figma, Adobe XD, Visual Studio Code, GitHub, Tailwind CSS, Bootstrap.
  <br />
  <strong className="text-gray-400">Projects:</strong> Interns will design websites from scratch, work on improving UI/UX, and create responsive layouts for various devices.
</p>

            </div>
        </div>
    </div>

</div>

</section>

      
    </div>

    <div
      className="absolute bottom-0 left-0 z-0 h-1/3 w-full border-b"
      style={{
        backgroundImage:
          "linear-gradient(to right top, rgba(79, 70, 229, 0.2) 0%, transparent 50%, transparent 100%)",
        borderColor: "rgba(92, 79, 240, 0.2)",
      }}
    ></div>
    <div
      className="absolute bottom-0 right-0 z-0 h-1/3 w-full"
      style={{
        backgroundImage:
          "linear-gradient(to left top, rgba(220, 38, 38, 0.2) 0%, transparent 50%, transparent 100%)",
        borderColor: "rgba(92, 79, 240, 0.2)",
      }}
    ></div>
  


<section className="">
  <div className="container max-w-xl p-6 mx-auto space-y-12 lg:px-8 lg:max-w-7xl">
    <div>
      <h2 className="text-3xl font-bold text-center sm:text-5xl">Application Process</h2>
      <p className="max-w-3xl mx-auto mt-4 text-xl text-center ">By following these steps, you can ensure that your application is complete and stands out. We look forward to receiving your application and potentially welcoming you to our team!</p>
    </div>
    <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
      <div>
        <div className="mt-4 space-y-12">
          <div className="flex">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center w-12 h-12 rounded-md">
                {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  className="lucide lucide-rocket">
                  <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z">
                  </path>
                  <path
                    d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z">
                  </path>
                  <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
                  <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
                </svg> */}
                </div>
            </div>
            <div className="ml-4">
              <h4 className="text-lg font-medium leadi ">Prepare Required Documents</h4>
              <p className="text-sm text-gray-500 leading-relaxed mt-4 mb-6">
  <strong className="text-gray-400">Resume:</strong> Update your resume to reflect your educational background, relevant skills, and any previous experience.
  <br />
  <strong className="text-gray-400">Cover Letter: </strong> Write a cover letter detailing your interest in the internship program, your relevant skills, and what you hope to achieve during the internship.
  <br />
  <strong className="text-gray-400">Portfolio (if applicable):</strong> For Web Design and development internships, include a portfolio showcasing your previous work or projects.
  <br />
  <strong className="text-gray-400">Transcripts (optional):</strong> Include academic transcripts if required or if you believe they strengthen your application.
</p>
            </div>
          </div>
          <div className="flex">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center w-12 h-12 rounded-md">
                {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  className="lucide lucide-bookmark-plus">
                  <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path>
                  <line x1="12" x2="12" y1="7" y2="13"></line>
                  <line x1="15" x2="9" y1="10" y2="10"></line>
                </svg> */}
                </div>
            </div>
            <div className="ml-4">
              <h4 className="text-lg font-medium leadi ">Submit Application</h4>
              <p className="text-sm text-gray-500 leading-relaxed mt-4 mb-6">
              <strong className="text-gray-400">Online Application Form:</strong> Complete the online application form on our website. Ensure you provide accurate and up-to-date information.
  <br />
  <strong className="text-gray-400">Document Upload: </strong> Upload your resume, cover letter, and any other required documents through the application portal. If applicable, upload your portfolio or any relevant project work.

            </p>
            </div>
          </div>
          <div className="flex">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center w-12 h-12 rounded-md">
                {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  className="lucide lucide-video">
                  <path d="m22 8-6 4 6 4V8Z"></path>
                  <rect width="14" height="12" x="2" y="6" rx="2" ry="2"></rect>
                </svg> */}
                </div>
            </div>
            <div className="ml-4">
              <h4 className="text-lg font-medium leadi ">Complete an Assignment or Task (if applicable)</h4>
              <p className="text-sm text-gray-500 leading-relaxed mt-4 mb-6">
              <strong className="text-gray-400">Pre-Interview Task:</strong> Some internships may require you to complete a short task or assignment related to the field. This could involve coding exercises, design tasks, or problem-solving challenges.
  <br />
  <strong className="text-gray-400">Submission: </strong> Follow the instructions provided to complete and submit the assignment by the specified deadline.
  <br />
            </p>
                        </div>
          </div>
          <div className="flex">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center w-12 h-12 rounded-md">
                {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  className="lucide lucide-file-question">
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                  <path d="M10 10.3c.2-.4.5-.8.9-1a2.1 2.1 0 0 1 2.6.4c.3.4.5.8.5 1.3 0 1.3-2 2-2 2"></path>
                  <path d="M12 17h.01"></path>
                </svg> */}
                </div>
            </div>
            <div className="ml-4">
              <h4 className="text-lg font-medium leadi ">Initial Screening </h4>
              <p className="text-sm text-gray-500 leading-relaxed mt-4 mb-6">
              <strong className="text-gray-400">Review:</strong> Our team will review your application, including your resume, cover letter, and any submitted assignments or portfolios.
                <br />
                <strong className="text-gray-400">Shortlisting:  </strong> Candidates who meet the eligibility criteria and demonstrate strong potential will be shortlisted for the next stage.
               
            </p>
        </div>
          </div>
        </div>
       
         

         



      </div>


       
      

      <div aria-hidden="true" className="mt-10 lg:mt-0">



     

        <div className="flex">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center w-12 h-12 rounded-md">
                {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  className="lucide lucide-file-question">
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                  <path d="M10 10.3c.2-.4.5-.8.9-1a2.1 2.1 0 0 1 2.6.4c.3.4.5.8.5 1.3 0 1.3-2 2-2 2"></path>
                  <path d="M12 17h.01"></path>
                </svg> */}
                </div>
            </div>
            <div className="ml-4">
              <h4 className="text-lg font-medium leadi ">Interview Process </h4>
              <p className="text-sm text-gray-500 leading-relaxed mt-4 mb-6">
              <strong className="text-gray-400">Schedule: </strong> If shortlisted, you will be contacted to schedule an interview. The interview may be conducted in-person, via phone, or through a video call.
                <br />
                <strong className="text-gray-400">Preparation:   </strong> Prepare for the interview by reviewing the job description, familiarizing yourself with our company, and reflecting on your skills and experiences.
                <br />
                <strong className="text-gray-400">Interview:</strong> During the interview, you may be asked about your technical skills, past projects, and your interest in the specific internship program. Be prepared to discuss your application task if applicable.
              
            </p>
        </div>
          </div>

        <div className="flex">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center w-12 h-12 rounded-md">
                {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  className="lucide lucide-file-question">
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                  <path d="M10 10.3c.2-.4.5-.8.9-1a2.1 2.1 0 0 1 2.6.4c.3.4.5.8.5 1.3 0 1.3-2 2-2 2"></path>
                  <path d="M12 17h.01"></path>
                </svg> */}
                </div>
            </div>
            <div className="ml-4">
              <h4 className="text-lg font-medium leadi ">Final Selection </h4>
              <p className="text-sm text-gray-500 leading-relaxed mt-4 mb-6">
              <strong className="text-gray-400">Decision:</strong> After the interview, our team will make a final decision based on your performance and fit for the internship program.
                <br />
                <strong className="text-gray-400">Offer:</strong>  If selected, you will receive an offer letter outlining the internship details, including start date, duration, and any other relevant information.
                <br />
            </p>
        </div>
          </div>

        <div className="flex">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center w-12 h-12 rounded-md">
                {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  className="lucide lucide-file-question">
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                  <path d="M10 10.3c.2-.4.5-.8.9-1a2.1 2.1 0 0 1 2.6.4c.3.4.5.8.5 1.3 0 1.3-2 2-2 2"></path>
                  <path d="M12 17h.01"></path>
                </svg> */}
                </div>
            </div>
            <div className="ml-4">
              <h4 className="text-lg font-medium leadi ">Onboarding </h4>
              <p className="text-sm text-gray-500 leading-relaxed mt-4 mb-6">
              <strong className="text-gray-400">Orientation:</strong> Attend an orientation session to get acquainted with our team, understand the internship program structure, and review any initial tasks or projects.
                <br />
                <strong className="text-gray-400">Documentation:</strong>  Complete any required paperwork, such as confidentiality agreements or other formalities, before starting the internship.
                <br />
            </p>
        </div>
          </div>
          
          <img width="600" height="600" src="https://images.unsplash.com/photo-1516542076529-1ea3854896f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxNHx8Y29tcHV0ZXJ8ZW58MHwwfHx8MTY5OTE3MDk1N3ww&ixlib=rb-4.0.3&q=80&w=1080" className="mx-auto pb-4 rounded-lg shadow-lg dark-bg-gray-500 bg-transparent" />

      </div>
      
    </div>
    
  </div>
</section>

</section>

</div>
        </>
  
    </div>
  );
}
