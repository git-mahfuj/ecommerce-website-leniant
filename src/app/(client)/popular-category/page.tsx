import React from 'react'
import PopularPageSlug from './[slug]/page'

const Popularpage = ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  return (
    <div>
      <PopularPageSlug params={params} />
    </div>
  )
}

export default Popularpage