"use client"
import { useEffect, useState } from "react";

import Card from "@/components/card";
import toolsFetche from "@/axios/config"
import Image from "next/image";
import Logo from "../../../../public/Logo.png"

export default function Reservation() {
  const [tool, setTool] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    toolsFetche.get("/tool")
      .then((response) => {
        setTool(response.data);
        setLoading(false)

      })
      .catch((error) => {
        console.log(error);
      })
      .finally()
  }, []);

  return (
    <section className="flex flex-col justify-between m-auto items-center min-w-screen max-w-[1200px] h-screen ">
      <h1 className="m-4 p-3 text-5xl font-semibold uppercase">Ferramentas</h1>
      {
        loading ? (
          <div className="font-medium text-5xl flex flex-col justify-center items-center m-auto" >
            <Image src={Logo} alt="logo da ferramentaria osten moove" />
            <h1>Carregando Informações...</h1>
          </div>
        ) : (
          <>
            <div className="flex flex-wrap">
              {tool.map((tool) => (
                <div key={tool.id}>
                  <Card
                    id={tool.id}
                    nome={tool.name}
                    descricao={tool.description}
                    status={tool.status}
                    dataDaColeta={tool.collectionDate}
                    dataDaDevolução={tool.returnDate}
                  />
                </div>
              ))}
            </div>
          </>
        )

      }


    </section>
  )
}