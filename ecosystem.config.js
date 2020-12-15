module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps: [

    // First application
    {
      name: 'Vargani-Web-Production1',
      script: 'npm',
      args: 'run staging',
      "env": {
        "PORT": 3000 
      },
    },

    // Second application
    {
      name: 'Vargani-Web-Production2',
      script: 'npm',
      args: 'run staging'
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
      ref: 'origin/master',
      repo: 'github.com/tejasdesai0531/vargani-frontend.git',
      path: '/home/ubuntu/Falcon-Web-Production1',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js --only Vargani-Web-Production1',
    }
  }
};
