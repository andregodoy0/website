const Home = () => {
  return (
    <section className="top-0 m-auto box-border grid w-[1300px] max-w-full grid-cols-1 flex-col-reverse items-center justify-between gap-12 p-12 pt-36 md:grid-cols-2">
      <div className="content">
        <div className="text-3xl font-bold md:text-8xl">
          MY NAME IS&nbsp;
          <span className="bg-200 via-emerald-50% animate-shine bg-gradient-to-r from-indigo-500 via-emerald-500 to-indigo-500 bg-clip-text text-transparent">
            ANDRE
          </span>
        </div>
        <div className="mx-0 my-7 border-l-4 pl-8">
          I'm an adaptable Senior Full Stack Developer specializing in frontend
          development, backed by comprehensive knowledge of backend
          technologies. Proficient in React and TypeScript, with a keen eye for
          crafting compelling user experiences. I have experience collaborating
          closely with product teams to prioritize and deliver feature-rich
          interfaces and services.
          <br />
          With special interest in interactive applications, I love learning new
          ways and technologies to communicate with the end user.
        </div>

        <a
          href="/website/AndreGodoy-Resume2024.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="m-auto block w-max rounded-full border border-slate-500 px-7 py-5 text-lg font-bold"
        >
          Download My Resume
        </a>
      </div>
      <img
        src="/website/profile.png"
        alt="My picture"
        className="row-start-1 w-full rounded-xl object-cover object-top md:row-start-auto"
      />
    </section>
  )
}

export default Home
