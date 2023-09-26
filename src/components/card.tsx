import Link from "next/link";
import { useState } from "react";
import Modal from "./modal";

import toolsFetche from "@/axios/config"
import { toast } from "react-toastify";

const Card = (props: any) => {
  const [isOpen, setIsOpen] = useState(false);

  const HandleDelete = async (id: any) => {
    await toolsFetche.delete(`/tool/${id}`)
        toast.success('Ferramentanta deletada com sucesso', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        })
    window.location.reload()
  }

  const handleToggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-[320px] h-m-[440px] flex flex-col gap-5 p-4 bg-gray-900 m-10 rounded-md ">
      {
        props.status === "Reserved" ? (
          <button
            type="button"
            className=" text-white uppercase w-full bg-slate-800 opacity-40 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
            Reservado
          </button>
        ) : (
          props.status === "InUse" ? (
            <button
              type="button"
              className=" text-white uppercase w-full bg-slate-800 opacity-40 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
              Reservado
            </button>
          ) : (
            <Link href={`/reservation/${props.id}`}>
              <button
                type="button"
                className=" text-white w-full uppercase bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                Reserva
              </button>
            </Link>
          )
        )
      }

      <div className="m-auto">
        <h2 className="uppercase text-gray-200 text-center mb-3">{props.nome}</h2>
        <p className="text-gray-500 text-justify overflow-hidden overflow-ellipsis max-w-[260px] h-[70px] line-clamp-3" >{props.descricao}</p>
      </div>
      <div className="m-auto flex flex-col justify-start gap-2">
        <span className="flex flex-row text-xs">Retirada | {props.dataDaColeta}</span>
        <span className="flex flex-row text-xs mb-4">Entrega | {props.dataDaDevolução}</span>
        {
          props.status === "InUse" ? (
            <span
              className=" w-1/2 text-center p-2 m-auto bg-blue-100 text-blue-800 text-xs font-medium rounded dark:bg-blue-900 dark:text-blue-300"
            >
              {props.status === "InUse" ? "Em Uso" : ""}
            </span>
          ) : (
            props.status === "Available" ?
              <span className="text-center p-2 m-auto bg-green-100 text-green-800 text-xs font-medium rounded dark:bg-green-900 dark:text-green-300">{props.status === "Available" ? "Disponível" : ""}</span>
              :
              <span className="text-center p-2 m-auto bg-red-100 text-red-800 text-xs font-medium rounded dark:bg-red-900 dark:text-red-300">{props.status === "Reserved" ? "Reservado" : ""}</span>
          )
        }
      </div>
      <div className="m-auto w-full">
        <Link href={`/edit/${props.id}`}>
          <button
            type="button"
            className=
            "w-full text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            EDITAR
          </button>
        </Link>

        <button
          onClick={handleToggleModal}
          type="button"
          data-modal-target="popup-modal"
          data-modal-toggle="popup-modal"
          className="w-full text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
          DELETAR
        </button>

        {isOpen && (
          <div>
            <Modal
              name={props.nome}
              clickno={handleToggleModal}
              clickyes={() => HandleDelete(props.id)}
            />
          </div>
        )}
      </div>
    </div>
  )
}


export default Card;