export const revalidate = 1800;



export default async function Report({ searchParams }) {
  "use client";
  const params = new URLSearchParams(searchParams);
  const response = await fetch(
    `https://mmd-a11y-api.vercel.app/api/scan?${params.toString()}`,
  );
  const data = await response.json();


  return (
    
    <section>
     
      <h1>Report for {data.url}</h1>     
    </section>
  );
}