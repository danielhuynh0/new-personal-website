import React from "react";

const Projects = React.forwardRef((props, ref) => {
    const projects = [
        {
            title: 'Budget Buddy',
            image: 'BudgetBuddyLogo.png',
            description: "Winner of Capital One's Best Finance Hack at UVa HooHacks 2023, Budget Buddy is a personal finance budgeting app. Our app allows users to create an account or login to an existing account with their saved budgeting plans. If it is their first time creating an account, we allow the user to make their own budgeting plan, either by manually allocating a budget to each “bucket” or category of planning, or instead specifying a total budget to allocate, of which our algorithm will automatically allocate to each category based on the recommendations of financial experts for the user. After submitting the budgeting plan, the user can connect their back account to our app through the Plaid API interface. This provides our app access to the user’s previous transaction history, and can build and update the budgeting plan as time goes by and the user makes progress on spending. When the user has connected their bank account, they will be able to see a dashboard with plots that will summarize and display their spending data from the current month. However, the user will not have to log online to manage their finances– through Twilio, the user can also have SMS text messaging conversations with our app’s personal chatbot. The user can ask our chatbot for help when facing a financial decision, and our chatbot will use previous transactional data as well as the user’s current progress on their budgeting plan to help recommend a decision to be made. In addition, the user can ask clarifying questions to help better understand their current budgeting progress, and learn and practice how to improve for the future. Learning personal budgeting is a major step at financial literacy.",
            tools: "We built the frontend using HTML/CSS/JavaScript and used Plotly to generate the plots from the spending data, the backend web server was created using Flask, SMS messaging was handled by Twilio API, user’s transactions were retrieved using the Plaid API, and the GPT API was used to generate the user spending improvements and suggestions chatbot.",
            link: "https://devpost.com/software/budgetbuddy-wz0mh2",
        },
        {
            title: "",
            image:"",
            description: "",
            tools: "",
            link: "",
        },
    ];

    const ProjectBox = ({ project }) => {
        return (
          <div className="bg-white rounded-lg p-6 shadow-md mb-6">
            <img className="w-auto h-32 mx-auto mb-4" src={project.image} alt={project.title} />
            <h1 className="text-lg font-bold text-gray-900 mb-2">{project.title}</h1>
            <p className="text-gray-700 mb-4">{project.description}</p>
            <h3 className="text-lg font-semibold text-gray-900 mb-0">Tools Used</h3>
            <p className="text-gray-700 mb-2">{project.tools}</p>
            <div className="px-0 py-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4"
                >Visit</a>
            </div>
          </div>
        );
      };
      
      const Portfolio = () => (
          <div>
            <div className="max-w-6xl mx-auto px-4">
              <h1 className="text-5xl font-bold text-white mt-10 mb-12 text-center">Projects</h1>
              <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-14">
                {projects.map((project) => (
                  <ProjectBox key={project.id} project={project} />
                ))}
              </div>
            </div>
          </div>
      );


    return (
        <section ref={ref}>
            <div className="bg-gray-900 min-h-screen flex justify-center">
                <Portfolio/>
            </div>
        </section>
    )

});

export default Projects;