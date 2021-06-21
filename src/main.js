import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";

import VButton from "@/components/ui/VButton.vue";
import VCard from "@/components/ui/VCard.vue";
import VCheckbox from "@/components/ui/VCheckbox.vue";
import VInput from "@/components/ui/VInput.vue";
import VModal from "@/components/ui/VModal.vue";
import VSelect from "@/components/ui/VSelect.vue";

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
