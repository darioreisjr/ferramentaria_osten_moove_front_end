"use client"
import { useEffect, useState } from "react";

import Card from "@/components/card";
import toolsFetche from "@/axios/config"
import Image from "next/image";


export default function Tools() {
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
    <section className="flex flex-col justify-between m-auto items-center min-w-screen max-w-[1200px] ">
      <h1 className="m-4 p-3 text-5xl font-semibold uppercase">Ferramentas</h1>
      {
        loading ? (
          <div className="flex flex-col justify-center items-center m-auto" >
            <Image width={500} height={500} src="https://i.imgur.com/bNHewZ2.png" alt="logo da ferramentaria osten moove" />
            <div className="flex items-center justify-center">
              <div className="p-4 text-5xl font-medium leading-none text-center text-zinc-400 animate-pulse">Carregando Informações...</div>
            </div>
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