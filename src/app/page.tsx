import Image from "next/image"


export default function Home() {
  return (
    <section className="min-w-[320px] p-4 flex flex-col justify-center items-center max-w-[1200px] m-auto pt-[33px]">
      <Image alt="" src="https://i.imgur.com/bNHewZ2.png" width={300} height={300} />
      <h1 className="text-center text-5xl uppercase pb-4 font-bold">Ferramentaria Osten Moove</h1>
      <h3 className="text-justify  text-2xl pb-4">Reserva de ferramentas para mecânicos</h3>
      <p className="text-lg text-justify pb-4">O sistema de reserva de ferramentas para mecânicos é uma solução inovadora que visa facilitar e agilizar o processo de empréstimo de ferramentas para mecânicos. O sistema é baseado em uma plataforma online que permite aos mecânicos reservar as ferramentas necessárias para seus trabalhos com apenas alguns cliques.</p>
      <p className=" text-lg italic text-center p-4">Reserva de ferramentas para mecânicos: fácil, rápido e seguro.</p>

      <h3 className=" text-xl pb-4 font-bold">Vantagens do sistema</h3>
      <ol className=" pb-4">
        <li className=" text-lg text-justify pb-1"><span className="font-semibold uppercase">Facilidade de uso:</span> O sistema é fácil de usar e não requer nenhum treinamento especial.</li>
        <li className=" text-lg text-justify pb-1"><span className="font-semibold uppercase">Agilidade:</span> O sistema permite que os mecânicos reservem as ferramentas necessárias rapidamente e sem burocracia.</li>
        <li className="l text-lg text-justify pb-1"><span className="font-semibold uppercase">Segurança:</span> O sistema garante que as ferramentas sejam reservadas apenas por mecânicos autorizados.</li>
      </ol>

      <p className=" text-lg text-justify pb-4">O sistema de reserva de ferramentas para mecânicos é uma solução inovadora que oferece uma série de vantagens para os mecânicos e locadores. O sistema é fácil de usar, ágil e seguro.</p>
    </section>
  )
}
