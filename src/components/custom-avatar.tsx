import { getNameInitials } from "@/utilities";
import { Avatar as AntdAvatar, AvatarProps} from "antd"

type Props = {
    name?: string;
    rest?: AvatarProps;
}


const CustomAvatar = ({name, style, 
 ...rest}: Props) => {
  
  return (
    <AntdAvatar
    alt={'SanaNafari'}
    size="small"
    style={{
        backgroundColor:'#87d068',
        display:'flex',
        alignItems:'center',
        border:'none',
        ...style
    }}
     {...rest}
    >
      {getNameInitials(name || '')}
    </AntdAvatar>
  )
}

export default CustomAvatar
