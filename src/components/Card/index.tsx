type Props = {
  title: string;
}

export default function Card({ title }: Props) {
  
  // todo
  const handleDelete = () => {

  }
  return (
    <div>
      <h2>{title}</h2>
      <button onClick={() => handleDelete()}>
        Delete item
      </button>
    </div>
  )
}