import { Popover, Button } from 'antd';
import CustomAvatar from '../custom-avatar';

function CurrentUser() {
  return (
    <>
    <Popover
      placement="bottomRight"
      trigger="click"
      arrow={false}
      zIndex={999}
    >
        <CustomAvatar />
    </Popover> 
      
    </>
  )
}

export default CurrentUser;
