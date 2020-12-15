module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps: [

    // First application
    {
      name: 'Vargani-Web-Staging1',
      script: 'npm',
      args: 'run staging',
      "env": {
        "PORT": 3000 
      },
    },

    // Second application
    {
      name: 'Vargani-Web-Staging2',
      script: 'npm',
      args: 'run staging',
      "env": {
        "PORT": 3001
      }
    }
  ],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  deploy: {
    production1: {
      key: '../vargani001.pem',
      user: 'ubuntu',
      host: '34.234.93.5',
      ref: 'origin/develop',
      repo: 'https://github.com/tejasdesai0531/vargani-frontend.git',
      path: '/home/ubuntu/Vargani-Web-Staging1',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js --only Vargani-Web-Staging1',
    },
    production2: {
      key: '../vargani001.pem',
      user: 'ubuntu',
      host: '34.234.93.5',
      ref: 'origin/develop',
      repo: 'https://github.com/tejasdesai0531/vargani-frontend.git',
      path: '/home/ubuntu/Vargani-Web-Staging2',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js --only Vargani-Web-Staging2',
    }
  }
};
