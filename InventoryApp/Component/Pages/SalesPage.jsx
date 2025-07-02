const SalesPage = ( {isSidebarOpen} ) => {
    const powerbiUrl = "https://app.powerbi.com/view?r=eyJrIjoiOWUyZGQxYTctOGMxOC00MWQ4LWI0ZjctMTk5MjMwNTY1ZjM4IiwidCI6IjdlODYxMGU1LWQwZDUtNDE5Mi1iNjI0LTE1MTM1M2RhZDg1ZSJ9";

  return (

    <div className={`transition-all duration-300 p-4 ${isSidebarOpen ? "ml-64" : "ml-16"}`}>
      <div className="flex flex-col">
          <div className="flex justify-center text-3xl font-bold mb-5">DashBoard</div>
          <div>
              <iframe 
                  title="admin" 
                  width="1240" 
                  height="600" 
                  src={ powerbiUrl }
                  frameborder="0" 
                  allowFullScreen="true">
              </iframe>
          </div>
      </div>
    </div>

  );
};

export default SalesPage;
