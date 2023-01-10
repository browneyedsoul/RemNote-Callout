import { declareIndexPlugin, ReactRNPlugin } from "@remnote/plugin-sdk";

export const [
  CALLOUT_POWERUP,
  CALLOUTRD_POWERUP,
  CALLOUTOR_POWERUP,
  CALLOUTYW_POWERUP,
  CALLOUTGR_POWERUP,
  CALLOUTBL_POWERUP,
  CALLOUTVT_POWERUP,
] = [
  "callout_powerup",
  "calloutred_powerup",
  "calloutorange_powerup",
  "calloutyellow_powerup",
  "calloutgreen_powerup",
  "calloutblue_powerup",
  "calloutpurple_powerup",
];

async function onActivate(plugin: ReactRNPlugin) {
  await plugin.app.registerPowerup("Callout", CALLOUT_POWERUP, "Basic", { slots: [] });
  await plugin.app.registerPowerup("CalloutRed", CALLOUTRD_POWERUP, "Basic", { slots: [] });
  await plugin.app.registerPowerup("CalloutOrange", CALLOUTOR_POWERUP, "Basic", { slots: [] });
  await plugin.app.registerPowerup("CalloutYellow", CALLOUTYW_POWERUP, "Basic", { slots: [] });
  await plugin.app.registerPowerup("CalloutGreen", CALLOUTGR_POWERUP, "Basic", { slots: [] });
  await plugin.app.registerPowerup("CalloutBlue", CALLOUTBL_POWERUP, "Basic", { slots: [] });
  await plugin.app.registerPowerup("CalloutPurple", CALLOUTVT_POWERUP, "Basic", { slots: [] });

  await plugin.app.registerCommand({
    id: "basic",
    name: "Callout",
    action: async () => {
      const rem = await plugin.focus.getFocusedRem();
      await rem?.addPowerup(CALLOUT_POWERUP);
    },
  });
  await plugin.app.registerCommand({
    id: "calloutred",
    name: "CalloutRed",
    action: async () => {
      const rem = await plugin.focus.getFocusedRem();
      await rem?.addPowerup(CALLOUTRD_POWERUP);
    },
  });
  await plugin.app.registerCommand({
    id: "calloutorange",
    name: "CalloutOrange",
    action: async () => {
      const rem = await plugin.focus.getFocusedRem();
      await rem?.addPowerup(CALLOUTOR_POWERUP);
    },
  });
  await plugin.app.registerCommand({
    id: "calloutyellow",
    name: "CalloutYellow",
    action: async () => {
      const rem = await plugin.focus.getFocusedRem();
      await rem?.addPowerup(CALLOUTYW_POWERUP);
    },
  });
  await plugin.app.registerCommand({
    id: "calloutgreen",
    name: "CalloutGreen",
    action: async () => {
      const rem = await plugin.focus.getFocusedRem();
      await rem?.addPowerup(CALLOUTGR_POWERUP);
    },
  });
  await plugin.app.registerCommand({
    id: "calloutblue",
    name: "CalloutBlue",
    action: async () => {
      const rem = await plugin.focus.getFocusedRem();
      await rem?.addPowerup(CALLOUTBL_POWERUP);
    },
  });
  await plugin.app.registerCommand({
    id: "calloutpurple",
    name: "CalloutPurple",
    action: async () => {
      const rem = await plugin.focus.getFocusedRem();
      await rem?.addPowerup(CALLOUTVT_POWERUP);
    },
  });
}

async function onDeactivate(_: ReactRNPlugin) {}

declareIndexPlugin(onActivate, onDeactivate);
