import { ThemedLayoutV2 } from "@refinedev/antd";
import Header from "./header";


const Layout = ({children} : React.PropsWithChildren) =>  {
  return (
    <ThemedLayoutV2
    Header={Header}
    Title={(titleProps) => <span {...titleProps}>Refine</span>}
    >
     {children}
    </ThemedLayoutV2>
  )
}

export default Layout;