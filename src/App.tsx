import { Authenticated, GitHubBanner, Refine, WelcomePage } from "@refinedev/core";
import { DevtoolsPanel, DevtoolsProvider } from "@refinedev/devtools";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";

import { useNotificationProvider } from "@refinedev/antd";
import "@refinedev/antd/dist/reset.css";

import { authProvider, dataProvider, liveProvider } from "./providers";
import { Home, ForgotPassword, Login, Register } from "./pages"


import routerBindings, {
  CatchAllNavigate,
  DocumentTitleHandler,
  UnsavedChangesNotifier,
} from "@refinedev/react-router";
import { App as AntdApp, Layout } from "antd";
import { BrowserRouter, Outlet, Route, Routes } from "react-router";

function App() {
  return (
    <BrowserRouter>
      <GitHubBanner />
      <RefineKbarProvider>
          <AntdApp>
            <DevtoolsProvider>
              <Refine
               dataProvider={dataProvider}
               liveProvider={liveProvider}
                notificationProvider={useNotificationProvider}
                routerProvider={routerBindings}
                authProvider={authProvider}
                options={{
                  syncWithLocation: true,
                  warnWhenUnsavedChanges: true,
                  useNewQueryKeys: true,
                  projectId: "SdvlIa-o4jCRe-DpwgVK",
                  liveMode: "auto",
                }}
              >
                <Routes>
                   <Route 
                     element={
                       <Authenticated
                         key="authenticated-layout"
                         fallback={<CatchAllNavigate to="/login" />}
                       >
                         <Layout>
                           <Outlet />
                         </Layout>
                       </Authenticated>
                     }
                   >
                     <Route index element={<Home />} />
                   </Route>
                   
                   <Route path="/register" element={<Register />} />
                   <Route path="/login" element={<Login />} />
                   <Route path="/forgot-password" element={<ForgotPassword />} />
                </Routes>
                <RefineKbar />
                <UnsavedChangesNotifier />
                <DocumentTitleHandler />
              </Refine>
              <DevtoolsPanel />
            </DevtoolsProvider>
          </AntdApp>
      </RefineKbarProvider>
    </BrowserRouter>
  );
}

export default App;
