const Index = (props:any) => {
  return (
    <button {...props} className="bg-primary text-white px-4 py-1.5 rounded-md hover:bg-primary-600">
        {props.children}
    </button>
  );
};

export default Index;
