import { DashOutlined } from "@ant-design/icons"
import { IResourceItem } from "@refinedev/core"

export const resources: IResourceItem[] = [
    {
        name:'dashboard',
        list: '/',
        meta:{
            label: 'Dashboard',
            icon: <DashOutlined />
        }

    },

]