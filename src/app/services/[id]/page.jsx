import React from 'react'

export default async function ServiceDetailsPage({params}) {
    const p = await params;
  return (
    <div>
        <p>{JSON.stringify(p)}</p>
    </div>
  )
}
