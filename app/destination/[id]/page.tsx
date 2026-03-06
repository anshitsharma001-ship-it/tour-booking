export default function DestinationPage({ params }: { params: { id: string } }) {
  const { id } = params;
  
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">Destination {id} Details</h1>
      <p></p>
    </div>
  );
}