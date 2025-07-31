import CardButton from "../components/CardButton";


function Main() {
  return (
    <div className="min-h-screen w-full text-gray-900 px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <CardButton title="React" description="o que eu aprendi até agora" navigateUrl="/react" /> 
      </div>
    </div>
  );
}

export default Main;
