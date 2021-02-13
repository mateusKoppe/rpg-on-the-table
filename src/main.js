import { createApp } from "vue";
import App from "./App";
import store from "./store";
import router from "./router";

import VButton from "@/components/ui/VButton";
import VCard from "@/components/ui/VCard";
import VCheckbox from "@/components/ui/VCheckbox";
import VInput from "@/components/ui/VInput";
import VModal from "@/components/ui/VModal";
import VSelect from "@/components/ui/VSelect";

const app = createApp(App)

app.use(store)
app.use(router)

app.component(VButton.name, VButton);
app.component(VCard.name, VCard);
app.component(VCheckbox.name, VCheckbox);
app.component(VInput.name, VInput);
app.component(VModal.name, VModal);
app.component(VSelect.name, VSelect);

app.mount("#app");
