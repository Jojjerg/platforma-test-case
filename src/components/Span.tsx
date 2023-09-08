import React from 'react'

type SpanProps = {
  title: string;
  data: string | number;
}

const Span: React.FC<SpanProps> = ({ title, data }) => {

  return (
    <div className="flex flex-col gap-3 px-4 p-2 border border-transparent border-b-gray-300">
      <span className='text-sm font-bold'>{title}</span>
      <span className='pl-2'>{data}</span>
    </div>
  )
}

export default Span