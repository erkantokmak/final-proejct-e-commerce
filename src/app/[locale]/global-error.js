'use client'

import { StyledLink } from "@/styles/ComponentStyle"

 
export default function GlobalError({ error, reset }) {
  return (
    <html>
      <body>
        <h2>Something went wrong!</h2>
        <StyledLink href="/">Return Home</StyledLink> 
      </body>
    </html>
  )
}