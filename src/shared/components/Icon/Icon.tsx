interface IIcon { 
  src: string, 
}

export const Icon = ({ src }: IIcon ) => {
  return (
    <img src={src}/>
  )
};