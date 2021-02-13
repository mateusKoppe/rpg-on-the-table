import { createRouter, createWebHashHistory } from "vue-router";
import store from "@/store";

import CharacterList from "@/views/CharacterList";
import CharacterCreate from "@/views/CharacterCreate";
import Sheet from "@/views/Sheet";
import SheetStatus from "@/views/SheetStatus";
import SheetEquipments from "@/views/SheetEquipments";
import SheetSkills from "@/views/SheetSkills";
import SheetBackground from "@/views/SheetBackground";
import SheetFeaturesAndTraits from "@/views/SheetFeaturesAndTraits";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "CharacterList",
      component: CharacterList,
    },
    {
      path: "/create-character",
      name: "CharacterCreate",
      component: CharacterCreate,
    },
    {
      path: "/sheet",
      name: "Sheet",
      component: Sheet,
      beforeEnter(to, from, next) {
        store.dispatch("loadCharacters");
        if (!store.getters.actualCharacter) {
          next({ name: "CharacterList" });
        } else {
          next();
        }
      },
      children: [
        {
          path: "status",
          name: "SheetStatus",
          component: SheetStatus,
        },
        {
          path: "equipment",
          name: "SheetEquipments",
          component: SheetEquipments,
        },
        {
          path: "skills",
          name: "SheetSkills",
          component: SheetSkills,
        },
        {
          path: "background",
          name: "SheetBackground",
          component: SheetBackground,
        },
        {
          path: "featureAndTraits",
          name: "SheetFeaturesAndTraits",
          component: SheetFeaturesAndTraits,
        },
      ],
    },
  ],
});

export default router;
