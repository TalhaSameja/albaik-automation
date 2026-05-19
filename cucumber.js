module.exports = {
  default: {
    require: [
      './src/step_definitions/Common/Common_StepDef_Mob.ts',
      './src/step_definitions/Common/Common_StepDef_web.ts',
      './src/step_definitions/mobile/**/*.ts',
      './src/step_definitions/web/**/*.ts',
      './src/step_definitions/cross-platform/**/*.ts',
    ],
    requireModule: ['ts-node/register'],
  },
};
