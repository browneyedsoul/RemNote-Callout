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

let CalloutCSS: string;

async function onActivate(plugin: ReactRNPlugin) {
  try {
    const localResponse = await fetch("snippet.css");
    const localCSS = await localResponse.text();
    CalloutCSS = localCSS;
    console.dir("Callout Installed!");
  } catch (localError) {
    console.warn(`Failed to fetch local file: ${localError}. Falling back to remote URL.`);
    const remoteResponse = await fetch(
      "https://raw.githubusercontent.com/browneyedsoul/RemNote-Callout/main/src/snippet.css"
    );
    const remoteCSS = await remoteResponse.text();
    CalloutCSS = remoteCSS;
    console.dir("Callout Installed from CDN!");
  }

  await plugin.app.registerPowerup("Callout", CALLOUT_POWERUP, "Callout Basic", { slots: [] });
  await plugin.app.registerPowerup("Callout Red", CALLOUTRD_POWERUP, "Callout Red", { slots: [] });
  await plugin.app.registerPowerup("Callout Orange", CALLOUTOR_POWERUP, "Callout Orange", { slots: [] });
  await plugin.app.registerPowerup("Callout Yellow", CALLOUTYW_POWERUP, "Callout Yellow", { slots: [] });
  await plugin.app.registerPowerup("Callout Green", CALLOUTGR_POWERUP, "Callout Green", { slots: [] });
  await plugin.app.registerPowerup("Callout Blue", CALLOUTBL_POWERUP, "Callout Blue", { slots: [] });
  await plugin.app.registerPowerup("Callout Purple", CALLOUTVT_POWERUP, "Callout Purple", { slots: [] });

  await plugin.app.registerCommand({
    id: "basic",
    name: "Callout",
    quickCode: "ca",
    keyboardShortcut: "opt+ctrl+0",
    action: async () => {
      const rem = await plugin.focus.getFocusedRem();
      await rem?.addPowerup(CALLOUT_POWERUP);
    },
  });
  await plugin.app.registerCommand({
    id: "calloutred",
    name: "Callout Red",
    quickCode: "car",
    keyboardShortcut: "opt+ctrl+4",
    action: async () => {
      const rem = await plugin.focus.getFocusedRem();
      await rem?.addPowerup(CALLOUTRD_POWERUP);
    },
  });
  await plugin.app.registerCommand({
    id: "calloutorange",
    name: "Callout Orange",
    quickCode: "cao",
    keyboardShortcut: "opt+ctrl+5",
    action: async () => {
      const rem = await plugin.focus.getFocusedRem();
      await rem?.addPowerup(CALLOUTOR_POWERUP);
    },
  });
  await plugin.app.registerCommand({
    id: "calloutyellow",
    name: "Callout Yellow",
    quickCode: "cay",
    keyboardShortcut: "opt+ctrl+6",
    action: async () => {
      const rem = await plugin.focus.getFocusedRem();
      await rem?.addPowerup(CALLOUTYW_POWERUP);
    },
  });
  await plugin.app.registerCommand({
    id: "calloutgreen",
    name: "Callout Green",
    quickCode: "cag",
    keyboardShortcut: "opt+ctrl+7",
    action: async () => {
      const rem = await plugin.focus.getFocusedRem();
      await rem?.addPowerup(CALLOUTGR_POWERUP);
    },
  });
  await plugin.app.registerCommand({
    id: "calloutblue",
    name: "Callout Blue",
    quickCode: "cab",
    keyboardShortcut: "opt+ctrl+8",
    action: async () => {
      const rem = await plugin.focus.getFocusedRem();
      await rem?.addPowerup(CALLOUTBL_POWERUP);
    },
  });
  await plugin.app.registerCommand({
    id: "calloutpurple",
    name: "Callout Purple",
    quickCode: "cav",
    keyboardShortcut: "opt+ctrl+9",
    action: async () => {
      const rem = await plugin.focus.getFocusedRem();
      await rem?.addPowerup(CALLOUTVT_POWERUP);
    },
  });
}

async function onDeactivate(_: ReactRNPlugin) {}

declareIndexPlugin(onActivate, onDeactivate);
