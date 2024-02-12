import Link from "next/link"

const Form = ({
  type,
  post,
  setPost,
  submitting,
  handleSubmit
}) => {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span className="green_gradient">{type} Prompt</span></h1>
      <p className="maw-w-md desc text-left">
        {type} and share amazing prompts with the world, and let your
        imagination run wild with any AI-powered platform, like
        <span className="text-green-700 font-bold"> ChatGTP</span> or <span className="text-green-700 font-bold">Gemini</span>.
      </p>

      <form
        onSubmit={handleSubmit}
        className="my-10 w-full max-w-3xl flex flex-col gap-7 glassmorphism"
      >
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">Your AI Prompt</span>
          <textarea
            className="form_textarea"
            value={post.prompt}
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            placeholder="Create your prompt here"
            required
          />
        </label>

        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Quick Search Tags:
            <span className='font-normal'> for example, #web #crypto #javaScript #frontend, etc.
              (separate multiple tags with a space between them)
            </span>
          </span>
          <input
            type="text"
            className="form_input"
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            placeholder="Tag"
            required
          />
        </label>

        <div className="mx-3 mb-5 flex-end gap-4">
          <Link className="text-gray-500 text-md hover:text-green-700" href="/">Cancel</Link>
          <button
            type="submit"
            disabled={submitting}
            className='px-5 py-2 text-md bg-primary-orange rounded-full text-white'
          >
            {submitting ? `${type}ing...` : type}
          </button>
        </div>
      </form>
    </section>
  )
}

export default Form