
interface Data {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  }
  
 
  interface HomePageProps {
    data: Data | null;
  }
  
  const HomePage: React.FC<HomePageProps> = ({ data }) => {
    console.log("-------data--------", data);
  
    return (
      <div>
        <h1>Server-side Rendered Page</h1>
        {data ? (
          <pre>{JSON.stringify(data, null, 2)}</pre>
        ) : (
          <p>No data available</p>
        )}
      </div>
    );
  };
  
  export default HomePage;
  
  
