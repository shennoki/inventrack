import { SVGProps } from 'react'

export function TrashIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M7.615 20q-.69 0-1.152-.462Q6 19.075 6 18.385V6H5V5h4v-.77h6V5h4v1h-1v12.385q0 .69-.462 1.152q-.463.463-1.153.463zm2.193-3h1V8h-1zm3.384 0h1V8h-1z"
      ></path>
    </svg>
  )
}
