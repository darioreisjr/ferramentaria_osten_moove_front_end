import Link from "next/link";

const Card = (props: any) => {
  return (
    <div className="w-[320px] h-auto flex flex-col gap-5 p-4 bg-gray-900 m-10 rounded-md ">
      <button
        type="button"
        className=" text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
        RESERVAR
      </button>

      <div className="m-auto">
        <h2 className="uppercase text-gray-200 text-center mb-3">{props.nome}</h2>
        <p className="text-gray-500 text-justify" >{props.descricao}</p>
      </div>
      <div className="m-auto flex flex-col items-center gap-2">
        <span className="flex flex-row text-xs">Retirada | {props.dataDaColeta}</span>
        <span className="flex flex-row text-xs">Entrega | {props.dataDaDevolução}</span>
        <span
          className="m-3 bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300"
        >
          {props.status}
        </span>

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
          type="button"
          className="w-full text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          DELETAR
        </button>

      </div>

    </div>
  )
}


export default Card;