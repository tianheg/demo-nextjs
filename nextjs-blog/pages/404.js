import Link from 'next/link'
export default function Custom404() {
  return (
    <>
      <h1>Content not found</h1>
      <h1>
        <Link href="/">
          <a>Return home</a>
        </Link>
      </h1>
    </>
  )
}