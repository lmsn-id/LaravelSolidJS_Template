import { createInertiaApp } from "inertia-adapter-solid";
import { render } from "solid-js/web";
import "../css/app.css";

createInertiaApp({
    resolve(name) {
        const pages = import.meta.glob("./Pages/**/*.tsx");
        return pages[`./Pages/${name}.tsx`]();
    },
    setup({ el, App, props }) {
        render(() => <App {...props} />, el);
    },
});
