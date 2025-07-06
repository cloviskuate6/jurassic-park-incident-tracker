const express = require('express');
const cors = require('cors');
const sequelize = require('./sequelize');
const config = require('../config/config');
const incidentRoutes = require('../routes/incidentRoutes');
const auth = require('../middlewares/auth');
const errorHandler = require('../middlewares/errorHandler');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDoc = YAML.load('./swagger.yaml');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));
app.use('/api/incidents', auth, incidentRoutes);
app.use(errorHandler);

sequelize.sync().then(() => {
  app.listen(config.port, () => {
    console.log(`Server started on port ${config.port}`);
  });
});
