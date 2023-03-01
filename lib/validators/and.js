const { Validator } = require("./validator");
const logicalConnectiveValidatorProcessor = require("./lib/logicalConnectiveValidatorProcessor");

class And extends Validator {
  constructor() {
    super("and");
    this.supportedEvents = ["*"];
    this.supportedOptions = ["validate"];
    this.supportedSettings = {};
  }

  async validate(context, validationSettings, registry) {
    const yo = logicalConnectiveValidatorProcessor(
      context,
      validationSettings.validate,
      registry,
      "And"
    );
    console.log("yo: ", yo);
    return yo;
  }

  // skip validating settings
  validateSettings(supportedSettings, settingToCheck) {}
}

module.exports = And;
