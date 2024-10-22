import img from './assets/interieur.jpg'

export default function Home() {
  return (
   <main className="min-h-screen overflow-auto">
    <section className="h-[90vh] bg-fixed w-full bg-fond3 bg-cover bg-center flex flex-col justify-center items-center">
    <h1 className="text-white text-[11rem]">KER BEER</h1>
    <p className="text-white text-4xl ">Bar à bières artisanales Bretonnes</p>

    </section>
    <div id="apropos" className="h-[80vh] w-full flex justify-center items-center bg-white">
      <div className="h-[60vh] w-[70%] border flex">
        <div className='w-[50%] h-full'>
        <img src={img} className='h-full w-full object-cover'/>

        </div>
        
        <div className="h-full w-[50%] p-4">
          <p>lorem
          </p>

        </div>

        </div>

    </div>
    <section className="h-[90vh] bg-fixed  w-full bg-fond2 bg-cover bg-center flex justify-center items-center "> 

    </section>
    <div id="galerie" className="h-[70vh] w-full bg-white">
     <p>
      lorem ipsum
      lorem20
     </p>
    </div>
    <section id="infos" className="h-[90vh] bg-fixed bg-fond bg-cover bg-center w-full bg-red-200 flex justify-center items-center">

    </section>
    <div  className="h-[50vh] w-full bg-white">
    
    </div>
   </main>
  );
}
