declare module '*.svg' {
  import { FC, SVGProps } from 'react'
  const content: FC<SVGProps<SVGElement>>
  export default content
}
 
declare module '*.svg?url' {
  const content: any
  export default content
}

declare module "*.mp3" {
  const content: any
  export default content;
}