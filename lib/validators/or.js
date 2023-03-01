const { Validator } = require("./validator");
const logicalConnectiveValidatorProcessor = require("./lib/logicalConnectiveValidatorProcessor");

class Or extends Validator {
  constructor() {
    super("or");
    this.supportedEvents = ["*"];
    this.supportedOptions = ["validate", "message"];
    this.supportedSettings = {};
  }

  async validate(context, validationSettings, registry) {
    const res = logicalConnectiveValidatorProcessor(
      context,
      validationSettings.validate,
      registry,
      "Or"
    );
    console.log("res: ", res);
    return Object.assign({}, res, {
      description: validationSettings.message || undefined,
    });
  }

  // skip validating settings
  validateSettings(supportedSettings, settingToCheck) {}
}

module.exports = Or;
