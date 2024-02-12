import { PromptCard } from "."

const Profile = ({ name, desc, data, handleEdit, handleDelete }) => {
  return (
    <section className="w-full">
      {name === "My" ? (
        <h1 className="head_text text-left">
          <span className="green_gradient">{name} profile</span>
        </h1>
      ) : (
        <h1 className="head_text text-left">
          Profile: <span className="green_gradient">{name}</span>
        </h1>
      )}
      <p className="desc text-left">{desc}</p>

      <div className="mt-10 prompt_layout">
        {data.map(post => (
          <PromptCard
            key={post._id}
            post={post}
            handleEdit={() => handleEdit && handleEdit(post)}
            handleDelete={() => handleDelete && handleDelete(post)}
          />
        ))}
      </div>
    </section>
  )
}

export default Profile