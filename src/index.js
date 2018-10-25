
import createApp from "tomatobean";
import registerServiceWorker from "./registerServiceWorker";
import routerConfig from "./routerConfig";
import "./index.css";
// import host from '../config/remoteHost';
const app = createApp();

// app.setHost(host);

app.router(routerConfig);
app.run();

registerServiceWorker();
