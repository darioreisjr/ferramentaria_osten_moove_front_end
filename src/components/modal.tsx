
export default function Modal(props: any) {
  return (
    <div id="alert-additional-content-2" className="text-center p-4 mb-4 mt-4 text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800" role="alert">
      <div className="flex items-center mb-4">
        <h3 className="text-lg font-medium">Tem certeza que deseja apagar {props.name}?</h3>
      </div>
      <div className="flex justify-evenly">
        <button
          onClick={props.clickyes}
          type="button"
          className="text-white w-1/3 outline-0 bg-red-800 hover:bg-red-900 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-xs p-3 text-center items-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
          SIM
        </button>
        <button
          onClick={props.clickno}
          type="button"
          className="text-red-800 w-1/3 bg-transparent border border-blue-800 hover:bg-blue-900 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs  text-center dark:hover:bg-blue-600 dark:border-blue-600 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800" data-dismiss-target="#alert-additional-content-2" aria-label="Close">
          NÃO
        </button>
      </div>
    </div>

  )
}
