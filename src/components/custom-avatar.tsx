import { Avatar as AntdAvatar } from "antd"

type Props = {
    name: string;
}


const CustomAvatar = ({name, style, ...rest}: Props) => {
  return (
    <AntdAvatar
    alt="SanaNafari"
    size="small"
    style={{
        backgroundColor:'#87d068',
        display:'flex',
        alignItems:'center',
        border:'none'
    }}
    >
      {name}
    </AntdAvatar>
  )
}

export default CustomAvatar
