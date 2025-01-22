const emailService = require('../services/emailService');

exports.getEmailLayout = async (req, res) => {
  try {
    const layout = emailService.getLayout();
    res.send(layout);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.uploadImage = async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }
  const imageUrl = `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`;
  res.json({ imageUrl });
};

exports.uploadEmailConfig = async (req, res) => {
  try {
    const savedTemplate = await emailService.saveTemplate(req.body);
    res.json({ success: true, id: savedTemplate._id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.renderAndDownloadTemplate = async (req, res) => {
  try {
    const html = emailService.renderTemplate(req.body);
    res.setHeader('Content-Type', 'text/html');
    res.setHeader('Content-Disposition', 'attachment; filename=email-template.html');
    res.send(html);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};