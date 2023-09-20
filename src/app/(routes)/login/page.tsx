export default function Login() {
  return (
    <section className="flex items-center justify-center h-screen ">
      <div className="flex flex-col items-center">
        <h2 className="m-[1rem] font-extrabold text-[30px] ">Faça seu login</h2>
        <form
          className="flex flex-col gap-2 w-full max-w-full"
          action=""
          method="post"
          autoComplete="off"
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="email">E-mail</label>
            <input
              className="p-[10px] bg-slate-900 outline-0 rounded"
              type="text"
              name="email"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password">Password</label>
            <input
              className="p-[10px] bg-slate-900 outline-0 rounded"
              type="text"
              name="password"
            />
          </div>
          <div>
            <p>Não tem conta? <span>Cadastre-se!</span> </p>
          </div>
          <button
            type="submit"
            className="bg-green-800 p-[10px] text-gray-50 font-medium rounded"
          >
            Fazer Login</button>

          <fieldset className="border-t border-slate-50 mt-[10px]">
            <legend className="mx-auto px-4 text-white text-xl italic" >ou</legend>
            <div className="text-white pt-4" >Acesse com o seu:</div>
          </fieldset>
          <button type="button" className="justify-center text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2">
            <svg className="w-4 h-4 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd" />
            </svg>
            Sign in with Github
          </button>
        </form>
      </div>
    </section>
  )
}