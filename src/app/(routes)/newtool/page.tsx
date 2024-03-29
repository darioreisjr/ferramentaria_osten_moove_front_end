"use client"
import { zodResolver } from "@hookform/resolvers/zod";
import toolsFetche from "@/axios/config"
import { useForm } from "react-hook-form"

import { z } from "zod";
import { useRouter } from 'next/navigation'
import { toast } from "react-toastify";

type Inputs = {
  name: String
  description: String
  status: String
  collectionDate: String
  returnDate: String
  mechanic: String
}

const newToolSchema = z.object({
  name: z.string().min(5, { message: "Deve ter 5 ou mais caracteres" }),
  description: z.string().min(15, { message: "Deve ter 15 ou mais caracteres" }),
  status: z.string(),
  collectionDate: z.string(),
  returnDate: z.string(),
  mechanic: z.string(),
})

export default function NewTool() {

  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(newToolSchema),
  })



  const onSubmit = data => toolsFetche.post("/tool", data)
    .then(() => router.push('/tools'))
    .then(() => 
    toast.success('Ferramentanta cadastrada com sucesso', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      })
    )
    .catch((err) => console.log(err))


  return (
    <main className="min-w-[320px] max-w-[1200px] max-h-full flex flex-col m-auto items-center">
      <h2
        className="m-[1rem] font-extrabold text-[30px] "
      >
        Inserir nova Ferramenta
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-2 min-w-[300px] max-w-[1100px] mb-28"
        autoComplete="off"
      >
        <div className="flex flex-col gap-2">
          <label>Nome da ferramenta</label>
          <input
            className="p-[10px] bg-slate-900 outline-0 rounded"
            type="text"
            name="name"
            {...register('name')}
          />
          <div className="text-red-500">{errors.name?.message}</div>
        </div>
        <div className="flex flex-col gap-2">
          <label>Descrição</label>
          <textarea
            className="p-[10px] bg-slate-900 outline-0 rounded"
            name="description"
            {...register('description')}
            rows={4}
            cols={40}
          />
          <div className="text-red-500">{errors.description?.message}</div>
        </div>
        <div className="flex flex-col gap-2">
          <label>Status</label>
          <select
            className="p-[10px] bg-slate-900 outline-0 rounded"
            name="status"
            {...register("status")}
          >
            <option value="Available">Available</option>
            <option value="Reserved">Reserved</option>
            <option value="InUse">InUse</option>
          </select>
          <div className="text-red-500">{errors.status?.message}</div>
        </div>
        <div className="flex flex-col gap-2">
          <label>Data e hora da coleta</label>
          <input
            className="p-[10px] bg-slate-900 outline-0 rounded"
            type="date"
            name="collectionDate"
            {...register("collectionDate")}
          />
          <div className="text-red-500">{errors.collectionDate?.message}</div>
        </div>
        <div className="flex flex-col gap-2">
          <label>Data e hora da devolução</label>
          <input
            className="p-[10px] bg-slate-900 outline-0 rounded"
            type="date"
            name="returnDate"
            {...register("returnDate")}
          />
          <div className="text-red-500">{errors.returnDate?.message}</div>
        </div>
        <div className="flex flex-col gap-2">
          <label>Nome do mecânico</label>
          <input
            className="p-[10px] bg-slate-900 outline-0 rounded"
            type="text"
            name="mechanic"
            {...register("mechanic")}
          />
          <div className="text-red-500">{errors.mechanic?.message}</div>
        </div>

        <button
          type="submit"
          className="bg-green-800 p-[10px] text-gray-50 font-medium rounded"
        >
          Cadastrar Ferramenta
        </button>
      </form >
    </main >
  )
}
