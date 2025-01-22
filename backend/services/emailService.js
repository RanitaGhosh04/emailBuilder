const Handlebars = require('handlebars');
const EmailTemplate = require('../models/EmailTemplate');
const { baseLayout } = require('../utils/constants');

class EmailService {
  async saveTemplate(templateData) {
    const emailTemplate = new EmailTemplate(templateData);
    return await emailTemplate.save();
  }

  getLayout() {
    return baseLayout;
  }

  renderTemplate(templateData) {
    const template = Handlebars.compile(baseLayout);
    return template(templateData);
  }
}

module.exports = new EmailService();