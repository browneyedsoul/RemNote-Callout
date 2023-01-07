import { declareIndexPlugin, ReactRNPlugin } from "@remnote/plugin-sdk";

export const CALLOUT_POWERUP = "callout_powerup";

async function onActivate(plugin: ReactRNPlugin) {   
  await plugin.app.registerPowerup(
    'Callout',
    CALLOUT_POWERUP,
    'A Power-up Block for decorating texts',
    {
      slots: [
        {
          code: 'callout',
          name: 'Callout',
          onlyProgrammaticModifying: true,
          hidden: true,
        },
      ],
    },
  );
  await plugin.app.registerCommand({
    id: "browneyedsoul-Callout",
    name: "Callout",
    action: async () => {
      const rem = await plugin.focus.getFocusedRem();
      await rem?.addPowerup(CALLOUT_POWERUP);
    },
  });
}

async function onDeactivate(_: ReactRNPlugin) {}

declareIndexPlugin(onActivate, onDeactivate);
