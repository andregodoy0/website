import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

const Contact = () => {
  return (
    <section className="top-0 m-auto box-border w-[1300px] max-w-full p-12 pb-56">
      <h2 className="pb-4 text-center text-xl">Find me on:</h2>
      <div className="m-auto grid w-28 grid-cols-2 gap-5 text-center">
        <a href="https://www.linkedin.com/in/agodoy/">
          <FontAwesomeIcon icon={faLinkedin} className="text-3xl" />
        </a>
        <a href="https://github.com/andregodoy0">
          <FontAwesomeIcon icon={faGithub} className="text-3xl" />
        </a>
      </div>
    </section>
  )
}

export default Contact
