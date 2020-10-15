
import { dill } from "dill-framework";

import { App } from "./components/App.component";

const Data = function(){};

dill.create(document.body, Data, dill(
    <App />
));
