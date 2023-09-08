const Td = ({ data }: { data: string | number }) => {
  return (
    <td className="w-full border border-gray-300 px-2 py-1">{data}</td>
  )
}

export default Td