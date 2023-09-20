"use client"
import { useEffect, useState } from "react";

import Card from "@/components/card";
import toolsFetche from "@/axios/config"

export default function Ferramentas() {
  const [tool, setTool] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    toolsFetche.get("/tool")
      .then(response => {
        // Formatar as datas antes de definir o estado
        const tools = response.data.map(tool => {
          tool.collectionDate = new Date(tool.collectionDate).toLocaleDateString('pt-BR');
          tool.returnDate = new Date(tool.returnDate).toLocaleDateString('pt-BR');
          return tool;
        })

        setTool(tools);
        setLoading(false)
      })
      .catch(error => console.log(error))
      .finally();
  }, [])

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