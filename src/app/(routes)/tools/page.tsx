"use client"
import { useEffect, useState } from "react";

import Card from "@/components/card";
import toolsFetche from "@/axios/config"

export default function NewTool() {
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
          <div className="font-medium text-5xl m-auto" >
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